import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text } from 'native-base';

import Logo from '../../components/Logo';

export default class OptionsMenu extends Component {
    static navigationOptions = {
        headerTitle: <Logo pageName="OPTIPONS" />
    }

    constructor(props) {
        super(props);
        this.navigateToRaces = this.navigateToRaces.bind(this);
        this.navigateToDrivers = this.navigateToDrivers.bind(this);
    }

    navigateToRaces() {
        const season = this.props.navigation.getParam('season');
        this.props.navigation.navigate('Races', { season });
    }

    navigateToDrivers() {
        const season = this.props.navigation.getParam('season');
        this.props.navigation.navigate('Drivers', { season });
    }

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem
                            onPress={ this.navigateToRaces }>
                            <Text>Races</Text>
                        </ListItem>
                        <ListItem
                            onPress={ this.navigateToDrivers }>
                            <Text>Drivers</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f1f1',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});