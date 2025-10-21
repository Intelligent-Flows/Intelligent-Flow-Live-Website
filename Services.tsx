import React from 'react';
import { Bot, Globe, Package, Check } from 'lucide-react';

const Services = () => {
  const chatbotTiers = [
    {
      name: 'Basic Chatbots',
      price: 'R3,000 – R5,000',
      color: 'from-green-400 to-green-600',
      features: [
        'Simple FAQ handling',
        'Predefined scripts & basic NLP',
        'Limited customization',
        'Best for small businesses or individuals'
      ]
    },
    {
      name: 'Standard Chatbots',
      price: 'R10,000 – R15,000',
      color: 'from-blue-400 to-blue-600',
      features: [
        'Advanced NLP (context & intent recognition)',
        'Integration with CRM & email',
        'Multi-channel support (web + social media)',
        'Custom workflows & analytics',
        'Best for SMEs'
      ]
    },
    {
      name: 'Advanced Chatbots',
      price: 'R20,000 – R50,000',
      color: 'from-purple-400 to-purple-600',
      features: [
        'Machine learning conversational AI',
        'Personalized user interactions',
        'API integrations',
        'Advanced analytics & multilingual support',
        'Best for enterprises'
      ]
    }
  ];

  const websiteTiers = [
    {
      name: 'Starter Websites',
      price: 'R5,000 – R7,500',
      color: 'from-cyan-400 to-cyan-600',
      features: [
        '1–5 pages (Home, About, Contact, Services)',
        'Mobile-responsive design & basic SEO',
        'Contact form / WhatsApp integration',
        'Fast turnaround (1–2 weeks)'
      ]
    },
    {
      name: 'Professional Websites',
      price: 'R10,000 – R15,000',
      color: 'from-pink-400 to-pink-600',
      features: [
        '5–10 pages with blog/news',
        'SEO optimization + social media integration',
        'Booking forms & chatbot integration',
        'Analytics setup'
      ]
    },
    {
      name: 'Premium Websites',
      price: 'R20,000+',
      color: 'from-orange-400 to-orange-600',
      features: [
        '10+ pages or custom design',
        'Full e-commerce setup (products, payments)',
        'Advanced SEO + content strategy',
        'Membership/portal features',
        'Ongoing support & updates'
      ]
    }
  ];

  const hybridPackages = [
    {
      name: 'Starter Pack',
      price: 'R7,500 – R10,000',
      description: 'Simple Website + Basic Chatbot'
    },
    {
      name: 'Growth Pack',
      price: 'R15,000 – R20,000 OR R2,000/month',
      description: 'Professional Website + Standard Chatbot'
    },
    {
      name: 'Enterprise Pack',
      price: 'R25,000+ OR retainer-based',
      description: 'Premium Website + Advanced Chatbot'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI automation solutions tailored to your business needs
          </p>
        </div>

        {/* Chatbot Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-cyan-900/30 border border-cyan-500/30 rounded-full text-cyan-400 text-lg font-semibold mb-4">
              <Bot className="w-6 h-6 mr-3" />
              AI Chatbot Services
            </div>
            <h3 className="text-3xl font-bold text-white">Intelligent Customer Support</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chatbotTiers.map((tier, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-cyan-400 transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{tier.name}</h4>
                <div className="text-2xl font-bold text-cyan-400 mb-6">{tier.price}</div>
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Website Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-pink-900/30 border border-pink-500/30 rounded-full text-pink-400 text-lg font-semibold mb-4">
              <Globe className="w-6 h-6 mr-3" />
              Website Development
            </div>
            <h3 className="text-3xl font-bold text-white">Professional Digital Presence</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteTiers.map((tier, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-pink-400 transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{tier.name}</h4>
                <div className="text-2xl font-bold text-pink-400 mb-6">{tier.price}</div>
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Hybrid Packages */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-purple-900/30 border border-purple-500/30 rounded-full text-purple-400 text-lg font-semibold mb-4">
              <Package className="w-6 h-6 mr-3" />
              Hybrid Packages
            </div>
            <h3 className="text-3xl font-bold text-white">Best Value Solutions</h3>
            <p className="text-gray-300 mt-4">Combine our chatbot and website services for maximum ROI</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hybridPackages.map((pkg, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-2xl border border-slate-600 hover:border-purple-400 transition-all text-center">
                <h4 className="text-xl font-bold text-white mb-4">{pkg.name}</h4>
                <div className="text-2xl font-bold text-purple-400 mb-4">{pkg.price}</div>
                <p className="text-gray-300">{pkg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;