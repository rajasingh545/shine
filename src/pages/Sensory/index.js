import React, { useState ,useEffect }  from 'react';
import {View, StyleSheet, FlatList} from 'react-native';


import {SoundEffect} from '../../component';
import {colors, FONTS, SIZES} from '../../constant';
import {SENSORY_DATA} from './data';
var Sound = require('react-native-sound');
Sound.setCategory('Playback');

const Sensory = ({route}) => {
  const {title} = route.params;
  const data = SENSORY_DATA[title]?.data.length ? SENSORY_DATA[title].data : [];
  var dataSet={},previous,current;
  data.forEach(element => {   
    dataSet[element.sound]=new Sound(element.sound, Sound.MAIN_BUNDLE, error => {
            if (error) {
              console.log('failed to load the sound', error);
              return;
            }
          })
    

  });
    useEffect(() => {
    return () => dataSet[current].release();
  }, []);

  
  const play=async(audio)=>{
    if(previous) dataSet[previous].stop();
    dataSet[audio].play();
    previous=audio;
    current= audio
  }

  const renderItem = ({item}) => {
    
    return(<SoundEffect audio={item.sound} name={item.name} image={item.image} manager={play} />)
};

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => `concept-${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </View>
  );
};

export default Sensory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  conceptWrapper: {
    flex: 1,
    paddingHorizontal: SIZES.w_5,
    marginTop: SIZES.h_10,
  },
  imageStyle: {
    flex: 1,
    height: SIZES.height / 6,
    resizeMode: 'cover',
    borderRadius: SIZES.w_10,
  },
  textStyle: {
    ...FONTS.h5,
    color: colors.black,
    marginTop: SIZES.h_5,
    textAlign: 'center',
  },
});
