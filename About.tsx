import React from 'react';
import { Target, Eye, Users, Lightbulb, Shield, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of the curve by continuously exploring new advancements in AI and machine learning, ensuring our solutions are always cutting-edge.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We are committed to providing dependable, robust, and secure AI solutions that businesses can trust to perform consistently and effectively.'
    },
    {
      icon: Users,
      title: 'Customer Success',
      description: 'Our customers\' success is our top priority. We partner with businesses to understand their goals and deliver solutions that drive measurable results.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">About Intelligent Flows</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are pioneers in harnessing the power of artificial intelligence to help businesses unlock new levels of efficiency and customer engagement.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-2xl border border-slate-600">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              Our mission is to empower businesses to streamline their operations through intelligent automation, allowing them to focus on what truly matters—growth, innovation, and exceptional customer service. We believe that AI should be accessible, affordable, and customizable.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-2xl border border-slate-600">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">What We Offer</h3>
            <p className="text-gray-300 leading-relaxed">
              At Intelligent Flows, we specialize in developing customized AI chatbots and professional websites that simplify communication, reduce manual tasks, generate leads, and enhance productivity. Our solutions adapt to businesses of all sizes.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-slate-800/30 to-slate-700/30 rounded-2xl p-8 border border-slate-600">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Tailored Solutions</h4>
              <p className="text-gray-300 text-sm">We don't believe in one-size-fits-all solutions. Our chatbots are customized to meet your specific business needs.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Flexible Payment Options</h4>
              <p className="text-gray-300 text-sm">We offer clear pricing structures with flexible payment plans to ensure our solutions are accessible to all businesses.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Expert Support</h4>
              <p className="text-gray-300 text-sm">Our team of AI experts supports you throughout the entire process, from consultation to post-deployment maintenance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;