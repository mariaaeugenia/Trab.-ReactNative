import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <Text style={styles.title}>{this.props.pageName}</Text>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600'
    }
});