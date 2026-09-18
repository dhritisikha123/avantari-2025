import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

const darkTheme = css`
  background-color: #000000;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding: 22px 60px;

  @media only screen and (min-width: 1440px) {
    padding: 22px 100px;
  }

  @media only screen and (max-width: 1023px) {
    padding: 20px 40px;
  }

  @media only screen and (max-width: 768px) {
    padding: 18px 20px;
  }
`

const lightTheme = css`
  background-color: #ffffff;
  height: 63px;
  padding: 0 30px;

  @media only screen and (max-width: 767px) {
    padding: 0 20px;
  }
`

/* Homepage-only: dark (black bg / white text) on mobile, light (white bg /
   black text) from tablet up — inverse of every other page, which stays dark
   at every width. Stays a single row at every width (per Figma). */
const responsiveTheme = css`
  background-color: #000000;
  height: 72px;
  padding: 0 20px;

  @media only screen and (min-width: 768px) {
    background-color: #ffffff;
    height: 63px;
    padding: 0 30px;
  }
`

const FooterBar = styled.footer`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ $variant }) => {
    if ($variant === "light") return lightTheme
    if ($variant === "responsive") return responsiveTheme
    return darkTheme
  }}
`

const FooterLink = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  text-decoration: none;

  ${({ $variant, $muted }) => {
    if ($variant === "light") {
      return css`
        color: ${$muted ? "#4d4d4d" : "#000000"};

        &:hover {
          color: #000000;
        }
      `
    }

    if ($variant === "responsive") {
      return css`
        color: rgba(255, 255, 255, 0.72);

        &:hover {
          color: #ffffff;
        }

        @media only screen and (min-width: 768px) {
          color: ${$muted ? "#4d4d4d" : "#000000"};

          &:hover {
            color: #000000;
          }
        }
      `
    }

    return css`
      color: #999999;

      &:hover {
        color: #ffffff;
      }
    `
  }}
`

const BrandName = styled.span`
  font-family: "Outfit", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`

// variant: "dark" (default, black bg / white-grey text — every page except
// the homepage, at every width), "light" (white bg / black text), or
// "responsive" (homepage only — dark on mobile, light from tablet up).
const PageFooter = ({ variant = "dark" }) => (
  <FooterBar $variant={variant}>
    <FooterLink to="/" $variant={variant} className="hover-target">
      Website built by <BrandName>avantari</BrandName>
    </FooterLink>
    <FooterLink
      to="/privacy-policy"
      $variant={variant}
      $muted
      className="hover-target"
    >
      Privacy policy
    </FooterLink>
  </FooterBar>
)

export default PageFooter