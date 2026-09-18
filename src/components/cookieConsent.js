import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {
  getConsent,
  setConsent,
  loadAnalyticsScripts,
  OPEN_SETTINGS_EVENT,
} from "../utils/cookieConsent"

const Banner = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9998;
  background: #0e0e0e;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px 20px;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 32px 120px;
  }
`

const BannerCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media only screen and (min-width: 1024px) {
    width: 700px;
  }
`

const BannerLabel = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.52px;
  color: #c3ff00;
`

const BannerBody = styled.p`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;

  @media only screen and (min-width: 1024px) {
    font-size: 16px;
    line-height: 25px;
  }
`

/* The explicit permission question — must sit immediately above the choices
   so the user is never asked to act without being asked anything. */
const BannerQuestion = styled.p`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  color: #ffffff;

  @media only screen and (min-width: 1024px) {
    font-size: 17px;
    line-height: 26px;
  }
`

const BannerActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`

const buttonBase = `
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  padding: 16px 22px;

  @media only screen and (min-width: 1024px) {
    font-size: 14px;
    padding: 18px 28px;
  }
`

const LimeButton = styled.button`
  ${buttonBase}
  background: #c3ff00;
  color: #000000;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    width: auto;
  }
`

const OutlineButton = styled.button`
  ${buttonBase}
  background: #0e0e0e;
  color: #ffffff;
  border: 1px solid #8c8c8c;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    width: auto;
  }
`

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 52px 20px;
  overflow-y: auto;

  @media only screen and (min-width: 1024px) {
    align-items: center;
    padding: 40px;
  }
`

const Panel = styled.div`
  background: #ffffff;
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;

  @media only screen and (min-width: 1024px) {
    padding: 48px;
  }
`

const ModalHeading = styled.h2`
  margin: 0;
  font-family: "Corben", serif;
  font-weight: 400;
  font-size: 22px;
  color: #000000;

  @media only screen and (min-width: 1024px) {
    font-size: 30px;
  }
`

const ModalDescription = styled.p`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #4d4d4d;

  @media only screen and (min-width: 1024px) {
    font-size: 15px;
    line-height: 23px;
  }
`

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
`

const Rule = styled.div`
  width: 100%;
  height: 1px;
  background: #d5d6d6;
`

const CategoryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 0;
`

const CategoryCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const CategoryLabel = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #000000;

  @media only screen and (min-width: 1024px) {
    font-size: 16px;
  }
`

const CategoryDesc = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #4d4d4d;

  @media only screen and (min-width: 1024px) {
    font-size: 13px;
    line-height: 20px;
  }
`

const AlwaysActive = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #4d4d4d;
  white-space: nowrap;

  @media only screen and (min-width: 1024px) {
    font-size: 13px;
  }
`

const Toggle = styled.button`
  flex-shrink: 0;
  width: 48px;
  height: 26px;
  border-radius: 13px;
  border: none;
  cursor: pointer;
  padding: 3px;
  background: ${({ $on }) => ($on ? "#c3ff00" : "#d5d6d6")};
  display: flex;
  align-items: center;
  justify-content: ${({ $on }) => ($on ? "flex-end" : "flex-start")};
  transition: background 0.15s ease;

  &::after {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ffffff;
    display: block;
  }
`

const ModalActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`

const ModalFooterLink = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #000000;
  text-decoration: underline;

  @media only screen and (min-width: 1024px) {
    font-size: 13px;
  }
`

