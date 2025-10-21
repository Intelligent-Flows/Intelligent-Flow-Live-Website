import React from 'react';
import { Mail, Phone, MessageCircle, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'intelli.flow@outlook.com',
      href: 'mailto:intelli.flow@outlook.com',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '081 288 4614 / 069 210 5583',
      href: 'tel:+27812884614',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '069 210 5583 / 081 288 4614',
      href: 'https://wa.me/27692105583',
      color: 'from-green-500 to-green-700'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to revolutionize your business with intelligent automation? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    className="flex items-center p-6 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border border-slate-600 hover:border-cyan-400 transition-all group"
                    target={method.href.startsWith('https') ? '_blank' : undefined}
                    rel={method.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mr-6`}>
                      <method.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{method.title}</h4>
                      <p className="text-gray-300">{method.value}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-2xl border border-slate-600">
              <h4 className="text-xl font-bold text-white mb-4">Why Choose Intelligent Flows?</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Tailored solutions for your specific business needs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Flexible payment options to fit your budget
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Expert support from consultation to deployment
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Proven track record with businesses of all sizes
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <div className="text-center">
              <p className="text-gray-300 mb-6">
                Ready to get started? Fill out our contact form to discuss your project requirements and get a personalized quote.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfmsG9_ubLQRbht3xextMgdsdJbRGYiDK1HQotpGBKtc0kIPA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all group"
              >
                Open Contact Form
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-gray-400 mt-4">
                The form will open in a new tab for your convenience
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-900/30 to-pink-900/30 p-8 rounded-2xl border border-cyan-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Experience the Future of Efficiency!
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Where Intelligent Solutions Meet Seamless Automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:intelli.flow@outlook.com"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Start Your Project
              </a>
              <a
                href="https://wa.me/27692105583"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-green-400 hover:text-green-400 transition-all"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;