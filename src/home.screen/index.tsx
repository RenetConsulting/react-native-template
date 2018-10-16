import { Container, Content, Text } from "native-base";
import * as React from "react";
import { Platform } from "react-native";
import { HeaderBar } from "../header.bar";
import { styles } from "./style";

const instructions = Platform.select({
    ios: "IOS",
    android: "android"
});

export class HomeScreen extends React.Component<any> {

    render() {
        return (
            <Container style={styles.container as any}>
                <HeaderBar navigation={this.props.navigation} title="Home" />
                <Content>
                    <Text style={styles.welcome}>Home</Text>
                    <Text style={styles.instructions}>{instructions}</Text>
                </Content>
            </Container>
        );
    }
}