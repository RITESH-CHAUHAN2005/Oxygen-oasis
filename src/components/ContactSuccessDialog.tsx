
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useEffect } from "react";

interface ContactSuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  email?: string;
}

const ContactSuccessDialog = ({ open, onOpenChange, email }: ContactSuccessDialogProps) => {
  // Auto-close the dialog after 8 seconds
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onOpenChange(false);
      }, 8000);
      
      return () => clearTimeout(timer);
    }
  }, [open, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-xl animate-fade-in-up">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">Message Sent Successfully!</DialogTitle>
        </DialogHeader>
        <div className="p-4 text-center">
          <div className="mb-6 mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-scale-in">
            <Check className="h-10 w-10 text-green-500" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Thank You!</h3>
          <p className="text-gray-600 mb-8">
            We've received your message and will get back to you as soon as possible. 
            {email && <span> A confirmation has been sent to <strong>{email}</strong>.</span>}
          </p>
          <Button 
            onClick={() => onOpenChange(false)} 
            className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-6 text-base transition-all"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactSuccessDialog;
