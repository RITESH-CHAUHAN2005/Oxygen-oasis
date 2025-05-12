
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
      <h3 className="text-xl font-bold text-gray-800 mb-6">
        Get in Touch
      </h3>
      <div className="space-y-8">
        <div className="flex items-start">
          <div className="bg-brand-50 rounded-full p-3 mr-4 border border-brand-100">
            <Mail className="h-5 w-5 text-brand-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
            <a href="mailto:contact@oxygenoasis.com" className="text-gray-600 hover:text-brand-600 transition-colors block">
              contact@oxygenoasis.com
            </a>
            <a href="mailto:support@oxygenoasis.com" className="text-gray-600 hover:text-brand-600 transition-colors block">
              support@oxygenoasis.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-brand-50 rounded-full p-3 mr-4 border border-brand-100">
            <Phone className="h-5 w-5 text-brand-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Phone</h4>
            <a href="tel:+18001234567" className="text-gray-600 hover:text-brand-600 transition-colors block">
              +1 (800) 123-4567
            </a>
            <a href="tel:+18009876543" className="text-gray-600 hover:text-brand-600 transition-colors block">
              +1 (800) 987-6543
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-brand-50 rounded-full p-3 mr-4 border border-brand-100">
            <MapPin className="h-5 w-5 text-brand-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
            <address className="text-gray-600 not-italic">
              1234 Respiratory Lane<br />
              Oxygen City, OX 98765<br />
              United States
            </address>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-brand-50 rounded-full p-3 mr-4 border border-brand-100">
            <MessageCircle className="h-5 w-5 text-brand-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Business Hours</h4>
            <div className="grid grid-cols-2 gap-2 text-gray-600">
              <p className="font-medium">Monday - Friday:</p>
              <p>9:00 AM - 5:00 PM</p>
              <p className="font-medium">Saturday:</p>
              <p>10:00 AM - 3:00 PM</p>
              <p className="font-medium">Sunday:</p>
              <p>Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
