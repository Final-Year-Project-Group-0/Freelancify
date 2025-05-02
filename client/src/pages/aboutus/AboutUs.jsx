import React from 'react';
import { Award, Users, BookOpen, BookMarked, Github, Linkedin, Twitter, Heart, Shield } from 'lucide-react';
import './AboutUs.css';

const AboutUsPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>About <span className="highlight">Freelancify</span></h1>
          <div className="hero-decoration"></div>
          <p className="hero-subtitle">Connecting Talent With Opportunity</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="about-container">
        {/* Mission section with image side by side */}
        <div className="about-main">
          <div className="about-text">
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-text">
              Welcome to <strong>Freelancify</strong> – a modern freelancing platform designed to connect clients 
              with talented freelancers. Whether you're posting a job tailored to your specific 
              requirements and budget or showcasing your own gig as a freelancer, Freelancify makes 
              it simple and efficient.
            </p>
            <p className="mission-text">
              Our user-friendly interface and secure Stripe payment integration ensure a smooth, 
              safe experience for everyone. With built-in communication tools, clients and freelancers 
              can collaborate seamlessly in real time. We are committed to fostering creativity, productivity, 
              and success within the freelance community.
            </p>
          </div>
          
          <div className="about-image">
            <img src="./img/GroupNo13.jpeg" alt="Team with mentor" className="mentor-photo" />
            <div className="image-caption">Our team with mentor, Mr. Janardan Kulkarni</div>
          </div>
        </div>

        {/* Team Section - All members in a single row */}
        <div className="team-section">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-circle">MK</div>
              </div>
              <h3 className="member-name">Mayuresh Kajale</h3>
              <p className="member-id">A019 – 57480220027</p>
            </div>
            
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-circle">MM</div>
              </div>
              <h3 className="member-name">Mohit Madke</h3>
              <p className="member-id">A024 – 5740220119</p>
            </div>
            
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-circle">AM</div>
              </div>
              <h3 className="member-name">Anish Mahindrakar</h3>
              <p className="member-id">A025 – 57480220002</p>
            </div>
          </div>
        </div>

        {/* Acknowledgment */}
        <div className="acknowledgment">
          <div className="acknowledgment-content">
            <div className="acknowledgment-icon">
              <BookMarked size={40} />
            </div>
            <h2 className="section-title">Special Thanks</h2>
            <p className="acknowledgment-text">
              We extend our heartfelt gratitude to <strong>Mr. Janardan Kulkarni</strong>, 
              Head of the Computer Engineering Department, for his invaluable guidance and 
              mentorship throughout the development of this project.
            </p>
            <p className="institution-text">
              This project was developed as part of our academic curriculum at 
              <strong> Shri Vile Parle Kelavani Mandal's Shri Bhagubhai Mafatlal Polytechnic & College of Engineering.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;