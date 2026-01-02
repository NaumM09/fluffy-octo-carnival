import React from 'react';
import { FaFileContract, FaBalanceScale, FaExclamationTriangle, FaGavel } from 'react-icons/fa';
import "./../LegalPages.css";

const TermsOfService = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-header">
          <FaFileContract size={48} className="legal-icon" />
          <h1>Terms of Service</h1>
          <p className="legal-subtitle">Last updated: January 2025</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between you and 
              Global Expedyte (Pty) Ltd, trading as ZOOLO ("Company", "we", "our", or "us"), governing 
              your access to and use of the ZOOLO mobile application and related services (collectively, the "Platform").
            </p>
            <p>
              By accessing or using ZOOLO, you agree to be bound by these Terms. If you do not agree to 
              these Terms, you may not access or use the Platform.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Eligibility</h2>
            <p>You must meet the following requirements to use ZOOLO:</p>
            <ul>
              <li>Be at least 18 years of age</li>
              <li>Have the legal capacity to enter into binding contracts</li>
              <li>Reside in South Africa or have a valid South African address</li>
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain the security of your account credentials</li>
            </ul>
            <p>
              For courier partners, additional requirements apply (see Section 9: Courier Partner Terms).
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Description of Services</h2>
            <p>
              ZOOLO is a marketplace platform that connects animal owners ("Pet Owners") with professional 
              courier companies ("Courier Partners") for animal transport services across South Africa.
            </p>

            <h3>3.1 Platform Services Include:</h3>
            <ul>
              <li>Searchable directory of verified courier partners</li>
              <li>Booking and scheduling tools for animal transport</li>
              <li>Real-time GPS tracking of transport journeys</li>
              <li>Secure escrow payment processing</li>
              <li>In-app messaging between users and couriers</li>
              <li>Review and rating system</li>
              <li>Photo confirmation of pickup and delivery</li>
            </ul>

            <h3>3.2 Important Clarifications</h3>
            <div className="highlight-box warning">
              <FaExclamationTriangle size={24} />
              <div>
                <h4>ZOOLO is a Technology Platform Only</h4>
                <p>
                  ZOOLO does not provide animal transport services directly. We are not a courier company, 
                  animal transporter, or logistics provider. We facilitate connections between Pet Owners and 
                  independent Courier Partners who provide transport services.
                </p>
                <p>
                  <strong>ZOOLO is not responsible for the actual transport services, animal care, or courier conduct.</strong>
                </p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>4. Account Registration and Security</h2>
            
            <h3>4.1 Account Creation</h3>
            <p>To use ZOOLO, you must create an account by providing:</p>
            <ul>
              <li>Valid email address and phone number</li>
              <li>Full legal name</li>
              <li>Physical address</li>
              <li>Password meeting security requirements</li>
            </ul>

            <h3>4.2 Account Responsibilities</h3>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate and truthful information</li>
              <li>Keep your account credentials confidential</li>
              <li>Notify us immediately of unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Maintain only one account (no duplicate accounts)</li>
            </ul>

            <h3>4.3 Account Termination</h3>
            <p>We reserve the right to suspend or terminate accounts that:</p>
            <ul>
              <li>Violate these Terms or our policies</li>
              <li>Engage in fraudulent or illegal activities</li>
              <li>Abuse the Platform or harm other users</li>
              <li>Remain inactive for extended periods</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Booking and Payment Terms</h2>

            <h3>5.1 Booking Process</h3>
            <p>When you book a transport service:</p>
            <ol>
              <li>You submit a booking request with animal and journey details</li>
              <li>Courier Partner accepts or declines the booking</li>
              <li>Upon acceptance, a binding contract forms between you and the Courier Partner</li>
              <li>Payment is processed and held in escrow</li>
              <li>Transport service is provided according to agreed terms</li>
            </ol>

            <h3>5.2 Pricing and Fees</h3>
            <ul>
              <li><strong>Transport Fees:</strong> Set by Courier Partners and displayed before booking</li>
              <li><strong>Platform Service Fee:</strong> ZOOLO charges a service fee (percentage of booking value) included in the total price</li>
              <li><strong>Payment Processing:</strong> Handled securely through PayFast</li>
              <li><strong>Currency:</strong> All prices are in South African Rand (ZAR)</li>
            </ul>

            <h3>5.3 Escrow System</h3>
            <div className="highlight-box">
              <FaBalanceScale size={24} />
              <div>
                <h4>How Escrow Protects You</h4>
                <p>
                  Your payment is held securely in escrow until delivery is confirmed. This protects both parties:
                </p>
                <ul>
                  <li>Pet Owners: Payment released only after safe delivery</li>
                  <li>Courier Partners: Guaranteed payment upon completion</li>
                </ul>
                <p>
                  Funds are released when the Pet Owner confirms delivery or automatically after 48 hours if no 
                  dispute is raised.
                </p>
              </div>
            </div>

            <h3>5.4 Cancellation Policy</h3>
            <p><strong>By Pet Owners:</strong></p>
            <ul>
              <li>More than 24 hours before pickup: Full refund minus processing fee</li>
              <li>12-24 hours before pickup: 50% refund</li>
              <li>Less than 12 hours before pickup: No refund</li>
              <li>After pickup: No refund (dispute resolution available)</li>
            </ul>

            <p><strong>By Courier Partners:</strong></p>
            <ul>
              <li>Cancellation after acceptance may result in penalties</li>
              <li>Pet Owner receives full refund</li>
              <li>Repeated cancellations may lead to account suspension</li>
            </ul>

            <h3>5.5 Refunds and Disputes</h3>
            <p>
              If a dispute arises regarding transport quality, animal welfare, or service delivery, you may 
              request mediation through our dispute resolution process. We will investigate and make a fair 
              determination based on evidence provided by both parties.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. User Conduct and Prohibited Activities</h2>

            <h3>6.1 You Agree Not To:</h3>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Provide false, misleading, or fraudulent information</li>
              <li>Impersonate another person or entity</li>
              <li>Harass, threaten, or abuse other users</li>
              <li>Upload viruses, malware, or malicious code</li>
              <li>Attempt to hack, reverse engineer, or compromise the Platform</li>
              <li>Scrape, crawl, or data mine ZOOLO content</li>
              <li>Use the Platform for commercial purposes outside of legitimate bookings</li>
              <li>Circumvent payment systems or attempt direct payment to avoid fees</li>
              <li>Leave fake reviews or manipulate ratings</li>
              <li>Transport prohibited animals or illegal goods</li>
            </ul>

            <h3>6.2 Animal Welfare Requirements</h3>
            <p>All users must comply with:</p>
            <ul>
              <li>The Animals Protection Act 71 of 1962</li>
              <li>Performing Animals Protection Act 24 of 1935</li>
              <li>Applicable provincial and municipal animal welfare regulations</li>
              <li>Basic humane treatment standards for animal transport</li>
            </ul>

            <p><strong>Prohibited:</strong></p>
            <ul>
              <li>Transporting animals in unsafe or inhumane conditions</li>
              <li>Failing to provide adequate ventilation, space, or water</li>
              <li>Transporting sick or injured animals without veterinary clearance</li>
              <li>Using ZOOLO for illegal wildlife trafficking or endangered species</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>7. Intellectual Property Rights</h2>

            <h3>7.1 ZOOLO's Intellectual Property</h3>
            <p>
              All content, features, and functionality of the Platform—including but not limited to text, 
              graphics, logos, icons, images, software, and design—are owned by ZOOLO or our licensors and 
              are protected by South African and international copyright, trademark, and other intellectual 
              property laws.
            </p>

            <h3>7.2 Limited License</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable license to access and use 
              the Platform for personal, non-commercial purposes in accordance with these Terms.
            </p>

            <h3>7.3 User-Generated Content</h3>
            <p>
              By uploading photos, reviews, or other content to ZOOLO, you grant us a worldwide, royalty-free, 
              perpetual license to use, reproduce, modify, and display such content for Platform operations, 
              marketing, and improvement purposes.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Third-Party Services and Links</h2>
            <p>
              ZOOLO integrates with third-party services including payment processors (PayFast), mapping 
              services, and analytics tools. We are not responsible for the practices, policies, or content 
              of these third parties. Your use of third-party services is subject to their respective terms 
              and privacy policies.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Courier Partner Additional Terms</h2>

            <h3>9.1 Verification Requirements</h3>
            <p>Courier Partners must provide:</p>
            <ul>
              <li>Valid company registration (CIPC certificate)</li>
              <li>Driver's license and professional driving permit (PrDP) if applicable</li>
              <li>Vehicle registration and roadworthiness certificate</li>
              <li>Proof of insurance (goods in transit, public liability)</li>
              <li>Tax clearance certificate</li>
              <li>Clean criminal record check</li>
            </ul>

            <h3>9.2 Service Standards</h3>
            <p>Courier Partners agree to:</p>
            <ul>
              <li>Provide safe, humane animal transport services</li>
              <li>Maintain vehicles in good working condition</li>
              <li>Arrive on time for pickups and deliveries</li>
              <li>Communicate proactively with Pet Owners</li>
              <li>Upload photo confirmation at pickup and delivery</li>
              <li>Follow all animal welfare regulations</li>
              <li>Maintain appropriate insurance coverage</li>
            </ul>

            <h3>9.3 Commission Structure</h3>
            <p>
              ZOOLO charges a platform commission (percentage of booking value) deducted from payments to 
              Courier Partners. Current commission rates are displayed in the Partner Dashboard.
            </p>

            <h3>9.4 Rating and Reviews</h3>
            <p>
              Courier Partners are subject to public ratings and reviews by Pet Owners. Consistent low 
              ratings may result in reduced visibility or account suspension.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Disclaimers and Limitation of Liability</h2>

            <div className="highlight-box warning">
              <FaExclamationTriangle size={24} />
              <div>
                <h4>Important Legal Notice</h4>
                <p>
                  <strong>ZOOLO IS A MARKETPLACE PLATFORM ONLY.</strong> We do not employ Courier Partners, 
                  own transport vehicles, or provide animal transport services. Courier Partners are independent 
                  contractors responsible for their own services.
                </p>
              </div>
            </div>

            <h3>10.1 Platform "As-Is"</h3>
            <p>
              THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR 
              IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
              PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h3>10.2 No Guarantee of Services</h3>
            <p>We do not guarantee that:</p>
            <ul>
              <li>The Platform will be uninterrupted, secure, or error-free</li>
              <li>Courier Partners will accept your booking requests</li>
              <li>Transport services will meet your expectations</li>
              <li>All courier information is accurate or up-to-date</li>
              <li>GPS tracking will function perfectly at all times</li>
            </ul>

            <h3>10.3 Limitation of Liability</h3>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY SOUTH AFRICAN LAW, ZOOLO SHALL NOT BE LIABLE FOR:
            </p>
            <ul>
              <li>Injury, illness, or death of animals during transport</li>
              <li>Damage to property or belongings during transport</li>
              <li>Actions or omissions of Courier Partners</li>
              <li>Delays, cancellations, or service failures by Courier Partners</li>
              <li>Indirect, incidental, consequential, or punitive damages</li>
              <li>Loss of profits, data, or business opportunities</li>
            </ul>

            <p>
              <strong>Our total liability shall not exceed the fees paid by you in the preceding 12 months, 
              or R1,000, whichever is less.</strong>
            </p>

            <h3>10.4 Indemnification</h3>
            <p>
              You agree to indemnify and hold harmless ZOOLO, its affiliates, officers, directors, employees, 
              and agents from any claims, damages, losses, or expenses (including legal fees) arising from:
            </p>
            <ul>
              <li>Your use of the Platform</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any laws or third-party rights</li>
              <li>Content you upload or transmit through the Platform</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>11. Insurance</h2>
            <p>
              <strong>Pet Owners:</strong> We recommend obtaining separate pet insurance or transport 
              insurance for valuable animals. ZOOLO's platform fee does not include insurance coverage.
            </p>
            <p>
              <strong>Courier Partners:</strong> Must maintain appropriate goods-in-transit and public 
              liability insurance. Proof of coverage may be requested.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Governing Law and Dispute Resolution</h2>

            <h3>12.1 Governing Law</h3>
            <p>
              These Terms are governed by and construed in accordance with the laws of the Republic of South 
              Africa. The courts of South Africa shall have exclusive jurisdiction over any disputes.
            </p>

            <h3>12.2 Dispute Resolution Process</h3>
            <ol>
              <li><strong>Informal Resolution:</strong> Contact support@zoolo.co.za to resolve disputes amicably</li>
              <li><strong>Mediation:</strong> If unresolved, parties agree to good-faith mediation</li>
              <li><strong>Arbitration:</strong> Disputes may be submitted to binding arbitration under AFSA rules</li>
              <li><strong>Litigation:</strong> As a last resort, disputes may be brought before South African courts</li>
            </ol>

            <h3>12.3 Class Action Waiver</h3>
            <p>
              You agree to bring claims against ZOOLO only in your individual capacity, not as a plaintiff 
              or class member in any class or representative action.
            </p>
          </section>

          <section className="legal-section">
            <h2>13. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately 
              upon posting with an updated "Last Updated" date. Material changes will be communicated via:
            </p>
            <ul>
              <li>Email notification to your registered address</li>
              <li>In-app notification</li>
              <li>Prominent notice on the Platform</li>
            </ul>
            <p>
              Continued use of ZOOLO after changes constitutes acceptance of updated Terms. If you do not 
              agree to changes, you must stop using the Platform and may close your account.
            </p>
          </section>

          <section className="legal-section">
            <h2>14. Termination</h2>

            <h3>14.1 By You</h3>
            <p>You may close your account at any time through account settings or by contacting support.</p>

            <h3>14.2 By ZOOLO</h3>
            <p>We may suspend or terminate your account immediately if you:</p>
            <ul>
              <li>Violate these Terms or our policies</li>
              <li>Engage in fraudulent or illegal activity</li>
              <li>Harm the Platform or other users</li>
              <li>Fail to pay fees owed</li>
              <li>Receive multiple serious complaints</li>
            </ul>

            <h3>14.3 Effect of Termination</h3>
            <p>Upon termination:</p>
            <ul>
              <li>Your right to use the Platform ceases immediately</li>
              <li>Outstanding payments remain due</li>
              <li>Active bookings may be cancelled or completed</li>
              <li>Some data may be retained for legal or business purposes</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>15. General Provisions</h2>

            <h3>15.1 Entire Agreement</h3>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and 
              ZOOLO regarding use of the Platform.
            </p>

            <h3>15.2 Severability</h3>
            <p>
              If any provision of these Terms is found invalid or unenforceable, the remaining provisions 
              shall remain in full force and effect.
            </p>

            <h3>15.3 No Waiver</h3>
            <p>
              Our failure to enforce any right or provision of these Terms does not constitute a waiver of 
              that right or provision.
            </p>

            <h3>15.4 Assignment</h3>
            <p>
              You may not assign or transfer these Terms without our written consent. We may assign our 
              rights and obligations to any successor entity.
            </p>

            <h3>15.5 Force Majeure</h3>
            <p>
              ZOOLO is not liable for delays or failures caused by circumstances beyond our reasonable control, 
              including natural disasters, strikes, government actions, or technical failures.
            </p>
          </section>

          <section className="legal-section">
            <h2>16. Contact Information</h2>
            <div className="contact-box">
              <FaGavel size={32} />
              <div>
                <h4>Legal and Compliance</h4>
                <p><strong>Global Expedyte (Pty) Ltd</strong></p>
                <p>Trading as ZOOLO</p>
                <p>Email: <a href="mailto:legal@zoolo.co.za">legal@zoolo.co.za</a></p>
                <p>Support: <a href="mailto:support@zoolo.co.za">support@zoolo.co.za</a></p>
                <p>Physical Address: [Your registered business address]</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>17. Acknowledgment</h2>
            <p>
              BY USING ZOOLO, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE 
              TERMS OF SERVICE.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;