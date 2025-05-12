
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container px-4 mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-brand-600">OxygenOasis</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in respiratory health solutions since 2005,
              providing high-quality oxygen concentrators and exceptional service.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At OxygenOasis, our mission is to improve the quality of life for individuals with respiratory conditions by providing the highest quality oxygen therapy equipment and exceptional customer service.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that everyone deserves to breathe easier, and we're committed to making advanced respiratory technology accessible to all who need it. Our team of respiratory specialists works tirelessly to ensure that each customer receives personalized care and the perfect solution for their unique needs.
              </p>
              <p className="text-lg text-gray-600">
                Through innovation, education, and compassionate service, we strive to be more than just a provider—we aim to be a trusted ally in your respiratory health journey.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://static.wixstatic.com/media/a003a3_528d0d7e587a44eaa0ebd34b2b31fae6~mv2.jpg/v1/fill/w_871,h_660,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a003a3_528d0d7e587a44eaa0ebd34b2b31fae6~mv2.jpg"
                alt="Oxygen Concentrator"
                className="w-full max-w-md rounded-lg"
              />
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={400}>
          <div className="bg-brand-50 rounded-2xl p-8 md:p-12 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="https://static.wixstatic.com/media/cc4ffa_750cca6badc3433c8b379a8fa713b3ef~mv2_d_5000_3333_s_4_2.jpg/v1/fill/w_871,h_880,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cc4ffa_750cca6badc3433c8b379a8fa713b3ef~mv2_d_5000_3333_s_4_2.jpg"
                  alt="Our Values"
                  className="w-full max-w-md rounded-lg mx-auto"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Values
                </h2>
                <ul className="space-y-4">
                  {[
                    "Quality Excellence: We source only the finest, most reliable oxygen equipment.",
                    "Customer-Centric Approach: Your needs and comfort are at the heart of everything we do.",
                    "Accessibility: We strive to make respiratory care accessible through competitive pricing and flexible options.",
                    "Education: We believe in empowering clients with knowledge about respiratory health.",
                    "Innovation: We continuously seek the latest advancements in oxygen therapy technology.",
                    "Compassion: We understand the challenges of respiratory conditions and approach each client with empathy.",
                  ].map((value, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-brand-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={600}>
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Our Journey
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  {
                    year: "2005",
                    title: "The Beginning",
                    description: "OxygenOasis was founded with a simple mission: to provide high-quality oxygen concentrators to those in need. Starting with just three models, we established our first small office."
                  },
                  {
                    year: "2010",
                    title: "Expansion",
                    description: "As demand grew, so did we. We expanded our product line to include portable oxygen concentrators and accessories, opening our first dedicated showroom."
                  },
                  {
                    year: "2015",
                    title: "Innovation & Growth",
                    description: "We partnered with leading manufacturers to bring cutting-edge oxygen therapy technology to our customers. Our team grew to include respiratory therapists and technical specialists."
                  },
                  {
                    year: "2020",
                    title: "Digital Transformation",
                    description: "Recognizing the importance of accessibility, we launched our e-commerce platform, making it easier than ever for customers to browse, compare, and purchase respiratory equipment."
                  },
                  {
                    year: "Today",
                    title: "Leading the Industry",
                    description: "Today, OxygenOasis is recognized as a leader in respiratory equipment supply, serving thousands of customers nationwide with a comprehensive range of products and exceptional service."
                  }
                ].map((item, index) => (
                  <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2 md:pr-12 md:pl-0 pl-12 md:text-right flex justify-end flex-col items-end">
                      <div className={`${index % 2 === 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'} flex flex-col w-full md:w-auto`}>
                        <span className="text-brand-600 font-bold text-xl mb-2">{item.year}</span>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-brand-600 border-4 border-white shadow"></div>
                    </div>
                    <div className="md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={800}>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Experience the OxygenOasis Difference?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Browse our selection of premium oxygen concentrators or contact our team of experts for personalized advice tailored to your respiratory needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/products">
                  View Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;
