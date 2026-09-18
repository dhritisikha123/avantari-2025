import React, { useState } from "react"
import styled from "styled-components"

const Section = styled.section`
  box-sizing: border-box;
  width: 100%;
  background: #0e0e0e;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: clamp(20px, calc(-17.143px + 9.5238vw), 120px);
  padding-right: clamp(20px, calc(-17.143px + 9.5238vw), 120px);

  @media only screen and (min-width: 769px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media only screen and (min-width: 1440px) {
    padding-left: clamp(120px, calc(-240px + 25vw), 400px);
    padding-right: clamp(120px, calc(-240px + 25vw), 400px);
    padding-top: 104px;
    padding-bottom: 104px;
  }
`

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media only screen and (min-width: 769px) {
    width: 600px;
    min-width: 0;
    gap: 14px;
  }

  @media only screen and (min-width: 1440px) {
    width: clamp(600px, calc(214.286px + 26.7857vw), 900px);
    gap: clamp(14px, calc(11.429px + 0.1786vw), 16px);
  }
`

const Label = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.52px;
  color: #c3ff00;
  margin: 0;

  @media only screen and (min-width: 769px) {
    line-height: 20px;
  }
`

const Heading = styled.p`
  font-family: "Corben", serif;
  font-weight: 400;
  color: #ffffff;
  margin: 0;
  max-width: 100%;
  width: 350px;
  font-size: 26px;
  line-height: 32px;

  @media only screen and (min-width: 769px) {
    width: 600px;
    font-size: 34px;
    line-height: 42px;
  }

  @media only screen and (min-width: 1440px) {
    width: 900px;
    font-size: clamp(34px, calc(26.286px + 0.5357vw), 40px);
    line-height: clamp(42px, calc(31.714px + 0.7143vw), 50px);
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 350px;

  @media only screen and (min-width: 769px) {
    width: 480px;
    min-width: 0;
    gap: 10px;
  }

  @media only screen and (min-width: 1440px) {
    width: clamp(480px, calc(274.286px + 14.2857vw), 640px);
    gap: clamp(10px, calc(7.429px + 0.1786vw), 12px);
  }
`

const InputRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;

  @media only screen and (min-width: 769px) {
    padding-bottom: 14px;
  }

  @media only screen and (min-width: 1440px) {
    padding-bottom: clamp(14px, calc(11.429px + 0.1786vw), 16px);
  }

  input {
    flex: 1;
    border: none;
    background: transparent;
    outline: none;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;

    &::placeholder {
      color: #8c8c8c;
    }

    @media only screen and (min-width: 769px) {
      font-size: 16px;
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: "Corben", serif;
    font-size: 18px;
    color: #c3ff00;
    padding: 0;

    @media only screen and (min-width: 769px) {
      font-size: 20px;
    }
  }
`

const Rule = styled.div`
  width: 100%;
  height: 1px;
  background: #8c8c8c;
`

const BlogNewsletter = () => {
  const [, setStatus] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()
    const email = e.target.elements.email.value.trim()
    if (!email) return

    try {
      const res = await fetch("https://avantari.org/formHandlerAvantari.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email }),
      })
      const result = await res.json()

      if (result.status === "error") {
        console.error(result.details)
        setStatus({ success: false })
      } else {
        setStatus({ success: true })
        alert("Thank you for signing up!")
        e.target.reset()
      }
    } catch (error) {
      console.error("Newsletter submission failed", error)
      setStatus({ success: false })
    }
  }

  return (
    <Section>
      <Copy>
        <Label>NEWSLETTER</Label>
        <Heading>We write when we’ve actually built something.</Heading>
      </Copy>
      <Form onSubmit={handleSubmit}>
        <InputRow>
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
          />
          <button type="submit">→</button>
        </InputRow>
        <Rule />
      </Form>
    </Section>
  )
}

export default BlogNewsletter
