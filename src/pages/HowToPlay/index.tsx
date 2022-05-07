import styled from 'styled-components'
import tw from 'twin.macro'
import { useMediaQuery } from 'react-responsive'

import { deviceSize } from 'responsive'

import header from "images/header.png"
import shoe1 from "images/shoe1.png"
import shoe2 from "images/shoe2.png"
import shoe3 from "images/shoe3.png"
import shoe4 from "images/shoe4.png"
import jiao from "images/jiao.png"
import shan from "images/shan.png"
import gst from "images/gst-1.png"
import app1 from "images/app1-1.png"
import defaultShoe from "images/default_shoe.png"
import shoeBox from "images/shoeBox-1.png"
import app2 from "images/app2-1.png"
import mapp2 from "images/mapp2.png"
import app3 from "images/app3-1.png"
import app4 from "images/app4-1.png"
import mapp4 from "images/mapp4.png"
import xinhao1 from "images/xinhao1.svg"
import pan from "images/pan.png"
import app6 from "images/app6-1.png"
import app7 from "images/app7-1.png"
import mint from "images/mint.png"
import trans from "images/trans-1.png"

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

const StepTitle = styled.div<{ position?: string }>`
  ${tw` font-bold text-xl md:text-4xl text-center md:text-left uppercase `}
`

const StepText = styled.div<{ flex?: any }>`
  ${tw` text-14 md:text-xl uppercase `}
  ${({ flex }) => flex ? "display: flex" : ""}
`

const StepSection = styled.div`
  ${tw` py-10 px-3 w-full max-width[1000px] m-auto `}
`

const Step1Title = styled.div`
  ${tw` mb-10 text-center `}
`

const Step1Desc = styled.div`
  ${tw` mb-10 text-center `}
`

const Step1List = styled.div`
  ${tw` flex flex-wrap justify-between items-center `}
`

const Step1Item = styled.div`
  ${tw` flex flex-col p-3 width[48%] md:width[24%] `}
`

const Step1ItemText = styled.div`
  ${tw` mt-5 flex justify-center`}
`

const Step1ItemImage = styled.img`
  ${tw` flex flex-col m-auto `}
`

const Step1Icon = styled.img`
  ${tw` max-height[20px] md:max-height[30px] max-width[20px] md:max-width[30px] mx-2 `}
`

const Step2Container = styled.div`
  ${tw` flex flex-col md:flex-row `}
`

const Step2Left = styled.div`
  ${tw` flex justify-center items-center text-center md:text-left flex[1] mb-5 md:mb-0 `}
`

const Step2Right = styled.div`
  ${tw` flex flex[2] `}
`

const Step2RightImage = styled.div`
  ${tw` flex[1] p-1 `}
`

const Step2RightContent = styled.div`
  ${tw` flex[1] `}
`

const Step3Container = styled.div`
  ${tw` `}
`

const Step3Title = styled.div`
  ${tw` text-center md:text-left `}
`

const Step3Content = styled.div`
  ${tw` relative flex justify-between `}
`

const Step3Image = styled.img`
  ${tw` absolute `}
  width: 750px;
  left: 50%;
  transform: translateX(-50%);
`

const Step3ContentLeft = styled.div`
  ${tw` `}
`

const Step3ContentRight = styled.div`
  ${tw` `}
`

const Step3ContentPosition = styled.div<{ width?: number, pt?: number, right?: any }>`
  ${tw` `}
  padding-top: ${({ pt }) => pt ? `${pt}px` : "0"};
  width: ${({ width }) => width ? `${width}px` : "auto"};
  text-align: ${({ right }) => right ? `right` : "left"};
`

const Step3Text = styled.div`
  ${tw` text-14 md:text-xl `}
`

const Step3SpanContainer = styled.div`
  ${tw` flex flex-wrap `}
`

const Step3TextSpan = styled.span<{ color?: string }>`
  ${tw` text-13 md:text-18 font-bold px-2 py-1 mr-1 mt-1 `}
  background-color: ${({ color }) => color ? `${color}` : "transparent"};
`

const Step3TextTitle = styled.div`
  ${tw` text-14 md:text-xl font-bold `}
`

const Step3ContentMobile = styled.div`
  ${tw` flex flex-col p-3 `}
`

