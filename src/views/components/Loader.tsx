// src/components/Loader.tsx
import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height for centering */
  text-align: center;
`;

const LoaderIcon = styled.div`
  border: 8px solid ${({ theme }) => theme.colors.secondary}; /* Border color */
  border-top: 8px solid ${({ theme }) => theme.colors.primary}; /* Top color */
  border-radius: 50%;
  width: 60px; /* Size of the loader */
  height: 60px; /* Size of the loader */
  animation: ${spin} 1s linear infinite;
`;

const LoaderText = styled.p`
  margin-top: 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Adjust font size for tablet and mobile */
  }
`;

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <LoaderIcon />
      <LoaderText>Loading...</LoaderText>
    </LoaderContainer>
  );
};

export default Loader;
