import React from 'react'
import styled from 'styled-components'
import LightSpeed from 'react-reveal/LightSpeed'

function Section (props) {
  const { title, description, leftButton, rightButton } = props
  return (
    <Wrap style={{ backgroundImage: `url(img/${props.car})` }}>
      <LightSpeed left>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </LightSpeed>
      <Buttons>
        <LightSpeed right>
          <ButtonGroup>
            <LeftButton>{leftButton}</LeftButton>
            {rightButton && <RightButton>{rightButton}</RightButton>}
          </ButtonGroup>
        </LightSpeed>
        <DownArrow src='/img/down-arrow.svg' />
      </Buttons>
    </Wrap>
  )
}

export default Section

const DownArrow = styled.img`
  overflow-x: hidden;
  height: 30px;
  margin-bottom: 20px;
  animation: animateDown infinite 1.5s ease-in-out;
  cursor: pointer;
`
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`

const Wrap = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`
const ItemText = styled.div`
  padding-top: 15vh;
  color: orange;
  text-align: center;
`
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  border-radius: 50px;
  text-transform: uppercase;
  margin: 5px;
  opacity: 0.85;
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 8px;
`
const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`
