import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native'
import Card from "./card"
import CardSection from "./cardSection"
import Button from "./button"

const AlbumDetail = props => {

  const { title, thumbnail_image, artist, image, url } = props.album;
  return (
    <Card>

      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={styles.headerContentSyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={styles.imageStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy now</Button>
      </CardSection>

    </Card>

  );
}

export default AlbumDetail;

const styles = StyleSheet.create({
  headerContentSyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: "600",
  },

  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },


})
