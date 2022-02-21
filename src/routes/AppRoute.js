import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Concept, Sensory, Home} from '../pages';
import {colors, home_icon, SIZES} from '../constant';

const Stack = createNativeStackNavigator();

const AppRoute = () => {
  const HomeButton = ({onPress}) => (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={home_icon}
        style={{
          height: SIZES.w_25,
          width: SIZES.w_25,
        }}
      />
    </TouchableOpacity>
  );

  return (
    <Stack.Navigator initialRouteName={`Home`}>
      <Stack.Screen
        name={`Home`}
        component={Home}
        options={{
          title: 'Shine',
        }}
      />
      <Stack.Screen
        name={`Concept`}
        component={Concept}
        options={({route, navigation}) => ({
          title: route.params.title,
          headerRight: () => (
            <HomeButton onPress={() => navigation.navigate('Home')} />
          ),
        })}
      />
      <Stack.Screen
        name={`Sensory`}
        component={Sensory}
        options={({route, navigation}) => ({
          title: route.params.title,
          headerRight: () => (
            <HomeButton onPress={() => navigation.navigate('Home')} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AppRoute;
