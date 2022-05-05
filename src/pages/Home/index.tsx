import styled from 'styled-components'
import tw from 'twin.macro'
import Slider from 'react-slick'
import { useMediaQuery } from 'react-responsive'

import { deviceSize } from 'responsive'

import backgroundImage from 'images/bg.png'
import backgroundImage2 from 'images/bg2.png'
import fullLogo from 'images/fullLogo.png'
import shoeLines from 'images/shoeLines.svg'
import moieshos from 'images/moieshos.png'
import discorddata from 'images/discorddata.svg'
import twitterdata from 'images/twitterdata.svg'
import roadmapPC from 'images/roadmap-pc.png'
import roadmapMO from 'images/roadmap-shouji.svg'
import jerry from 'images/jerry.png'
import jerry1 from 'images/jerry1.png'
import jerry2 from 'images/jerry2.png'
import jerry3 from 'images/jerry3.png'
import jerry4 from 'images/jerry4.png'
import jerry5 from 'images/jerry5.png'
import jerry6 from 'images/jerry6.png'
import jerry7 from 'images/jerry7.png'
import jerry8 from 'images/jerry8.png'
import CountUpAnimation from 'components/CountUpAnimation'
import { useState } from 'react'

const Container = styled.div`
  ${tw` w-full flex flex-col `}
`

const BackgroundContainer = styled.div`
  ${tw` relative `}
`

const BackgroundSection = styled.img`
  ${tw` w-full h-auto `}
  object-fit: cover;
  min-height: 500px;
`

const BackgroundSectionColor = styled.img`
  ${tw` absolute w-full h-auto z-index[2] top-0 left-0 `}
  transition: 2s;
  object-fit: cover;
  min-height: 500px;
`

const BackgroundLogo = styled.img`
  ${tw` absolute px-20 z-index[3] `}
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
`

const ForewardSection = styled.div`
  ${tw` text-center `}
  margin: 140px auto 0 auto;
`

const ForewardTitle = styled.h1`
  ${tw` text-2xl md:text-4xl font-overpass font-bold py-5 `}
`

const ForewardText = styled.p`
  ${tw` text-16 md:text-2xl font-overpass mt-5 uppercase `}
`

const InformationSection = styled.div`
  margin: 100px 0;
  ${tw` flex flex-col md:flex-row justify-center `}
`

const InformationLeft = styled.img`
  ${tw` py-12 px-10 m-auto md:py-0 md:px-0 md:m-0 w-full `}
  max-width: 500px;
`

const InformationRight = styled.div`
  ${tw` flex flex-col ml-3`}
`

const InformationRightItem = styled.div`
  ${tw` 
    flex 
    items-center 
    flex-col
    md:flex-row
    mt-12 
    first:mt-0 
    text-xl
    md:text-2xl
  `}
`

const InformationHighlight = styled.div`
  ${tw` bg-black px-4 py-2 mr-0 md:mr-2 text-white width[200px] md:width[235px] `}
`

const InformationImage = styled.img`
  ${tw` ml-0 md:ml-4 `}
  width: 30px;
`

const RoadmapSection = styled.div`
  ${tw` py-20 `}
`

const RoadmapTitle = styled.h1`
  ${tw` text-center py-10 text-4xl font-bold font-overpass `}
`

const RoadmapImage = styled.img`
  ${tw` w-full h-auto `}
`

const SubcribeSection = styled.div`
  ${tw` py-10 `}
`

const SubcribeInput = styled.input`
  ${tw` font-overpass font-bold text-xl md:text-2xl px-3 md:px-0 m-auto `}
  appearance: none;
  position: relative;
  z-index: 999;
  width: 90%;
  max-width: 950px;
  height: 76px;
  border: 4px solid rgb(0, 0, 0);
  text-align: center;
  background-color: transparent;
  display: block;
`

const SubcribeButton = styled.button`
  ${tw` font-overpass font-bold text-xl md:text-2xl`}
  cursor: pointer;
  display: block;
  padding: 15px 40px;
  margin: 30px auto;
  background-color: rgb(114, 245, 150);
  text-align: center;
  border: none;
`

const TeamSection = styled.div`
  ${tw` py-10 md:py-20 mb-20 `}
`

const TeamTitle = styled.div`
  ${tw` font-overpass font-bold text-2xl md:text-4xl pb-10 text-center `}
`

const TeamList = styled.div`
  ${tw` w-full max-width[1200px] m-auto px-5 `}
`

const TeamListItem = styled.div`
  ${tw` font-overpass font-bold text-xl md:text-2xl`}
`

const TeamItemTop = styled.div`
  ${tw` relative mr-5 last:mr-0 `}
`

