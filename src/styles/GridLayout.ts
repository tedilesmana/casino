import styled from "styled-components";

interface GridProps {
  desktopColumns?: number; // Number of columns for desktop
  tabletColumns?: number; // Number of columns for tablet
  mobileColumns?: number; // Number of columns for mobile
  gap?: string; // Gap between items
  horizontalGap?: string; // Horizontal gap between items
  verticalGap?: string; // Vertical gap between items
}

export const GridSystem = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.desktopColumns || 4}, 
    1fr
  ); // Default to 4 columns for desktop

  /* Gap can be specified in a single prop, or separately */
  gap: ${(props) => props.gap || "16px"}; // Default gap
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(
      ${(props) => props.tabletColumns || 3}, 
      1fr
    ); // Default to 3 columns for tablet
    gap: ${(props) => props.gap || "16px"}; // Apply same gap for tablet
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(
      ${(props) => props.mobileColumns || 1}, 
      1fr
    ); // Default to 1 column for mobile
    gap: ${(props) => props.gap || "16px"}; // Apply same gap for mobile
  }

  /* If horizontal and vertical gaps are provided, override the default */
  gap: ${(props) => (props.horizontalGap && props.verticalGap) ? `${props.verticalGap} ${props.horizontalGap}` : props.gap || "16px"};
`;
