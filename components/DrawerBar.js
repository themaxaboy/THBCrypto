import React from 'react';
import { Container, Content, Separator, ListItem, Text } from 'native-base';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <Container style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <Content>
                    <Separator bordered>
                        <Text>Market</Text>
                    </Separator>
                    <ListItem >
                        <Text>Market Capitalizations</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Favorite</Text>
                    </ListItem>
                    <ListItem last>
                        <Text>My Port</Text>
                    </ListItem>
                    <Separator bordered>
                        <Text>Application</Text>
                    </Separator>
                    <ListItem>
                        <Text>Setting</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Exit</Text>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}