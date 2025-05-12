
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

interface GenericPageProps {
  title: string;
  type: string;
}

const GenericPage = ({ title, type }: GenericPageProps) => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getContent = () => {
    switch (type) {
      // Products
      case 'concentrators':
        return {
          title: "Oxygen Concentrators",
          content: "Our range of high-quality oxygen concentrators are designed to provide continuous oxygen therapy for individuals with respiratory conditions. Featuring advanced technology and user-friendly interfaces, these devices efficiently extract oxygen from the ambient air, removing nitrogen and other gases to deliver high-purity oxygen to the user. Available in various flow rates and specifications to meet diverse medical needs."
        };
      case 'portable':
        return {
          title: "Portable Oxygen Solutions",
          content: "Our portable oxygen solutions offer freedom and mobility for those requiring oxygen therapy on the go. These lightweight, compact devices allow users to maintain their active lifestyle while receiving necessary oxygen support. With extended battery life and quiet operation, our portable concentrators are ideal for travel, outdoor activities, and everyday use away from home."
        };
      case 'accessories':
        return {
          title: "Oxygen Accessories",
          content: "Enhance your oxygen therapy experience with our comprehensive range of accessories. From nasal cannulas and oxygen masks to tubing, filters, and carrying cases, we provide everything needed to optimize comfort and convenience. All accessories meet strict quality and safety standards, ensuring reliable performance with your oxygen device."
        };
      case 'spare-parts':
        return {
          title: "Spare Parts",
          content: "Maintain optimal performance of your oxygen equipment with our genuine spare parts. We stock a wide range of components for all our devices, ensuring you can quickly replace any worn or damaged parts. Using authorized replacement parts extends the life of your equipment and maintains safety and efficiency standards."
        };
        
      // Company
      case 'team':
        return {
          title: "Our Team",
          content: "Behind OxygenOasis is a dedicated team of healthcare professionals, engineers, and customer service experts committed to improving respiratory care. With decades of combined experience in medical equipment and patient care, our specialists work together to develop innovative solutions that enhance quality of life for those with respiratory conditions. Our team undergoes continuous training to stay at the forefront of technological advancements and best practices in oxygen therapy."
        };
      case 'careers':
        return {
          title: "Join Our Team",
          content: "At OxygenOasis, we're always looking for talented individuals passionate about making a difference in healthcare. We offer a collaborative work environment, competitive benefits, and opportunities for professional growth across various departments including engineering, sales, customer support, and clinical education. If you're interested in contributing to our mission of improving respiratory care worldwide, we'd love to hear from you."
        };
      case 'blog':
        return {
          title: "OxygenOasis Blog",
          content: "Stay informed with the latest news, research, and insights on respiratory health and oxygen therapy. Our blog features articles written by healthcare professionals, product information, user stories, and practical tips for managing respiratory conditions. Whether you're a healthcare provider or someone using oxygen therapy, our regularly updated content provides valuable information to support your health journey."
        };
        
      // Support
      case 'faq':
        return {
          title: "Frequently Asked Questions",
          content: "Find answers to common questions about our products, services, ordering process, and oxygen therapy in general. Our comprehensive FAQ section covers technical specifications, usage guidelines, troubleshooting tips, maintenance instructions, and information about insurance coverage. If you can't find the answer you're looking for, our customer support team is always ready to assist."
        };
      case 'warranty':
        return {
          title: "Warranty Information",
          content: "All OxygenOasis products come with comprehensive warranty coverage to ensure your peace of mind. Our standard warranty includes parts and labor for repairs related to manufacturing defects. Extended warranty options are available for additional protection. Our warranty service is prompt and efficient, with loaner equipment available during repairs to ensure continuity of care."
        };
      case 'returns':
        return {
          title: "Returns Policy",
          content: "We stand behind the quality of our products and want you to be completely satisfied with your purchase. If you're not entirely happy with your order, you may return most items within 30 days of delivery for a full refund or exchange. Please note that certain personalized items and used consumables cannot be returned for hygiene reasons. Our customer service team will guide you through the simple return process."
        };
        
      // Legal
      case 'terms':
        return {
          title: "Terms of Service",
          content: "These Terms of Service govern your use of the OxygenOasis website and services. By accessing our site or purchasing our products, you agree to comply with and be bound by these terms. They cover important topics including user responsibilities, intellectual property rights, prohibited activities, and limitations of liability. We recommend reviewing these terms periodically as they may be updated to reflect changes in our business practices or legal requirements."
        };
      case 'privacy':
        return {
          title: "Privacy Policy",
          content: "At OxygenOasis, we are committed to protecting your privacy. Our Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services. This includes details about the types of data we collect, our use of cookies, how information is shared with third parties, and your rights regarding your personal data. We implement robust security measures to protect your information and comply with all applicable privacy regulations."
        };
      case 'shipping':
        return {
          title: "Shipping Policy",
          content: "We offer reliable shipping options to ensure your oxygen equipment arrives promptly and in perfect condition. Standard delivery is available nationwide, with expedited options for urgent needs. International shipping is available to select countries. All shipments are carefully packaged and insured, with tracking information provided via email. For specialized equipment, we offer white glove delivery service including setup and demonstration at your location."
        };
      case 'refund':
        return {
          title: "Refund Policy",
          content: "Our refund policy is designed to provide a fair and straightforward process when you need to return a product. Eligible returns processed within our 30-day window will receive a full refund to the original payment method, typically within 5-7 business days after we receive the returned item. For damaged or defective products, we cover return shipping costs. Rental equipment and services have specific refund terms outlined at the time of agreement."
        };
      default:
        return {
          title: title,
          content: "This content is currently being updated. Please check back soon for more information about this topic."
        };
    }
  };

  const pageContent = getContent();

  return (
    <div className="min-h-screen py-16">
      <div className="container px-4 mx-auto">
        <AnimatedSection>
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-brand-600">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 font-medium">{pageContent.title}</span>
          </div>
          
          {/* Page Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {pageContent.title}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {pageContent.content}
              </p>
              
              {/* Placeholder content for demonstration */}
              <div className="my-8 rounded-lg bg-gray-50 p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">For more information</h3>
                <p className="mb-4">If you have any questions about {pageContent.title.toLowerCase()}, please don't hesitate to contact our customer support team.</p>
                <Button asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default GenericPage;
