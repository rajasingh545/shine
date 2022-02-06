import React, {useReducer, useMemo} from 'react';

var Sound = require('react-native-sound');
Sound.setCategory('Playback');

const initialState = {
  audio: sound =>
    new Sound(sound, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
    }),
};

const soundReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALIZE_AUDIO':
      return {
        ...state,
        audio: state.audio(action.payload),
      };
    case 'PLAY_AUDIO':
      state.audio().play();
      return state;
    case 'STOP_AUDIO':
      state.audio().release();
      return {...initialState};
    default:
      return state;
  }
};

const [soundState, dispatch] = useReducer(soundReducer, initialState);

export const soundContext = useMemo(() => ({
  initialize: audio => dispatch({type: 'INITIALIZE_AUDIO', payload: audio}),
  play: () => dispatch({type: 'PLAY_AUDIO'}),
  stop: () => dispatch({type: 'STOP_AUDIO'}),
}));
