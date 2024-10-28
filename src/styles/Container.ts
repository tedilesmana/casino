// src/styles/Container.tsx
import styled from "styled-components";

interface ContainerProps {
  desktopMarginVertical?: string; // Vertical margin for desktop
  desktopMarginHorizontal?: string; // Horizontal margin for desktop
  tabletMarginVertical?: string; // Vertical margin for tablet
  tabletMarginHorizontal?: string; // Horizontal margin for tablet
  mobileMarginVertical?: string; // Vertical margin for mobile
  mobileMarginHorizontal?: string; // Horizontal margin for mobile
  desktopPaddingVertical?: string; // Vertical padding for desktop
  desktopPaddingHorizontal?: string; // Horizontal padding for desktop
  tabletPaddingVertical?: string; // Vertical padding for tablet
  tabletPaddingHorizontal?: string; // Horizontal padding for tablet
  mobilePaddingVertical?: string; // Vertical padding for mobile
  mobilePaddingHorizontal?: string; // Horizontal padding for mobile
  children: React.ReactNode; // Children elements
}

export const ContentWrapper = styled.div<ContainerProps>`
  /* Default styles for the wrapper itself */
  margin: ${(props) => props.desktopMarginVertical || "0"}
    ${(props) => props.desktopMarginHorizontal || "0"};
  padding: ${(props) => props.desktopPaddingVertical || "0"}
    ${(props) => props.desktopPaddingHorizontal || "0"};

  @media (max-width: 768px) {
    /* Tablet */
    margin: ${(props) => props.tabletMarginVertical || "0"}
      ${(props) => props.tabletMarginHorizontal || "0"};
    padding: ${(props) => props.tabletPaddingVertical || "0"}
      ${(props) => props.tabletPaddingHorizontal || "0"};
  }

  @media (max-width: 480px) {
    /* Mobile */
    margin: ${(props) => props.mobileMarginVertical || "0"}
      ${(props) => props.mobileMarginHorizontal || "0"};
    padding: ${(props) => props.mobilePaddingVertical || "0"}
      ${(props) => props.mobilePaddingHorizontal || "0"};
  }

  /* Styles for direct children */
  & > * {
    margin: inherit; /* Inherit margin from parent */
    padding: inherit; /* Inherit padding from parent */
  }
`;
