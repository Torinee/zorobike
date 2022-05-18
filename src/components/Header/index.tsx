import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import tw from 'twin.macro'

import logo from "images/logo.png"
import closeDialog from "images/closeDialog.svg"
import iosbg from "images/iosbg.svg"
import googlePlay from "images/googlePlay.svg"

import Portal from 'components/Portal'
import { useMediaQuery } from 'react-responsive'
import { deviceSize } from 'responsive'

const Container = styled.div`
  ${tw` absolute z-100 w-full p-5 md:p-10 flex justify-between items-center `}
`

const ContainerLeft = styled.div`
  ${tw` `}
`

const Logo = styled.img`
  ${tw` max-height[40px] md:max-height[50px] `}
`

const ContainerRight = styled.div`
  ${tw` flex `}
`

const DownloadNow = styled.div`
  ${tw` flex justify-center items-center pr-0 md:pr-10 cursor-pointer `}
`

const breathe = keyframes`
  0% {
    transform: scale(1);
  }

  25% {
    transform: scale(0.9);
  }

  50% {
    transform: scale(1);
  }

  75% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
`

const DownloadNowText = styled.div`
  ${tw` px-3 pb-2 font-bold bg-white text-16 md:text-2xl `}
  border: 1px solid black;
  border-radius: 25px;
  animation: 3s linear 0s infinite normal none running ${breathe};
`

const MenuToggle = styled.div`
  ${tw` flex flex-col p-3 cursor-pointer `}
`

const MenuToggleItem = styled.div<{ width?: number }>`
  ${tw` my-1 height[5px] md:height[10px] `}
  width: ${({ width }) => width ? `${width}px` : "50px"};
  transition-duration: .5s;
  background: black;
`

const Menu = styled.div<{ show: boolean }>`
  ${tw` absolute h-screen right-0 top-0 bg-background opacity-90 overflow-hidden `}
  z-index: ${({ show }) => show ? 10 : -1};
  width: ${({ show }) => show ? "100%" : "0"};
  transition-duration: .5s;
`

const MenuContainer = styled.ul`
  ${tw` flex flex-col items-center `}
  padding-top: 150px;
`

const MenuItem = styled.li`
  ${tw` text-2xl md:text-4xl mt-10 font-overpass font-bold w-screen overflow-hidden text-center `}
`

const ShadowWrapper = styled.div`
  ${tw` w-screen h-screen fixed top-0 left-0 z-100 background-color[#00000085] flex items-center justify-center `}
`

const ShadowBox = styled.div`
  ${tw` relative p-5 md:p-14 bg-black max-width[550px] w-full m-5 md:m-10 opacity-90 `}
`

const ShadowText = styled.div`
  ${tw` text-xl md:text-3xl text-white mb-5 md:mb-10 text-center font-weight[bold] `}
`

const ShadowListLink = styled.div`
  ${tw` flex flex-col md:flex-row justify-around `}
`

const ShadowLink = styled.a``

const ShadowImageBg = styled.div`
  ${tw` bg-white border-radius[5px] p-5 m-3 `}
`

const ShadowImage = styled.img`
  ${tw` `}
`

const ShadowClose = styled.img`
  ${tw` absolute right-0 top-0 cursor-pointer width[35px] md:width[auto] `}
`

const Header = () => {
  const [show, setShow] = useState(false)
  const [download, setDownload] = useState(false)
  const navigate = useNavigate()

  const isMobile = useMediaQuery({ maxWidth: deviceSize.tablet })

  function disableScroll() {
    if (window) {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    }
  }

  function enableScroll() {
    window.onscroll = function () { };
  }

  const handleShowMenu = () => {
    if (show) {
      enableScroll()
      setShow(false)
    } else {
      disableScroll()
      setShow(true)
    }
  }

  const handleOnLink = (location: string) => {
    enableScroll()
    setShow(false)
    navigate(location)
  }

  return (
    <Container>
      <ContainerLeft>
        <Logo src={logo} />
      </ContainerLeft>

      <ContainerRight>
        <DownloadNow onClick={() => setDownload(true)}>
          <DownloadNowText>
            <a href='#download'>
              Download Now
            </a>
          </DownloadNowText>
        </DownloadNow>

        <MenuToggle onClick={() => handleShowMenu()}>
          <MenuToggleItem width={show ? isMobile ? 15 : 25 : isMobile ? 30 : 50} />
          <MenuToggleItem width={show ? isMobile ? 22 : 35 : isMobile ? 30 : 50} />
          <MenuToggleItem width={isMobile ? 30 : 50} />
        </MenuToggle>
      </ContainerRight>

      {download &&
        <ShadowWrapper>
          <ShadowBox>
            <ShadowText>DOWNLOAD NOW</ShadowText>
            <ShadowListLink>
              <ShadowLink href="/zorobike.apk">
                <ShadowImageBg>
                  <ShadowImage src={iosbg} />
                </ShadowImageBg>
              </ShadowLink>

              <ShadowLink href="#">
                {/* <a href="https://install.appcenter.ms/users/ahihi1125/apps/zorobike/distribution_groups/game" > */}
                <ShadowImageBg>
                  <ShadowImage src={googlePlay} />
                </ShadowImageBg>
              </ShadowLink>
            </ShadowListLink>

            <ShadowClose src={closeDialog} onClick={() => setDownload(false)} />
          </ShadowBox>
        </ShadowWrapper>
      }

      <Portal>
        <Menu show={show}>
          <MenuContainer>
            <MenuItem onClick={() => handleOnLink("/")}>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem onClick={() => handleOnLink("/howToPlay")}>
              <Link to="/howToPlay">How to Play</Link>
            </MenuItem>
            <MenuItem>
              <a href="/#">Whitepaper</a>
            </MenuItem>
            <MenuItem onClick={() => handleOnLink("/litePaper")}>
              <Link to="/litePaper">Litepaper</Link>
            </MenuItem>
            <MenuItem>
              <a href="/#">LinkTree</a>
            </MenuItem>
          </MenuContainer>
        </Menu>
      </Portal>
    </Container>
  )
}

export default Header