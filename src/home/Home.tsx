import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  Pressable,
  Text,
  View,
  Image,
  ListRenderItem,
} from 'react-native';
import styles from './style';

//getter setter for images
export interface IImages {
    id: number;
    title: string;
    url: string;
  }

const Home = ({ navigation }: any): JSX.Element => {

    const [images, setImages] = useState([]);

    const goToDetails = (item: IImages) => {
        navigation.push('Details', {
            item,
        })
    }
    useEffect(() => {
        //check if local list is empty
        if(images.length == 0)
        getImageData()
        
    }), [];

    //get Images from API
    const getImageData = async () => {
        try {
            const response = await fetch('https://api.slingacademy.com/v1/sample-data/photos');
            const json = await response.json();
            //Set images inside setImages hook
            setImages(json.photos)
            console.log(json);
            
            return json;
        } catch (error) {
            console.error(error);
        }
    }

    //Flat list items renderer component
    const renderItem : ListRenderItem<IImages> = ({item}: {item: IImages}) => {
        return (
                <Pressable style = {styles.item_view} onPress= {(() => {goToDetails(item)})} >
                    <View style = {styles.overlay_view} >
                        <Image source={{uri:item.url}} style = {styles.image}/>
                        <Text style = {styles.item_title} >{item.title}</Text>
                    </View>
                </Pressable>
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

export default Home;