const TeamItemImage = styled.img`
  ${tw` `}
`

const TeamItemDesc = styled.div`
  ${tw` 
    absolute 
    p-3 
    w-full 
    h-full 
    top-0 
    left-0 
    text-12 
    md:text-xl 
    line-height[1.6] 
    md:line-height[2] 
    bg-dark-blue-500 
    text-white 
    opacity-0 
    group-hover:opacity-80 
    transition-duration[.5s]
  `}
`

const TeamItemBottom = styled.div`
  ${tw` flex flex-col `}
`

const TeamItemName = styled.div`
  ${tw` text-xl md:text-2xl font-bold mt-2 md:mt-5 uppercase `}
`

const TeamItemRole = styled.div`
  ${tw` text-16 md:text-xl mt-3 md:mt-5 uppercase `}
`

const BackersSection = styled.div`
  margin: 50px 0;
  background: url("/images/backersbgtop.svg") 0px 36.8px / contain no-repeat, url("/images/backersbg.svg") 0px 0px / cover no-repeat;
`

const BackersTitle = styled.div`
  ${tw` text-2xl md:text-4xl text-center font-overpass font-bold uppercase `}
`

const BackersContainer = styled.div`
  ${tw` flex flex-wrap justify-between w-full max-width[900px] m-auto px-5 py-10 md:py-20 items-center `}
`

const BackersItem = styled.div`
  ${tw` width[40%] md:max-width[49%] md:width[100%] md:min-width[33%] `}
`

const BackersImage = styled.img`
  ${tw` height[80px] md:h-auto md:max-height[150px] py-5 m-auto `}
`

