import React from 'react';
import { FaShieldAlt, FaLock, FaUserShield, FaDatabase, FaMapMarkedAlt, FaEnvelope } from 'react-icons/fa';
import "./../LegalPages.css";

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-header">
          <FaShieldAlt size={48} className="legal-icon" />
          <h1>Privacy Policy</h1>
          <p className="legal-subtitle">Last updated: January 2025</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Global Expedyte (Pty) Ltd, trading as ZOOLO ("we", "our", or "us"), is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
              mobile application and services (collectively, the "Platform").
            </p>
            <p>
              By using ZOOLO, you agree to the collection and use of information in accordance with this Privacy Policy. 
              This policy complies with the Protection of Personal Information Act 4 of 2013 (POPIA) and other applicable 
              South African laws.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Information We Collect</h2>
            
            <h3>2.1 Personal Information</h3>
            <p>We collect information that identifies you as an individual, including:</p>
            <ul>
              <li>Full name and contact details (email address, phone number)</li>
              <li>Physical address and location data</li>
              <li>Profile photograph (optional)</li>
              <li>ID number or company registration number (for courier partners)</li>
              <li>Banking details for payment processing</li>
              <li>Driver's license information (for courier partners)</li>
            </ul>

            <h3>2.2 Animal Transport Information</h3>
            <ul>
              <li>Details about animals being transported (type, size, special requirements)</li>
              <li>Pickup and delivery locations</li>
              <li>Transport preferences and booking history</li>
              <li>Photos of animals and transport confirmations</li>
            </ul>

            <h3>2.3 Technical Information</h3>
            <ul>
              <li>Device information (model, operating system, unique device identifiers)</li>
              <li>IP address and browser type</li>
              <li>GPS location data (when app is in use)</li>
              <li>App usage data and analytics</li>
              <li>Crash reports and performance data</li>
            </ul>

            <h3>2.4 Communication Data</h3>
            <ul>
              <li>In-app messages between users and couriers</li>
              <li>Customer support communications</li>
              <li>Reviews and ratings</li>
              <li>Feedback and survey responses</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use your personal information for the following purposes:</p>
            
            <div className="info-grid">
              <div className="info-card">
                <FaUserShield size={32} />
                <h4>Service Provision</h4>
                <ul>
                  <li>Create and manage your account</li>
                  <li>Process bookings and payments</li>
                  <li>Connect pet owners with courier partners</li>
                  <li>Provide real-time GPS tracking</li>
                </ul>
              </div>

              <div className="info-card">
                <FaLock size={32} />
                <h4>Safety & Security</h4>
                <ul>
                  <li>Verify courier partner credentials</li>
                  <li>Prevent fraud and abuse</li>
                  <li>Ensure safe animal transport</li>
                  <li>Resolve disputes</li>
                </ul>
              </div>

              <div className="info-card">
                <FaDatabase size={32} />
                <h4>Platform Improvement</h4>
                <ul>
                  <li>Analyze usage patterns</li>
                  <li>Develop new features</li>
                  <li>Enhance user experience</li>
                  <li>Conduct research and analytics</li>
                </ul>
              </div>
            </div>

            <h3>3.1 Marketing Communications</h3>
            <p>
              With your consent, we may send you promotional emails, push notifications, or SMS messages about 
              new features, special offers, and relevant updates. You can opt out at any time through your account 
              settings or by following the unsubscribe link in our emails.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Location Data</h2>
            <div className="highlight-box">
              <FaMapMarkedAlt size={24} />
              <div>
                <h4>GPS Tracking</h4>
                <p>
                  We collect real-time location data when you use our live tracking feature. For courier partners, 
                  this enables pet owners to track their animal's journey. For pet owners, it helps match you with 
                  nearby couriers and optimize routes.
                </p>
                <p><strong>You can disable location services in your device settings, but this may limit certain features.</strong></p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>5. Information Sharing and Disclosure</h2>
            
            <h3>5.1 With Other Users</h3>
            <p>When you book a transport service:</p>
            <ul>
              <li>Pet owners can see courier partner names, photos, ratings, and vehicle information</li>
              <li>Courier partners can see pet owner names, contact details, and pickup/delivery locations</li>
              <li>Both parties can view animal details necessary for safe transport</li>
            </ul>

            <h3>5.2 With Service Providers</h3>
            <p>We share information with trusted third parties who assist us in operating the Platform:</p>
            <ul>
              <li><strong>Payment processors:</strong> PayFast for secure payment processing</li>
              <li><strong>Cloud hosting:</strong> Supabase for data storage and management</li>
              <li><strong>Analytics services:</strong> To understand platform usage and improve services</li>
              <li><strong>Communication services:</strong> For sending notifications and messages</li>
            </ul>

            <h3>5.3 Legal Requirements</h3>
            <p>We may disclose your information if required to:</p>
            <ul>
              <li>Comply with legal obligations, court orders, or government requests</li>
              <li>Enforce our Terms of Service</li>
              <li>Protect the rights, property, or safety of ZOOLO, users, or the public</li>
              <li>Investigate fraud or security issues</li>
            </ul>

            <h3>5.4 Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, or sale of assets, your information may be transferred 
              to the acquiring entity. We will notify you of any such change in ownership.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information, including:
            </p>
            <ul>
              <li>Encryption of data in transit and at rest (SSL/TLS protocols)</li>
              <li>Secure escrow payment system to protect financial transactions</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls limiting employee access to personal data</li>
              <li>Automated backup systems to prevent data loss</li>
            </ul>
            <p>
              However, no method of transmission over the internet is 100% secure. While we strive to protect 
              your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Your Rights Under POPIA</h2>
            <p>Under South African law, you have the following rights regarding your personal information:</p>
            
            <div className="rights-grid">
              <div className="right-item">
                <h4>Right to Access</h4>
                <p>Request copies of your personal information we hold</p>
              </div>
              <div className="right-item">
                <h4>Right to Correction</h4>
                <p>Request correction of inaccurate or incomplete information</p>
              </div>
              <div className="right-item">
                <h4>Right to Deletion</h4>
                <p>Request deletion of your personal information (subject to legal obligations)</p>
              </div>
              <div className="right-item">
                <h4>Right to Object</h4>
                <p>Object to processing of your information for direct marketing</p>
              </div>
              <div className="right-item">
                <h4>Right to Restriction</h4>
                <p>Request restriction of processing in certain circumstances</p>
              </div>
              <div className="right-item">
                <h4>Right to Portability</h4>
                <p>Request transfer of your data to another service provider</p>
              </div>
            </div>

            <p>
              To exercise these rights, please contact us at <a href="mailto:privacy@zoolo.co.za">privacy@zoolo.co.za</a>. 
              We will respond to your request within 30 days as required by POPIA.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to:</p>
            <ul>
              <li>Provide our services and maintain your account</li>
              <li>Comply with legal, tax, and accounting obligations</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Maintain business records and analytics</li>
            </ul>
            <p>
              When you delete your account, we will delete or anonymize your personal information within 90 days, 
              except where we are legally required to retain certain records (e.g., financial transactions for tax purposes).
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Children's Privacy</h2>
            <p>
              ZOOLO is not intended for use by individuals under the age of 18. We do not knowingly collect 
              personal information from children. If you are a parent or guardian and believe your child has 
              provided us with personal information, please contact us immediately.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and stored on servers located outside South Africa. 
              We ensure that any such transfers comply with POPIA requirements and that adequate safeguards 
              are in place to protect your information.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar technologies to:</p>
            <ul>
              <li>Remember your preferences and settings</li>
              <li>Analyze platform performance and usage</li>
              <li>Improve user experience</li>
              <li>Provide personalized content</li>
            </ul>
            <p>You can control cookie settings through your browser, but disabling cookies may affect platform functionality.</p>
          </section>

          <section className="legal-section">
            <h2>12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, 
              legal requirements, or other factors. We will notify you of any material changes by:
            </p>
            <ul>
              <li>Posting the updated policy on our Platform with a new "Last updated" date</li>
              <li>Sending an email notification to your registered email address</li>
              <li>Displaying an in-app notification</li>
            </ul>
            <p>
              Your continued use of ZOOLO after changes become effective constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>13. Contact Information</h2>
            <div className="contact-box">
              <FaEnvelope size={32} />
              <div>
                <h4>Information Officer</h4>
                <p><strong>Global Expedyte (Pty) Ltd</strong></p>
                <p>Trading as ZOOLO</p>
                <p>Email: <a href="mailto:privacy@zoolo.co.za">privacy@zoolo.co.za</a></p>
                <p>Support: <a href="mailto:support@zoolo.co.za">support@zoolo.co.za</a></p>
                <p>Physical Address: [Your registered business address]</p>
              </div>
            </div>

            <h4>Information Regulator</h4>
            <p>If you are not satisfied with our response to your privacy concerns, you may lodge a complaint with:</p>
            <p>
              <strong>The Information Regulator (South Africa)</strong><br />
              SALU Building, 316 Thabo Sehume Street, Pretoria<br />
              Email: inforeg@justice.gov.za<br />
              Website: www.justice.gov.za/inforeg
            </p>
          </section>

          <section className="legal-section">
            <h2>14. Consent</h2>
            <p>
              By using ZOOLO, you acknowledge that you have read and understood this Privacy Policy and 
              consent to the collection, use, and disclosure of your personal information as described herein.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;