import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import seoImg from "../images/og-images/contactOG.png"
import styled, { css } from "styled-components"

// import FifthSectionOtherPage from "../components/homepage/fifth-section-other-page"
import BlogHomePage from "../components/bloghomepage"

const heroHorizontalPadding = css`
  padding-left: 60px;
  padding-right: 60px;

  @media only screen and (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
  }

  @media only screen and (max-width: 1023px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media only screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

const Section1 = styled.section`
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  overflow-x: hidden;
  ${heroHorizontalPadding}
`
const Title = styled.h1`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 68px;
  line-height: 76px;
  color: #000000;
  margin: 0;

  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 58px;
    line-height: 66px;
    width: 70%;
  }

  @media only screen and (max-width: 1023px) {
    font-size: 40px;
    line-height: 48px;
    width: 70%;
  }

  @media only screen and (max-width: 567px) {
    font-size: 36px;
    line-height: 44px;
  }
`
const SubTitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #262626;
  padding-top: 18px;
  margin: 0px;
  width: 80%;
  @media only screen and (max-width: 567px) {
    font-size: 14px;
    line-height: 22px;
  }
`

/* ------------------------------------------------------------------ */
/* Form section                                                        */
/* ------------------------------------------------------------------ */

const FormSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 5fr 3fr;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`

const FormColumn = styled.div`
  background-color: #ffffff;
  padding: 70px 60px 80px 60px;

  @media only screen and (min-width: 1440px) {
    padding: 90px 100px 100px 100px;
  }

  @media only screen and (max-width: 1023px) {
    padding: 45px 40px 50px;
  }

  @media only screen and (max-width: 768px) {
    padding: 35px 20px 40px;
  }
`

const SidebarColumn = styled.div`
  background-color: #eeeeee;
  padding: 70px 60px;

  @media only screen and (min-width: 1440px) {
    padding: 90px 60px;
  }

  @media only screen and (max-width: 1023px) {
    padding: 45px 40px;
  }

  @media only screen and (max-width: 768px) {
    padding: 35px 20px;
  }
`

const FormHeading = styled.h3`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 42px;
  color: #000000;
  margin: 0 0 36px 0;

  @media only screen and (max-width: 567px) {
    font-size: 26px;
    line-height: 32px;
    margin: 0 0 28px 0;
  }
`

const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  row-gap: 30px;
  margin-bottom: 50px;

  @media only screen and (max-width: 567px) {
    grid-template-columns: 1fr;
    row-gap: 26px;
    margin-bottom: 36px;
  }
`

const FieldFull = styled.div`
  grid-column: 1 / -1;
`

const FieldLabel = styled.label`
  display: block;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.52px;
  text-transform: uppercase;
  color: #4d4d4d;
  margin: 0 0 14px 0;
`

const fieldBaseStyles = css`
  width: 100%;
  border: none;
  border-bottom: 1px solid #000000;
  border-radius: 0;
  background: transparent;
  padding: 0 0 12px 0;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  outline: none;

  &::placeholder {
    color: #9a9a9a;
  }

  &:focus {
    border-bottom-color: #547300;
  }

  @media only screen and (max-width: 567px) {
    font-size: 14px;
    line-height: 22px;
  }
`

const TextInput = styled.input`
  ${fieldBaseStyles}
`

const SelectWrapper = styled.div`
  position: relative;

  &::after {
    content: "▾";
    position: absolute;
    right: 0;
    bottom: 10px;
    font-size: 12px;
    color: #000000;
    pointer-events: none;
  }
`

const SelectInput = styled.select`
  ${fieldBaseStyles}
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 20px;
  cursor: pointer;

  color: ${({ $hasValue }) => ($hasValue ? "#000000" : "#9a9a9a")};
`

const MultiSelectButton = styled.button`
  ${fieldBaseStyles}
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  display: block;
  width: 100%;
  padding-right: 20px;
  text-align: left;
  cursor: pointer;

  color: ${({ $hasValue }) => ($hasValue ? "#000000" : "#9a9a9a")};
`