const Step3ImagetMobile = styled.img`
  ${tw` p-3 `}
`

const Step4Container = styled.div`
  ${tw` py-3 `}
`

const Step4Title = styled.div`
  ${tw` text-center md:text-left `}
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

const Step4TextPosition = styled.div<{ width?: number, top?: number, left?: number }>`
  ${tw` absolute `}
  top: ${({ top }) => top ? `${top}px` : "0"};
  left: ${({ left }) => left ? `${left}px` : "0"};
  width: ${({ width }) => width ? `${width}px` : "auto"};
`

const Step5Menu = styled.div`
  ${tw` flex justify-evenly py-5 `}
`

const Step5MenuItem = styled.div`
  ${tw` flex `}
`

const Step5MenuImage = styled.img`
  ${tw` width[30px] md:width[50px] mr-3 object-contain `}
`

const Step5MenuText = styled.div`
  ${tw` text-12 md:text-xl `}
`

const Step6Container = styled.div`
  ${tw` py-3 flex flex-col md:flex-row `}
`

const Step6Left = styled.div`
  ${tw` flex[1] flex justify-center items-center `}
`

const Step6LeftTitle = styled.div`
  ${tw` p-3 md:p-5 text-center md:text-left `}
`

const Step6Right = styled.div`
  ${tw` flex[1] `}
`

const Step6RightImage = styled.img`
  ${tw` max-width[250px] m-auto md:m-0 md:max-width[350px] `}
`

const Step7Container = styled.div`
  ${tw` flex flex-col md:flex-row p-3 md:p-0 `}
`

const Step7Left = styled.div`
  ${tw` flex[3] `}
`

const Step7Right = styled.div`
  ${tw` flex[2] `}
`

const Step7DivImage = styled.div`
  ${tw` mr-0 md:mr-10 `}
`

const Step7Image = styled.img`
  ${tw` `}
`

const Step7Text = styled.div`
  ${tw` font-normal text-14 md:font-bold md:text-xl mt-7 flex items-center `}
`

const BottomTitle = styled.div`
  ${tw` text-center text-3xl md:text-7xl font-bold font-overpass my-3 md:my-8 `}
