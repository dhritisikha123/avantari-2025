import React, { useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components"

const CardSubDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Card = styled.div`
  flex: 1;
  // background: transparent;
  // border-radius: 16px;
  // padding: 32px 20px 32px 20px;
  // background-color: #ffffff;
  // max-height: 300px;
  // height: 300px;
  // margin: 0 10px; // Default margin between cards
  // @media only screen and (max-width: 567px) {
  margin: 0 10px; // Total 20px gap between cards (10px + 10px)
  max-height: 300px;
  height: 300px;
  // }
  // @media only screen and (min-width: 568px) {
  //   margin: 0 15px; // Total 30px gap between cards (15px + 15px)
  // }
`

const CardTitle = styled.p`
  font-family: "Corben", serif;
  font-style: normal;
  font-weight: 400;
  color: #4d4d4d;
  text-align: center;
  margin: 0 auto;
  width: 160px;
  font-size: 18px; /* Further reduce font size for mobile */
  line-height: 23px; /* Slightly more line spacing for small screens */
  padding-bottom: 10px;
`

const CardDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px; /* Initial font size */
  line-height: 17px; /* Adjusted line-height for compact text */
  color: #4d4d4d;
  text-align: center;
  margin: 0 auto;
`

const SixthTitle = styled.p`
  font-family: "Outfit", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px; /* Initial font size */
  line-height: 22px; /* Adjusted line-height for compact text */
  color: #000000;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 30px;
`

const MobileSixthSection = () => {
  const sliderRef = useRef(null)

  const blogData = [
    {
      blogTitle: "Some interesting blog title about tech and stuff",
      blogDate: "12/12/23",
    },
    {
      blogTitle: "Some interesting blog title about tech and stuff",
      blogDate: "12/12/23",
    },
    {
      blogTitle: "Some interesting blog title about tech and stuff",
      blogDate: "12/12/23",
    },
  ]

  const settings = {
    centerMode: true,
    dots: true,
    infinite: false,
    // autoplay: true, // Enable autoplay
    // autoplaySpeed: 2000, // Speed in milliseconds (4 seconds)
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
          dots: true,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerPadding: "0px",
        },
      },
    ],
  }

  const imgSlides1 = () =>
    blogData.map((dataMob, index) => (
      <div key={index}>
        <Card>
          <CardSubDiv>
            <CardTitle>{dataMob.blogTitle}</CardTitle>
          </CardSubDiv>
          <CardDescription>{dataMob.blogDate}</CardDescription>
        </Card>
      </div>
    ))

  return (
    <>
      <SixthTitle>Our take on the future of tech</SixthTitle>
      <Slider ref={sliderRef} {...settings} slidesToShow={1} arrows={false}>
        {imgSlides1()}
      </Slider>
    </>
  )
}

export default MobileSixthSection

// export default MobileSixthSection
