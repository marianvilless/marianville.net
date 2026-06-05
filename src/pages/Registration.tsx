import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { FileDown, FileText, CheckCircle } from "lucide-react";
import jsPDF from "jspdf";

export default function Registration() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    surname: "", gname: "", dob: "", age: "", school: "", email: "", religion: "",
    baptized: "", communion: "", confirmation: "", section: "", allotment: "",
    block: "", house_number: "", road: "", unit: "", suburban: "",
    father_name: "", father_occupation: "", employer_name: "", place_of_origin: "",
    contact_number: "", father_email: "", mother_name: "", mother_occupation: "",
    mother_employer_name: "", mother_place_of_origin: "", mother_contact_number: "",
    mother_email: "", guardian_name: "", guardian_occupation: "", guardian_relationship: "",
    guardian_place_of_origin: "", guardian_contact_number: "", guardian_email: "",
    emergency_contact_name: "", emergency_relationship: "", emergency_contact_number: "",
    transport: "", mode: "", agree_transport: ""
  });

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("app_users").insert({
        ...formData,
        age: formData.age ? parseInt(formData.age) : null,
        dob: formData.dob || null
      });
      if (error) throw error;
      setSubmitted(true);
      toast({ title: "Registration Submitted!", description: "We'll contact you soon." });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Marianville Secondary School", 20, 20);
    doc.setFontSize(14);
    doc.text("Student Registration Form", 20, 30);
    doc.setFontSize(10);
    const fields = [
      "Student Information:", "Surname: _______________", "Given Name: _______________",
      "Date of Birth: _______________", "Age: _____", "Previous School: _______________",
      "Email: _______________", "Religion: _______________", "", "Parent/Guardian Information:",
      "Father's Name: _______________", "Mother's Name: _______________",
      "Emergency Contact: _______________"
    ];
    fields.forEach((field, i) => doc.text(field, 20, 50 + i * 8));
    doc.save("marianville_registration_form.pdf");
    toast({ title: "PDF Downloaded", description: "Form downloaded successfully." });
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-24">
          <div className="container">
            <Card className="mx-auto max-w-lg border-none shadow-card text-center">
              <CardContent className="p-12">
                <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
                <h2 className="mt-6 font-display text-2xl font-bold">Registration Complete!</h2>
                <p className="mt-4 text-muted-foreground">Thank you for registering. We will contact you soon.</p>
                <Link to="/"><Button className="mt-6">Return Home</Button></Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-hero-gradient py-16">
        <div className="container text-center">
          <h1 className="font-display text-4xl font-bold text-primary-foreground">Student Registration</h1>
          <p className="mt-4 text-primary-foreground/90">Apply online or download the form</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex gap-4 justify-center">
              <Button onClick={generatePDF} variant="outline"><FileDown className="mr-2 h-4 w-4" />Download PDF Form</Button>
              <Button variant="default"><FileText className="mr-2 h-4 w-4" />Fill Online Below</Button>
            </div>

            <Card className="border-none shadow-card">
              <CardHeader>
                <CardTitle className="font-display">Step {step} of 5</CardTitle>
                <div className="flex gap-1 mt-2">{[1,2,3,4,5].map(s => (
                  <div key={s} className={`h-2 flex-1 rounded ${s <= step ? 'bg-primary' : 'bg-muted'}`} />
                ))}</div>
              </CardHeader>
              <CardContent className="space-y-4">
                {step === 1 && (
                  <>
                    <h3 className="font-semibold">Student Information</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div><Label>Surname</Label><Input value={formData.surname} onChange={e => updateField('surname', e.target.value)} /></div>
                      <div><Label>Given Name</Label><Input value={formData.gname} onChange={e => updateField('gname', e.target.value)} /></div>
                      <div><Label>Date of Birth</Label><Input type="date" value={formData.dob} onChange={e => updateField('dob', e.target.value)} /></div>
                      <div><Label>Age</Label><Input type="number" value={formData.age} onChange={e => updateField('age', e.target.value)} /></div>
                      <div><Label>Previous School</Label><Input value={formData.school} onChange={e => updateField('school', e.target.value)} /></div>
                      <div><Label>Email</Label><Input type="email" value={formData.email} onChange={e => updateField('email', e.target.value)} /></div>
                      <div><Label>Religion</Label><Input value={formData.religion} onChange={e => updateField('religion', e.target.value)} /></div>
                    </div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <h3 className="font-semibold">Address Information</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div><Label>Section</Label><Input value={formData.section} onChange={e => updateField('section', e.target.value)} /></div>
                      <div><Label>Allotment</Label><Input value={formData.allotment} onChange={e => updateField('allotment', e.target.value)} /></div>
                      <div><Label>Block</Label><Input value={formData.block} onChange={e => updateField('block', e.target.value)} /></div>
                      <div><Label>House Number</Label><Input value={formData.house_number} onChange={e => updateField('house_number', e.target.value)} /></div>
                      <div><Label>Road</Label><Input value={formData.road} onChange={e => updateField('road', e.target.value)} /></div>
                      <div><Label>Unit</Label><Input value={formData.unit} onChange={e => updateField('unit', e.target.value)} /></div>
                      <div><Label>Suburban</Label><Input value={formData.suburban} onChange={e => updateField('suburban', e.target.value)} /></div>
                    </div>
                  </>
                )}
                {step === 3 && (
                  <>
                    <h3 className="font-semibold">Father's Information</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div><Label>Name</Label><Input value={formData.father_name} onChange={e => updateField('father_name', e.target.value)} /></div>
                      <div><Label>Occupation</Label><Input value={formData.father_occupation} onChange={e => updateField('father_occupation', e.target.value)} /></div>
                      <div><Label>Employer</Label><Input value={formData.employer_name} onChange={e => updateField('employer_name', e.target.value)} /></div>
                      <div><Label>Place of Origin</Label><Input value={formData.place_of_origin} onChange={e => updateField('place_of_origin', e.target.value)} /></div>
                      <div><Label>Contact Number</Label><Input value={formData.contact_number} onChange={e => updateField('contact_number', e.target.value)} /></div>
                      <div><Label>Email</Label><Input type="email" value={formData.father_email} onChange={e => updateField('father_email', e.target.value)} /></div>
                    </div>
                    <h3 className="font-semibold mt-6">Mother's Information</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div><Label>Name</Label><Input value={formData.mother_name} onChange={e => updateField('mother_name', e.target.value)} /></div>
                      <div><Label>Occupation</Label><Input value={formData.mother_occupation} onChange={e => updateField('mother_occupation', e.target.value)} /></div>
                      <div><Label>Employer</Label><Input value={formData.mother_employer_name} onChange={e => updateField('mother_employer_name', e.target.value)} /></div>
                      <div><Label>Contact Number</Label><Input value={formData.mother_contact_number} onChange={e => updateField('mother_contact_number', e.target.value)} /></div>
                      <div><Label>Email</Label><Input type="email" value={formData.mother_email} onChange={e => updateField('mother_email', e.target.value)} /></div>
                    </div>
                  </>
                )}
                {step === 4 && (
                  <>
                    <h3 className="font-semibold">Guardian & Emergency Contact</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div><Label>Guardian Name</Label><Input value={formData.guardian_name} onChange={e => updateField('guardian_name', e.target.value)} /></div>
                      <div><Label>Relationship</Label><Input value={formData.guardian_relationship} onChange={e => updateField('guardian_relationship', e.target.value)} /></div>
                      <div><Label>Contact</Label><Input value={formData.guardian_contact_number} onChange={e => updateField('guardian_contact_number', e.target.value)} /></div>
                      <div><Label>Email</Label><Input type="email" value={formData.guardian_email} onChange={e => updateField('guardian_email', e.target.value)} /></div>
                    </div>
                    <h3 className="font-semibold mt-6">Emergency Contact</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div><Label>Name</Label><Input value={formData.emergency_contact_name} onChange={e => updateField('emergency_contact_name', e.target.value)} /></div>
                      <div><Label>Relationship</Label><Input value={formData.emergency_relationship} onChange={e => updateField('emergency_relationship', e.target.value)} /></div>
                      <div><Label>Contact Number</Label><Input value={formData.emergency_contact_number} onChange={e => updateField('emergency_contact_number', e.target.value)} /></div>
                    </div>
                  </>
                )}
                {step === 5 && (
                  <>
                    <h3 className="font-semibold">Transport Information</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div><Label>Transport Required?</Label>
                        <Select value={formData.transport} onValueChange={v => updateField('transport', v)}>
                          <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                          <SelectContent><SelectItem value="yes">Yes</SelectItem><SelectItem value="no">No</SelectItem></SelectContent>
                        </Select>
                      </div>
                      <div><Label>Mode of Transport</Label><Input value={formData.mode} onChange={e => updateField('mode', e.target.value)} /></div>
                    </div>
                  </>
                )}
                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={() => setStep(s => s - 1)} disabled={step === 1}>Previous</Button>
                  {step < 5 ? (
                    <Button onClick={() => setStep(s => s + 1)}>Next</Button>
                  ) : (
                    <Button onClick={handleSubmit} disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit"}</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
