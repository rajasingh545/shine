import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import _ from 'lodash';
var Sound = require('react-native-sound');

import {
  colors,
  FONTS,
  SIZES,
  success,
  failure,
  correct_answer,
  wrong_answer,
} from '../../constant';
import {CONCEPTUAL_DATA, OPTION} from './data';

Sound.setCategory('Playback');

const Conceptual = ({route}) => {
  const {title} = route.params;
  const data = CONCEPTUAL_DATA[title].data;
  const [answers, setAnswer] = useState(
    data.map(() => ({
      position: null,
      answer: null,
    })),
  );

  const [state] = useState({
    success: new Sound(correct_answer, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
    }),
    wrong: new Sound(wrong_answer, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
    }),
  });

  const onSelectAnswer = (index, position, answer) => {
    const result = answers.map((value, i) => {
      if (index === i) {
        value.position = position;
        value.answer = answer;
      }
      return value;
    });
    setAnswer(result);
    const correctAnswer = data[index].answer;
    if (correctAnswer === answer) {
      state.success.play();
      return true;
    }
    state.wrong.play();
  };

  const renderItem = ({item, index}) => {
    const StatusIcon = ({position, correctAnswer}) => {
      const selectedAnswer = answers[index];
      const answer = selectedAnswer.answer === correctAnswer;
      if (selectedAnswer.answer === null) return null;
      if (selectedAnswer.position !== position) return null;
      return (
        <Image
          source={answer ? success : failure}
          style={{
            width: SIZES.w_25,
            height: SIZES.w_25,
            tintColor: answer ? colors.green : colors.danger,
          }}
        />
      );
    };

    const Options = ({options}) =>
      _.map(options, (option, i) => (
        <TouchableOpacity
          key={`option-${i}`}
          style={styles.option}
          onPress={() => onSelectAnswer(index, i, option)}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.optionText}>{`${OPTION[i]}  ${option}`}</Text>
            <StatusIcon position={i} correctAnswer={item.answer} />
          </View>
        </TouchableOpacity>
      ));

    return (
      <View style={styles.contentContainer}>
        <Text style={styles.textStyle} numberOfLines={2}>
          {item.name}
        </Text>
        <View style={styles.imageWrapper}>
          <Image source={item.image} style={styles.imageStyle} />
        </View>
        <View>
          <Text style={styles.textStyle}>{`Answers`}</Text>
          <Options options={item.options} />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => `concept-${item.id}`}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
      />
    </SafeAreaView>
  );
};

export default Conceptual;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textStyle: {
    ...FONTS.h4,
    color: colors.black,
  },
  contentContainer: {
    padding: SIZES.w_10,
    height: SIZES.height - 30,
    width: SIZES.width,
  },
  imageWrapper: {marginVertical: SIZES.h_10},
  imageStyle: {
    height: SIZES.height / 3,
    width: '100%',
    resizeMode: 'stretch',
    borderRadius: SIZES.w_5,
  },
  optionText: {
    ...FONTS.h5,
    color: colors.black,
  },
  option: {
    paddingVertical: SIZES.h_5 * 3,
  },
});
