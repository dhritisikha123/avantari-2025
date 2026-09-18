import React, { useState } from "react"
import styled from "styled-components"
import sendImage from "../../../images/newWeb/send.svg"

const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  min-height: 130px;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    background-color: #000000;
  }
`

const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background: ${({ loading }) => (loading ? "#007bff" : "transparent")};
  transition: all 0.3s ease-in-out;
`

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 40px 10px 15px;
    font-size: 14px;
    border: 1px solid #ccc;
    outline: none;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: #000;

    @media only screen and (min-width: 768px) {
      width: 350px;
      padding: 10px 15px;
    }

    &:focus {
      border-color: #007bff;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
  }

  > div {
    width: 100%;
    max-width: 380px;

    @media only screen and (min-width: 768px) {
      width: auto;
      max-width: none;
    }
  }

  button {
    position: absolute;
    top: 25%;
    right: 10px;
    border: none;
    background-color: transparent;
    cursor: pointer !important;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 20px;
      height: auto;
      opacity: ${({ loading }) => (loading ? 0.5 : 1)};
    }

    &:hover img {
      transform: scale(1.1);
      cursor: pointer !important;
    }
  }

  .loading-spinner {
    width: 20px;
    height: 20px;
    border: 2px solid #000000;
    border-top: 2px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const SignTitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  margin: 0;
  text-align: left;
  color: #000000;
  padding: 20px;

    @media only screen and (max-width: 567px) {
    padding: 0 20px 20px 20px;
}

  @media only screen and (min-width: 768px) {
    padding-right: 30px;
    font-size: 16px;
    line-height: 24px;
    padding-right: 20px;
    color: #ffffff;
  }
`

const SeventhSection = () => {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()
    const email = e.target.elements.email.value.trim()

    if (!email) {
      alert("Please enter a valid email address.")
      return
    }

    setLoading(true)
    setStatus(null)
    const startTime = performance.now()

    try {
      const res = await fetch("https://avantari.org/formHandlerAvantari.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
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
      console.error("Submission failed", error)
      setStatus({ success: false })
    } finally {
      setLoading(false)
      const endTime = performance.now()
      console.log(
        `Form submission took ${(endTime - startTime) / 1000} seconds`
      )
    }
  }

  return (
    <BannerContainer>
      <FormContainer onSubmit={handleSubmit} loading={loading}>
        <SignTitle>Ideas, experiments and hard-earned lessons. Occasionally.</SignTitle>
        <div style={{ position: "relative", display: "inline-block" }}>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
          />
          <button type="submit" disabled={loading}>
            {loading ? (
              <div className="loading-spinner"></div>
            ) : (
              <img src={sendImage} alt="Send" />
            )}
          </button>
        </div>
      </FormContainer>
    </BannerContainer>
  )
}

export default SeventhSection
