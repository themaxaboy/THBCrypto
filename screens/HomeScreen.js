import React from 'react';
import { Platform, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
//import { WebBrowser } from 'expo';
//import { MonoText } from '../components/StyledText';

/*import {
  Container,
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
} from 'native-base';*/
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Item, Input, Thumbnail, List, ListItem } from 'native-base';

export default class HomeScreen extends React.Component {
  /*static navigationOptions = {
    header: null,
  };*/
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }

  componentDidMount() {
    return fetch('https://api.coinmarketcap.com/v1/ticker/?convert=THB&limit=20')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ isLoading: false, dataSource: responseJson });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <Container>

        <Header backgroundColor='#d7dae0'>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>THBCrypto</Title>
          </Body>
          <Right />
        </Header>

        <Header backgroundColor='#d7dae0'>
          <Card>
            <CardItem bordered={true}>
              <Body>
                <Text>
                  12345
                5456465
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Header>

        <Icon name='home' /><Text>Asia              Thailand</Text>

        <Header searchBar rounded backgroundColor='#d7dae0'>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <Content>

          <ScrollView>
            <List>
              {
                this.state.dataSource.map((u, i) => {
                  return (
                    <ListItem avatar key={i}>
                      <Left>
                        <Thumbnail source={{ uri: 'https://files.coinmarketcap.com/static/img/coins/128x128/' + u.id + '.png' }} />
                      </Left>
                      <Body>
                        <Text style={{ fontSize: 20 }}>{u.symbol}</Text>
                        <Text note>{u.name}</Text>
                      </Body>
                      <Right>
                        <Text style={{ fontSize: 20 }}>{parseFloat(u.price_thb).toFixed(2)+' ฿'}</Text>
                        <Text note>{parseFloat(u.price_usd).toFixed(2)+' $'}</Text>
                      </Right>
                      <Right>
                        {
                          u.percent_change_1h < 0 ?
                            (
                              <Button style={{backgroundColor: '#d7484c'}}><Text style={{ fontSize: 15 }}>{u.percent_change_1h + ' %'}</Text></Button>
                            ) : (
                              <Button style={{backgroundColor: '#7fe2ae'}}><Text style={{ fontSize: 15 }}>{u.percent_change_1h + ' %'}</Text></Button>
                            )
                        }
                      </Right>
                    </ListItem>
                  );
                })
              }
            </List>
          </ScrollView>

        </Content>

        <Footer>
          <FooterTab>

          </FooterTab>
        </Footer>

      </Container>

      /*<View>
      <Header
        backgroundColor='#6ccdcf'
        leftComponent={{ icon: 'menu', color: '#ffffff' }}
        centerComponent={{ text: 'THBCrypto', style: { color: '#ffffff' } }}
      />

      <Card containerStyle={{ marginTop: 85 }}>

      </Card>

      <Card containerStyle={{ padding: 0 }}>
        <SearchBar containerStyle={{ backgroundColor: '#ffffff' }}
          lightTheme
          round
          placeholder='Search Symbol...' />
        <ScrollView>
          {
            users.map((u, i) => {
              return (
                <ListItem
                  key={i}
                  roundAvatar
                  title={u.name}
                  avatar={{ uri: u.avatar }}
                />
              );
            })
          }
        </ScrollView>
      </Card>


      <Button
        large raised
        icon={{ name: 'envira', type: 'font-awesome' }}
        title='LARGE WITH RIGHT ICON' />



    </View>*/


      /*   <View style={styles.container}>
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
      // </View>*/
    );
  }

  /*_maybeRenderDevelopmentModeWarning() {
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
  }*/

  /*_handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };*/
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
});*/
