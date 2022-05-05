import styled from 'styled-components'
import tw from 'twin.macro'
import Slider from 'react-slick'
import { useMediaQuery } from 'react-responsive'

import { deviceSize } from 'responsive'

import header from "images/header.png"
import introduceshoe from "images/introduceshoe.png"
import liteRowBg from "images/liteRowBg.png"
import liteRowBg2 from "images/liteRowBg2.png"
import playwayBg from "images/playway.png"
import playway from "images/playway.svg"
import i1253 from "images/1253.png"
import i1254 from "images/gst-1.png"
import i1255 from "images/1255.png"
import coin from "images/coin.png"
import tokenomic from "images/tokenomic.png"
import litep from "images/litep.svg"
import roadmapMobileZOROBIKE from "images/roadmap-pc-zorobike.png"
import zoroburn from "images/zoroburn.png"
import zoroburnpc from "images/zoroburnpc.png"


const Container = styled.div`
  ${tw` `}
`

const HeaderSection = styled.div`
  ${tw` relative `}
`

const HeaderImage = styled.img`
  ${tw` h-full w-full min-height[300px] object-fit[cover] `}
`

const HeaderTitle = styled.div`
  ${tw` absolute text-center text-3xl md:text-7xl font-bold font-overpass `}
  top: 50%;
  margin: auto;
  width: 100%;
  transform: translateY(-50%);
`

const SectionContainer = styled.div`
  ${tw` py-10 px-3 w-full max-width[1200px] m-auto `}
`

const SectionTitle = styled.div`
  ${tw` text-2xl md:text-4xl font-bold text-center md:text-left `}
`

const WhatSection = styled.div`
  ${tw` flex flex-col md:flex-row `}
`

const WhatSectionLeft = styled.div`
  ${tw` flex[1] mr-0 md:mr-10 `}
`

const WhatText = styled.div`
  ${tw` flex[1] mt-10 text-16 md:text-2xl `}
`

const WhatSectionRight = styled.div`
  ${tw` flex[1] `}
`

const WhatDivImage = styled.div`
  ${tw` p-10 md:p-5 `}
`

const WhatImage = styled.img`
  ${tw` `}
`

const LiterowSection = styled.div`
  ${tw` w-full `}
`

const LiterowDivImage = styled.div`
  ${tw` relative `}
`

const LiterowImage = styled.img`
  ${tw` min-height[200px] h-auto w-full object-cover `}
`

const LiterowText = styled.div`
  ${tw` text-18 md:text-5xl text-center text-white w-full m-auto absolute `}
  top: 50%;
  transform: translateY(-50%);
`

const HowSection = styled.div<{ isMobile?: boolean }>`
  ${tw` my-10 md:my-20 `}
  background: url(${playwayBg}) ${({ isMobile }) => !isMobile ? "0px 0px / cover no-repeat" : "0px 500px / contain no-repeat"};
`

const HowSectionTop = styled.div`
  ${tw` flex flex-col `}
`

const HowContent = styled.div`
  ${tw` w-full max-width[400px] mb-12 md:mb-20 `}
`

const HowContentText = styled.div`
  ${tw` text-xl md:text-2xl mt-7 md:mt-10 `}
`

const HowSectionBottom = styled.div`
  ${tw` margin-top[300px] md:margin-top[0] `}
`

const Playway = styled.div`
  ${tw` `}
`

const PlaywayContainer = styled.div`
  ${tw` p-8 md:py-14 md:px-10 mr-0 md:mr-10 height[300px] md:height[500px] font-overpass `}
  background: url(${playway}) 0px 0px / cover no-repeat;
`

const PlaywayTitle = styled.div`
  ${tw` text-18 md:text-2xl font-bold mb-5 md:mb-10 `}
`

const PlaywayDesc = styled.div`
  ${tw` text-16 md:text-xl md:line-height[2] `}
`

const TokenSection = styled.div`
  ${tw` my-10 md:my-20 `}
`

const TokenListCoin = styled.div`
  ${tw` flex flex-col md:flex-row justify-around my-6 md:my-12 `}
`

const TokenCoin = styled.div`
  ${tw` flex items-center py-1 `}
`

const TokenDivImage = styled.div`
  ${tw` relative ml-20 md:ml-0 `}
`

const TokenCoinText = styled.div`
  ${tw` text-16 md:text-2xl ml-5 `}
`

const TokenCoinImage = styled.img`
  ${tw` max-width[30px] md:max-width[90px] `}
`

