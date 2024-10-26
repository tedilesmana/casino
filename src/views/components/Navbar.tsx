import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  flex: 1;
  font-size: 1.4rem;
  transition: color 0.3s, background-color 0.3s;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : "transparent"};
  padding: 1.5rem 0;
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    flex: none;
  }
`;

const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 1.5rem 1rem;

  div {
    width: 25px;
    height: 3px;
    background: ${({ theme }) => theme.colors.white};
    margin: 3px 0;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: ${({ theme }) => theme.colors.secondary};
  z-index: 999;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const DesktopMenu = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Navbar: React.FC<{ onCategorySelect: (category: string) => void }> = ({
  onCategorySelect,
}) => {
  const [activeLink, setActiveLink] = useState<string>("#top");
  const [isOpen, setIsOpen] = useState<boolean>(false); // State to manage burger menu

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsOpen(false); // Close the menu after selecting a link
    onCategorySelect(link.replace("#", "")); // Call the handler to set the selected category
  };

  return (
    <NavbarContainer>
      <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
        <FaBars size={24} color="#FFFFFF" />
      </BurgerMenu>
      <DesktopMenu>
        <NavLink
          to="#top"
          isActive={activeLink === "#top"}
          onClick={() => handleLinkClick("#top")}
        >
          Top Games
        </NavLink>
        <NavLink
          to="#new"
          isActive={activeLink === "#new"}
          onClick={() => handleLinkClick("#new")}
        >
          New Games
        </NavLink>
        <NavLink
          to="#slots"
          isActive={activeLink === "#slots"}
          onClick={() => handleLinkClick("#slots")}
        >
          Slots
        </NavLink>
        <NavLink
          to="#jackpots"
          isActive={activeLink === "#jackpots"}
          onClick={() => handleLinkClick("#jackpots")}
        >
          Jackpots
        </NavLink>
        <NavLink
          to="#live"
          isActive={activeLink === "#live"}
          onClick={() => handleLinkClick("#live")}
        >
          Live
        </NavLink>
        <NavLink
          to="#blackjack"
          isActive={activeLink === "#blackjack"}
          onClick={() => handleLinkClick("#blackjack")}
        >
          Blackjack
        </NavLink>
        <NavLink
          to="#roulette"
          isActive={activeLink === "#roulette"}
          onClick={() => handleLinkClick("#roulette")}
        >
          Roulette
        </NavLink>
        <NavLink
          to="#table"
          isActive={activeLink === "#table"}
          onClick={() => handleLinkClick("#table")}
        >
          Table
        </NavLink>
        <NavLink
          to="#poker"
          isActive={activeLink === "#poker"}
          onClick={() => handleLinkClick("#poker")}
        >
          Poker
        </NavLink>
        <NavLink
          to="#other"
          isActive={activeLink === "#other"}
          onClick={() => handleLinkClick("#other")}
        >
          Other
        </NavLink>
      </DesktopMenu>
      <DropdownMenu isOpen={isOpen}>
        <NavLink
          to="#top"
          isActive={activeLink === "#top"}
          onClick={() => handleLinkClick("#top")}
        >
          Top Games
        </NavLink>
        <NavLink
          to="#new"
          isActive={activeLink === "#new"}
          onClick={() => handleLinkClick("#new")}
        >
          New Games
        </NavLink>
        <NavLink
          to="#slots"
          isActive={activeLink === "#slots"}
          onClick={() => handleLinkClick("#slots")}
        >
          Slots
        </NavLink>
        <NavLink
          to="#jackpots"
          isActive={activeLink === "#jackpots"}
          onClick={() => handleLinkClick("#jackpots")}
        >
          Jackpots
        </NavLink>
        <NavLink
          to="#live"
          isActive={activeLink === "#live"}
          onClick={() => handleLinkClick("#live")}
        >
          Live
        </NavLink>
        <NavLink
          to="#blackjack"
          isActive={activeLink === "#blackjack"}
          onClick={() => handleLinkClick("#blackjack")}
        >
          Blackjack
        </NavLink>
        <NavLink
          to="#roulette"
          isActive={activeLink === "#roulette"}
          onClick={() => handleLinkClick("#roulette")}
        >
          Roulette
        </NavLink>
        <NavLink
          to="#table"
          isActive={activeLink === "#table"}
          onClick={() => handleLinkClick("#table")}
        >
          Table
        </NavLink>
        <NavLink
          to="#poker"
          isActive={activeLink === "#poker"}
          onClick={() => handleLinkClick("#poker")}
        >
          Poker
        </NavLink>
        <NavLink
          to="#other"
          isActive={activeLink === "#other"}
          onClick={() => handleLinkClick("#other")}
        >
          Other
        </NavLink>
      </DropdownMenu>
    </NavbarContainer>
  );
};

export default Navbar;
