import React from 'react';
import { Header } from 'react-native-elements'

export default class TopHeader extends React.Component {
    render() {
        return (
            <Header
                backgroundColor='#6ccdcf'
                leftComponent={{ icon: 'menu', color: '#ffffff' }}
                centerComponent={{ text: 'THBCrypto', style: { color: '#ffffff' } }}
            />
        );
    }
}