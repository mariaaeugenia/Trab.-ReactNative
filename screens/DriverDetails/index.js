import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text } from 'native-base';
import { Image } from 'react-native';

import Logo from '../../components/Logo';
import Loading from '../../components/Loading';

export default class DriverDetails extends Component {
    static navigationOptions = {
        headerTitle: <Logo pageName="DRIVER DETAILS" />
    }

    state = {
        data: null,
        loading: true
    }

    componentDidMount() {
        const driverId = this.props.navigation.getParam('driverId');
        this.getData(driverId);
    }

    getData(driverId) {
        fetch(`http://ergast.com/api/f1/drivers/${driverId}.json`)
            .then(response => response.json())
            .then(response => {
                const driver = response.MRData.DriverTable.Drivers[0];
                this.setState({ loading: false, data: driver });
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
                <Image
                        source={{
                            uri: `https://www.formula1.com/content/fom-website/en/drivers/${this.state.data.givenName.toLowerCase()}-${this.state.data.familyName.toLowerCase()}/_jcr_content/image16x9.img.1536.high.jpg`,
                            cache: 'default',
                        }}
                        style={ styles.driveImage }
                    />
                    <Text style={ styles.code }>{this.state.data.code}</Text>
                    <Text>{this.state.data.givenName} {this.state.data.familyName} ({this.state.data.permanentNumber})</Text>
                    <Text>Nationality: {this.state.data.nationality}</Text>
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

const styles = StyleSheet.create({
    code: {
        fontSize: 40,
        fontWeight: '800'
    },
    driveImage: {
        width: '100%',
        height: 400,
        borderRadius: 16,
        overflow: "hidden",
        marginTop: 40
    }
});
