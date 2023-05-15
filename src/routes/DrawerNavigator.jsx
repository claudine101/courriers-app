import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import DrawerContent from "../components/app/DrawerContent";
import AllCourrierScreen from "../screens/courrier/AllCourrierScreen";
import AllCourrierSortantScreen from "../screens/courrierSortant/AllCourrierSortantScreen";

export default function DrawerNavigator() {
          const drawr= true
          const Drawer = createDrawerNavigator()
          return (
                    <Drawer.Navigator screenOptions={{ headerShown: false ,lazy:true,unmountOnBlur:true}} useLegacyImplementation={true} drawerContent={props => <DrawerContent {...props} />}>
                              <Drawer.Screen name="AllCourrierScreen" component={AllCourrierScreen}/>
                              <Drawer.Screen name='AllCourrierSortantScreen' component={AllCourrierSortantScreen} />
                    </Drawer.Navigator>
          )
}