import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import Logo from '../../components/Logo';
import Loading from '../../components/Loading';

import CircuitInformation from './components/circuitInformation';
import WinnersList from './components/winnersList';

export default class RaceDetails extends Component {
    static navigationOptions = {
        headerTitle: <Logo pageName="RACE DETAILS" />
    }

    state = {
        data: null,
        loading: true
    }

    componentDidMount() {
        const race = this.props.navigation.getParam('race');
        this.getData(race);
    }

    getData(race) {
        fetch(`http://ergast.com/api/f1/${race.season}/${race.round}/results.json`)
            .then(response => response.json())
            .then(response => {
                const races = response.MRData.RaceTable.Races[0];
                this.setState({ loading: false, data: races });
            })
            .catch(err => console.error(err));
    }

    renderDetails() {
        if (this.state.data == null) {
            return null;
        }

        return (
            <Container>
                <Content padder>
                    <CircuitInformation race={this.state.data} />
                    <WinnersList results={this.state.data.Results} />
                </Content>
            </Container>
        )
    }

    render() {
        return (
            <Container>
                <Content>
                    <Loading show={ this.state.loading } color="gray" />
                    { this.renderDetails() }
                </Content>
            </Container>
        );
    }
}
