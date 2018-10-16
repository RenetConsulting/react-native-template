import { Container, Content, Text } from "native-base";
import * as React from "react";
import { Platform } from "react-native";
import { HeaderBar } from "../header.bar";
import { styles } from "./style";

const instructions = Platform.select({
    ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
    android:
        "Double tap R on your keyboard to reload,\n" +
        "Shake or press menu button for dev menu",
});

export class ContactsScreen extends React.Component<any> {

    render() {
        return (
            <Container style={styles.container}>
                <HeaderBar title="Contacts" navigation={this.props.navigation} />
                <Content>
                    <Text style={styles.welcome}>Contacts</Text>
                    <Text style={styles.instructions}>{instructions}</Text>
                </Content>
            </Container>
        );
    }
}