const TokenCoinLabel = styled.div<{ isMobile?: boolean }>`
  ${tw` absolute font-bold text-14 md:text-18 `}
  top: ${({ isMobile }) => isMobile ? "50%" : "100%"};
  left: ${({ isMobile }) => isMobile ? "-40px" : "50%"};
  transform: translate(${({ isMobile }) => isMobile ? "0, -50%" : "-50%, 0"});
`

const TokenBigCoin = styled.div`
  ${tw` w-full `}
`

const TokenBigCoinDivImage = styled.div`
  ${tw` width[40%] md:width[50%] relative m-auto `}
`

const TokenBigCoinImage = styled.img`
  ${tw` `}
`

const TokenBigCoinText = styled.div<{ right?: any, isMobile?: boolean }>`
  ${tw` absolute text-12 md:text-2xl `}
  top: 50%;
  transform: translateY(-50%);
  left: ${({ right, isMobile }) => right ? `calc(100% + ${isMobile ? 10 : 30}px)` : ""};
  right: ${({ right, isMobile }) => !right ? `calc(100% + ${isMobile ? 10 : 30}px)` : ""};
`

const TokenBoldText = styled.p`
  ${tw` font-bold `}
`

const TokenomicSection = styled.div`
  ${tw` `}
`

const TokenomicImage = styled.img`
  ${tw` my-5 `}
`

const TokenomicText = styled.div`
  ${tw` text-14 md:text-3xl text-center my-10 `}
`

const BurningSection = styled.div`
  ${tw` `}
`

const BurningList = styled.div`
  ${tw` flex flex-col my-5 md:my-10 `}
`

const BurningListItem = styled.div`
  ${tw` flex border-t py-2 md:py-3 `}
`

const BurningItemImage = styled.div`
  ${tw` width[30px] md:width[90px] mr-3 md:mr-10 `}
`

const BurningItemText = styled.div`
  ${tw` flex[1] text-16 md:text-2xl self-center `}
`

const RoadmapSection = styled.div`
  ${tw` py-10`}
`

const RoadmapTitle = styled.div`
  ${tw` py-5 md:py-10 text-xl md:text-3xl font-bold text-center md:text-left`}
`

const RoadmapImage = styled.img`
  ${tw` `}
`

const Step3Container = styled.div`
  ${tw` `}
`

const Step4Content = styled.div`
  ${tw` w-full py-5 `}
`

const Step4ImageDiv = styled.div`
  ${tw` m-auto relative `}
`

const Step4Image = styled.img<{ width?: number }>`
  ${tw` m-auto `}
  width: ${({ width }) => width ? `${width}px` : "auto"};
`

const Step4ContentPosition = styled.div<{ width?: number, top?: number, left?: number }>`
  ${tw` absolute `}
  top: ${({ top }) => top ? `${top}px` : "0"};
  left: ${({ left }) => left ? `${left}px` : "0"};
  width: ${({ width }) => width ? `${width}px` : "auto"};
`

const Step3ContentPosition = styled.div<{ width?: number, pt?: number, right?: any }>`
  ${tw` `}
  padding-top: ${({ pt }) => pt ? `${pt}px` : "0"};
  width: ${({ width }) => width ? `${width}px` : "auto"};
  text-align: ${({ right }) => right ? `right` : "left"};
`

const Step3Text = styled.div`
  ${tw` text-14 md:text-18 `}
`

const Step3TextTitle = styled.div`
  ${tw` text-14 md:text-18 font-bold `}
`

const Step3ContentMobile = styled.div`
  ${tw` flex flex-col p-3 `}
`

const Step3ImagetMobile = styled.img`
  ${tw` p-3 `}
`


