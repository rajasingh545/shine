import React, {useState, useEffect} from 'react';
import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {SIZES, colors, FONTS} from '../constant';

var Sound = require('react-native-sound');
Sound.setCategory('Playback');

const SoundEffect = ({audio, image, name, manager}) => {


  // useEffect(() => {
  //   return () => state.release();
  // }, []);

  //const play = () => state.play();
  return (
    <TouchableOpacity style={styles.conceptWrapper} onPress={()=>manager(audio)}>
      <Image style={styles.imageStyle} source={image} />
      <Text style={styles.textStyle}>{name}</Text>
    </TouchableOpacity>
  );
};

export default SoundEffect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  conceptWrapper: {
    paddingHorizontal: SIZES.w_5,
    marginTop: SIZES.h_10,
    overflow: 'hidden',
  },
  imageStyle: {
    width: SIZES.width / 2 - SIZES.w_10,
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
