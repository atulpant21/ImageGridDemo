/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  ListRenderItem,
  ImageBackground,
  Animated,
  TouchableOpacity
} from 'react-native';
import { SharedElement } from 'react-native-shared-element';
import {useRoute, useNavigation } from "@react-navigation/native";

export interface IImages {
    id: number;
    title: string;
    url: string;
  }

const Home = ({ navigation }: any): JSX.Element => {

const [images, setImages] = useState([]);
const [isAnimating, setIsAnimating] = React.useState(false);

//   const startAnimation = () => {
//     setIsAnimating(true);
//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 1000);
//   };

const goToDetails = (item: IImages) => {
    console.log("we are in onPress");
    
    navigation.push('Details', {
        item,
      })
}
useEffect(() => {
    console.log("Testing");
    
    if(images.length == 0)
      getImageData()
    
}), [];

const getImageData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        const json = await response.json();
        setImages(json)
        // console.log(" >>>> " + images[0] + " >>> " + JSON.stringify(json));
        return json;
    } catch (error) {
        console.error(error);
    }
}

const renderItem : ListRenderItem<IImages> = ({item}: {item: IImages}) => {
    return (
            <TouchableOpacity style = {styles.item_view} onPress= {(() => {goToDetails(item)})} >
            <ImageBackground source={{uri:item.url}} style = {[styles.item_view, { transform: [{ scale: isAnimating ? 1.2 : 1 }] }]}>
                <Text style = {styles.item_title} >{item.title}</Text>
                {/* <Image source={{uri:item.url}} style={styles.image}/> */}
                
            </ImageBackground>
            </TouchableOpacity>
     
    )
  
  }

  return (
    <SafeAreaView style={styles.main_view}>
      <View style = {styles.main_view}>
      <FlatList
        data={images}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item: IImages) => item.id.toString()}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main_view: {
    flex:1, 
  },
  item_view: {
    flexDirection: "row",
    flex: 1,
    borderWidth: 1,
    borderColor: "grey",
    height: 100,
    margin : 1,
    resizeMode: "contain"
  },
  item_title: {
    position: "absolute",
    bottom: 4,
    left: 4,
    right: 4,
    fontSize: 14,
    color: "white",
  },
  
});

export default Home;
