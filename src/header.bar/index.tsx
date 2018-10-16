import { Body, Button, Header, Icon, Left, Right, Title } from "native-base";
import * as React from "react";
import { NavigationScreenProp } from "react-navigation";

export interface Props {
    title: string
    navigation: NavigationScreenProp<any>
}

export class HeaderBar extends React.Component<Props> {

    render() {
        return (
            <Header>
                <Left>
                    <Button onPress={this.navigate}>
                        <Icon active name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right />
            </Header>
        );
    }

    navigate = (): void => {
        this.props.navigation.navigate("DrawerOpen")
    }
}