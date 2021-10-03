import React from "react";
import styled from "styled-components";

const Button = styled.button`
position: absolute;
left: ${props => props.position === 'left' ? '20px': '380px'};
bottom: 20px;
border-radius: 50%;
width: 100px;
height: 50px;
cursor: pointer;
`

const LightSwitch = ({switchLigh, changeLight, position}) => (
    <Button onClick={changeLight} position={position}>
        {switchLigh ? 'On': 'Off'}
    </Button>
)

export default LightSwitch