const MultiSelectChevron = styled.span`
  position: absolute;
  right: 0;
  bottom: 10px;
  font-size: 12px;
  color: #000000;
  pointer-events: none;
`

const MultiSelectPanel = styled.div`
  position: absolute;
  ${({ $drop }) =>
    $drop === "up" ? "bottom: calc(100% + 8px);" : "top: calc(100% + 8px);"}
  left: 0;
  right: 0;
  z-index: 20;
  background: #ffffff;
  border: 1px solid #000000;
  /* Bounded by the viewport as well as a fixed ceiling, so the open panel
     cannot run over the Send Enquiry area on short laptop screens. */
  max-height: min(280px, 45vh);
  overflow-y: auto;
  overscroll-behavior: contain;
`

const MultiSelectPanelHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 16px;
  background: #ffffff;
  border-bottom: 1px solid #000000;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #4d4d4d;
`

const MultiSelectClear = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #000000;
  text-decoration: underline;
  cursor: pointer;

  &:disabled {
    color: #9a9a9a;
    cursor: default;
    text-decoration: none;
  }
`

const MultiSelectOption = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #000000;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }

  input {
    accent-color: #000000;
    width: 16px;
    height: 16px;
    cursor: pointer;
    flex-shrink: 0;
  }
`

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.56px;
  text-transform: uppercase;
  color: #000000;
  background-color: #c3ff00;
  border: none;
  padding: 20px 32px;
  cursor: pointer;
  transition: 0.2s ease;

  @media only screen and (max-width: 567px) {
    padding: 18px 26px;
  }

  &:hover {
    background-color: #d8ff4d;
  }
`

/* ------------------------------------------------------------------ */
/* Sidebar                                                              */
/* ------------------------------------------------------------------ */

const SidebarLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.52px;
  text-transform: uppercase;
  color: #4d4d4d;
  margin: 0 0 20px 0;
`

const SidebarDivider = styled.div`
  height: 1px;
  background-color: #d5d6d6;
`

const SidebarItem = styled.div`
  padding: 24px 0;
`

const SidebarItemLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.52px;
  text-transform: uppercase;
  color: #4d4d4d;
  margin: 0 0 8px 0;
`

const SidebarItemValue = styled.p`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #000000;
  margin: 0;

  @media only screen and (max-width: 567px) {
    font-size: 18px;
    line-height: 24px;
  }
`

const SidebarLink = styled.a`
  color: #000000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const ResponseBox = styled.div`
  background-color: #000000;
  padding: 26px 28px;
  margin-top: 32px;
`

const ResponseLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.52px;
  text-transform: uppercase;
  color: #c3ff00;
  margin: 0 0 10px 0;
`

const ResponseText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin: 0;

  @media only screen and (max-width: 567px) {
    font-size: 14px;
    line-height: 22px;
  }
`

/* ------------------------------------------------------------------ */
/* What happens next                                                    */
/* ------------------------------------------------------------------ */

const NextSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background-color: #0e0e0e;
  overflow: hidden;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`

const NextPadded = styled.div`
  padding: 70px 60px;

  @media only screen and (min-width: 1440px) {
    padding: 80px 100px;
  }

  @media only screen and (max-width: 1023px) {
    padding: 45px 40px;
  }

  @media only screen and (max-width: 768px) {
    padding: 35px 20px;
  }
`

const NextEyebrow = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.52px;
  text-transform: uppercase;
  color: #c3ff00;
  margin: 0 0 20px 0;
`

const NextTitle = styled.h2`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
  margin: 0 0 44px 0;

  @media only screen and (max-width: 1023px) {
    font-size: 36px;
    line-height: 44px;
    margin-bottom: 32px;
  }

  @media only screen and (max-width: 567px) {
    font-size: 28px;
    line-height: 36px;
  }
`

const NextGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    row-gap: 30px;
  }
`

