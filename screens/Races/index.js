import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import Logo from '../../components/Logo';
import Loading from '../../components/Loading';

export default class Races extends Component {
    static navigationOptions = {
        headerTitle: <Logo pageName="RACES" />
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
        fetch(`http://ergast.com/api/f1/${season}.json`)
            .then(response => response.json())
            .then(response => {
                const races = response.MRData.RaceTable.Races;
                this.setState({ loading: false, data: races });
            })
            .catch(err => console.error(err));
    }

    renderRaces() {
        if (this.state.data.length == 0) {
            return null;
        }

        let items = [];

        this.state.data.map(item => {
            items.push(
                <ListItem 
                    key={ item.round }
                    onPress={ () => this.props.navigation.navigate('RaceDetails', { race: item }) }
                    button={ true }>
                    <Text>{ item.Circuit.Location.country }</Text>
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
                        { this.renderRaces() }
                    </List>
                </Content>
            </Container>
        );
    }
}
