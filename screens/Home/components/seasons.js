import React from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';

const Seasons = (props) => {
    const renderSeasons = () => {
        let items = [];

        for (let i = 19; i>0; i--) {
            const year = `20${i>9 ? i : `0${i}`}`

            items.push(
                <ListItem
                    key={`season-${year}`}
                    onPress={ () => props.handleSeason(year) }>
                    <Text>{year}</Text>
                </ListItem>
            );
        }

        return items;
    }

    return (
        <Container>
            <Content>
                <List>
                    { renderSeasons() }
                </List>
            </Content>
        </Container>
    );
}

export default Seasons;
