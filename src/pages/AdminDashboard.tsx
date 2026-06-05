import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, Search, Download, Trash2, Eye, Users, GraduationCap } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const [role, setRole] = useState<string | null>(null);
  const [registrations, setRegistrations] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { navigate("/admin"); return; }
      setUser(session.user);
      
      const { data: roleData } = await supabase.from("user_roles").select("role").eq("user_id", session.user.id).single();
      if (!roleData) { toast({ title: "Access Denied", description: "No admin role assigned.", variant: "destructive" }); await supabase.auth.signOut(); navigate("/admin"); return; }
      setRole(roleData.role);
      
      const { data } = await supabase.from("app_users").select("*").order("created_at", { ascending: false });
      setRegistrations(data || []);
      setLoading(false);
    };
    
    checkAuth();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      if (!session) navigate("/admin");
    });
    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  const handleDelete = async (id: number) => {
    if (role !== "super_admin") { toast({ title: "Permission Denied", variant: "destructive" }); return; }
    const { error } = await supabase.from("app_users").delete().eq("id", id);
    if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
    setRegistrations(r => r.filter(reg => reg.id !== id));
    toast({ title: "Deleted" });
  };

  const exportCSV = () => {
    const headers = Object.keys(registrations[0] || {}).join(",");
    const rows = registrations.map(r => Object.values(r).join(",")).join("\n");
    const blob = new Blob([headers + "\n" + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "registrations.csv"; a.click();
  };

  const filtered = registrations.filter(r => 
    `${r.surname} ${r.gname} ${r.email}`.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-background border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-display font-bold">Admin Dashboard</span>
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{role}</span>
          </div>
          <Button variant="ghost" onClick={handleLogout}><LogOut className="mr-2 h-4 w-4" />Logout</Button>
        </div>
      </header>

      <main className="container py-8">
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card><CardContent className="p-6 flex items-center gap-4">
            <Users className="h-10 w-10 text-primary" />
            <div><p className="text-2xl font-bold">{registrations.length}</p><p className="text-sm text-muted-foreground">Total Registrations</p></div>
          </CardContent></Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Student Registrations</CardTitle>
            <div className="flex gap-2">
              <div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9 w-64" />
              </div>
              <Button variant="outline" onClick={exportCSV}><Download className="mr-2 h-4 w-4" />Export CSV</Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>School</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map(reg => (
                  <TableRow key={reg.id}>
                    <TableCell className="font-medium">{reg.surname} {reg.gname}</TableCell>
                    <TableCell>{reg.email}</TableCell>
                    <TableCell>{reg.school}</TableCell>
                    <TableCell>{new Date(reg.created_at).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" onClick={() => setSelectedStudent(reg)}><Eye className="h-4 w-4" /></Button>
                        {role === "super_admin" && (
                          <Button size="sm" variant="ghost" className="text-destructive" onClick={() => handleDelete(reg.id)}><Trash2 className="h-4 w-4" /></Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>

      <Dialog open={!!selectedStudent} onOpenChange={() => setSelectedStudent(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-auto">
          <DialogHeader><DialogTitle>Student Details</DialogTitle></DialogHeader>
          {selectedStudent && (
            <div className="grid gap-4 md:grid-cols-2 text-sm">
              {Object.entries(selectedStudent).map(([key, value]) => (
                <div key={key}><span className="font-medium capitalize">{key.replace(/_/g, ' ')}:</span> <span className="text-muted-foreground">{String(value || 'N/A')}</span></div>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
