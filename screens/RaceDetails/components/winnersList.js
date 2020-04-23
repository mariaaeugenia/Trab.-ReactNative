import React from 'react';
import { StyleSheet, View } from 'react-native'; 
import { Card, CardItem, Text, Body } from 'native-base';

const WinnersList = (props) => {
    const renderResults = () => {
        let items = []

        props.results.map(result => {
            items.push(
                <Card key={result.number}>
                    <CardItem>
                        <Body>
                            <Text style={ styles.position }>{result.position}º</Text>
                            <Text style={ styles.driverName }>{result.Driver.givenName} {result.Driver.familyName}</Text>
                            <Text style={ styles.constuctorName }>{result.Constructor.name}</Text>
                        </Body>
                    </CardItem>
                </Card>
            );
        });

        return items;
    }

    return (
        <View>
            <Text style={ styles.title }>Results:</Text>
            { renderResults() }
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: '600',
        marginTop: 20,
        marginLeft: 4
    },
    position: {
        flex: 1,
        fontSize: 19,
        fontWeight: '700'
    },
    driverName: {
        flex: 1,
        fontSize: 17,
        fontWeight: '500'
    },
    constuctorName: {
        color: '#777'
    }
});

export default WinnersList;