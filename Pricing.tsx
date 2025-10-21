import React from 'react';
import { CreditCard, Calendar, Check, X } from 'lucide-react';

const Pricing = () => {
  const paymentOptions = [
    {
      type: 'Once-Off Purchase',
      icon: CreditCard,
      color: 'from-green-400 to-green-600',
      description: 'Pay the full principal amount upfront with no further monthly payments.',
      features: [
        'Full upfront payment',
        'No monthly fees',
        'Maintenance fee: R1,299 per request',
        'Includes chatbot updates',
        'Token payments covered',
        'Bug fixes and improvements'
      ],
      recommended: false
    },
    {
      type: 'Monthly Subscription',
      icon: Calendar,
      color: 'from-cyan-400 to-pink-500',
      description: 'Pay 60% upfront, then R899/month for ongoing support and maintenance.',
      features: [
        '60% upfront payment',
        'R899/month ongoing',
        'Regular chatbot updates included',
        'Token payments included',
        'Bug fixes and maintenance',
        '1-month cancellation notice'
      ],
      recommended: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Payment Options</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the payment plan that works best for your business
          </p>
        </div>

        {/* Payment Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {paymentOptions.map((option, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border ${
                option.recommended ? 'border-cyan-400' : 'border-slate-600'
              } hover:border-cyan-400 transition-all group`}
            >
              {option.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-400 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Recommended
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-20 h-20 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <option.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{option.type}</h3>
                <p className="text-gray-300 text-sm">{option.description}</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                <ul className="space-y-3">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all ${
                    option.recommended
                      ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                      : 'border-2 border-slate-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400'
                  }`}
                >
                  Choose This Plan
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-8 rounded-2xl border border-slate-600 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Flexible Solutions for Every Business</h3>
            <p className="text-gray-300 mb-6">
              Whether you're a small business owner, an SME ready to grow, or a large enterprise, 
              our solutions adapt to your goals. Contact us to discuss custom pricing for enterprise solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="text-cyan-400 font-bold text-lg">Small Business</div>
                <div className="text-gray-400">Basic to Standard solutions</div>
              </div>
              <div className="text-center">
                <div className="text-pink-400 font-bold text-lg">SME</div>
                <div className="text-gray-400">Standard to Advanced solutions</div>
              </div>
              <div className="text-center">
                <div className="text-purple-400 font-bold text-lg">Enterprise</div>
                <div className="text-gray-400">Custom retainer-based solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;