import React from 'react'
import styled from 'styled-components'


const AlbumInfo = styled.div`
    position: relative;
`
const PhotoCol = styled.div`
    position: absolute;
    bottom: 0;
    padding: 0px 0px 10px 0px;
    text-align: center;
    width: 100%;
    color: white;
`

const Dark = styled.div`
    position: absolute;
    z-index: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    height: 150px;
    pointer-events: none;
`


export default function AlbumCover(props) {
    return (
        <AlbumInfo>
            <Dark></Dark>
            <PhotoCol>{props.photos.length} фотографий</PhotoCol>
            {
                props.photos.length &&  <img style={{cursor: 'pointer'}} alt="" src={props.photos[0].thumbnailUrl} onClick={() => props.setShow()}></img>
            }
        </AlbumInfo>
    )
}
