import React, { useState, useEffect } from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // Check dark mode on mount and listen for changes
  useEffect(() => {
    const updateDarkMode = () => {
      setDarkMode(localStorage.getItem("darkMode") === "true");
    };

    // Initial check
    updateDarkMode();

    // Set up event listener for storage changes
    window.addEventListener('storage', updateDarkMode);
    window.addEventListener('darkModeChange', updateDarkMode);
    
    // Clean up
    return () => {
      window.removeEventListener('storage', updateDarkMode);
      window.removeEventListener('darkModeChange', updateDarkMode);
    };
  }, []);

  return (
    <div className={`privacy-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="privacy-wrapper">
        <div className="privacy-header">
          <div className="privacy-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <h1>Privacy Policy</h1>
          <p className="subtitle">
            Our commitment to protecting your personal information
          </p>
        </div>

        <div className="privacy-intro">
          <p>
            At Freelancify, your privacy is important to us. We are committed to protecting your personal information and ensuring a safe and secure experience on our platform. This Privacy Policy explains how we collect and protect your data when you use Freelancify.
          </p>
        </div>

        <div className="privacy-sections">
          <div className="privacy-section">
            <div className="section-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div className="section-content">
              <h2>1. Information We Collect</h2>
              <p>When you use Freelancify, we may collect the following information:</p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Your name, email address, and any details you provide when creating an account, posting a job, or offering services.
                </li>
                <li>
                  <strong>Payment Information:</strong> Basic payment-related details for processing transactions securely.
                </li>
              </ul>
            </div>
          </div>

          <div className="privacy-section">
            <div className="section-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <div className="section-content">
              <h2>2. Your Data is Secure</h2>
              <p>
                We take strong measures to protect your personal information from unauthorized access, loss, or misuse. We use secure systems to ensure that your data is handled safely at all times.
              </p>
              <div className="security-features">
                <div className="security-feature">
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h3>Encryption</h3>
                    <p>All your personal data is encrypted using industry-standard protocols.</p>
                  </div>
                </div>
                <div className="security-feature">
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h3>Regular Monitoring</h3>
                    <p>We continuously monitor our systems to prevent security breaches.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="privacy-section">
            <div className="section-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>
            </div>
            <div className="section-content">
              <h2>3. Safe Transactions</h2>
              <p>
                All transactions on Freelancify are secure. Whether you're hiring a freelancer or offering services, your payment details are handled with care to ensure the highest level of security.
              </p>
            </div>
          </div>

          <div className="privacy-section">
            <div className="section-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div className="section-content">
              <h2>4. Secure Communications</h2>
              <p>
                You can communicate safely with freelancers and clients through our secure messaging system. This ensures that your conversations and files are protected.
              </p>
            </div>
          </div>

          <div className="privacy-section">
            <div className="section-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="section-content">
              <h2>5. Sharing Your Information</h2>
              <p>
                We respect your privacy and do <strong>NOT</strong> sell or rent your personal information to third parties. We may share your data with trusted service providers who help us operate the platform, such as payment processors, under strict security conditions.
              </p>
            </div>
          </div>

          <div className="privacy-section">
            <div className="section-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
            <div className="section-content">
              <h2>6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle your information, please reach out to us at:
              </p>
              <div className="contact-info">
                <p>
                  <strong>Email:</strong> freelancify0@gmail.com
                </p>
                <p>
                  <strong>Address:</strong> Irla, N. R, G Marg, opposite Cooper Hospital, Navpada, Suvarna Nagar, Vile Parle, Mumbai, Maharashtra 400056
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="privacy-footer">
          <div className="last-updated">
            <p>Last Updated: April 1, 2025</p>
          </div>
          <div className="privacy-actions">
            <button 
              className="print-button" 
              onClick={() => {
                // Create a new window with just the content
                const printWindow = window.open('', '_blank');
                
                // Add the HTML content to the new window
                printWindow.document.write(`
                  <html>
                    <head>
                      <title>Freelancify Privacy Policy</title>
                      <style>
                        body {
                          font-family: Arial, sans-serif;
                          line-height: 1.6;
                          color: #333;
                          margin: 30px;
                        }
                        h1 {
                          font-size: 24px;
                          margin-bottom: 20px;
                        }
                        h2 {
                          font-size: 18px;
                          margin-top: 30px;
                          margin-bottom: 15px;
                        }
                        p, li {
                          font-size: 14px;
                          margin-bottom: 10px;
                        }
                        ul {
                          margin-left: 20px;
                        }
                        .section {
                          margin-bottom: 30px;
                        }
                        .footer {
                          margin-top: 40px;
                          font-size: 12px;
                          color: #666;
                        }
                      </style>
                    </head>
                    <body>
                      <h1>Freelancify Privacy Policy</h1>
                      <p>At Freelancify, your privacy is important to us. We are committed to protecting your personal information and ensuring a safe and secure experience on our platform. This Privacy Policy explains how we collect and protect your data when you use Freelancify.</p>
                      
                      <div class="section">
                        <h2>1. Information We Collect</h2>
                        <p>When you use Freelancify, we may collect the following information:</p>
                        <ul>
                          <li><strong>Personal Information:</strong> Your name, email address, and any details you provide when creating an account, posting a job, or offering services.</li>
                          <li><strong>Payment Information:</strong> Basic payment-related details for processing transactions securely.</li>
                        </ul>
                      </div>
                      
                      <div class="section">
                        <h2>2. Your Data is Secure</h2>
                        <p>We take strong measures to protect your personal information from unauthorized access, loss, or misuse. We use secure systems to ensure that your data is handled safely at all times.</p>
                      </div>
                      
                      <div class="section">
                        <h2>3. Safe Transactions</h2>
                        <p>All transactions on Freelancify are secure. Whether you're hiring a freelancer or offering services, your payment details are handled with care to ensure the highest level of security.</p>
                      </div>
                      
                      <div class="section">
                        <h2>4. Secure Communications</h2>
                        <p>You can communicate safely with freelancers and clients through our secure messaging system. This ensures that your conversations and files are protected.</p>
                      </div>
                      
                      <div class="section">
                        <h2>5. Sharing Your Information</h2>
                        <p>We respect your privacy and do <strong>NOT</strong> sell or rent your personal information to third parties. We may share your data with trusted service providers who help us operate the platform, such as payment processors, under strict security conditions.</p>
                      </div>
                      
                      <div class="section">
                        <h2>6. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy or how we handle your information, please reach out to us at:</p>
                        <p><strong>Email:</strong> freelancify0@gmail.com</p>
                        <p><strong>Address:</strong> Irla, N. R, G Marg, opposite Cooper Hospital, Navpada, Suvarna Nagar, Vile Parle, Mumbai, Maharashtra 400056</p>
                      </div>
                      
                      <div class="footer">
                        <p>Last Updated: April 1, 2025</p>
                      </div>
                    </body>
                  </html>
                `);
                
                // Focus on the new window
                printWindow.document.close();
                printWindow.focus();
                
                // Print after a slight delay to ensure content is loaded
                setTimeout(() => {
                  printWindow.print();
                  // Close the window after printing (optional)
                  // printWindow.close();
                }, 500);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              Print Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
