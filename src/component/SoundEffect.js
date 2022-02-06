import React, {useState, useEffect} from 'react';
import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {SIZES, colors, FONTS} from '../constant';

var Sound = require('react-native-sound');
Sound.setCategory('Playback');

const SoundEffect = ({audio, image, name}) => {
  const [state, setState] = useState(
    new Sound(audio, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
    }),
  );

  useEffect(() => {
    return () => state.release();
  }, []);

  const play = () => state.play();
  return (
    <TouchableOpacity style={styles.conceptWrapper} onPress={play}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: image,
        }}
      />
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
