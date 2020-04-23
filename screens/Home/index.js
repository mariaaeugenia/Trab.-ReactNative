import React, { Component } from 'react';

import Logo from '../../components/Logo';
import Seasons from './components/seasons';

export default class Home extends Component {
    static navigationOptions = {
        headerTitle: <Logo pageName="SEASONS" />
    }

    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
    }

    getData(year) {
        this.props.navigation.navigate('OptionsMenu', { season: year });
    }

    render() {
        return (
            <Seasons handleSeason={ this.getData } />
        )
    }
}
