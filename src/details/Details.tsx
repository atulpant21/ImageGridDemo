import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Pressable,
} from 'react-native';
import styles from './style';


const DetailScreen = ({ route, navigation }: any) => {
    const { item } = route.params;
    const opacity = useRef(new Animated.Value(0)).current;
    console.log(">>>>> " + JSON.stringify(item));
    
  
    useEffect(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        delay: 50,
        useNativeDriver: true,
      }).start();
    }, []);
  
    const trans={
        transform:[
          {translateY:opacity}
        ]
      }

    return (
      <Pressable style={styles.wrapper} onPress={() => navigation.goBack()}>
          <Animated.Image source={{uri:item.url}} style={[styles.postImage, trans]}/>
  
          <Animated.Text style={styles.title_text}>
            {item.title}
          </Animated.Text>
        </Pressable>
    );

    
  };

  export default DetailScreen