const NextColumn = styled.div`
  padding-top: 18px;
  border-top: 1px solid #2a2a2a;
`

const NextLabel = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.52px;
  text-transform: uppercase;
  color: #c3ff00;
  margin: 0 0 12px 0;
`

const NextText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #8c8c8c;
  margin: 0;

  @media only screen and (max-width: 567px) {
    font-size: 13px;
    line-height: 20px;
  }
`

const nextSteps = [
  {
    label: "First",
    text: "We read what you sent and reply within two working days.",
  },
  {
    label: "Then",
    text: "A half-hour call to find the hard part and whether we are the right people for it.",
  },
  {
    label: "After that",
    text: "A written scope with a timeline and a price, or an honest no.",
  },
]

const whereOptions = [
  "End-to-end product development",
  "Product strategy and definition",
  "Product / industrial design",
  "UX and interface design",
  "Mechanical engineering",
  "Electronics and PCB design",
  "Embedded systems and firmware",
  "AI and machine learning",
  "Web, mobile and platform software",
  "AR, VR and interactive experiences",
  "Prototyping and validation",
  "Manufacturing and production",
  "Not sure yet",
]

const budgetOptions = [
  "Not set yet",
  "Under US$25k",
  "US$25k–50k",
  "US$50k–100k",
  "US$100k–250k",
  "US$250k+",
  "Prefer to discuss",
]

const timeframeOptions = [
  "As soon as possible",
  "Within 1–3 months",
  "Within 3–6 months",
  "Within 6–12 months",
  "More than a year away",
  "No fixed date yet",
]

const findUsOptions = [
  "Referral or word of mouth",
  "Existing client or partner",
  "Saw one of our products",
  "Search engine",
  "LinkedIn",
  "Instagram",
  "YouTube",
  "Press or publication",
  "Event or conference",
  "AI assistant",
  "Other",
]

const contactDetails = [
  {
    label: "Email",
    value: "comms@avantari.org",
    href: "mailto:comms@avantari.org",
  },
  {
    label: "Studio",
    value: "Hyderabad, India",
  },
]

