import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Input,
  Item,
  Title,
  Footer,
  FooterTab,
  Button,
  Icon,
  Tab,
  Tabs,
  TabHeading,
  Card,
  CardItem,
} from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>

        <Header style={{ backgroundColor: '#21252b' }}>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>

        <Header>
          <Card>
            <CardItem>
              <Body>
                <Text>
                //Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Header>

        <Content style={{ backgroundColor: '#282c34' }}>


          <Card>

            <Header searchBar rounded>
              <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
                <Icon name="ios-people" />
              </Item>
              <Button transparent>
                <Text>Search</Text>
              </Button>
            </Header>

            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://files.coinmarketcap.com/static/img/coins/128x128/ripple.png' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
            </List>

            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://files.coinmarketcap.com/static/img/coins/128x128/ripple.png' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
            </List>

            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://files.coinmarketcap.com/static/img/coins/128x128/ripple.png' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
            </List>

            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://files.coinmarketcap.com/static/img/coins/128x128/ripple.png' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
            </List>

            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://files.coinmarketcap.com/static/img/coins/128x128/ripple.png' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
            </List>

            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://files.coinmarketcap.com/static/img/coins/128x128/ripple.png' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
            </List>

            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://files.coinmarketcap.com/static/img/coins/128x128/ripple.png' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
            </List>

            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://files.coinmarketcap.com/static/img/coins/128x128/ripple.png' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
            </List>

            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://files.coinmarketcap.com/static/img/coins/128x128/ripple.png' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
            </List>

            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://files.coinmarketcap.com/static/img/coins/128x128/ripple.png' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
            </List>

            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'https://files.coinmarketcap.com/static/img/coins/128x128/ripple.png' }} />
                </Left>
                <Body>
                  <Text>Kumar Pratik</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
            </List>
            

          </Card>

        </Content>

        <Footer>
          <FooterTab>
            <Button full style={{ backgroundColor: '#21252b' }}>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>

      //   <View style={styles.container}>
      //   <ScrollView
      //     style={styles.container}
      //     contentContainerStyle={styles.contentContainer}>
      //     <View style={styles.welcomeContainer}>
      //       <Image
      //         source={
      //           __DEV__
      //             ? require('../assets/images/app-icon.png')
      //             : require('../assets/images/app-icon.png')
      //         }
      //         style={styles.welcomeImage}
      //       />
      //     </View>

      //     <View style={styles.getStartedContainer}>
      //       {this._maybeRenderDevelopmentModeWarning()}

      //       <Text style={styles.getStartedText}>Get started by opening</Text>

      //       <View
      //         style={[
      //           styles.codeHighlightContainer,
      //           styles.homeScreenFilename,
      //         ]}>
      //         <MonoText style={styles.codeHighlightText}>
      //           screens/HomeScreen.js
      //         </MonoText>
      //       </View>

      //       <Text style={styles.getStartedText}>
      //         Change this text and your app will automatically reload.
      //       </Text>
      //     </View>

      //     <View style={styles.helpContainer}>
      //       <TouchableOpacity
      //         onPress={this._handleHelpPress}
      //         style={styles.helpLink}>
      //         <Text style={styles.helpLinkText}>
      //           Help, it didn’t automatically reload!
      //         </Text>
      //       </TouchableOpacity>
      //     </View>
      //   </ScrollView>

      //   <View style={styles.tabBarInfoContainer}>
      //     <Text style={styles.tabBarInfoText}>
      //       This is a tab bar. You can edit it in:
      //     </Text>

      //     <View
      //       style={[styles.codeHighlightContainer, styles.navigationFilename]}>
      //       <MonoText style={styles.codeHighlightText}>
      //         navigation/MainTabNavigator.js
      //       </MonoText>
      //     </View>
      //   </View>
      // </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };

  getTickerFromApiAsync = () => {
    return fetch('https://api.coinmarketcap.com/v1/ticker/?convert=THB&limit=10')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
