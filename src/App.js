import React, { useState } from 'react';
import styled from 'styled-components'
import Lamp from './lamp.js'
import LightSwitch from './lightswitch.js'

const Room = styled.div`
position: relative;
width: 500px;
height: 500px;
border: 10px solid black;
margin: 0 auto;
`
function App() {
  const  [isLampOneOn, setIsLampOneOn] = useState(false)
  const  [isLampTwoOn, setIsLampTwoOn] = useState(true)
  const handleLightSwtichOne = () => setIsLampOneOn(prev => !prev)
  const handleLightSwtichTwo = () => setIsLampTwoOn(prev => !prev)

  return (
    <Room>
      <Lamp lampOn={isLampOneOn} position='left'></Lamp>
      <Lamp lampOn={isLampTwoOn} position='right'></Lamp>
      <LightSwitch
        name='one'
        changeLight={handleLightSwtichOne}
        switchLigh={isLampOneOn}
        position='left'
      ></LightSwitch>
      <LightSwitch
        name='two'
        changeLight={handleLightSwtichTwo}
        switchLigh={isLampTwoOn}
        position='right'
      ></LightSwitch>
    </Room>
  );
}

export default App;
