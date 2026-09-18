import React from "react"
import styled from "styled-components"
import loadingGif from "../images/loader.gif" // Ensure this path is correct

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9; /* Optional: background color */
  z-index: 1000;
`

const GifLoader = styled.img`
  width: 250px; /* Adjust the size as needed */
  height: 250px;
`

const Loader = () => (
  <LoaderWrapper>
    <GifLoader src={loadingGif} alt="Loading..." />
  </LoaderWrapper>
)

export default Loader
