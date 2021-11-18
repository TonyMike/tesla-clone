import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home () {
  return (
    <Container>
      <Section
        title='Model S'
        description='Order Online for Touchless Delivery'
        leftButton='custom order'
        rightButton='existing inventory'
        car='model-s.jpg'
      />
      <Section
        title='Model Y'
        description='Order Online for Touchless Delivery'
        leftButton='custom order'
        rightButton='existing inventory'
        car='model-y.jpg'
      />
      <Section
        title='Model X'
        description='Order Online for Touchless Delivery'
        leftButton='custom order'
        rightButton='existing inventory'
        car='model-x.jpg'
      />
      <Section
        title='Model Z'
        description='Order Online for Touchless Delivery'
        leftButton='custom order'
        rightButton='existing inventory'
        car='model-z.jpg'
      />
       <Section
        title='Lowest Solar Panels in Nigeria'
        description='Complete Money Back Guarantee'
        leftButton='order now'
        rightButton='learn more'
        car='solar-panel.jpg'
      />
       <Section
        title='Solar for New Roofs'
        description='Solar Room Xost Less Than a New Room'
        leftButton='order now'
        rightButton='learn more'
        car='solar-roof.jpg'
      />
       <Section
        title='Accesories'
        description=''
        leftButton='shop now'
        car='accessories.jpg'
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`
