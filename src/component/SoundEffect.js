import React, {useEffect, useContext} from 'react';
import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {SIZES, colors, FONTS} from '../constant';
import {SoundContext} from '../hooks';

const SoundEffect = ({audio, image, name}) => {
  const {play, initialize, stop} = useContext(SoundContext);

  useEffect(() => {
    return () => stop();
  }, []);

  const playSound = async () => {
    await initialize(audio);
    await play();
  };
  return (
    <TouchableOpacity style={styles.conceptWrapper} onPress={playSound}>
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
