import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {colors, FONTS, SIZES} from '../../constant';
import {CONCEPT_DATA} from './data';

const Concept = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.conceptWrapper}
        onPress={() => navigation.navigate('Sensory', {title: item.title})}>
        <Image style={styles.imageStyle} source={item.image} />
        <Text style={styles.textStyle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={CONCEPT_DATA}
        keyExtractor={item => `concept-${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </View>
  );
};

export default Concept;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  conceptWrapper: {
    paddingHorizontal: SIZES.w_5,
    marginTop: SIZES.h_10,
  },
  imageStyle: {
    height: SIZES.height / 6,
    width: SIZES.width / 2 - SIZES.w_10,
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
