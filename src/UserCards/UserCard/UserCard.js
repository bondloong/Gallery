import React, {useState, useEffect} from 'react'
import styled, {keyframes} from 'styled-components'
import AlbumCover from './AlbumCover/AlbumCover'
import Gallery from './AlbumCover/Gallery/Gallery'
import Slider from './AlbumCover/Slider/Slider';

const UserCardItem = styled.div`
    display: flex;
    /* max-width: 150px; */
    width: 100%;
    margin: 0px 35px;
    flex-flow: column;
    margin-bottom: 20px;
    margin-top: 10px;
    border-radius: 10px;
    padding: 10px 15px;
    background-color: #EDEEF0;
    border-radius: 5px;
    box-shadow: 0px 0px 6px 0px #B2B3B4;
`
const UserName = styled.h2`
    display: block;
    cursor: pointer;
    margin: 10px 0px 0px 0px;
    position: relative;
`

const Arrow = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    transform: rotate(${({x}) => x ? "180deg" : "0"});
    transition: 0.2s;
`

const Album = styled.div`
    position: relative;
    margin 10px 0px;
    width: 150px;
    height: 150px;
`
const AlbomList = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
`

const AlbumName = styled.div`
    position: absolute;
    top: 0;
    z-index: 2;
    padding: 5px;
    color: white;
    font-weight: bold;
    color: #EDEEF0;
`


export default function UserCard(props) {
    const [photoList, setphotoList] = useState([])
    const [albums, setAlbum] = useState([])
    const [photos, setPhotos] = useState([])
    const [showAlbumList, setShow] = useState({
        albumList: true,
        gallery: false,
        slider: false,
        sliderStart: 0,
    });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(json => setAlbum(json.filter(person => person.userId === props.user.id)))
    }, [props])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => setPhotos(json))
    }, [props])

    const getPhotos = (albumId) => {
        return photos.filter(photo => photo.albumId === albumId)
    }
    const handleCloseOrOpen = (e) => {
        setShow({albumList: !showAlbumList.albumList, gallery: false, slider: false, sliderStart: 0,});
    }
    const handleCloseOrOpenSlider = (e) => {
        setShow({albumList: false, gallery: true, slider: false, sliderStart: 0,});
    }
    const handleShowGallery = (albumId) => {
        setShow({albumList: false, gallery: true, slider: false, sliderStart: 0});
        const photoList = photos.filter(photo => photo.albumId === albumId);
        setphotoList(photoList);
    }

    const handleShowSlider = (index) => {
        setShow({albumList: false, gallery: true, slider: true, sliderStart: index});
    }

    return (
        <UserCardItem>
            <UserName onClick={() => handleCloseOrOpen()}>
                {props.user.name}
                <Arrow x={showAlbumList.albumList}>▲</Arrow>
            </UserName>
                <p>Всего фотоальбомов у пользователя:  {albums.length}</p>
                <AlbomList>
                    {
                        albums.map((album) => {
                            return (
                                showAlbumList.albumList && <Album key={album.title}> 
                                    <AlbumName key={album.title}>{album.title}</AlbumName>
                                    <AlbumCover key={album.title + '' + album.id} 
                                            albumId={album.id} 
                                            photos={getPhotos(album.id)}  
                                            setShow={() => handleShowGallery(album.id)}
                                                 />
                                    </Album> 
                            )
                        })
                    }
                    {
                        showAlbumList.gallery && <Gallery photoList={photoList} showSlider={(index) => handleShowSlider(index)} ></Gallery>
                    }   
                    {
                         showAlbumList.slider && <Slider photoList={photoList} sliderStart={-(100 * (showAlbumList.sliderStart))} handleCloseOrOpen={() => handleCloseOrOpenSlider()}></Slider>
                     }  
                </AlbomList>
        </UserCardItem>
    )
}
