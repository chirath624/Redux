/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { createStore } from 'redux'



import {
  Text,
  useColorScheme,
  View,
} from 'react-native';





const App: () => Node = () => {
  const increment=()=>
{
    return{
    type :'INCREMENT'
    }
}

//REducer
const counter =(state=0,action)=>{
    switch(action.type){
        case "INCREMENT":
          return state + 1
    }
};

let store= createStore(counter) 

//display
console.log(store.getState())

store.dispatch(increment());

  return (

    <View>
      <Text>Hello</Text>
      <Text>hi this{store.getState()} </Text>

      </View>
   
  );
};



export default App;
