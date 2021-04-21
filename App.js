import { StatusBar } from "expo-status-bar";
import React from "react";

import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import Navigations from "./Screens/navigations";
import CustomisableAlert from "react-native-customisable-alert";
import {
  TouchableWithoutFeedback,
   keyboard
  
  
} from "react-native";
import { View } from "react-native-animatable";
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Navigations />
      </PersistGate>
         
      <CustomisableAlert
                    titleStyle={{
                        fontSize: 18,
                        fontWeight: "bold"
                    }}
                />
    </Provider>

  );
}