export default function Home() {
  // const isMobile = useMediaQuery({ maxWidth: deviceSize.tablet })
  const [bgColor, setBgColor] = useState(false)
  const [time, setTime] = useState(Date.now())

  const SlideShow = () => {
    const listMember = [
      { name: "Akimitsu", role: "CEO & Founder", img: jerry, desc: "Decade in game development, operation and marketing, ranked most downloaded game in IOS app store." },
      { name: "Chiko", role: "co-founder", img: jerry1, desc: "Decade in game development, operation and marketing, ranked most downloaded game in IOS app store." },
      { name: "Nobu", role: "Design Lead", img: jerry2, desc: "Decade in game development, operation and marketing, ranked most downloaded game in IOS app store." },
      { name: "Michio", role: "Community Manager", img: jerry3, desc: "Decade in game development, operation and marketing, ranked most downloaded game in IOS app store." },
      { name: "Kichirou", role: "Social Media Manage", img: jerry4, desc: "Decade in game development, operation and marketing, ranked most downloaded game in IOS app store." },
      { name: "Kazuhiko", role: "Illustrator", img: jerry5, desc: "Decade in game development, operation and marketing, ranked most downloaded game in IOS app store." },
      { name: "Hisashi", role: "Solidity Developer", img: jerry6, desc: "Decade in game development, operation and marketing, ranked most downloaded game in IOS app store." },
      { name: "Daiki", role: "Partnership Relations", img: jerry7, desc: "Decade in game development, operation and marketing, ranked most downloaded game in IOS app store." },
      { name: "Atsushi", role: "Designer", img: jerry8, desc: "Decade in game development, operation and marketing, ranked most downloaded game in IOS app store." },
    ]

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: deviceSize.tablet,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            infinite: true
          }
        }
      ]
    }

    return (<Slider {...settings}>
      {listMember.map((item, idx) => (
        <TeamListItem key={idx}>
          <TeamItemTop className="group">
            <TeamItemImage src={item.img} />
            {/* <TeamItemDesc>{item.desc}</TeamItemDesc> */}
          </TeamItemTop>

          <TeamItemBottom>
            <TeamItemName>{item.name}</TeamItemName>
            <TeamItemRole>{item.role}</TeamItemRole>
          </TeamItemBottom>
        </TeamListItem>
      ))}
    </Slider>
    )
  }

  return (
    <Container>
      {/* Background */}
      <BackgroundContainer onClick={() => setBgColor(true)} >
        <BackgroundSection src={backgroundImage} />
        <BackgroundSectionColor src={backgroundImage2} style={{ opacity: bgColor ? 1 : 0 }} />
        <BackgroundLogo src={fullLogo} />
      </BackgroundContainer>

      {/* Foreward */}
      <ForewardSection>
        <ForewardTitle>
          JOIN, COUNT & ENJOY JOUR RIDE
        </ForewardTitle>
        <ForewardText>
          ZOROBIKE IS A WEB 3 LIFESTYLE APP<br />
          WITH SOCIAL-FI AND GAME-FI ELEMENTS
        </ForewardText>
        <ForewardText>
          Players can earn by driving or running outdoors
        </ForewardText>
      </ForewardSection>

      {/* Information */}
      <InformationSection>
        <InformationLeft src={moieshos} />

        <InformationRight>
          <InformationRightItem>
            <InformationHighlight>
              <CountUpAnimation start={time / 5000000000} end={time / 5000000000 * 1.2} duration={5000000000} decimal={2} />
            </InformationHighlight> DISTANCE RIDE (M)
          </InformationRightItem>

          <InformationRightItem>
            <InformationHighlight>
              <CountUpAnimation start={time / 5000000000} end={time / 5000000000 * 2} duration={1000000} decimal={0} />
            </InformationHighlight> CARBON OFFSET (KG)
          </InformationRightItem>

          <InformationRightItem>
            <InformationHighlight>
              <CountUpAnimation start={time / 5000000000} end={time / 5000000000 * 1.05} duration={5000000000} decimal={3} />
            </InformationHighlight> CALORIES BURNED (KCAL)
          </InformationRightItem>

          <InformationRightItem>
            <InformationHighlight>50</InformationHighlight> DISCORD MEMBERS <InformationImage src={discorddata} />
          </InformationRightItem>

          <InformationRightItem>
            <InformationHighlight>80,600</InformationHighlight> TWITTER FOLLOWERS <InformationImage src={twitterdata} />
          </InformationRightItem>
        </InformationRight>
      </InformationSection>

      {/* Roadmap */}
      <RoadmapSection>
        <RoadmapTitle> ROADMAP </RoadmapTitle>
        <RoadmapImage src={roadmapPC} />
      </RoadmapSection>

      {/* Subcribe */}
      <SubcribeSection>
        <SubcribeInput placeholder="Email" />
        <SubcribeButton>SUBCRIBES</SubcribeButton>
      </SubcribeSection>

      {/* Team */}
      <TeamSection>
        <TeamTitle> THE TEAM </TeamTitle>

        <TeamList>
          {SlideShow()}
        </TeamList>
      </TeamSection>

      {/* <TeamSection>
        <TeamTitle> THE ADVISORS </TeamTitle>

        <TeamList>
          {SlideShow()}
        </TeamList>
      </TeamSection> */}

      {/* Backers */}
      {/* <BackersSection>
        <BackersTitle>OUR BACKERS</BackersTitle>

        <BackersContainer>
          <BackersItem>
            <a href="https://solana.ventures/"><BackersImage src="images/solanabackers.svg" alt="" /></a>
          </BackersItem>
          <BackersItem>
            <a href="https://www.alameda-research.com/"><BackersImage src="images/alamedabackers.svg" alt="" /></a>
          </BackersItem>
          <BackersItem>
            <a href="https://www.defialliance.co/"><BackersImage src="images/defiallifadsf.svg" alt="" /></a>
          </BackersItem>
          <BackersItem>
            <a href="http://m13.co/"><BackersImage src="images/m333.svg" alt="" /></a>
          </BackersItem>
          <BackersItem>
            <a href="https://cornerventures.com/"><BackersImage src="images/corner.svg" alt="" /></a>
          </BackersItem>
          <BackersItem>
            <a href="https://www.6thman.ventures/"><BackersImage src="images/6thmanback.svg" alt="" /></a>
          </BackersItem>
          <BackersItem>
            <a href="https://zeeprime.capital/"><BackersImage src="images/zee.svg" alt="" /></a>
          </BackersItem>
          <BackersItem>
            <a href="https://www.sfermion.io/"><BackersImage src="images/sfermion.svg" alt="" /></a>
          </BackersItem>
          <BackersItem>
            <a href="https://sparkdigitalcapital.com/"><BackersImage src="images/spark.svg" alt="" /></a>
          </BackersItem>
          <BackersItem>
            <a href="https://morningstar.ventures/"><BackersImage src="images/morningstrr.svg" alt="" /></a>
          </BackersItem>
          <BackersItem>
            <a href="https://lemniscap.com/"><BackersImage src="images/lemniscoppp.svg" alt="" /></a>
          </BackersItem>
          <BackersItem>
            <a href="https://www.welindershi.com/"><BackersImage src="images/wsss@3x.png" alt="" /></a>
          </BackersItem>
          <BackersItem>
            <a href="https://www.solarecofund.com/"><BackersImage src="images/solareco.svg" alt="" /></a>
          </BackersItem>
          <BackersItem>
            <a href="https://www.openspace.vc/"><BackersImage src="images/openspace.svg" alt="" /></a>
          </BackersItem>
        </BackersContainer>
      </BackersSection> */}
    </Container>
  )
}