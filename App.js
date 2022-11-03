import React, { useReducer } from 'react';

import { View } from 'react-native';

import List from './List';
import Input from './Input';
import Title from './Title';

import { actionCreators, reducer, intitialState } from './todos';



export default function App() {
  const [state, dispatch] = useReducer(reducer, intitialState);

  return (
    <View>
      <Title> TO-DO List </Title>
      <Input
        placeholder="Add a todo"
        onSubmitEditing={text => dispatch(actionCreators.add(text))}
      />
      <List
        list={state.items}
        onPressItem={index => dispatch(actionCreators.remove(index))}
      />
    </View>
  );
}