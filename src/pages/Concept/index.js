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

const Concept = () => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.conceptWrapper}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: item.image,
          }}
        />
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
    flex: 1,
    paddingHorizontal: SIZES.w_5,
    marginTop: SIZES.h_10,
  },
  imageStyle: {
    flex: 1,
    height: SIZES.height / 6,
    resizeMode: 'cover',
    borderTopRightRadius: SIZES.w_10,
    borderTopLeftRadius: SIZES.w_10,
  },
  textStyle: {
    ...FONTS.h5,
    color: colors.black,
    marginTop: SIZES.h_5,
    textAlign: 'center',
  },
});