const Litepaper = () => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.tablet })

  const HowSlideShow = () => {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: deviceSize.tablet,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: true
          }
        }
      ]
    }

    return (
      <Slider {...settings}>
        <Playway>
          <PlaywayContainer>
            <PlaywayTitle>EVERYONE CAN USE</PlaywayTitle>
            <PlaywayDesc>With a little bit of gamification and moving-to-earn as the core mechanic, ZOROBIKE can nudge millions to embrace a healthier lifestyle.</PlaywayDesc>
          </PlaywayContainer>
        </Playway>

        <Playway>
          <PlaywayContainer>
            <PlaywayTitle>ZERO ENTRY BARRIER</PlaywayTitle>
            <PlaywayDesc>ZOROBIKE does not require people to own NFT assets to moving-to-earn. Instead, they can rent them for free from other users to get started, with the earnings split later. (Coming soon)</PlaywayDesc>
          </PlaywayContainer>
        </Playway>

        <Playway>
          <PlaywayContainer>
            <PlaywayTitle>LEARN AFTER EARN</PlaywayTitle>
            <PlaywayDesc>Non-crypto natives can earn before they learn how to use a Decentralized Wallet. This will also be their first ZOROBIKE in the Web3 world.</PlaywayDesc>
          </PlaywayContainer>
        </Playway>
      </Slider>
    )
  }

  return (
    <Container>
      {/* Header */}
      <HeaderSection>
        <HeaderImage src={header} />
        <HeaderTitle>ZOROBIKE LITEPAPER</HeaderTitle>
      </HeaderSection>

      {/* What */}
      <SectionContainer>
        <WhatSection>
          <WhatSectionLeft>
            <SectionTitle>WHAT IS ZOROBIKE</SectionTitle>
            <WhatText>ZOROBIKE is a Web3 lifestyle app with Social-Fi and Game-Fi elements. Users equipped with NFT BICYCLE, ride outdoors to earn $ZOROBIKE, which can be used to level up and mint new BICYCLE.</WhatText>
            <WhatText>Player can choose to lease or sell their NFT BICYCLE on the in-app Marketplace; users’ $ZOROBIKE earnings are stored in the in-app Wallet, which has a built-in Swap function.</WhatText>
          </WhatSectionLeft>

          <WhatSectionRight>
            <WhatDivImage>
              <WhatImage src={introduceshoe} />
            </WhatDivImage>
          </WhatSectionRight>
        </WhatSection>
      </SectionContainer>

      {/* Literow */}
      <LiterowSection>
        <LiterowDivImage>
          <LiterowImage src={liteRowBg} />

          <LiterowText>We aim to be the leading <br /> Web3 Health + Fitness app</LiterowText>
        </LiterowDivImage>
      </LiterowSection>

      {/* How */}
      <HowSection isMobile={isMobile}>
        <SectionContainer>
          <HowSectionTop>
            <HowContent>
              <SectionTitle>HOW WE PROFIT</SectionTitle>
              <HowContentText>We take small taxes from in-app activities, such as NFT trading, Bicycle-minting and Bicycle-rental. All assets in the ZOROBIKE app are owned by individual users and majority of earnings in app are made by users.</HowContentText>
            </HowContent>

            <HowContent>
              <SectionTitle>CARBON NEUTRALITY</SectionTitle>
              <HowContentText>Portion of ZOROBIKE’s profit goes to to donate to people devastated by war and difficult circumstances.</HowContentText>
            </HowContent>
          </HowSectionTop>

          <HowSectionBottom>
            {HowSlideShow()}
          </HowSectionBottom>
        </SectionContainer>
      </HowSection>

      {/* Literow */}
      <LiterowSection>
        <LiterowDivImage>
          <LiterowImage src={liteRowBg2} />

          <LiterowText>Our mission: Cycling for heath, money and doing charity as you ride</LiterowText>
        </LiterowDivImage>
      </LiterowSection>

      {/* Token */}
      <SectionContainer>
        <TokenSection>
          <SectionTitle>THE TOKEN</SectionTitle>

          <TokenListCoin>
            <TokenCoin>
              <TokenDivImage>
                <TokenCoinImage src={i1254} />
                <TokenCoinLabel isMobile={isMobile}>ZORO</TokenCoinLabel>
              </TokenDivImage>

              <TokenCoinText>UNLIMITED SUPPLY</TokenCoinText>
            </TokenCoin>
            <TokenCoin>

              <TokenDivImage>
                <TokenCoinImage src={i1255} />
                <TokenCoinLabel isMobile={isMobile}>BNB</TokenCoinLabel>
              </TokenDivImage>

              <TokenCoinText>UNLIMITED SUPPLY</TokenCoinText>
            </TokenCoin>
          </TokenListCoin>

          <TokenBigCoin>
            <TokenBigCoinDivImage>
              <TokenBigCoinImage src={coin} />

              <TokenBigCoinText isMobile={isMobile}><TokenBoldText>
                BNB </TokenBoldText>GOVERNANCE <br /> TOKEN
              </TokenBigCoinText>
              <TokenBigCoinText right isMobile={isMobile}>
                <TokenBoldText>ZORO </TokenBoldText>ZOROBIKE
              </TokenBigCoinText>
            </TokenBigCoinDivImage>
          </TokenBigCoin>
        </TokenSection>
      </SectionContainer>

      {/* Tokenomic */}
      <SectionContainer>
        <TokenomicSection>
          <SectionTitle>TOKENOMIC</SectionTitle>
          <TokenomicImage src={tokenomic} />
        </TokenomicSection>
      </SectionContainer>

      {/* Token burn */}

      {/* Step 3 */}
      <SectionContainer>
        <Step3Container>
          {!isMobile ?
            <Step4Content>
              <Step4ImageDiv>
                <Step4Image src={zoroburnpc} width={750} />
                <Step4ContentPosition width={350} top={123} left={120} >
                  <Step3TextTitle>IMPROVE MINT</Step3TextTitle>
                  <Step3Text>BURN ZOROBIKE TO PERMANENTLY IMPROVE THE CHANCE TO RECEIVE TWO BICYCLE FROM BICYCLE-MINTING</Step3Text>
                </Step4ContentPosition>

                <Step4ContentPosition width={250} top={263} left={50} >
                  <Step3TextTitle>ZOROBIKE LEVELING</Step3TextTitle>
                  <Step3Text>BURN ZOROBIKE TO REACH LEVEL 5/10/20/29/30</Step3Text>
                </Step4ContentPosition>

                <Step4ContentPosition width={300} top={360} left={110} >
                  <Step3TextTitle>GEM SUCCESS</Step3TextTitle>
                  <Step3Text>BURN ZOROBIKE TO PERMANENTLY IMPROVE SUCCESS RATE OF ALL GEM UPGRADE</Step3Text>
                </Step4ContentPosition>

                <Step4ContentPosition width={250} top={490} left={235} >
                  <Step3TextTitle>GEM UPGRADE</Step3TextTitle>
                  <Step3Text>BURN ZOROBIKE TO UPGRADE LEVEL 4+ GEMS</Step3Text>
                </Step4ContentPosition>

                <Step4ContentPosition width={340} top={125} left={857} >
                  <Step3TextTitle>INCREASE ZOROBIKE CAP</Step3TextTitle>
                  <Step3Text>BURN ZOROBIKE TO PERMANENTLY INCREASE ZOROBIKE DAILY EARNING CAP</Step3Text>
                </Step4ContentPosition>

                <Step4ContentPosition width={250} top={240} left={965} >
                  <Step3TextTitle>MINT RARE</Step3TextTitle>
                  <Step3Text>BURN ZOROBIKE TO MINT RARE, EPIC & LEGENDARY BICYCLE</Step3Text>
                </Step4ContentPosition>

                <Step4ContentPosition width={400} top={347} left={850} >
                  <Step3TextTitle>QUALITY</Step3TextTitle>
                  <Step3Text>BURN ZOROBIKE TO PERMANENTLY IMPROVE THE CHANCE TO RECEIVE A HIGHER QUALITY BICYCLE FROM OPENING ZOROBOX</Step3Text>
                </Step4ContentPosition>

                <Step4ContentPosition width={260} top={484} left={977} >
                  <Step3TextTitle>RE-DISTRIBUTE</Step3TextTitle>
                  <Step3Text>BURN ZOROBIKE TO RE-DISTRIBUTE ATTRIBUTE POINTS</Step3Text>
                </Step4ContentPosition>
              </Step4ImageDiv>
            </Step4Content>
            :
            <Step3ContentMobile>
              <Step3ImagetMobile src={zoroburn} />

              <Step3ContentPosition pt={20} >
                <Step3TextTitle>IMPROVE MINT</Step3TextTitle>
                <Step3Text>BURN ZOROBIKE TO PERMANENTLY IMPROVE THE CHANCE TO RECEIVE TWO BICYCLE FROM BICYCLE-MINTING</Step3Text>
              </Step3ContentPosition>

              <Step3ContentPosition pt={20} >
                <Step3TextTitle>ZOROBIKE LEVELING</Step3TextTitle>
                <Step3Text>BURN ZOROBIKE TO REACH LEVEL 5/10/20/29/30</Step3Text>
              </Step3ContentPosition>

              <Step3ContentPosition pt={20} >
                <Step3TextTitle>GEM SUCCESS</Step3TextTitle>
                <Step3Text>BURN ZOROBIKE TO PERMANENTLY IMPROVE SUCCESS RATE OF ALL GEM UPGRADE</Step3Text>
              </Step3ContentPosition>

              <Step3ContentPosition pt={20} >
                <Step3TextTitle>GEM UPGRADE</Step3TextTitle>
                <Step3Text>BURN ZOROBIKE TO UPGRADE LEVEL 4+ GEMS</Step3Text>
              </Step3ContentPosition>

              <Step3ContentPosition pt={20} >
                <Step3TextTitle>INCREASE ZOROBIKE CAP</Step3TextTitle>
                <Step3Text>BURN ZOROBIKE TO PERMANENTLY INCREASE ZOROBIKE DAILY EARNING CAP</Step3Text>
              </Step3ContentPosition>

              <Step3ContentPosition pt={20} >
                <Step3TextTitle>MINT RARE</Step3TextTitle>
                <Step3Text>BURN ZOROBIKE TO MINT RARE, EPIC & LEGENDARY BICYCLE</Step3Text>
              </Step3ContentPosition>

              <Step3ContentPosition pt={20} >
                <Step3TextTitle>QUALITY</Step3TextTitle>
                <Step3Text>BURN ZOROBIKE TO PERMANENTLY IMPROVE THE CHANCE TO RECEIVE A HIGHER QUALITY BICYCLE FROM OPENING ZOROBOX</Step3Text>
              </Step3ContentPosition>

              <Step3ContentPosition pt={20} >
                <Step3TextTitle>RE-DISTRIBUTE</Step3TextTitle>
                <Step3Text>BURN ZOROBIKE TO RE-DISTRIBUTE ATTRIBUTE POINTS</Step3Text>
              </Step3ContentPosition>
            </Step3ContentMobile>
          }
        </Step3Container>
      </SectionContainer>


      {/* Buring */}
      <SectionContainer>
        <BurningSection>
          <SectionTitle>TOKEN BURNING</SectionTitle>
          <BurningList>
            <BurningListItem>
              <BurningItemImage> <img src={i1253} alt="" /> </BurningItemImage>
              <BurningItemImage> </BurningItemImage>
              <BurningItemText>MOVING TO EARN</BurningItemText>
            </BurningListItem>

            <BurningListItem>
              <BurningItemImage> <img src={i1254} alt="" /> </BurningItemImage>
              <BurningItemImage> </BurningItemImage>
              <BurningItemText>BICYCLE REPAIR</BurningItemText>
            </BurningListItem>

            <BurningListItem>
              <BurningItemImage> <img src={i1254} alt="" /> </BurningItemImage>
              <BurningItemImage> </BurningItemImage>
              <BurningItemText>BICYCLE SOCKETS UNLOCKING</BurningItemText>
            </BurningListItem>

            <BurningListItem>
              <BurningItemImage> <img src={i1254} alt="" /> </BurningItemImage>
              <BurningItemImage> </BurningItemImage>
              <BurningItemText>LEVEL UP/MYSTERY BOX BOOSTING</BurningItemText>
            </BurningListItem>

            <BurningListItem>
              <BurningItemImage> <img src={i1255} alt="" /> </BurningItemImage>
              <BurningItemImage> </BurningItemImage>
              <BurningItemText>CUSTOMISATION FEE</BurningItemText>
            </BurningListItem>

            <BurningListItem>
              <BurningItemImage> <img src={i1254} alt="" /> </BurningItemImage>
              <BurningItemImage> <img src={i1255} alt="" /> </BurningItemImage>
              <BurningItemText>LEVEL UP BICYCLE</BurningItemText>
            </BurningListItem>

            <BurningListItem>
              <BurningItemImage> <img src={i1254} alt="" /> </BurningItemImage>
              <BurningItemImage> <img src={i1255} alt="" /> </BurningItemImage>
              <BurningItemText>BICYCLE-MINTING</BurningItemText>
            </BurningListItem>

            <BurningListItem>
              <BurningItemImage> <img src={i1254} alt="" /> </BurningItemImage>
              <BurningItemImage> <img src={i1255} alt="" /> </BurningItemImage>
              <BurningItemText>UPGRADE GEMS</BurningItemText>
            </BurningListItem>
          </BurningList>
        </BurningSection>
      </SectionContainer>

      {/* Roadmap */}
      <RoadmapSection>
        <SectionContainer>
          <SectionTitle>ROADMAP</SectionTitle>
        </SectionContainer>
        <RoadmapImage src={roadmapMobileZOROBIKE} />
      </RoadmapSection>
    </Container>
  )
}

export default Litepaper