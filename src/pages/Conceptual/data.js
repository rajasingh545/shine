import _ from 'lodash';
import * as constant from '../../constant';
export const OPTION = ['(a)', '(b)', '(c)'];
export const CONCEPTUAL_DATA = {
  Numbers: {
    data: [
      {
        id: 1,
        name: 'Number of ballons in the image?',
        answer: 2,
        options: _.shuffle([1, 2, 5]),
        image: constant.ballon,
      },
      {
        id: 2,
        name: 'Number of cherry in the image?',
        answer: 5,
        options: _.shuffle([1, 2, 5]),
        image: constant.cherry,
      },
      {
        id: 3,
        name: 'Number of leafs in the image?',
        answer: 6,
        options: _.shuffle([3, 6, 9]),
        image: constant.leafs,
      },
      {
        id: 4,
        name: 'Number of stars in the image?',
        answer: 9,
        options: _.shuffle([2, 4, 9]),
        image: constant.stars,
      },
      {
        id: 5,
        name: 'Number of icecreams in the image?',
        answer: 4,
        options: _.shuffle([2, 4, 9]),
        image: constant.icecream,
      },
    ],
  },
  Colors: {
    data: [
      {
        id: 1,
        name: 'Find the color?',
        answer: 'Red',
        options: _.shuffle(['Yellow', 'Red', 'Pink']),
        image: constant.red,
      },
      {
        id: 2,
        name: 'Find the color?',
        answer: 'Green',
        options: _.shuffle(['Purple', 'Red', 'Green']),
        image: constant.green,
      },
      {
        id: 3,
        name: 'Find the color?',
        answer: 'Yellow',
        options: _.shuffle(['Yellow', 'Red', 'Green']),
        image: constant.yellow,
      },
      {
        id: 4,
        name: 'Find the color?',
        answer: 'Blue',
        options: _.shuffle(['Grey', 'Blue', 'Pink']),
        image: constant.blue,
      },
      {
        id: 5,
        name: 'Find the color?',
        answer: 'Pink',
        options: _.shuffle(['Orange', 'Red', 'Pink']),
        image: constant.pink,
      },
    ],
  },
  Shapes: {
    data: [
      {
        id: 1,
        name: 'Find the shape?',
        answer: 'Square',
        options: _.shuffle(['Square', 'Rectangle', 'Triangle']),
        image: constant.square,
      },
      {
        id: 2,
        name: 'Find the shape?',
        answer: 'Rectangle',
        options: _.shuffle(['Square', 'Rectangle', 'Triangle']),
        image: constant.rectangle,
      },
      {
        id: 3,
        name: 'Find the shape?',
        answer: 'Star',
        options: _.shuffle(['Square', 'Rectangle', 'Star']),
        image: constant.star,
      },
      {
        id: 4,
        name: 'Find the shape?',
        answer: 'Circle',
        options: _.shuffle(['Square', 'Circle', 'Triangle']),
        image: constant.circle,
      },
      {
        id: 5,
        name: 'Find the shape?',
        answer: 'Triangle',
        options: _.shuffle(['Circle', 'Rectangle', 'Triangle']),
        image: constant.triangle,
      },
    ],
  },
};
