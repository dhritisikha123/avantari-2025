import React, { useState, useEffect } from "react"
import styled from "styled-components"
import avantariLogo from "../images/newWeb/avantariLogo.svg"
import "./header.css"
import { slide as Menu } from "react-burger-menu"
import close from "../images/newWeb/close.png"
import { Link } from "gatsby"

// edeeee

const TopLayout = styled.div`
  background: ${props => (props.isScrolled ? "#ffffff" : "#EDEEEE")};
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 64px;
  border: 0.8px solid #000000;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  transform: ${props =>
    props.onScroll ? "translateY(-100%)" : "translateY(0)"};
  margin: 0;
  top: 0;
  left: 0;
  cursor: none !important;
  box-sizing: border-box;

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    height: 70px;
  }

  @media only screen and (min-width: 1024px) {
    height: 88px;
  }

  @media only screen and (max-width: 567px) {
  border: none;
      border-bottom: 0.8px solid #000000;
      widht: 99.9%

  }
`

const PageContainer = styled.div`
  display: flex; // Changed from grid to flexbox
  justify-content: space-between; // Align logo to the left and burger to the right
  align-items: center; // Vertically center the items
  padding: 0 0 0 40px; // Left inset for the logo; right side is handled by RightSection
  height: 100%;

  @media only screen and (max-width: 567px) {
    padding-left: 20px;
  }

  @media only screen and (min-width: 1024px) {
    padding-left: 32px;
  }
`

const Greet2 = styled.div`
  display: flex;
  align-items: center;
`

const HeaderMenu = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px; /* Initial font size */
  line-height: 27px; /* Adjusted line-height for compact text */
  color: #4d4d4d;
  text-decoration: none;

  &[aria-current="page"] {
    color: #000000;
    text-decoration: underline;
    text-underline-offset: 6px;
  }

  &:focus-visible {
    outline: 2px solid #000000;
    outline-offset: 4px;
  }

  @media only screen and (max-width: 567px) {
    font-size: 14px; /* Further reduce font size for mobile */
    line-height: 23px; /* Adjusted line-height for compact text */
  }
`

// filter: ${props =>
//   props.isScrolled
//     ? "invert(47%) sepia(87%) saturate(439%) hue-rotate(55deg) brightness(92%) contrast(97%)"
//     : "none"};

const Logo = styled.img`
  @media only screen and (max-width: 567px) {
    width: 70px;
  }
  z-index: 999;
  cursor: pointer;
  display: block;
`

const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  line-height: 0;

  &:focus-visible {
    outline: 2px solid #000000;
    outline-offset: 4px;
  }
`

const HamburgerWrapper = styled.div`
  @media only screen and (min-width: 568px) {
    display: none;
  }
`

/* Right-aligned cluster: desktop nav + hamburger (mobile) share this edge */
const RightSection = styled.div`
  display: flex;
  align-items: center;
  padding-right: 40px;

  @media only screen and (max-width: 567px) {
    padding-right: 22px;
  }

  @media only screen and (min-width: 1024px) {
    padding-right: 32px;
  }
`

/* Desktop / tablet inline nav — hidden below the mobile-portrait breakpoint */
const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 48px;

  @media only screen and (max-width: 567px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: ${({ $active }) => ($active ? "#000000" : "#4d4d4d")};
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;

  &:hover {
    color: #000000;
  }

  /* Active section: 1px rule directly under the label, per Figma */
  ${({ $active }) =>
    $active &&
    `
    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -2px;
      height: 1px;
      background-color: #000000;
    }
  `}

  &:focus-visible {
    outline: 2px solid #000000;
    outline-offset: 4px;
  }
`

/* Mobile burger trigger — a plain button so it isn't subject to
   react-burger-menu's default icon sizing/positioning */
const MenuTrigger = styled.button`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.52px;
  text-transform: uppercase;
  color: #000000;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: none;
`

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [hideOnScroll, setHideOnScroll] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHideOnScroll(true) // Scrolling down, hide the header
      } else {
        setHideOnScroll(false) // Scrolling up, show the header
      }

      setLastScrollY(currentScrollY)
      setIsScrolled(currentScrollY > 0) // Change background based on scroll position
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = "hidden" // Disable scroll on <html>
      document.body.style.overflow = "hidden" // Disable scroll on <body>
    } else {
      document.documentElement.style.overflow = "auto" // Enable scroll on <html>
      document.body.style.overflow = "auto" // Enable scroll on <body>
    }
    return () => {
      document.documentElement.style.overflow = "auto" // Clean up on unmount
      document.body.style.overflow = "auto" // Clean up on unmount
    }
  }, [menuOpen])

  // Function to handle menu state
  const handleStateChange = state => {
    setMenuOpen(state.isOpen)
  }

  // Function to toggle menu
  const closeMenu = () => {
    setMenuOpen(false)
  }

  const desktopNavItems = [
    { label: "Work", path: "/work" },
    { label: "AI Tech", path: "/decs-holobot" },
    { label: "Capabilities", path: "/capabilities" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ]

  // Gatsby serves pages with a trailing slash, so compare without one.
  const normalise = path => path.replace(/\/+$/, "") || "/"
  const isActive = path => normalise(currentPath) === normalise(path)

  return (
    <TopLayout isScrolled={isScrolled} hideOnScroll={hideOnScroll}>
      <PageContainer>
        <LogoLink to="/" onClick={closeMenu} aria-label="avantari — home">
          <Logo
            src={avantariLogo}
            alt="avantari logo"
            isScrolled={isScrolled}
            className="hover-target"
          />
        </LogoLink>

        <RightSection>
          <NavLinks>
            {desktopNavItems.map(item => (
              <NavLink
                key={item.label}
                to={item.path}
                $active={isActive(item.path)}
                aria-current={isActive(item.path) ? "page" : undefined}
                onClick={() => setCurrentPath(item.path)}
                className="hover-target"
              >
                {item.label}
              </NavLink>
            ))}
          </NavLinks>

          <Greet2>
            <HamburgerWrapper>
              <MenuTrigger
                type="button"
                className="hover-target"
                onClick={() => setMenuOpen(true)}
                aria-label="Open Menu"
              >
                Menu
              </MenuTrigger>
              <Menu
                right
                isOpen={menuOpen}
                onStateChange={handleStateChange}
                customCrossIcon={
                  <button
                    className="custom-close-btn"
                    onClick={closeMenu}
                    aria-label="Close Menu"
                  >
                    <img src={close} alt="Close" />
                  </button>
                }
                customBurgerIcon={false}
                disableOverlayClick={false}
              >
                <HeaderMenu
                  id="home"
                  to="/"
                  className="menu-item"
                  onClick={closeMenu}
                  aria-current={isActive("/") ? "page" : undefined}
                >
                  01 <span style={{ paddingLeft: "7px" }}>Home</span>
                </HeaderMenu>

                {desktopNavItems.map((item, index) => (
                  <HeaderMenu
                    key={item.label}
                    id={item.label.toLowerCase()}
                    to={item.path}
                    className="menu-item"
                    onClick={() => {
                      setCurrentPath(item.path)
                      closeMenu()
                    }}
                    aria-current={isActive(item.path) ? "page" : undefined}
                  >
                    {String(index + 2).padStart(2, "0")}
                    <span style={{ paddingLeft: "7px" }}>{item.label}</span>
                  </HeaderMenu>
                ))}
              </Menu>
            </HamburgerWrapper>
          </Greet2>
        </RightSection>
      </PageContainer>
    </TopLayout>
  )
}

export default Header
