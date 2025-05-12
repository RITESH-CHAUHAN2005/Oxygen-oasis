
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import { Separator } from "@/components/ui/separator";

const Contact = () => {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <AnimatedSection>
          <div className="text-center mb-14">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our oxygen products or services? Our team is here to help!
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <AnimatedSection delay={200} className="lg:col-span-2">
              <ContactInfo />
            </AnimatedSection>
            
            <AnimatedSection delay={400} className="lg:col-span-3">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
        
        <AnimatedSection delay={600}>
          <div className="mt-20">
            <Separator className="mb-16" />
            <h2 className="text-2xl font-bold text-center mb-10">Our Location</h2>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <div className="aspect-w-16 aspect-h-9 h-[500px]">
                <iframe
                  title="Office Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1623688000000!5m2!1sen!2s"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;
