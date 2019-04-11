import React, { useState, useEffect } from 'react';
import { ScrollView } from "react-native";
import AlbumDetail from "./albumDetails"


const AlbumList = () => {

  const [albums, setAlbums] = useState([]);


  useEffect(() => {
    fetch('http://rallycoding.herokuapp.com/api/music_albums')
      .then(res => res.json())
      .then(parsedRes => setAlbums(parsedRes))
      .catch(err => console.log(err));
  }, []);

  console.log("albums", albums)

  const renderAlbums = albums.map((album, index) => <AlbumDetail key={index} album={album} />)


  return (
    <ScrollView>
      {renderAlbums}
    </ScrollView>
  )
}
export default AlbumList;