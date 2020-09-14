import React from "react";

//import AppStack from './AppStack'
import AuthRoutes from "./AuthRoutes";
import { NavigationContainer } from "@react-navigation/native";

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
};

export default Routes;
