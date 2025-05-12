
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import ContactSuccessDialog from "./ContactSuccessDialog";
import { Send, Check } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      setIsSubmitting(false);
      setShowSuccessDialog(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };
  
  return (
    <>
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
          <Send className="h-5 w-5 mr-2 text-brand-600" />
          Send us a message
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="text-gray-700 font-medium mb-1.5 block">Your Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-gray-200 rounded-lg bg-gray-50 focus:ring-brand-500 focus:border-brand-500 transition-all"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-700 font-medium mb-1.5 block">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="border-gray-200 rounded-lg bg-gray-50 focus:ring-brand-500 focus:border-brand-500 transition-all"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="phone" className="text-gray-700 font-medium mb-1.5 block">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border-gray-200 rounded-lg bg-gray-50 focus:ring-brand-500 focus:border-brand-500 transition-all"
              />
            </div>
            <div>
              <Label htmlFor="subject" className="text-gray-700 font-medium mb-1.5 block">Subject *</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="border-gray-200 rounded-lg bg-gray-50 focus:ring-brand-500 focus:border-brand-500 transition-all"
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="message" className="text-gray-700 font-medium mb-1.5 block">Your Message *</Label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="border-gray-200 rounded-lg bg-gray-50 focus:ring-brand-500 focus:border-brand-500 resize-none transition-all"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full md:w-auto px-8 py-6 text-base bg-brand-600 hover:bg-brand-700 text-white flex items-center justify-center gap-2 transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </>
            )}
          </Button>
        </form>
      </div>
      
      <ContactSuccessDialog 
        open={showSuccessDialog} 
        onOpenChange={setShowSuccessDialog} 
      />
    </>
  );
};

export default ContactForm;
