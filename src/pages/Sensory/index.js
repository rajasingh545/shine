import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import {SoundEffect} from '../../component';
import {colors, FONTS, SIZES} from '../../constant';
import {SENSORY_DATA} from './data';

const Sensory = ({route}) => {
  const {title} = route.params;
  const data = SENSORY_DATA[title]?.data.length ? SENSORY_DATA[title].data : [];

  const renderItem = ({item}) => (
    <SoundEffect audio={item.sound} name={item.name} image={item.image} />
  );

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
