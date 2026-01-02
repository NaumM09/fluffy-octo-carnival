import React, { useState } from 'react';
import { 
  FaQuestionCircle, 
  FaEnvelope, 
  FaPhone, 
  FaWhatsapp, 
  FaClock,
  FaMapMarkerAlt,
  FaBook,
  FaUserCircle,
  FaTruck,
  FaCreditCard,
  FaShieldAlt,
  FaPaw,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

const Support = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      category: 'Getting Started',
      icon: <FaUserCircle size={24} />,
      questions: [
        {
          q: 'How do I create an account on ZOOLO?',
          a: 'Download the ZOOLO app from the App Store or Google Play, tap "Sign Up," and provide your name, email, phone number, and create a password. Verify your email and phone to activate your account.'
        },
        {
          q: 'Is ZOOLO available across South Africa?',
          a: 'Yes! ZOOLO operates nationwide across all nine provinces in South Africa. Courier availability varies by region, but we\'re expanding coverage continuously.'
        },
        {
          q: 'Do I need to provide ID verification?',
          a: 'Pet owners don\'t need ID verification for basic bookings. Courier partners must complete full verification including ID, driver\'s license, company registration, and insurance documents.'
        }
      ]
    },
    {
      category: 'Booking & Transport',
      icon: <FaTruck size={24} />,
      questions: [
        {
          q: 'How do I book animal transport?',
          a: 'Open the app, enter pickup and delivery locations, select your animal type and size, choose a courier from available options, review the price, and confirm your booking. You\'ll receive instant confirmation.'
        },
        {
          q: 'Can I book transport for multiple animals?',
          a: 'Yes! You can transport multiple animals in a single booking. Select the quantity when creating your booking and provide details for each animal.'
        },
        {
          q: 'What types of animals can be transported?',
          a: 'We facilitate transport for domestic pets (dogs, cats, birds, rabbits), livestock (cattle, sheep, goats, pigs), horses, exotic pets, and farm animals. Illegal or endangered species are prohibited.'
        },
        {
          q: 'How far in advance should I book?',
          a: 'We recommend booking at least 24-48 hours in advance for best courier availability. Emergency pickups (same-day) may be available but at premium rates.'
        },
        {
          q: 'What if I need to cancel my booking?',
          a: 'Cancellations more than 24 hours before pickup receive a full refund minus processing fees. Cancellations 12-24 hours before receive 50% refund. Less than 12 hours: no refund. Cancel through the app under "My Bookings."'
        },
        {
          q: 'Can I track my animal during transport?',
          a: 'Yes! ZOOLO provides real-time GPS tracking. Open your active booking to view live location updates, estimated arrival time, and journey progress.'
        }
      ]
    },
    {
      category: 'Payments',
      icon: <FaCreditCard size={24} />,
      questions: [
        {
          q: 'What payment methods does ZOOLO accept?',
          a: 'We accept all major credit/debit cards (Visa, Mastercard), instant EFT, and mobile payments through our secure PayFast integration.'
        },
        {
          q: 'How does the escrow system work?',
          a: 'Your payment is held securely in escrow until delivery is confirmed. Once you confirm safe delivery (or 48 hours pass without dispute), funds are released to the courier. This protects both parties.'
        },
        {
          q: 'When will I be charged?',
          a: 'Your card is charged immediately upon booking confirmation. The amount is held in escrow and released to the courier after successful delivery.'
        },
        {
          q: 'Are there any hidden fees?',
          a: 'No hidden fees! The total price shown at checkout includes transport cost, ZOOLO service fee, and payment processing. No surprises.'
        },
        {
          q: 'How do refunds work?',
          a: 'Approved refunds are processed within 5-7 business days to your original payment method. The refund amount depends on cancellation timing (see cancellation policy).'
        },
        {
          q: 'Can I get an invoice or receipt?',
          a: 'Yes! Digital receipts are automatically sent to your email after payment. You can also download invoices from "My Bookings" in the app.'
        }
      ]
    },
    {
      category: 'Safety & Security',
      icon: <FaShieldAlt size={24} />,
      questions: [
        {
          q: 'How are courier partners verified?',
          a: 'All courier partners undergo rigorous verification: company registration check, driver\'s license validation, insurance confirmation, criminal record screening, and vehicle inspection documentation.'
        },
        {
          q: 'What if my animal is injured during transport?',
          a: 'Contact support immediately at support@zoolo.co.za or call our emergency line. Document the injury with photos. Courier partners must have goods-in-transit insurance. We\'ll initiate an investigation and claims process.'
        },
        {
          q: 'How do I report unsafe transport conditions?',
          a: 'Report concerns immediately through the app\'s "Report Issue" button or contact support. We take animal welfare seriously and investigate all reports within 24 hours.'
        },
        {
          q: 'What happens if a courier doesn\'t show up?',
          a: 'Contact the courier via in-app messaging. If they don\'t respond within 15 minutes of scheduled pickup, contact support for immediate assistance. You\'ll receive a full refund if the courier fails to provide service.'
        },
        {
          q: 'Is my personal information secure?',
          a: 'Yes. ZOOLO complies with POPIA (Protection of Personal Information Act). We use bank-level encryption, secure servers, and never share your information without consent. See our Privacy Policy for details.'
        }
      ]
    },
    {
      category: 'For Courier Partners',
      icon: <FaPaw size={24} />,
      questions: [
        {
          q: 'How do I become a courier partner?',
          a: 'Download the app, select "Partner Sign Up," complete the registration form, and submit verification documents (company registration, driver\'s license, insurance, vehicle details). Verification takes 2-3 business days.'
        },
        {
          q: 'What documents do I need to provide?',
          a: 'Required: CIPC company registration, driver\'s license, professional driving permit (if applicable), vehicle registration, insurance (goods-in-transit + public liability), tax clearance, and criminal record check.'
        },
        {
          q: 'How much does ZOOLO charge in commission?',
          a: 'ZOOLO charges a platform commission (percentage of booking value). Current rates are displayed in your Partner Dashboard. Commission covers payment processing, insurance, platform maintenance, and support.'
        },
        {
          q: 'How do I receive payments?',
          a: 'Payments are released from escrow to your verified bank account after delivery confirmation. Standard payout timing is 48 hours after delivery or immediate upon customer confirmation.'
        },
        {
          q: 'Can I set my own prices?',
          a: 'Yes! You have full control over your pricing. Set rates based on distance, animal type, urgency, and your operating costs. Competitive pricing increases booking chances.'
        },
        {
          q: 'What if a customer leaves a bad review?',
          a: 'You can respond publicly to reviews. If you believe a review violates our guidelines (fake, abusive, irrelevant), you can flag it for review. Legitimate feedback helps improve service quality.'
        }
      ]
    },
    {
      category: 'Technical Issues',
      icon: <FaBook size={24} />,
      questions: [
        {
          q: 'The app isn\'t working properly. What should I do?',
          a: 'Try these steps: 1) Close and restart the app, 2) Check your internet connection, 3) Update to the latest version, 4) Clear app cache (Settings > Apps > ZOOLO > Clear Cache), 5) Reinstall the app. If issues persist, contact support.'
        },
        {
          q: 'GPS tracking isn\'t showing my location correctly',
          a: 'Ensure location permissions are enabled (Settings > Apps > ZOOLO > Permissions > Location > Always Allow). Check that GPS is enabled on your device. Restart the app and wait 30 seconds for GPS to connect.'
        },
        {
          q: 'I\'m not receiving notifications',
          a: 'Check that notifications are enabled: Settings > Apps > ZOOLO > Notifications > Allow All. Also check "Do Not Disturb" mode isn\'t blocking app notifications.'
        },
        {
          q: 'My payment failed. What should I do?',
          a: 'Verify your card details are correct, check your bank hasn\'t blocked the transaction, ensure sufficient funds, and try a different payment method. Contact your bank if issues persist. Our support team can help troubleshoot.'
        }
      ]
    }
  ];

  const contactMethods = [
    {
      icon: <FaEnvelope size={32} />,
      title: 'Email Support',
      detail: 'support@zoolo.co.za',
      description: 'Response within 24 hours',
      action: 'mailto:support@zoolo.co.za'
    },
    {
      icon: <FaWhatsapp size={32} />,
      title: 'WhatsApp',
      detail: '+27 XX XXX XXXX',
      description: 'Quick responses during business hours',
      action: 'https://wa.me/27XXXXXXXXX'
    },
    {
      icon: <FaPhone size={32} />,
      title: 'Phone Support',
      detail: '+27 XX XXX XXXX',
      description: 'Mon-Fri: 8AM-6PM, Sat: 9AM-2PM',
      action: 'tel:+27XXXXXXXXX'
    }
  ];

  return (
    <div className="legal-page support-page">
      <div className="container">
        {/* Header */}
        <div className="legal-header">
          <FaQuestionCircle size={48} className="legal-icon" />
          <h1>Support Center</h1>
          <p className="legal-subtitle">We're here to help you every step of the way</p>
        </div>

        {/* Quick Contact */}
        <section className="support-section">
          <h2 className="section-title-center">Get In Touch</h2>
          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <a 
                key={index} 
                href={method.action}
                className="contact-method-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                <p className="contact-detail">{method.detail}</p>
                <p className="contact-description">{method.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Business Hours */}
        <section className="support-section">
          <div className="hours-box">
            <FaClock size={32} />
            <div>
              <h3>Support Hours</h3>
              <p><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM SAST</p>
              <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM SAST</p>
              <p><strong>Sunday & Public Holidays:</strong> Closed (emergency support available)</p>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="support-section">
          <div className="emergency-box">
            <FaShieldAlt size={32} />
            <div>
              <h3>Emergency Support</h3>
              <p>
                For urgent animal welfare concerns or transport emergencies, contact our 24/7 emergency line:
              </p>
              <p className="emergency-number"><strong>Emergency: +27 XX XXX XXXX</strong></p>
              <p className="emergency-note">
                Use this line only for genuine emergencies involving animal safety or health during transport.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="support-section faq-section">
          <h2 className="section-title-center">Frequently Asked Questions</h2>
          <p className="section-subtitle-center">
            Find quick answers to common questions about using ZOOLO
          </p>

          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="faq-category">
              <div className="faq-category-header">
                {category.icon}
                <h3>{category.category}</h3>
              </div>
              
              {category.questions.map((faq, faqIndex) => {
                const faqId = `${categoryIndex}-${faqIndex}`;
                const isOpen = openFaq === faqId;
                
                return (
                  <div key={faqIndex} className={`faq-item ${isOpen ? 'open' : ''}`}>
                    <button 
                      className="faq-question"
                      onClick={() => toggleFaq(faqId)}
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
                    </button>
                    {isOpen && (
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </section>

        {/* Additional Resources */}
        <section className="support-section">
          <h2 className="section-title-center">Additional Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <FaBook size={32} />
              <h4>User Guide</h4>
              <p>Comprehensive guide to using ZOOLO for animal transport</p>
              <a href="/guide" className="resource-link">Read Guide →</a>
            </div>
            <div className="resource-card">
              <FaPaw size={32} />
              <h4>Animal Welfare Tips</h4>
              <p>Best practices for preparing your animal for transport</p>
              <a href="/animal-welfare" className="resource-link">Learn More →</a>
            </div>
            <div className="resource-card">
              <FaTruck size={32} />
              <h4>Partner Resources</h4>
              <p>Tools and guides for courier partners</p>
              <a href="/partner-resources" className="resource-link">View Resources →</a>
            </div>
          </div>
        </section>

        {/* Report Issue */}
        <section className="support-section">
          <div className="report-box">
            <h3>Report an Issue</h3>
            <p>
              If you've encountered a problem not covered in our FAQs, please submit a detailed report:
            </p>
            <ul>
              <li>Describe the issue clearly</li>
              <li>Include booking reference number (if applicable)</li>
              <li>Attach screenshots or photos if relevant</li>
              <li>Provide your contact details</li>
            </ul>
            <a href="mailto:support@zoolo.co.za?subject=Issue Report" className="report-button">
              Submit Issue Report
            </a>
          </div>
        </section>

        {/* Company Address */}
        <section className="support-section">
          <div className="address-box">
            <FaMapMarkerAlt size={32} />
            <div>
              <h3>Company Address</h3>
              <p><strong>Global Expedyte (Pty) Ltd</strong></p>
              <p>Trading as ZOOLO</p>
              <p>[Your physical address]</p>
              <p>[City, Province, Postal Code]</p>
              <p>South Africa</p>
            </div>
          </div>
        </section>

        {/* Feedback */}
        <section className="support-section">
          <div className="feedback-box">
            <h3>We Value Your Feedback</h3>
            <p>
              Help us improve ZOOLO! Share your suggestions, feature requests, or general feedback:
            </p>
            <a href="mailto:feedback@zoolo.co.za" className="feedback-button">
              Send Feedback
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Support;