import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Messages.scss";
import moment from "moment";

// Helper function to fetch the user details
const fetchUser = (userId) => {
  return newRequest.get(`/users/${userId}`).then((res) => res.data);
};

const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Fetch conversations
  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest.get(`/conversations`).then((res) => {
        return res.data;
      }),
  });

  const handleRowClick = (conversationId) => {
    // Navigate to the individual message page
    navigate(`/message/${conversationId}`);
  };

  // Render loading state
  if (isLoading) {
    return (
      <div className="messages">
        <div className="container">
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading your conversations...</p>
          </div>
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="messages">
        <div className="container">
          <div className="error">
            <p>
              {error.response?.data || 
                "There was an error loading your messages. Please try again later."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Empty state
  if (data && data.length === 0) {
    return (
      <div className="messages">
        <div className="container">
          <div className="title">
            <h1>Messages</h1>
            <div className="tabs">
              <button 
                className="tab-btn active"
                onClick={() => queryClient.invalidateQueries(["conversations"])}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="empty-state">
            <div className="empty-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z" fill="currentColor"/>
                <path d="M12 11C12.55 11 13 10.55 13 10C13 9.45 12.55 9 12 9C11.45 9 11 9.45 11 10C11 10.55 11.45 11 12 11ZM12 7C12.55 7 13 6.55 13 6C13 5.45 12.55 5 12 5C11.45 5 11 5.45 11 6C11 6.55 11.45 7 12 7ZM12 15C12.55 15 13 14.55 13 14C13 13.45 12.55 13 12 13C11.45 13 11 13.45 11 14C11 14.55 11.45 15 12 15Z" fill="currentColor"/>
              </svg>
            </div>
            <h3>No Messages Yet</h3>
            <p>When you connect with {currentUser.isSeller ? "buyers" : "sellers"}, your conversations will appear here.</p>
            
            {/* Show Browse Services button only to clients (non-sellers) */}
            {!currentUser.isSeller && (
              <Link to="/gigs" className="browse-btn">
                Browse Services
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
          <div className="tabs">
            <button 
              className="tab-btn active"
              onClick={() => queryClient.invalidateQueries(["conversations"])}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
        
        <h2 className="section-title">Your Conversations</h2>
        
        <div className="messages-table">
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th style={{ paddingLeft: '220px' }}>Last Message</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((c) => (
                <tr
                  key={c.id}
                  className={
                    ((currentUser.isSeller && !c.readBySeller) ||
                      (!currentUser.isSeller && !c.readByBuyer)) 
                      ? "unread" : ""
                  }
                >
                  <td>
                    <UserDisplay userId={currentUser.isSeller ? c.buyerId : c.sellerId} />
                  </td>
                  <td>
                    {c?.lastMessage ? (
                      <div className="message-content">
                        <span className="message-text">
                          {c.lastMessage.length > 50 
                            ? `${c.lastMessage.substring(0, 50)}...` 
                            : c.lastMessage}
                        </span>
                      </div>
                    ) : (
                      <span className="no-messages">No messages yet</span>
                    )}
                  </td>
                  <td>
                    <div className="time-info">
                      <span className="message-date">{moment(c.updatedAt).format('MMM D, YYYY')}</span>
                      <span className="message-time">{moment(c.updatedAt).format('h:mm A')}</span>
                    </div>
                  </td>
                  <td>
                    <button 
                      className="contact-btn"
                      onClick={() => handleRowClick(c.id)}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM18 14H6V12H18V14ZM18 11H6V9H18V11ZM18 8H6V6H18V8Z" fill="currentColor"/>
                      </svg>
                      <span>Open Chat</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Enhanced component to display the username for a userId
const UserDisplay = ({ userId }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUser(userId),
  });

  if (isLoading) {
    return (
      <div className="client-info loading">
        <div className="client-avatar skeleton"></div>
        <div className="client-name skeleton"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="client-info error">
        <span>User unavailable</span>
      </div>
    );
  }

  return (
    <div className="client-info">
      <img 
        src={data.img || "/img/noavatar.jpg"} 
        alt={data.username}
        className="client-avatar"
        onError={(e) => {
          e.target.src = "/img/noavatar.jpg";
        }}
      />
      <div className="client-details">
        <span className="client-name">{data.username}</span>
        <span className="client-type">{data.isSeller ? "Seller" : "Buyer"}</span>
      </div>
    </div>
  );
};

export default Messages;