import { Outlet } from 'react-router'
import styled from 'styled-components'
import tw from 'twin.macro'

import Footer from 'components/Footer'
import Header from 'components/Header'

const Container = styled.div`
  ${tw` overflow-hidden `}
`
const Content = styled.div`
  ${tw` overflow-hidden `}
`

const HomeLayout = () => {
  return (
    <Container>
      <Header />
      <Content> <Outlet /> </Content>
      <Footer />
    </Container>
  )
}

export default HomeLayout