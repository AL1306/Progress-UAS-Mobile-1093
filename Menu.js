import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from "./Login";
import Home from "./Home";
import hapus from "./hapus";
import edit from "./edit";
import tambah from "./tambah";
import tambahdalam from "./tambahdalam";
import tambahluar from "./tambahluar";
import dalam from "./dalamnegri";
import luar from "./luarnegri";
import detail from "./detail";
const AppContainer = createStackNavigator(
  {
    
   // hapus: {
     // screen: hapus
   // },
   // edit: {
    //  screen: edit
   // },
   tambah: {
    screen: tambah
    },
    tambahdalam: {
     screen: tambahdalam
    },
   tambahluar: {
     screen: tambahluar
    },
    dalam: {
      screen: dalam
    },
   luar: {
     screen: luar
    },
    detail: {
      screen: detail
     },
    Home: {
      screen: Home
    },
    Login: {
      screen: Login
    },
  },
  {
    initialRouteName: "Login"
  }
);

const Menu = createAppContainer(AppContainer);

export default class App extends React.Component {
    render() {
        return <Menu />;
    }
}
