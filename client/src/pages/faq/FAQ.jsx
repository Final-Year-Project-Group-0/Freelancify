import React, { useState, useEffect } from "react";
import "./FAQ.css";
import { Link, useNavigate } from "react-router-dom";

const FAQ = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [activeCategory, setActiveCategory] = useState("general");
  const [expandedItems, setExpandedItems] = useState({});

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

  const toggleItem = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = [
    { id: "general", label: "General", icon: "info-circle" },
    { id: "freelancing", label: "Freelancing", icon: "briefcase" },
    { id: "jobs", label: "Jobs & Gigs", icon: "clipboard-list" },
    { id: "payments", label: "Payments", icon: "credit-card" },
    { id: "accounts", label: "Accounts", icon: "user-circle" }
  ];

  const faqData = {
    general: [
      {
        id: "what-is-freelancify",
        question: "What is Freelancify?",
        answer: "Freelancify is a platform connecting freelancers with clients looking for various services. Our platform makes it easy to find work, post jobs, and collaborate on projects across a wide range of categories."
      },
      {
        id: "how-get-started",
        question: "How do I get started on Freelancify?",
        answer: "Sign up for a free account, complete your profile, and specify whether you're joining as a freelancer (to offer services) or as a client (to hire talent). Freelancers can create gigs showcasing their skills, while clients can post jobs to find the perfect match for their projects."
      },
      {
        id: "support",
        question: "How can I get support?",
        answer: "If you need assistance, you can reach our support team through the contact form on our website or by emailing support@freelancify.com. We aim to respond to all inquiries within 24 hours."
      }
    ],
    freelancing: [
      {
        id: "what-is-freelancer",
        question: "What is a Freelancer?",
        answer: "A freelancer is an individual who offers their services or skills to clients (buyers) for specific tasks or projects. Freelancers on Freelancify can create \"gigs,\" which are job offerings showcasing their skills. Freelancers are responsible for completing the tasks they agree to, maintaining communication with clients, and delivering high-quality work."
      },
      {
        id: "become-freelancer",
        question: "How do I become a freelancer on Freelancify?",
        answer: "To become a freelancer, sign up for an account, toggle the 'Become a Seller' option in your profile, complete your seller profile with your skills, experience, and portfolio, then create gigs that showcase your services. Make sure to highlight your unique skills and competitive pricing to attract potential clients."
      },
      {
        id: "create-gig",
        question: "How do I create an effective gig?",
        answer: "An effective gig should have a clear, descriptive title, detailed description of your services, realistic delivery times, transparent pricing, and high-quality images or portfolio examples. Focus on the specific benefits clients will receive and what makes your service unique compared to competitors."
      }
    ],
    jobs: [
      {
        id: "what-are-gigs",
        question: "What are Gigs?",
        answer: "A gig is a service or task that a freelancer offers on Freelancify. It can range from web design and writing to digital marketing or graphic design. When creating a gig, freelancers must ensure that the gig is appropriate and follows our guidelines."
      },
      {
        id: "what-are-jobs",
        question: "What are Jobs?",
        answer: "Jobs are tasks or projects that buyers (clients) post on Freelancify. When a buyer posts a job, freelancers can bid on it by sending proposals outlining their skills, experience, and price. Buyers can review these proposals and choose a freelancer based on the best fit for the job."
      },
      {
        id: "post-job",
        question: "How do I post a job?",
        answer: "To post a job, go to the 'Post a Job' page, fill out the job details including title, description, category, budget, and deadline. Be as specific as possible about your requirements to attract the most qualified freelancers. Once posted, you'll start receiving bids from interested freelancers."
      },
      {
        id: "bid-job",
        question: "How do I bid on a job?",
        answer: "Browse the jobs section to find projects matching your skills. When you find a suitable job, click 'Submit Proposal' and provide details about how you'll approach the project, your timeline, and your price. Make your bid stand out by being specific about your relevant experience and how you'll meet the client's needs."
      }
    ],
    payments: [
      {
        id: "payment-methods",
        question: "What payment methods are accepted?",
        answer: "Freelancify currently accepts major credit cards, debit cards, and PayPal. All payments are processed securely through our platform to protect both clients and freelancers."
      },
      {
        id: "payment-release",
        question: "When do freelancers receive payment?",
        answer: "Payments are held in escrow until the client approves the completed work. Once the work is approved, the payment is released to the freelancer. This system protects both parties by ensuring work is completed satisfactorily before payment is released."
      },
      {
        id: "refund-policy",
        question: "What is the refund policy?",
        answer: "If a project is not completed as agreed, clients may request a refund. Each case is reviewed individually based on the specific circumstances, communication history, and work delivered. We encourage clients and freelancers to communicate openly to resolve issues before requesting refunds."
      }
    ],
    accounts: [
      {
        id: "account-types",
        question: "What are the different account types?",
        answer: "Freelancify offers two primary account types: Client accounts for those looking to hire freelancers, and Freelancer accounts for those offering services. You can switch between these roles as needed, allowing you to both hire and work as a freelancer."
      },
      {
        id: "profile-optimization",
        question: "How do I optimize my profile?",
        answer: "Complete all sections of your profile, including a professional photo, detailed bio highlighting your expertise, and examples of your previous work. Be specific about your skills and experience. For freelancers, regularly update your portfolio with recent projects to showcase your latest work."
      },
      {
        id: "account-security",
        question: "How do I keep my account secure?",
        answer: "Use a strong, unique password and enable two-factor authentication if available. Never share your login credentials, be cautious of phishing attempts, and regularly check your account for any unauthorized activity. Always log out when using shared computers."
      }
    ]
  };

  return (
    <div className={`faq-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="faq-wrapper">
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p className="subtitle">
            Find answers to common questions about using Freelancify
          </p>
        </div>

        <div className="faq-content">
          <div className="faq-categories">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className={`icon icon-${category.icon}`}>
                  {category.icon === "info-circle" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                  )}
                  {category.icon === "briefcase" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  )}
                  {category.icon === "clipboard-list" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                      <line x1="9" y1="12" x2="15" y2="12"></line>
                      <line x1="9" y1="16" x2="15" y2="16"></line>
                      <line x1="9" y1="8" x2="15" y2="8"></line>
                    </svg>
                  )}
                  {category.icon === "credit-card" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                      <line x1="1" y1="10" x2="23" y2="10"></line>
                    </svg>
                  )}
                  {category.icon === "user-circle" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  )}
                </span>
                <span className="category-label">{category.label}</span>
              </button>
            ))}
          </div>

          <div className="faq-items">
            {faqData[activeCategory]?.map((item) => (
              <div
                key={item.id}
                className={`faq-item ${expandedItems[item.id] ? "expanded" : ""}`}
                onClick={() => toggleItem(item.id)}
              >
                <div className="faq-question">
                  <h3>{item.question}</h3>
                  <span className="toggle-icon">
                    {expandedItems[item.id] ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="12" x2="6" y2="12"></line>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    )}
                  </span>
                </div>
                {expandedItems[item.id] && (
                  <div className="faq-answer">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="faq-footer">
          <div className="contact-support">
            <div className="support-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
            <div className="support-text">
              <h3>Still have questions?</h3>
              <p>If you couldn't find the answer to your question, our support team is here to help.</p>
              <Link to="/contact" className="link">
            <span  className="support-button text"> Contact Support</span>
          </Link>
            </div>
          </div>
        </div>

        <div className="glossary-section">
          <h2 className="glossary-title">
            <span className="glossary-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </span>
            Glossary of Terms
          </h2>
          <div className="glossary-grid">
            <div className="glossary-item">
              <h4>Freelancing</h4>
              <p>Working independently, offering services on a project or task basis, rather than being employed full-time by a company.</p>
            </div>
            <div className="glossary-item">
              <h4>Gigs</h4>
              <p>Services offered by freelancers, showcasing their skills and expertise in specific areas.</p>
            </div>
            <div className="glossary-item">
              <h4>Jobs</h4>
              <p>Projects posted by clients with specific requirements for freelancers to bid on.</p>
            </div>
            <div className="glossary-item">
              <h4>Proposals</h4>
              <p>Bids submitted by freelancers for specific jobs, including pricing, timeline, and approach.</p>
            </div>
            <div className="glossary-item">
              <h4>Orders</h4>
              <p>Agreements between clients and freelancers once a proposal is accepted, outlining the work to be done.</p>
            </div>
            <div className="glossary-item">
              <h4>Reviews</h4>
              <p>Feedback from clients and freelancers after completing a project, contributing to reputation on the platform.</p>
            </div>
            <div className="glossary-item">
              <h4>Escrow</h4>
              <p>A payment holding system ensuring funds are secure until work is completed satisfactorily.</p>
            </div>
            <div className="glossary-item">
              <h4>Delivery Time</h4>
              <p>The agreed-upon timeframe for completing and delivering a project.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;