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
import {
  HOME_CONCEPT,
  HOME_CONCEPT_TITLE,
  HOME_CONTENT,
  HOME_TITLE,
} from './data';
const Home = ({navigation}) => {
  const renderConcept = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(item.route, {
            title: item.title,
            flag: item.flag,
          })
        }
        style={styles.conceptWrapper}>
        <View>
          <Image
            source={{uri: item.image}}
            style={styles.imageStyle}
            resizeMode={`cover`}
          />
          <Text style={styles.conceptText}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.wrapper}>
        <Text style={styles.title}>{HOME_TITLE}</Text>
        <Text style={styles.content}>{HOME_CONTENT}</Text>
      </View>
      {/* Concept */}
      <View style={styles.conceptContainer}>
        <Text style={styles.conceptTitle}>{HOME_CONCEPT_TITLE}</Text>
        <FlatList
          data={HOME_CONCEPT}
          keyExtractor={item => `concept-${item.id}`}
          showsVerticalScrollIndicator={false}
          renderItem={renderConcept}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    paddingHorizontal: SIZES.w_10,
    marginTop: SIZES.h_10,
    marginBottom: SIZES.h_10,
  },
  title: {
    ...FONTS.h2,
    color: colors.black,
  },
  content: {
    ...FONTS.body3,
    color: colors.regularLightGray,
    textAlign: 'justify',
    marginTop: SIZES.h_5,
  },
  conceptContainer: {
    paddingHorizontal: SIZES.w_10,
    backgroundColor: colors.white,
    marginVertical: SIZES.h_10,
  },
  conceptTitle: {
    ...FONTS.h4,
    color: colors.black,
  },
  conceptWrapper: {
    flex: 1,
    marginRight: SIZES.w_10,
    marginTop: SIZES.h_10,
  },
  imageStyle: {
    flex: 1,
    height: SIZES.height / 4,
    borderRadius: SIZES.w_10,
    marginBottom: SIZES.w_5,
  },
  conceptText: {
    ...FONTS.h5,
    color: colors.black,
  },
});
