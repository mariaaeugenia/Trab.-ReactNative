import React from 'react';
import { Card, CardItem, Text, Body } from 'native-base';

const CircuitInformation = (props) => {
    return (
        <Card>
            <CardItem header bordered>
                <Text>Circuit Information</Text>
            </CardItem>
            <CardItem bordered>
                <Body>
                    <Text style={{fontWeight: 'bold'}}>{props.race.raceName}</Text>
                    <Text>Name: <Text style={{fontWeight: 'bold'}}> {props.race.Circuit.circuitName}</Text></Text>
                    <Text>Latitude: <Text style={{fontWeight: 'bold'}}> {props.race.Circuit.Location.lat}</Text></Text>
                    <Text>Longitude: <Text style={{fontWeight: 'bold'}}> {props.race.Circuit.Location.long}</Text></Text>
                    <Text>Locality: <Text style={{fontWeight: 'bold'}}> {props.race.Circuit.Location.locality}</Text></Text>
                    <Text>Country: <Text style={{fontWeight: 'bold'}}> {props.race.Circuit.Location.country}</Text></Text>
                </Body>
            </CardItem>
            <CardItem footer bordered>
                <Text>Date of event: {props.race.date}</Text>
            </CardItem>
        </Card>
    );
}

export default CircuitInformation;