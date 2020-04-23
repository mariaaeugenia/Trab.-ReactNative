import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import Logo from '../../components/Logo';
import Loading from '../../components/Loading';

export default class Drivers extends Component {
    static navigationOptions = {
        headerTitle: <Logo pageName="DRIVERS" />
    }

    state = {
        data: [],
        loading: true
    }

    componentDidMount() {
        const season = this.props.navigation.getParam('season');
        this.getData(season);
    }

    getData(season) {
        fetch(`http://ergast.com/api/f1/${season}/drivers.json`)
            .then(response => response.json())
            .then(response => {
                const races = response.MRData.DriverTable.Drivers;
                this.setState({ loading: false, data: races });
            })
            .catch(err => console.error(err));
    }

    renderDrivers() {
        if (this.state.data.length == 0) {
            return null;
        }

        let items = [];

        this.state.data.map(item => {
            items.push(
                <ListItem 
                    key={ item.driverId }
                    onPress={ () => this.props.navigation.navigate('DriverDetails', { driverId: item.driverId }) }
                    button={ true }>
                    <Text>{ item.givenName } { item.familyName }</Text>
                </ListItem>
            )
        })

        return items
    }

    render() {
        return (
            <Container>
                <Content>
                    <Loading show={ this.state.loading } color="gray" />
                    <List>
                        { this.renderDrivers() }
                    </List>
                </Content>
            </Container>
        );
    }
}
