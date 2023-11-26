import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  SharedElement,
  createSharedElementStackNavigator,
} from 'react-navigation-shared-element';

const SPACING = 15;
const POST_GUTTER_WIDTH = 2;

const DetailScreen = ({ route, navigation }: any) => {
    const { item } = route.params;
    const safeInsets = useSafeAreaInsets();
    const opacity = useRef(new Animated.Value(0)).current;
    console.log(">>>>> " + JSON.stringify(item));
    
  
    useEffect(() => {
        console.log(">>>>> " + item.id);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 250,
        delay: 500,
        useNativeDriver: true,
      }).start();
    }, []);
  
    return (
      <View style={styles.wrapper}>
        <Animated.View
          style={{
            opacity,
            position: 'absolute',
            top: safeInsets.top + SPACING,
            left: safeInsets.left + SPACING,
            right: safeInsets.right + SPACING,
            zIndex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {/* <Icon name="x" onPress={() => navigation.goBack()} /> */}
        </Animated.View>
  
        {/* <SharedElement id={item.id}> */}
          <Image source={{uri:item.url}} style={styles.postImage} />
        {/* </SharedElement> */}
  
          <Animated.Text
            style={{
              opacity,
              fontSize: 17,
            }}
          >
            {item.title}
          </Animated.Text>
        </View>
    );

    
  };

  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    listHeader: {
      fontSize: 28,
      fontWeight: '800',
      margin: SPACING,
    },
    posts: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    postTexts: {
      margin: 10,
      marginBottom: 15,
    },
    postHeader: {
      fontWeight: '600',
    },
    postDescription: {
      color: 'gray',
    },
    postImage: {
      height: 300,
      width: '100%',
    },
    postDetails: {
      paddingVertical: 10,
      paddingHorizontal: SPACING,
    },
    postTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    postPrice: {
      fontSize: 24,
    },
    postContactButton: {
      marginVertical: SPACING,
    },
  });

  export default DetailScreen