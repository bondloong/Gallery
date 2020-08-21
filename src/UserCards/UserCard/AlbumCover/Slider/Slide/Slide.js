import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
    justify-content: center;
    display: flex;
    position: relative;
    transform: translateX(${props => props.x}%);
    transition: 0.2s;
`

const SlideText = styled.div`
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 75%;
    background-color: rgba(0, 0, 0, 0.3);
    font-size: 15pt;
    color: #EDEEF0;
    padding: 10px 0;
`

const Close = styled.div`
    cursor:pointer;
    position: absolute; 
    top: 0px;
    right: 0px;
    font-size 20pt;
    background-color: rgba(0,0,0,0.3);
    color: #EDEEF0;
    padding: 1px 10px 5px 10px;
`


export default function Slide(props) {
    return (
        <Item x={props.x}>
            <Close onClick={() => props.handleClose()}>✘</Close>
            <img src={props.photoUrl} alt={props.photoTitle}></img>
            <SlideText>{props.photoTitle}</SlideText>
        </Item>
    )
}
