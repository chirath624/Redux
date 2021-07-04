/**
 * @format
 */

import {ActionSheetIOS, AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { createStore } from 'redux'


//action incremnet
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


AppRegistry.registerComponent(appName, () => App);
