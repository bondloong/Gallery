/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import styled from 'styled-components'
import Slide from './Slide/Slide';

const Wrapper = styled.div`
    position: fixed;
    z-index: 5;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`

const SliderMain = styled.div`
    max-width: 600px;
    position: relative;
    margin: auto;
    display: flex;
    align-items:center;
    overflow: hidden;
`
const ButtonTemplate = styled.button`
    position: absolute;
    bottom: 0;
    transform: translateY(-50%);
    width: 50px;
    height: 10%;
    cursor: pointer;
    font-size: 35px;
    background-color: #778899;
    color: #EDEEF0;
`
const PredSlide = styled(ButtonTemplate)`
    left: -50px;
`

const NextSlide = styled(ButtonTemplate)`
    right: -50px;
`

export default function Slider(props) {

    const [x, setX] = useState(props.sliderStart)

    const predSlide = () =>{
        if (x < 0){
            setX(x+100)
        }else{
            setX((x+100) * props.photoList.length *(-1)+100)
        }
    }
    const nextSlide = () =>{
        if (x < props.photoList.length * (-100) + 200 ){
            setX(0)
        }else{
            setX(x-100)
        }
    }

    return (
        <Wrapper>
            <div style={{position: 'relative'}}>
            <SliderMain>
                {props.photoList.map((photo, index) => (
                    <Slide handleClose={()=> props.handleCloseOrOpen()} x={x} key={index} photoUrl={photo.url} photoTitle={photo.title} index={index}></Slide>
                ))}
            </SliderMain>
                <PredSlide onClick={() => predSlide()}>{"<"}</PredSlide>
                <NextSlide onClick={() => nextSlide()}>{">"}</NextSlide>
            </div>
        </Wrapper>
    )
}
