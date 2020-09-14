import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import { AppLoading } from "expo";
import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from "@expo-google-fonts/archivo";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import AppStack from "./src/routes/AppStack";

import Routes from "./src/routes/";

import AuthContext from "./src/contexts/auth";

const App: React.FC = () => {
  const [signed, setSigned] = useState(false);

  function signIn() {
    // const response = await signIn();
    // console.log(response);
  }
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <AuthContext.Provider value={{ signed }}>
        <AppStack />
        {/* <Routes /> */}
        <StatusBar style="light" />
      </AuthContext.Provider>
    );
  }
};

export default App;
