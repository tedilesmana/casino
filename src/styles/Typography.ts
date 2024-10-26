import styled from "styled-components";

export const Title = styled.h3`
  font-size: 1.2rem; /* Default font size */
  color: #373737;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 1rem; /* Smaller font size on mobile */
  }
`;

export const Tag = styled.span`
  background-color: #8dc63f;
  color: #fff;
  padding: 5px;
  font-size: 0.9rem; /* Default font size */
  border-radius: 4px;

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Smaller font size on mobile */
  }
`;
