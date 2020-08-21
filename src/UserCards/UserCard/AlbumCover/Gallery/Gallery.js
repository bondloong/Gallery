import React from 'react'
import styled from 'styled-components'

const PhotoList = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    align-items: flex-start;
`
const Photo = styled.div`
    margin-bottom: 25px;
    position: relative;
`
const PhotomName = styled.div`
    width: 150px;
`

export default function Gallery(props) {
    return (
        <PhotoList>
            {
                props.photoList.map((photo, index) => {
                    return(
                        <Photo key={index}>
                            <img style={{cursor: 'pointer'}} alt="" src={photo.thumbnailUrl} onClick={() => props.showSlider(index)}></img>
                            <PhotomName>{photo.title}</PhotomName>
                        </Photo>
                    )
                })
            }
        </PhotoList>
    )
}
    