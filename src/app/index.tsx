import * as React from "react";
import { DrawerNavigator } from "react-navigation";
import { ContactsScreen } from "../contacts.screen";
import { DrawerBar } from "../drawer.bar";
import { HomeScreen } from "../home.screen";

const AppDrawerNavigator = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
        Contacts: { screen: ContactsScreen }
    },
    {
        initialRouteName: "Home",
        contentComponent: DrawerBar,
        contentOptions: {
            activeTintColor: "red",
            activeBackgroundColor: "blue"
        }
    }
);

export class App extends React.Component {
    render() {
        return (
            //<AppDrawerNavigator />
            <AppDrawerNavigator />
        );
    }
}