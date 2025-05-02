// Update to Featured.jsx - Enhanced search component
import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  // Improved handleSubmit to better handle search
  const handleSubmit = () => {
    if (!input.trim()) return;
    
    // Check if the input matches a category name or keyword
    const categoryKeywords = {
      "design": ["design", "graphic", "designer"],
      "mobile-dev": ["mobile", "app", "android", "ios", "development"],
      "web": ["web", "website", "development", "frontend", "backend"],
      "animation": ["animation", "animate", "motion", "3d"],
      "music": ["music", "audio", "sound", "recording"],
      "writing": ["writing", "translation", "content", "copywriting"],
      "video": ["video", "animation", "editing", "production"],
      "digital-marketing": ["digital", "marketing", "ads", "advertising"],
      "seo": ["seo", "search engine", "optimization"]
    };
    
    // Check if input directly matches a category
    const inputLower = input.toLowerCase();
    let exactCategoryMatch = null;
    
    for (const [category, keywords] of Object.entries(categoryKeywords)) {
      if (category.toLowerCase() === inputLower) {
        exactCategoryMatch = category;
        break;
      }
      
      // Check if any keyword is an exact match
      for (const keyword of keywords) {
        if (keyword.toLowerCase() === inputLower) {
          exactCategoryMatch = category;
          break;
        }
      }
      
      if (exactCategoryMatch) break;
    }
    
    if (exactCategoryMatch) {
      // If exact match, navigate to category page
      navigate(`/gigs?cat=${exactCategoryMatch}`);
    } else {
      // Otherwise treat as search term
      navigate(`/gigs?search=${encodeURIComponent(input)}`);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>freelance</span> services
            <br /> for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder='Try "building mobile app"'
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;