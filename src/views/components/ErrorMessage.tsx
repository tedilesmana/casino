// src/components/ErrorMessage.tsx
import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full height for centering */
  text-align: center;
  background-color: #ffebee; /* Light red background for errors */
  border: 1px solid #f44336; /* Red border */
  border-radius: 8px;
  padding: 2rem;
  margin: 1rem; /* Margin for mobile responsiveness */

  @media (max-width: 768px) {
    padding: 1rem; /* Less padding on smaller screens */
  }
`;

const ErrorText = styled.p`
  color: #f44336; /* Red color for error text */
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Adjust font size for tablet and mobile */
  }
`;

const RetryButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #ffffff; /* White text */
  background-color: #f44336; /* Red background */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d32f2f; /* Darker red on hover */
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Adjust font size for tablet and mobile */
  }
`;

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void; // Optional retry function
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <ErrorContainer>
      <ErrorText>Error: {message}</ErrorText>
      {onRetry && <RetryButton onClick={onRetry}>Retry</RetryButton>}
    </ErrorContainer>
  );
};

export default ErrorMessage;
