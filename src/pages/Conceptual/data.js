import _ from 'lodash';
import * as constant from '../../constant';
export const OPTION = ['(a)', '(b)', '(c)'];
export const CONCEPTUAL_DATA = {
  Numbers: {
    data: [
      {
        id: 1,
        name: 'Find the season name?',
        answer: 'Rainy',
        options: _.shuffle(['Winter', 'Summer', 'Rainy']),
        image: constant.Rain,
      },
      {
        id: 2,
        name: 'Find the place?',
        answer: 'Waterfalls',
        options: _.shuffle(['Island', 'Beach', 'Waterfalls']),
        image: constant.Waterfalls,
      },
      {
        id: 3,
        name: 'Find the weather?',
        answer: 'Windy',
        options: _.shuffle(['Cold', 'Sunny', 'Windy']),
        image: constant.Wind,
      },
      {
        id: 4,
        name: 'Say the name of the vehicle?',
        answer: 'Truck',
        options: _.shuffle(['Truck', 'Bike', 'Car']),
        image: constant.Truck,
      },
    ],
  },
};