`


const HowToPlay = () => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.tablet })

  return (
    <Container>
      {/* Header */}
      <HeaderSection>
        <HeaderImage src={header} />
        <HeaderTitle>HOW TO MAKE YOUR <br /> RIDE COUNT</HeaderTitle>
      </HeaderSection>

      {/* Step 1 */}
      <StepSection>
        <Step1Title>
          <StepTitle>1、CHOOSE A BICYCLE THAT FITS <br /> YOUR FITNESS LEVEL</StepTitle>
        </Step1Title>

        <Step1Desc>
          <StepText>You only earn when you own an NFT BICYCLE and ride or run outdoors with <br /> GPS - ZORObike app on your phone</StepText>
        </Step1Desc>

        <Step1List>
          <Step1Item>
            <Step1ItemImage src={shoe1} />
            <Step1ItemText>
              <StepText flex>ROADBIKE </StepText>
            </Step1ItemText>
            <Step1ItemText>
              <StepText flex>15-35 (KM/HR) </StepText>
            </Step1ItemText>
            <Step1ItemText>
              <StepText flex>1 <Step1Icon src={shan} /> ≈ 4 <Step1Icon src={gst} /> </StepText>
            </Step1ItemText>
          </Step1Item>

          <Step1Item>
            <Step1ItemImage src={shoe2} />
            <Step1ItemText>
              <StepText flex>MOUNTAINBIKE </StepText>
            </Step1ItemText>
            <Step1ItemText>
              <StepText flex>10-20 (KM/HR) </StepText>
            </Step1ItemText>
            <Step1ItemText>
              <StepText flex>1 <Step1Icon src={shan} /> ≈ 5 <Step1Icon src={gst} /> </StepText>
            </Step1ItemText>
          </Step1Item>

          <Step1Item>
            <Step1ItemImage src={shoe3} />
            <Step1ItemText>
              <StepText flex>FATBIKE </StepText>
            </Step1ItemText>
            <Step1ItemText>
              <StepText flex>12-30 (KM/HR) </StepText>
            </Step1ItemText>
            <Step1ItemText>
              <StepText flex>1 <Step1Icon src={shan} /> ≈ 6<Step1Icon src={gst} /> </StepText>
            </Step1ItemText>
          </Step1Item>

          <Step1Item>
            <Step1ItemImage src={shoe4} />
            <Step1ItemText>
              <StepText flex>FIXGEAR </StepText>
            </Step1ItemText>
            <Step1ItemText>
              <StepText flex>12-25 (KM/HR) </StepText>
            </Step1ItemText>
            <Step1ItemText>
              <StepText flex>1 <Step1Icon src={shan} /> ≈ 4 - 6<Step1Icon src={gst} /> </StepText>
            </Step1ItemText>
          </Step1Item>
        </Step1List>
      </StepSection>

      {/* Step 2 */}
      <StepSection>
        <Step2Container>
          <Step2Left>
            <StepTitle>2、Find a suitable bicycle from the in-app marketplace</StepTitle>
          </Step2Left>

          <Step2Right>
            <Step2RightImage>
              <img src={app1} alt="" />
            </Step2RightImage>

            <Step2RightContent>
              <StepText>SEARCH FILTER</StepText>
              <img src={defaultShoe} alt="" className="my-5" style={{ width: isMobile ? "100px" : "100%" }} />
              <StepText>OWN MORE BICYCLE TO GAIN HIGHER ENERGY LEVEL</StepText>
              <img src={shoeBox} alt="" />
              <StepText>ZORO BOX CONTAINS ONE BICYCLE WITH RANDOM TYPE AND QUALITY</StepText>
            </Step2RightContent>
          </Step2Right>
        </Step2Container>
      </StepSection>

      {/* Step 3 */}
      <StepSection>
        <Step3Container>
          <Step3Title>
            <StepTitle>3、BICYCLE DETAIL PAGE</StepTitle>
          </Step3Title>

          {!isMobile ?
            <Step3Content>
              <Step3Image src={app2} />

              <Step3ContentLeft>
                <Step3ContentPosition width={200} pt={20} >
                  <Step3Text>HIGHER QUALITY SOCKET BOOSTS THE GEM'S ATTRIBUTE</Step3Text>
                </Step3ContentPosition>

                <Step3ContentPosition width={300} pt={20} >
                  <Step3Text>QUALITY</Step3Text>
                  <Step3SpanContainer>
                    <Step3TextSpan color="gray">Common</Step3TextSpan>
                    <Step3TextSpan color="lightgreen">Uncommon</Step3TextSpan>
                    <Step3TextSpan color="lightblue">Rare</Step3TextSpan>
                    <Step3TextSpan color="gold">Epic</Step3TextSpan>
                    <Step3TextSpan color="orange">Legendary</Step3TextSpan>
                  </Step3SpanContainer>
                </Step3ContentPosition>

                <Step3ContentPosition width={200} pt={20} >
                  <Step3TextTitle>EFFICIENCY</Step3TextTitle>
                  <Step3Text>Enhance Zoro Earning</Step3Text>
                </Step3ContentPosition>

                <Step3ContentPosition width={200} pt={50} >
                  <Step3TextTitle>Luck</Step3TextTitle>
                  <Step3Text>Enhance Mystery Box drop rate</Step3Text>
                </Step3ContentPosition>
              </Step3ContentLeft>

              <Step3ContentRight>
                <Step3ContentPosition width={200} pt={20} right >
                  <Step3Text>INCREASE SNEAKER'S ATTRIBUTE WITH GEMS</Step3Text>
                </Step3ContentPosition>

                <Step3ContentPosition width={200} pt={60} right >
                  <Step3Text>REPAIR AFTER MOVING OUTDOORS</Step3Text>
                </Step3ContentPosition>

                <Step3ContentPosition width={200} pt={35} right >
                  <Step3TextTitle>COMFORT</Step3TextTitle>
                  <Step3Text>Enhance Zoro earning (at level 30)</Step3Text>
                </Step3ContentPosition>

                <Step3ContentPosition width={200} pt={85} right >
                  <Step3TextTitle>RESILIENCE</Step3TextTitle>
                  <Step3Text>Reduces repair costs</Step3Text>
                </Step3ContentPosition>
              </Step3ContentRight>
            </Step3Content>
            :
            <Step3ContentMobile>
              <Step3ImagetMobile src={app2} />

              <Step3ContentPosition pt={20} >
                <Step3Text>HIGHER QUALITY SOCKET BOOSTS THE GEM'S ATTRIBUTE</Step3Text>
              </Step3ContentPosition>

              <Step3ContentPosition pt={20} >
                <Step3Text>INCREASE BICYCLE'S ATTRIBUTE WITH GEMS</Step3Text>
              </Step3ContentPosition>

              <Step3ContentPosition pt={20} >
                <Step3Text>QUALITY</Step3Text>
                <Step3SpanContainer>
                  <Step3TextSpan color="gray">Common</Step3TextSpan>
                  <Step3TextSpan color="lightgreen">Uncommon</Step3TextSpan>
                  <Step3TextSpan color="lightblue">Rare</Step3TextSpan>
                  <Step3TextSpan color="gold">Epic</Step3TextSpan>
                  <Step3TextSpan color="orange">Legendary</Step3TextSpan>
                </Step3SpanContainer>
              </Step3ContentPosition>

              <Step3ContentPosition pt={20} >
                <Step3Text>REPAIR AFTER MOVING OUTDOORS</Step3Text>
              </Step3ContentPosition>

              <Step3ContentPosition pt={20} >
                <Step3TextTitle>EFFICIENCY</Step3TextTitle>
                <Step3Text>Enhance Zoro earning</Step3Text>
              </Step3ContentPosition>

              <Step3ContentPosition pt={20} >
                <Step3TextTitle>COMFORT</Step3TextTitle>
                <Step3Text>Enhance Zoro earning (at level 30)</Step3Text>
              </Step3ContentPosition>

              <Step3ContentPosition pt={20} >
                <Step3TextTitle>Luck</Step3TextTitle>
                <Step3Text>Enhance Zoro Box drop rate</Step3Text>
              </Step3ContentPosition>

              <Step3ContentPosition pt={20} >
                <Step3TextTitle>RESILIENCE</Step3TextTitle>
                <Step3Text>Reduces repair costs</Step3Text>
              </Step3ContentPosition>
            </Step3ContentMobile>
          }
        </Step3Container>
      </StepSection>

      {/* Step 4 */}
      <StepSection>
        <Step4Container>
          <Step4Title>
            <StepTitle>4、Equip your bicycle, ride or run outdoors <br /> burn energy and earn awesome rewards</StepTitle>
          </Step4Title>

          <Step4Content>
            <Step4ImageDiv>
              <Step4Image src={app3} width={isMobile ? 200 : 550} />

              <Step4TextPosition width={isMobile ? 80 : 100} top={isMobile ? 60 : 183} left={isMobile ? 22 : 130}>
                <StepText> EARN ZORO BOX </StepText>
              </Step4TextPosition>
              <Step4TextPosition width={isMobile ? 80 : 100} top={isMobile ? 173 : 493} left={isMobile ? 35 : 187}>
                <StepText> ENERGY CAP </StepText>
              </Step4TextPosition>
              <Step4TextPosition width={isMobile ? 80 : 100} top={isMobile ? 23 : 80} left={isMobile ? 273 : 750}>
                <StepText> BICYCLE TYPE </StepText>
              </Step4TextPosition>
              <Step4TextPosition width={isMobile ? 80 : 100} top={isMobile ? 130 : 374} left={isMobile ? 284 : 780}>
                <StepText> EARNING CAP </StepText>
              </Step4TextPosition>
            </Step4ImageDiv>
          </Step4Content>
        </Step4Container>
      </StepSection>

      {/* Step 5 */}
      <StepSection>
        <Step4Container>
          <Step4Title>
            <StepTitle>5、MEASURE CYCLING OUTDOORS WITH GPS</StepTitle>
          </Step4Title>

          <Step5Menu>
            <Step5MenuItem>
              <Step5MenuImage src={pan} />
              <Step5MenuText>STRONG <br /> GPS</Step5MenuText>
            </Step5MenuItem>
            <Step5MenuItem>
              <Step5MenuText>ENSURE <br /> RUNNG</Step5MenuText>
            </Step5MenuItem>
            <Step5MenuItem>
              <Step5MenuImage src={xinhao1} />
              <Step5MenuText>RUN WITHIN <br /> GREEN ZONE</Step5MenuText>
            </Step5MenuItem>
          </Step5Menu>

          {!isMobile ?
            <Step4Content>
              <Step4ImageDiv>
                <Step4Image src={app4} width={450} />

                {/* <Step4TextPosition width={180} top={39} left={82}>
                  <Step3TextTitle>ANTI-CHEATING</Step3TextTitle>
                  <StepText>YOU ARE NOT EARNING IF MOONWALKING</StepText>
                </Step4TextPosition> */}
                <Step4TextPosition width={200} top={300} left={90}>
                  <Step3TextTitle> OPTIMAL SPEED RANGE </Step3TextTitle>
                </Step4TextPosition>
                <Step4TextPosition width={300} top={170} left={680}>
                  <Step3TextTitle> STRONG GPS </Step3TextTitle>
                </Step4TextPosition>
                <Step4TextPosition width={300} top={433} left={732}>
                  <Step3TextTitle> CHANGE BICYCLE </Step3TextTitle>
                </Step4TextPosition>
              </Step4ImageDiv>
            </Step4Content>
            :
            <Step3ContentMobile>
              <Step3ImagetMobile src={app4} />

              {/* <Step3ContentPosition pt={20} >
                <Step3TextTitle>ANTI-CHEATING</Step3TextTitle>
                <StepText>YOU ARE NOT EARNING IF MOONWALKING</StepText>
              </Step3ContentPosition> */}

              <Step3ContentPosition pt={20} >
                <Step3TextTitle> STRONG GPS </Step3TextTitle>
              </Step3ContentPosition>

              <Step3ContentPosition pt={20} >
                <Step3TextTitle> OPTIMAL SPEED RANGE </Step3TextTitle>
              </Step3ContentPosition>

              <Step3ContentPosition pt={20} >
                <Step3TextTitle> CHANGE BICYCLE </Step3TextTitle>
              </Step3ContentPosition>
            </Step3ContentMobile>
          }
        </Step4Container>
      </StepSection>

      {/* Step 6 */}
      <StepSection>
        <Step6Container>
          <Step6Left>
            <Step6LeftTitle>
              <StepTitle>6、CHECK & FLEX: CHECK YOUR EARNINGS + SHARE ON SOCIAL</StepTitle>
            </Step6LeftTitle>
          </Step6Left>

          <Step6Right>
            <Step6RightImage src={app6} />
          </Step6Right>
        </Step6Container>
      </StepSection>

      {/* Step 7 */}
      <StepSection>
        {!isMobile ?
          <Step7Container>
            <Step7Left>
              <Step7DivImage>
                <Step7Image src={app7} />
              </Step7DivImage>
            </Step7Left>

            <Step7Right>
              <StepTitle>7、BURN ZORO</StepTitle>
              <Step7Text>1) LEVEL UP BICYCLE TO <br /> MAKE IT MORE EFFICIENT</Step7Text>
              <Step7Text>2) MINT A NEW BICYCLE TO <br /> SELL OR KEEP IT</Step7Text>
              {/* <img src={mint} className="mt-8 mb-12" style={{ height: 80 }} alt="" /> */}
              <Step7Text>3) SWAP TO BNB</Step7Text>
              <img src={trans} className="mt-5" style={{ height: 50 }} alt="" />
            </Step7Right>
          </Step7Container>
          :
          <Step7Container>
            <Step7Left>
              <StepTitle position="center" className="py-5">7、BURN ZORO</StepTitle>
              <Step7DivImage>
                <Step7Image src={app7} />
              </Step7DivImage>
            </Step7Left>

            <Step7Right>
              <Step7Text>1) LEVEL UP BICYCLE TO MAKE IT MORE EFFICIENT</Step7Text>
              <Step7Text>2) MINT A NEW BICYCLE TO SELL OR KEEP IT</Step7Text>
              {/* <img src={mint} className="mt-8 mb-12" style={{ height: 80 }} alt="" /> */}
              <Step7Text>3) SWAP TO USDC <img src={trans} style={{ height: 30, marginLeft: 10 }} alt="" /></Step7Text>
            </Step7Right>
          </Step7Container>
        }
      </StepSection>

      <StepSection>
        <BottomTitle> YOUR RIDE COUNT <br /> WITH ZOROBIKE</BottomTitle>
      </StepSection>
    </Container>
  )
}

export default HowToPlay