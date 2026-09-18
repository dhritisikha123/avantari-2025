// import React from "react"
// import styled from "styled-components"
// import Team from "../../../../images/newWeb/Team.jpg"

// const FirstDiv = styled.div`
//   position: relative;
//   box-sizing: border-box;
//   width: 100%;
//   max-width: 1440px;
//   margin: 0 auto;
//   height: 100vh;
//   @media only screen and (min-width: 1440px) {
//     min-height: 720px;
//     height: 720px;
//     max-width: 1680px;
//   }
//   @media only screen and (max-width: 991px) {
//     height: 426px;
//   }
//   @media only screen and (max-width: 768px) {
//     height: 100vh;
//   }
// `

// const GridContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   height: 100%; /* Ensure the grid takes the full height */
//   @media (max-width: 768px) {
//     grid-template-rows: auto;
//     grid-template-columns: 1fr;
//   }

//   @media only screen and (min-width: 1440px) {
//     display: none;
//   }
// `

// const GridContainerItem = styled.div`
//   text-align: center;
//   position: relative;
//   div {
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     width: 100%;
//   }
// `

// const GridContainerWide = styled.div`
//   display: grid;
//   grid-template-columns: 720px 1fr;
//   align-items: center;
//   height: 100%; /* Ensure the grid takes the full height */

//   @media only screen and (max-width: 1439px) {
//     display: none;
//   }
// `

// const ImageContainer = styled.img`
//   width: 100%; /* Ensure image covers the width */
//   height: 100vh; /* Ensure image fills the container */
//   object-fit: cover; /* Ensures the image covers the space without distortion */
//   border-top: 1px solid #000000;
//   border-bottom: 1px solid #000000;
//   border-right: 1px solid #000000;

//   @media only screen and (min-width: 1440px) {
//     height: 720px;
//     width: 720px;
//   }
// `

// const FourthText2 = styled.ul`
//   list-style: none; /* Removes bullets */
//   padding: 0px;
//   margin: 0;
//   li {
//     font-family: "Poppins", sans-serif;
//     font-style: normal;
//     font-weight: 400;
//     font-size: 18px;
//     line-height: 27px;
//     padding-bottom: 5px;
//     @media only screen and (max-width: 1023px) {
//       font-size: 16px;
//       line-height: 25px;
//     }
//     color: #4d4d4d;
//     text-align: center;
//   }
// `

// const FourthTitle = styled.p`
//   font-family: "Corben", serif;
//   font-style: normal;
//   font-size: 2em;
//   font-weight: 400;
//   line-height: 120%;
//   width: 500px;
//   margin: 0 auto;
//   padding-bottom: 30px;
//   @media only screen and (max-width: 1023px) {
//     font-size: 28px; /* Adjust font size for smaller screens */
//     width: 420px;
//   }
//   // @media only screen and (max-width: 567px) {
//   //   font-size: 22px; /* Adjust font size for smaller screens */
//   // }

//   color: #000000;
// `

// const DesktopThirdSection = () => {
//   return (
//     <FirstDiv>
//       <GridContainerWide>
//         <div>
//           <ImageContainer src={Team} alt="Descriptive Alt Text" />
//         </div>
//         <div>
//             <FourthTitle>
//               Designers, engineers and AI scientists. Different disciplines,
//               same obsession.
//             </FourthTitle>
//             <FourthText2>
//               <li>12 Global Patents</li>
//               <li>Red Dot Winner</li>
//               <li>WT World Cup Winner</li>
//               <li>Indian Olympic Association Partner</li>
//             </FourthText2>
//         </div>
//       </GridContainerWide>
//       <GridContainer>
//         <GridContainerItem>
//           <ImageContainer src={Team} alt="Descriptive Alt Text" />
//         </GridContainerItem>
//         <GridContainerItem style={{ gridColumn: "span 2" }}>
//           <div>
//             <FourthTitle>
//               Designers, engineers and AI scientists. Different disciplines,
//               same obsession.
//             </FourthTitle>
//             <FourthText2>
//               <li>12 Global Patents</li>
//               <li>Red Dot Winner</li>
//               <li>WT World Cup Winner</li>
//               <li>Indian Olympic Association Partner</li>
//             </FourthText2>
//           </div>
//         </GridContainerItem>
//       </GridContainer>
//     </FirstDiv>
//   )
// }

// export default DesktopThirdSection

import React from "react"
import styled from "styled-components"
import Team from "../../../../images/newWeb/Team.jpg"

const FirstDiv = styled.div`
  position: relative;
  height: 100vh;
  @media only screen and (max-width: 991px) {
    height: 426px;
  }
  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%; /* Ensure the grid takes the full height */
  @media (max-width: 768px) {
    grid-template-rows: auto;
    grid-template-columns: 1fr;
  }
`

const GridContainerItem = styled.div`
  text-align: center;
  position: relative;
  div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
`

const ImageContainer = styled.img`
  width: 100%; /* Ensure image covers the width */
  height: 100vh; /* Ensure image fills the container */
  object-fit: cover; /* Ensures the image covers the space without distortion */
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  border-right: 1px solid #000000;
`

const FourthText2 = styled.ul`
  list-style: none; /* Removes bullets */
  padding: 0px;
  margin: 0;
  li {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    padding-bottom: 5px;
    @media only screen and (max-width: 1023px) {
      font-size: 16px;
      line-height: 25px;
    }
    color: #4d4d4d;
    text-align: center;
  }
`

const FourthTitle = styled.p`
  font-family: "Corben", serif;
  font-style: normal;
  font-size: 2em;
  font-weight: 400;
  line-height: 120%;
  width: 500px;
  margin: 0 auto;
  padding-bottom: 30px;
  @media only screen and (max-width: 1023px) {
    font-size: 28px; /* Adjust font size for smaller screens */
    width: 420px;
  }
  // @media only screen and (max-width: 567px) {
  //   font-size: 22px; /* Adjust font size for smaller screens */
  // }

  color: #000000;
`

const DesktopThirdSection = () => {
  return (
    <FirstDiv>
      <GridContainer>
        <GridContainerItem>
          <ImageContainer src={Team} alt="The Avantari team of designers, engineers and AI scientists" />
        </GridContainerItem>
        <GridContainerItem style={{ gridColumn: "span 2" }}>
          <div>
            <FourthTitle>
             Designers, engineers and AI scientists. Different disciplines, same obsession.
            </FourthTitle>
            <FourthText2>
              <li>12 Global Patents</li>
              <li>Red Dot Winner</li>
              <li>WT World Cup Winner</li>
              <li>Indian Olympic Association Partner</li>
            </FourthText2>
          </div>
        </GridContainerItem>
      </GridContainer>
    </FirstDiv>
  )
}

export default DesktopThirdSection
