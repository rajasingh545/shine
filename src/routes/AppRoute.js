import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Concept, Sensory, Home} from '../pages';

const Stack = createNativeStackNavigator();

const AppRoute = () => {
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
        options={({route}) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name={`Sensory`}
        component={Sensory}
        options={({route}) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppRoute;
