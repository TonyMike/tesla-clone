import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import style from '@emotion/styled'
import CloseIcon from '@mui/icons-material/Close'
import { selectCars } from './../features/car/CarSlice'
import { useSelector } from 'react-redux'
function Header () {
  const [BurgerStatus, setBurgerStatus] = useState(false)
  const cars = useSelector(selectCars)
  return (
    <Container>
      <a href='/'>
        <img src='/img/logo.svg' alt='' />
      </a>
      <Menu>
        {cars.map((car, i) => (
          <a key={i} href='/'>
            {car}
          </a>
        ))}
        {/* <a href=''>Model S</a>
        <a href=''>Model Y</a>
        <a href=''>Model X</a>
        <a href=''>Model Z</a> */}
      </Menu>
      <RightMenu>
        <a href='/'>Shop</a>
        <a href='/'>Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={BurgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {
          cars && cars.map((car,index)=> <li><a href="/">{car}</a></li>)
        }
        <li>
          <a href='/'>Existing Inventory</a>
        </li>
        <li>
          <a href='/'>Used Inventory</a>
        </li>
        <li>
          <a href='/'>Trade-in</a>
        </li>
        <li>
          <a href='/'>Cybertruck</a>
        </li>
        <li>
          <a href='/'>Roadster</a>
        </li>
        <li>
          <a href='/'>Semi</a>
        </li>
        <li>
          <a href='/'>Charging</a>
        </li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = style.div`
  z-index:2;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 0px 20px;
  top: 0px;
  right: 0px;
  left: 0px;
`
const Menu = style.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0px 10px;
  }
  @media (max-width: 768px){
      display:none;
  }
`
const RightMenu = style.div`
  display: flex;
  align-items:center;
  a {
    margin-right: 10px;
    text-transform: uppercase;
    font-weight: 600;
  }
`
const CustomMenu = style(MenuIcon)`
   cursor: pointer;
`
const BurgerNav = style.div`
transform: ${props => (props.show ? 'translateX(0px)' : 'translate(100%)')};
transition: transform 0.3s ease-in-out;
  li{
      list-style:none;
      color:white;
      padding:15px;
      border-bottom: 1px solid rgba(0,0,0,0.2)
  }
  position: fixed;
  right:0px;
  top:0px;
  bottom:0px;
  width:300px;
  background-color:white;
  display:flex;
  flex-direction:column;
  padding:20px
`
const CustomClose = style(CloseIcon)``

const CloseWrapper = style.div`
  display:flex;
  justify-content: flex-end;
  cursor: pointer;
`
