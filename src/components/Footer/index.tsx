import styled from 'styled-components'
import tw from 'twin.macro'
import { useMediaQuery } from 'react-responsive'

import backgroundImage from 'images/footer.svg'
import telegram from 'images/bxlTelegram.svg'
import discut from 'images/discut.svg'
import medium from 'images/medium.svg'
import reddit from 'images/reddit.svg'
import twitter from 'images/twitter.svg'
import email from 'images/email.svg'
import downloadmedia from 'images/downloadmedia.svg'
import socialZoro from 'images/socialZoro.png'
import social1 from 'images/social1.svg'
import social2 from 'images/social2.svg'
import social3 from 'images/social3.png'
import social4 from 'images/social4.svg'
import social5 from 'images/social5.svg'
import social6 from 'images/social6.svg'
import social7 from 'images/social7.png'
import social8 from 'images/social8.png'
import social9 from 'images/social9.svg'

import { deviceSize } from 'responsive'

const Container = styled.div`
  ${tw` w-full h-auto relative `}
`

const Background = styled.div`
  ${tw` height[500px] md:height[350px] `}
  max-width: 100%;
  background-color: #afadad;
`

// const Content = styled.div`
//   ${tw` w-full absolute bottom-0 flex flex-col `}
// `

// const ContentColumn = styled.div`
//   ${tw` flex justify-around items-center w-full max-w-2xl m-auto mb-10 text-white`}
// `

// const ContentItem = styled.div`
//   ${tw` flex text-14 md:text-xl `}
// `

// const ContentItemImage = styled.img`
//   ${tw` height[20px] md:height[30px] `}
// `

const Content = styled.div`
  ${tw` w-full absolute bottom-0 flex flex-col md:flex-row max-width[1000px] m-auto p-3 text-center md:text-left background-color[#afadad] `}
  left: 50%;
  transform: translateX(-50%);
`

const ContentLeft = styled.div`
  ${tw` flex[2] mr-0 md:mr-10 `}
`

const ContentLeftDesc = styled.div`
  ${tw` font-size[13px] line-height[1.6] `}
`

const ContentBackours = styled.div`
  ${tw` py-5 m-auto flex flex-wrap width[260px] md:width[350px] justify-around md:justify-between items-center `}
`

const ContentBackoursItem = styled.a`
  ${tw` m-1 `}
`

const BackourImage = styled.img`
  ${tw``}
`

const ContentRight = styled.div`
  ${tw` flex[1] `}
`

const ContentRightLogo = styled.img`
  ${tw` flex flex-col justify-around max-width[350px] m-auto md:m-0 `}
`

const ContentRightText = styled.div`
  ${tw` pt-3 md:pt-5 `}
`

const HighlightText = styled.div`
  ${tw` mb-3 md:mb-5 font-bold `}
`

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.tablet })

  return (
    <Container>
      <Background />

      <Content>
        <ContentLeft>
          <ContentLeftDesc>Zoro Inu or $ZORO is not a registered digital currency and does not count as an investment. DeFi tokens are not regulated, always make sure you swap what you can afford to lose. Team Zoro are not liable for any financial loss you may incur nor are we responsible for any gains you make.</ContentLeftDesc>
          <ContentBackours>
            <ContentBackoursItem href='https://www.binance.com/en/price/zoro-inu'>
              <BackourImage src={social1} style={{ maxHeight: "50px" }} />
            </ContentBackoursItem>
            <ContentBackoursItem href='https://zoroinu.medium.com/'>
              <BackourImage src={social2} style={{ maxHeight: "50px" }} />
            </ContentBackoursItem>
            <ContentBackoursItem href='https://github.com/zoroinu'>
              <BackourImage src={social3} style={{ maxHeight: "50px" }} />
            </ContentBackoursItem>
            <ContentBackoursItem href='https://www.coinbase.com/how-to-buy/zoro-inu'>
              <BackourImage src={social4} style={{ maxHeight: "50px", width: "120px" }} />
            </ContentBackoursItem>
            <ContentBackoursItem href='https://www.binance.com/en/price/zoro-inu'>
              <BackourImage src={social5} style={{ maxHeight: "40px" }} />
            </ContentBackoursItem>
            <ContentBackoursItem href='https://coinmarketcap.com/currencies/zoro-inu/'>
              <BackourImage src={social6} style={{ maxHeight: "50px", width: "50px" }} />
            </ContentBackoursItem>
            <ContentBackoursItem href='https://nomics.com/assets/zoro4-zoro-inu'>
              <BackourImage src={social7} style={{ maxHeight: "50px" }} />
            </ContentBackoursItem>
            <ContentBackoursItem href='https://www.coingecko.com/en/coins/zoro-inu'>
              <BackourImage src={social8} style={{ maxHeight: "50px" }} />
            </ContentBackoursItem>
            <ContentBackoursItem href='https://crypto.com/price/zoro-inu'>
              <BackourImage src={social9} style={{ maxHeight: "50px", width: "50px" }} />
            </ContentBackoursItem>
          </ContentBackours>
        </ContentLeft>

        <ContentRight>
          <ContentRightLogo src={socialZoro} />
          <ContentRightText>
            <HighlightText>admin@zoroinu.io</HighlightText>
            Copyrights © 2022. Zoro Token
          </ContentRightText>
        </ContentRight>
      </Content>

      {/* <Content>
        <ContentColumn>
          <ContentItem>
            <ContentItemImage src={discut} />
          </ContentItem>
          <ContentItem>
            <ContentItemImage src={telegram} />
          </ContentItem>
          <ContentItem>
            <ContentItemImage src={twitter} />
          </ContentItem>
          <ContentItem>
            <ContentItemImage src={reddit} />
          </ContentItem>
          <ContentItem>
            <ContentItemImage src={medium} />
          </ContentItem>
        </ContentColumn>

        <ContentColumn>
          <ContentItem>
            <ContentItemImage src={email} style={{ paddingRight: "15px" }} /> hello@stepn.com
          </ContentItem>
          <ContentItem>
            <ContentItemImage src={downloadmedia} style={{ paddingRight: "15px" }} /> download media kit
          </ContentItem>
        </ContentColumn>

        <ContentColumn style={{ maxWidth: "100%", fontWeight: "bold", fontSize: "18px" }} >
          <ContentItem style={{ fontSize: isMobile ? "10px" : "16px", textAlign: "center" }}>
            COPYRIGHT FINDSATOSHI LAB LTD. 2022 - ALL RIGHTS RESERVED <br /> POWERED BY FINDSATOSHI LAB LTD.
          </ContentItem>
        </ContentColumn>
      </Content> */}
    </Container>
  )
}

export default Footer