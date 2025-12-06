import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase, isSupabaseConfigured, type ContactMessage } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, Calendar, MessageSquare, LogOut, Loader2, Eye, Filter, Download } from "lucide-react";
import Header from "@/components/Header";
import * as XLSX from "xlsx";

const Dashboard = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [adminNotes, setAdminNotes] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isTabBlocked, setIsTabBlocked] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Single tab enforcement
    const DASHBOARD_CHANNEL = 'dashboard_single_tab';
    const channel = new BroadcastChannel(DASHBOARD_CHANNEL);
    const tabId = Math.random().toString(36).substring(7);
    
    // Check if another tab is already open
    let isActive = true;
    
    // Listen for other tabs
    channel.onmessage = (event) => {
      if (event.data.type === 'ping' && event.data.tabId !== tabId) {
        // Another tab is active
        setIsTabBlocked(true);
        isActive = false;
      } else if (event.data.type === 'pong') {
        // Respond to ping
        channel.postMessage({ type: 'ping', tabId });
      }
    };
    
    // Announce this tab's presence
    channel.postMessage({ type: 'ping', tabId });
    
    // Request pong from other tabs
    channel.postMessage({ type: 'pong' });
    
    // Set a timeout to check if we got a response
    const timeout = setTimeout(() => {
      if (isActive) {
        // No other tab responded, we're good
        setIsTabBlocked(false);
      }
    }, 100);
    
    // Cleanup
    return () => {
      clearTimeout(timeout);
      channel.close();
    };
  }, []);

  useEffect(() => {
    if (!isTabBlocked) {
      checkAuth();
    }
  }, [isTabBlocked]);

  const checkAuth = async () => {
    if (!isSupabaseConfigured) {
      setAuthLoading(false);
      return;
    }

    try {
      // Check sessionStorage first (persists on refresh but not on browser close)
      const isSessionActive = sessionStorage.getItem('dashboard_auth') === 'true';
      
      if (!isSessionActive) {
        // No active session in sessionStorage, logout
        await supabase.auth.signOut();
        setIsAuthenticated(false);
        setAuthLoading(false);
        return;
      }

      const { data: { session } } = await supabase.auth.getSession();
      
      if (session) {
        setIsAuthenticated(true);
        fetchMessages();
      } else {
        // Supabase session expired, clear sessionStorage
        sessionStorage.removeItem('dashboard_auth');
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Auth check error:", error);
      sessionStorage.removeItem('dashboard_auth');
      setIsAuthenticated(false);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password: loginPassword,
      });

      if (error) throw error;

      if (data.session) {
        // Store session in sessionStorage (clears when browser closes)
        sessionStorage.setItem('dashboard_auth', 'true');
        setIsAuthenticated(true);
        toast({
          title: "Login Successful",
          description: "Welcome to the dashboard",
        });
        fetchMessages();
      }
    } catch (error: any) {
      toast({
        title: "Login Failed",
        description: error.message || "Invalid credentials",
        variant: "destructive",
      });
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    sessionStorage.removeItem('dashboard_auth');
    setIsAuthenticated(false);
    setMessages([]);
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully",
    });
  };

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to fetch messages",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateMessageStatus = async (id: string, status: "new" | "read" | "replied") => {
    try {
      const { error } = await supabase
        .from("contact_messages")
        .update({ status })
        .eq("id", id);

      if (error) throw error;

      setMessages(messages.map(msg => 
        msg.id === id ? { ...msg, status } : msg
      ));

      toast({
        title: "Status Updated",
        description: `Message marked as ${status}`,
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update status",
        variant: "destructive",
      });
    }
  };

  const saveNotes = async () => {
    if (!selectedMessage) return;

    try {
      const { error } = await supabase
        .from("contact_messages")
        .update({ notes: adminNotes })
        .eq("id", selectedMessage.id);

      if (error) throw error;

      setMessages(messages.map(msg =>
        msg.id === selectedMessage.id ? { ...msg, notes: adminNotes } : msg
      ));

      toast({
        title: "Notes Saved",
        description: "Admin notes have been updated",
      });

      setSelectedMessage({ ...selectedMessage, notes: adminNotes });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to save notes",
        variant: "destructive",
      });
    }
  };

  const openMessageDialog = (message: ContactMessage) => {
    setSelectedMessage(message);
    setAdminNotes(message.notes || "");
    
    if (message.status === "new") {
      updateMessageStatus(message.id, "read");
    }
  };

  const exportToCSV = () => {
    const csvData = messages.map(msg => ({
      Date: new Date(msg.created_at).toLocaleString(),
      Name: msg.name,
      Email: msg.email,
      Phone: msg.phone,
      Message: msg.message,
      Status: msg.status,
      Notes: msg.notes || ""
    }));

    const headers = ["Date", "Name", "Email", "Phone", "Message", "Status", "Notes"];
    const csvContent = [
      headers.join(","),
      ...csvData.map(row => 
        headers.map(header => {
          const value = row[header as keyof typeof row]?.toString() || "";
          return `"${value.replace(/"/g, '""')}"`;
        }).join(",")
      )
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `contact-messages-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Export Successful",
      description: "CSV file has been downloaded",
    });
  };

  const exportToExcel = () => {
    const excelData = messages.map(msg => ({
      Date: new Date(msg.created_at).toLocaleString(),
      Name: msg.name,
      Email: msg.email,
      Phone: msg.phone,
      Message: msg.message,
      Status: msg.status,
      Notes: msg.notes || ""
    }));

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contact Messages");
    
    // Set column widths
    const maxWidth = 50;
    worksheet['!cols'] = [
      { wch: 20 }, // Date
      { wch: 20 }, // Name
      { wch: 25 }, // Email
      { wch: 15 }, // Phone
      { wch: maxWidth }, // Message
      { wch: 10 }, // Status
      { wch: maxWidth }  // Notes
    ];

    XLSX.writeFile(workbook, `contact-messages-${new Date().toISOString().split('T')[0]}.xlsx`);

    toast({
      title: "Export Successful",
      description: "Excel file has been downloaded",
    });
  };

  const filteredMessages = messages.filter(msg => {
    const matchesStatus = statusFilter === "all" || msg.status === statusFilter;
    const matchesSearch = 
      msg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.message.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const statusCounts = {
    total: messages.length,
    new: messages.filter(m => m.status === "new").length,
    read: messages.filter(m => m.status === "read").length,
    replied: messages.filter(m => m.status === "replied").length,
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-secondary" />
      </div>
    );
  }

  if (isTabBlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-2xl">🚫 Dashboard Already Open</CardTitle>
            <CardDescription>Only one dashboard tab can be open at a time</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              The dashboard is already open in another tab or window. Please close the other tab to access the dashboard here.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => window.location.reload()}>
                Retry
              </Button>
              <Button variant="outline" onClick={() => navigate('/')}>
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isSupabaseConfigured) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-2xl">⚠️ Dashboard Not Configured</CardTitle>
            <CardDescription>Supabase database connection needs to be set up</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              The dashboard requires Supabase to be configured. Please follow the setup instructions.
            </p>
            <Button variant="outline" onClick={() => navigate('/')}>
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <Card className="w-full max-w-md mx-4">
          <CardHeader>
            <CardTitle className="text-2xl">Dashboard Login</CardTitle>
            <CardDescription>Enter your credentials to access the admin dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input
                  id="email"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="admin@gvsconsulting.com"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <Input
                  id="password"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={authLoading}>
                {authLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Contact Messages Dashboard</h1>
            <p className="text-muted-foreground">Manage and respond to customer inquiries</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={exportToCSV} disabled={messages.length === 0}>
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
            <Button variant="outline" onClick={exportToExcel} disabled={messages.length === 0}>
              <Download className="mr-2 h-4 w-4" />
              Export Excel
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{statusCounts.total}</div>
              <p className="text-xs text-muted-foreground">Total Messages</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-600">{statusCounts.new}</div>
              <p className="text-xs text-muted-foreground">New Messages</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-yellow-600">{statusCounts.read}</div>
              <p className="text-xs text-muted-foreground">Read Messages</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-600">{statusCounts.replied}</div>
              <p className="text-xs text-muted-foreground">Replied</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search by name, email, or message..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Messages</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="read">Read</SelectItem>
                  <SelectItem value="replied">Replied</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            {loading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="w-8 h-8 animate-spin text-secondary" />
              </div>
            ) : filteredMessages.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No messages found
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredMessages.map((message) => (
                      <TableRow key={message.id}>
                        <TableCell className="whitespace-nowrap">
                          {new Date(message.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="font-medium">{message.name}</TableCell>
                        <TableCell>{message.email}</TableCell>
                        <TableCell>{message.phone}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              message.status === "new" ? "default" :
                              message.status === "read" ? "secondary" :
                              "outline"
                            }
                          >
                            {message.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => openMessageDialog(message)}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>

      <Dialog open={!!selectedMessage} onOpenChange={() => setSelectedMessage(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Message Details</DialogTitle>
            <DialogDescription>
              View and manage this contact message
            </DialogDescription>
          </DialogHeader>

          {selectedMessage && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Date Submitted
                  </label>
                  <p className="text-sm text-muted-foreground">
                    {new Date(selectedMessage.created_at).toLocaleString()}
                  </p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <p className="text-sm text-muted-foreground">{selectedMessage.name}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </label>
                  <a
                    href={`mailto:${selectedMessage.email}`}
                    className="text-sm text-secondary hover:underline"
                  >
                    {selectedMessage.email}
                  </a>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone
                  </label>
                  <a
                    href={`tel:${selectedMessage.phone}`}
                    className="text-sm text-secondary hover:underline"
                  >
                    {selectedMessage.phone}
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Message
                </label>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select
                  value={selectedMessage.status}
                  onValueChange={(value: "new" | "read" | "replied") =>
                    updateMessageStatus(selectedMessage.id, value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="read">Read</SelectItem>
                    <SelectItem value="replied">Replied</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Admin Notes</label>
                <Textarea
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  placeholder="Add internal notes about this message..."
                  rows={4}
                />
                <Button onClick={saveNotes} size="sm">
                  Save Notes
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