const followLinks = [
  { label: "YouTube", href: "https://youtube.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
]

const WhereMultiSelect = ({ id, selected, onToggle, onClear }) => {
  const [open, setOpen] = React.useState(false)
  const [drop, setDrop] = React.useState("down")
  const wrapperRef = React.useRef(null)

  // Open upwards when there isn't room below — keeps the panel off the
  // Send Enquiry button on short viewports.
  const toggleOpen = () => {
    if (!open && wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect()
      const spaceBelow = window.innerHeight - rect.bottom
      setDrop(spaceBelow < 280 && rect.top > spaceBelow ? "up" : "down")
    }
    setOpen(o => !o)
  }

  React.useEffect(() => {
    const handleClickOutside = e => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const summary =
    selected.length === 0
      ? "Choose one or more"
      : selected.length === 1
      ? selected[0]
      : `${selected.length} selected`

  return (
    <SelectWrapper ref={wrapperRef} style={{ position: "relative" }}>
      <MultiSelectButton
        type="button"
        id={id}
        onClick={toggleOpen}
        $hasValue={selected.length > 0}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {summary}
      </MultiSelectButton>
      <MultiSelectChevron>▾</MultiSelectChevron>
      {open && (
        <MultiSelectPanel role="listbox" $drop={drop}>
          <MultiSelectPanelHeader>
            <span>{selected.length} selected</span>
            <MultiSelectClear
              type="button"
              onClick={onClear}
              disabled={selected.length === 0}
            >
              Clear
            </MultiSelectClear>
          </MultiSelectPanelHeader>
          {whereOptions.map(option => (
            <MultiSelectOption key={option}>
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => onToggle(option)}
              />
              {option}
            </MultiSelectOption>
          ))}
        </MultiSelectPanel>
      )}
    </SelectWrapper>
  )
}

const ContactForm = () => {
  const [where, setWhere] = React.useState([])
  const toggleWhere = option => {
    setWhere(prev =>
      prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
    )
  }
  const [budget, setBudget] = React.useState("")
  const [timeframe, setTimeframe] = React.useState("")
  const [foundUs, setFoundUs] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [status, setStatus] = React.useState(null)

  const handleSubmit = async e => {
    e.preventDefault()

    const form = e.target
    const name = form.elements.name.value.trim()
    const email = form.elements.email.value.trim()

    if (!name || !email) {
      alert("Please fill in your name and email address.")
      return
    }

    if (where.length === 0) {
      alert("Please choose at least one area you need us for.")
      return
    }

    const payload = {
      formType: "contact",
      name,
      company: form.elements.company.value.trim(),
      email,
      phone: form.elements.phone.value.trim(),
      where: where.join(", "),
      budget,
      timeframe,
      foundUs,
      stuck: form.elements.stuck.value.trim(),
    }

    // TODO: backend not ready yet — formContactAvantari.php still points at a
    // placeholder Apps Script URL with no ContactSubmissions destination.
    // Uncomment once both are wired up.
    console.log("Contact form submission (backend not wired up yet):", payload)

    setLoading(true)
    setStatus(null)
    const startTime = performance.now()

    try {
      const res = await fetch("https://avantari.org/formContactAvantari.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(payload),
      })

      const result = await res.json()

      if (result.result?.status !== "success") {
        console.error(result.result?.message || result)
        setStatus({ success: false })
        alert("Something went wrong. Please try again or email us directly.")
      } else {
        setStatus({ success: true })
        alert("Thanks — we'll be in touch within two working days.")
        form.reset()
        setWhere([])
        setBudget("")
        setTimeframe("")
        setFoundUs("")
      }
    } catch (error) {
      console.error("Submission failed", error)
      setStatus({ success: false })
      alert("Something went wrong. Please try again or email us directly.")
    } finally {
      setLoading(false)
      const endTime = performance.now()
      console.log(
        `Form submission took ${(endTime - startTime) / 1000} seconds`
      )
    }
  }

  return (
    <>
      <Layout>
        <div
          style={{
            marginTop: `50px`,
            paddingTop: `60px`,
            paddingBottom: `60px`,
            background: `#C3FF00`,
          }}
        >
          <Section1>
            <span>CONTACT</span>
            <Title>Tell us what you’re building.</Title>
            <SubTitle>
              New product, stubborn technical problem or an existing build that
              needs an external R&D team—tell us where you are, what is stuck
              and what needs to exist.
            </SubTitle>
          </Section1>
        </div>

        <FormSection>
          <FormColumn>
            <form onSubmit={handleSubmit}>
              <FormHeading>About you</FormHeading>
              <FieldGrid>
                <div>
                  <FieldLabel htmlFor="name">Name *</FieldLabel>
                  <TextInput
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <FieldLabel htmlFor="company">Company</FieldLabel>
                  <TextInput
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Organisation"
                  />
                </div>
                <div>
                  <FieldLabel htmlFor="email">Email *</FieldLabel>
                  <TextInput
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div>
                  <FieldLabel htmlFor="phone">Phone</FieldLabel>
                  <TextInput
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Including country code"
                  />
                </div>
              </FieldGrid>

              <FormHeading>Project details</FormHeading>
              <FieldGrid>
                <div>
                  <FieldLabel htmlFor="where">Where do you need us?</FieldLabel>
                  <WhereMultiSelect
                    id="where"
                    selected={where}
                    onToggle={toggleWhere}
                    onClear={() => setWhere([])}
                  />
                </div>
                <div>
                  <FieldLabel htmlFor="budget">Budget, if known</FieldLabel>
                  <SelectWrapper>
                    <SelectInput
                      id="budget"
                      name="budget"
                      value={budget}
                      onChange={e => setBudget(e.target.value)}
                      $hasValue={budget !== ""}
                    >
                      <option value="" disabled>
                        Select a range
                      </option>
                      {budgetOptions.map(option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </SelectInput>
                  </SelectWrapper>
                </div>
                <div>
                  <FieldLabel htmlFor="timeframe">
                    Target date, if any
                  </FieldLabel>
                  <SelectWrapper>
                    <SelectInput
                      id="timeframe"
                      name="timeframe"
                      value={timeframe}
                      onChange={e => setTimeframe(e.target.value)}
                      $hasValue={timeframe !== ""}
                    >
                      <option value="" disabled>
                        Select a timeframe
                      </option>
                      {timeframeOptions.map(option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </SelectInput>
                  </SelectWrapper>
                </div>
                <div>
                  <FieldLabel htmlFor="found-us">
                    How did you find us?
                  </FieldLabel>
                  <SelectWrapper>
                    <SelectInput
                      id="found-us"
                      name="found-us"
                      value={foundUs}
                      onChange={e => setFoundUs(e.target.value)}
                      $hasValue={foundUs !== ""}
                    >
                      <option value="" disabled>
                        Optional
                      </option>
                      {findUsOptions.map(option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </SelectInput>
                  </SelectWrapper>
                </div>
                <FieldFull>
                  <FieldLabel htmlFor="stuck">Tell us what's stuck</FieldLabel>
                  <TextInput
                    id="stuck"
                    name="stuck"
                    type="text"
                    placeholder="What exists today, and where is it stuck?"
                  />
                </FieldFull>
              </FieldGrid>

              <SubmitButton type="submit" disabled={loading}>
                {loading ? "Sending…" : "Send enquiry"} <span>→</span>
              </SubmitButton>
            </form>
          </FormColumn>

          <SidebarColumn>
            <SidebarLabel>Or reach us directly</SidebarLabel>
            <SidebarDivider />
            {contactDetails.map(item => (
              <React.Fragment key={item.label}>
                <SidebarItem>
                  <SidebarItemLabel>{item.label}</SidebarItemLabel>
                  <SidebarItemValue>
                    {item.href ? (
                      <SidebarLink href={item.href}>{item.value}</SidebarLink>
                    ) : (
                      item.value
                    )}
                  </SidebarItemValue>
                </SidebarItem>
                <SidebarDivider />
              </React.Fragment>
            ))}
            <SidebarItem>
              <SidebarItemLabel>Follow</SidebarItemLabel>
              <SidebarItemValue>
                {followLinks.map((link, index) => (
                  <React.Fragment key={link.label}>
                    <SidebarLink href={link.href}>{link.label}</SidebarLink>
                    {index < followLinks.length - 1 && " · "}
                  </React.Fragment>
                ))}
              </SidebarItemValue>
            </SidebarItem>
            <SidebarDivider />

            <ResponseBox>
              <ResponseLabel>Response time</ResponseLabel>
              <ResponseText>We reply within two working days.</ResponseText>
            </ResponseBox>
          </SidebarColumn>
        </FormSection>

        <NextSection>
          <NextPadded>
            <NextEyebrow>What happens next</NextEyebrow>
            <NextTitle>No sales deck, no discovery fee.</NextTitle>
            <NextGrid>
              {nextSteps.map(step => (
                <NextColumn key={step.label}>
                  <NextLabel>{step.label}</NextLabel>
                  <NextText>{step.text}</NextText>
                </NextColumn>
              ))}
            </NextGrid>
          </NextPadded>
        </NextSection>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "heroDesktop.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
  }
`

const canonicalUrl = "https://www.avantari.org/contact"

export const Head = () => (
  <>
    <Seo
      title="Book a Build Risk Review | Avantari"
      description="A 20-minute working session on the assumption, integration seam or production risk blocking your product. No generic deck."
      image={seoImg}
      url={canonicalUrl}
    />
    <meta name="robots" content="index, follow" />
    <meta
      name="keywords"
      content="book product development consultation, external R&D enquiry, hardware design partner contact"
    />
  </>
)

export default ContactForm
