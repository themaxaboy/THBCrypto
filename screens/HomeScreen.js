import React from 'react';
import { ScrollView } from 'react-native';
import { Container, Header, Title, Content, Footer, Button, Left, Right, Body, Icon, Text, Item, Input, Thumbnail, List, ListItem, Drawer } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export default class HomeScreen extends React.Component {

  state = {
    ticker: [],
    global: {
      "total_market_cap_thb": 0,
      "total_24h_volume_thb": 0
    },
    tickerShow: [],
  }

  componentDidMount() {
    setInterval(() => this.fetchglobal(), 60000)
    setInterval(() => this.fetchTicker(50), 20000)
  }

  componentWillMount() {
    this.fetchglobal()
    this.fetchTicker(10)
  }

  fetchglobal = () => {
    console.log('fetchglobal');
    return fetch('https://api.coinmarketcap.com/v1/global/?convert=THB')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          global: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  fetchTicker = (limit) => {
    console.log('fetchTicker : ' + limit);
    return fetch('https://api.coinmarketcap.com/v1/ticker/?convert=THB&limit=' + limit)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          ticker: responseJson
        }, function () {
          this.updateTickerShow();
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  updateTickerShow = (inputText = '') => {
    let filtered = [];

    if (inputText == '') {
      this.setState({ tickerShow: this.state.ticker });
    }
    else {
      for (var i = 0; i < (this.state.ticker).length; i++) {
        if ((this.state.ticker[i].symbol).includes(inputText.toUpperCase())) {
          filtered.push(this.state.ticker[i]);
        }
      }
      this.setState({ tickerShow: filtered });
    }
  };

  closeDrawer = () => {
    this.drawer._root.close()
  };

  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {
    return (
      <Container>

        <Header style={{ backgroundColor: '#53bcf3', height: responsiveHeight(7) }}>
          <Left>
            <Button transparent>
              <Icon name='menu' style={{ fontSize: responsiveFontSize(3), color: '#ffffff' }} onPress={() => this.openDrawer()} />
            </Button>
          </Left>
          <Body>
            <Title style={{ fontSize: responsiveFontSize(1.8), fontWeight: 'bold', color: '#ffffff' }}>THBCrypto - Market Capitalizations</Title>
          </Body>
        </Header>
        <Drawer ref={(ref) => { this.drawer = ref; }}
          content={
            <Container style={{ flex: 1, backgroundColor: '#ffffff' }}>

            </Container>}
          onClose={() => this.closeDrawer()} >
          <Grid>

            <Row style={{ backgroundColor: '#ffffff', paddingVertical: responsiveHeight(1), height: responsiveHeight(6), paddingLeft: responsiveWidth(3), paddingRight: responsiveWidth(3) }}>
              <Col>
                <Text style={{ fontSize: responsiveFontSize(1.8), textAlign: 'left' }}>Market Cap</Text>
                <Text style={{ fontSize: responsiveFontSize(1.5), textAlign: 'left', fontWeight: 'bold' }} note>{parseFloat(this.state.global.total_market_cap_thb).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ฿'}</Text>
              </Col>
              <Col>
                <Text style={{ fontSize: responsiveFontSize(1.8), textAlign: 'right' }}>24h Volume</Text>
                <Text style={{ fontSize: responsiveFontSize(1.5), textAlign: 'right', fontWeight: 'bold' }} note>{parseFloat(this.state.global.total_24h_volume_thb).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ฿'}</Text>
              </Col>
            </Row>

            <Row style={{ backgroundColor: '#ffffff', paddingVertical: responsiveHeight(1), height: responsiveHeight(5) }}>
              <Col style={{ width: responsiveWidth(10) }}>
                <Icon name='md-globe' style={{ fontSize: responsiveFontSize(2), color: '#ababab', paddingLeft: responsiveWidth(3) }} />
              </Col>
              <Col>
                <Text style={{ fontSize: responsiveFontSize(1.8), color: '#53bcf3', fontWeight: 'bold', textAlign: 'left' }}>Southeast Asia</Text>
              </Col>
              <Col>
                <Text style={{ fontSize: responsiveFontSize(1.8), color: '#53bcf3', fontWeight: 'bold', textAlign: 'right', paddingRight: responsiveWidth(3) }}>Thailand</Text>
              </Col>
            </Row>

            <Header searchBar rounded style={{ paddingLeft: responsiveWidth(1), borderColor: '#ffffff', backgroundColor: '#ffffff', height: responsiveHeight(6), marginTop: responsiveHeight(-1.2) }}>
              <Item>
                <Icon name="ios-search" style={{ fontSize: responsiveFontSize(2), color: '#ababab' }} />
                <Input placeholder="Search" style={{ fontSize: responsiveFontSize(1.8) }}
                  onChangeText={(text) => {
                    this.updateTickerShow(text);
                  }
                  } />
                <Icon name="ios-trending-up" style={{ fontSize: responsiveFontSize(2), color: '#ababab' }} />
              </Item>
              <Button transparent>
                <Text style={{ fontSize: responsiveFontSize(1.8), color: '#53bcf3' }}>Search</Text>
              </Button>
            </Header>

            <Row>
              <Content>
                <ScrollView>
                  <List>
                    {
                      this.state.tickerShow.map((u, i) => {
                        return (
                          <ListItem key={i} avatar style={{ padding: 0 }}>
                            <Left>
                              <Thumbnail square style={{ width: responsiveWidth(10), height: responsiveWidth(10) }} source={{ uri: 'https://files.coinmarketcap.com/static/img/coins/64x64/' + u.id + '.png' }} />
                            </Left>
                            <Body>
                              <Grid>
                                <Row>
                                  <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold' }}>{u.symbol}</Text>
                                  {
                                    u.percent_change_24h < 0 ? (
                                      <Col><Text style={{ color: '#d7484c', fontSize: responsiveFontSize(2), fontWeight: 'bold' }}>▼</Text></Col>
                                    ) : (
                                        <Col><Text style={{ color: '#7fe2ae', fontSize: responsiveFontSize(2), fontWeight: 'bold' }}>▲</Text></Col>
                                      )
                                  }
                                </Row>
                              </Grid>
                              <Text note style={{ fontSize: responsiveFontSize(1.5) }}>{u.name}</Text>
                            </Body>
                            <Right>
                              <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', color: '#ababab' }}>{parseFloat(u.price_thb).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ฿'}</Text>
                              <Text note style={{ fontSize: responsiveFontSize(1.5) }}>{parseFloat(u.price_usd).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' $'}</Text>
                            </Right>
                            <Right>
                              {
                                u.percent_change_24h < 0 ?
                                  (
                                    <Button style={{ backgroundColor: '#d7484c', height: responsiveHeight(5) }}>
                                      <Text style={{ fontSize: responsiveFontSize(1.8), fontWeight: 'bold', textAlign: 'center', width: responsiveWidth(14) }}>
                                        {parseFloat(u.percent_change_24h).toFixed(2).replace("-", "") + '%'}
                                      </Text>
                                    </Button>
                                  ) : (
                                    <Button style={{ backgroundColor: '#7fe2ae', height: responsiveHeight(5) }}>
                                      <Text style={{ fontSize: responsiveFontSize(1.8), fontWeight: 'bold', textAlign: 'center', width: responsiveWidth(14) }}>
                                        {parseFloat(u.percent_change_24h).toFixed(2) + '%'}
                                      </Text>
                                    </Button>
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
            </Row>
          </Grid>

          <Footer style={{ backgroundColor: '#ffffff', height: responsiveHeight(10), paddingHorizontal: responsiveWidth(3), paddingVertical: responsiveHeight(1.5) }}>
            <Grid>
              <Col>
                <Button bordered style={{ alignSelf: 'center', borderColor: '#53bcf3' }}>
                  <Text style={{ width: responsiveWidth(36), color: '#53bcf3', fontSize: responsiveFontSize(1.8), fontWeight: 'bold', textAlign: 'center' }}>Sell</Text>
                </Button>
              </Col>
              <Col>
                <Button style={{ alignSelf: 'center', borderColor: '#53bcf3', backgroundColor: '#53bcf3' }}>
                  <Text style={{ width: responsiveWidth(36), fontSize: responsiveFontSize(1.8), fontWeight: 'bold', color: '#ffffff', textAlign: 'center' }}>Buy</Text>
                </Button>
              </Col>
            </Grid>
          </Footer>
        </Drawer>
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