const CookieConsent = () => {
  const [visible, setVisible] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [analyticsOn, setAnalyticsOn] = useState(false)
  const bannerRef = useRef(null)

  useEffect(() => {
    const existing = getConsent()
    if (existing === "accepted") {
      loadAnalyticsScripts()
      setAnalyticsOn(true)
    } else if (existing !== "rejected") {
      setVisible(true)
    }

    const handleOpenSettings = () => {
      setAnalyticsOn(getConsent() === "accepted")
      setModalOpen(true)
    }
    window.addEventListener(OPEN_SETTINGS_EVENT, handleOpenSettings)
    return () =>
      window.removeEventListener(OPEN_SETTINGS_EVENT, handleOpenSettings)
  }, [])

  // Reserve space at the bottom of the page equal to the banner's own
  // height so the fixed bar never covers content (e.g. the last policy
  // section or the site footer) that would otherwise sit underneath it.
  useEffect(() => {
    if (!visible) {
      document.body.style.paddingBottom = ""
      return
    }

    const el = bannerRef.current
    if (!el) return

    const applyPadding = () => {
      document.body.style.paddingBottom = `${el.offsetHeight}px`
    }
    applyPadding()

    const observer = new ResizeObserver(applyPadding)
    observer.observe(el)

    return () => {
      observer.disconnect()
      document.body.style.paddingBottom = ""
    }
  }, [visible])

  const acceptAll = () => {
    setConsent("accepted")
    setVisible(false)
    setModalOpen(false)
  }

  const rejectNonEssential = () => {
    setConsent("rejected")
    setVisible(false)
    setModalOpen(false)
  }

  const saveChoices = () => {
    setConsent(analyticsOn ? "accepted" : "rejected")
    setVisible(false)
    setModalOpen(false)
  }

  return (
    <>
      {visible && (
        <Banner ref={bannerRef} role="dialog" aria-label="Cookie notice">
          <BannerCopy>
            <BannerLabel>COOKIES</BannerLabel>
            <BannerBody>
              Necessary cookies keep this site running and stay on. Google
              Analytics 4 and Microsoft Clarity are optional and stay off until
              you accept. Clarity may record masked session replays.
            </BannerBody>
            <BannerQuestion>
              May we use analytics cookies to understand how the site is used?
            </BannerQuestion>
          </BannerCopy>
          <BannerActions>
            <LimeButton onClick={acceptAll}>ACCEPT ANALYTICS</LimeButton>
            <LimeButton onClick={rejectNonEssential}>
              REJECT NON-ESSENTIAL
            </LimeButton>
            <OutlineButton
              onClick={() => {
                setAnalyticsOn(getConsent() === "accepted")
                setModalOpen(true)
              }}
            >
              MANAGE CHOICES
            </OutlineButton>
          </BannerActions>
        </Banner>
      )}

      {modalOpen && (
        <Overlay
          onClick={e => {
            if (e.target === e.currentTarget) setModalOpen(false)
          }}
        >
          <Panel role="dialog" aria-label="Cookie settings">
            <ModalHeading>Cookie settings</ModalHeading>
            <ModalDescription>
              Necessary cookies keep the site working and are always on. May we
              also use analytics cookies to understand how the site is used?
            </ModalDescription>

            <CategoryList>
              <Rule />
              <CategoryRow>
                <CategoryCopy>
                  <CategoryLabel>Necessary cookies</CategoryLabel>
                  <CategoryDesc>
                    Required for the site to work. These cannot be switched
                    off.
                  </CategoryDesc>
                </CategoryCopy>
                <AlwaysActive>ALWAYS ACTIVE</AlwaysActive>
              </CategoryRow>
              <Rule />
              <CategoryRow>
                <CategoryCopy>
                  <CategoryLabel>Analytics cookies</CategoryLabel>
                  <CategoryDesc>
                    Google Analytics 4 and Microsoft Clarity measure site
                    use. Both stay off until you accept.
                  </CategoryDesc>
                </CategoryCopy>
                <Toggle
                  type="button"
                  role="switch"
                  aria-checked={analyticsOn}
                  aria-label="Analytics cookies"
                  $on={analyticsOn}
                  onClick={() => setAnalyticsOn(prev => !prev)}
                />
              </CategoryRow>
              <Rule />
            </CategoryList>

            <ModalActions>
              <LimeButton onClick={saveChoices}>SAVE CHOICES</LimeButton>
              <LimeButton onClick={rejectNonEssential}>
                REJECT NON-ESSENTIAL
              </LimeButton>
            </ModalActions>

            <ModalFooterLink to="/privacy-policy">
              Privacy Policy
            </ModalFooterLink>
          </Panel>
        </Overlay>
      )}
    </>
  )
}

export default CookieConsent
