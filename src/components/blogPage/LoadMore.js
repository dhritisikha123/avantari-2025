import React from "react"
import styled from "styled-components"

const Wrap = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: #edeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-bottom: 40px;
  padding-left: clamp(20px, calc(-17.143px + 9.5238vw), 120px);
  padding-right: clamp(20px, calc(-17.143px + 9.5238vw), 120px);

  @media only screen and (min-width: 769px) {
    padding-bottom: 88px;
    gap: 16px;
  }

  @media only screen and (min-width: 1440px) {
    padding-left: clamp(120px, calc(-240px + 25vw), 400px);
    padding-right: clamp(120px, calc(-240px + 25vw), 400px);
    padding-bottom: 104px;
    gap: clamp(16px, calc(13.429px + 0.1786vw), 18px);
  }
`

const Button = styled.button`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.56px;
  color: #c3ff00;
  background: #000000;
  border: none;
  cursor: pointer;
  padding: 16px 24px;

  @media only screen and (min-width: 769px) {
    padding: 20px 32px;
    color: #ffffff;
  }

  @media only screen and (min-width: 1440px) {
    padding: clamp(20px, calc(17.429px + 0.1786vw), 22px)
      clamp(32px, calc(26.857px + 0.3571vw), 36px);
  }

  @media only screen and (min-width: 2560px) {
    color: #c3ff00;
  }

  &:hover {
    opacity: 0.85;
  }
`

const Counter = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: #4d4d4d;
  margin: 0;
`

const LoadMore = ({ shown, total, onClick }) => (
  <Wrap>
    {shown < total && <Button onClick={onClick}>LOAD MORE ARTICLES</Button>}
    <Counter>{`Showing ${Math.min(shown, total)} of ${total}`}</Counter>
  </Wrap>
)

export default LoadMore
