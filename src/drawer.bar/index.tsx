import { Container, H1, View } from "native-base";
import * as React from "react";
import { ScrollView } from "react-native";
import { DrawerItems } from "react-navigation";
import { styles } from "./style";

export class DrawerBar extends React.Component {

    render() {
        return (
            <Container style={styles.container}>
                <View>
                    <H1>Draver Bar</H1>
                </View>
                <ScrollView>
                    <DrawerItems {...this.props} />
                </ScrollView>
            </Container>
        );
    }
}