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
  state = {
    isLoading: true,
    ticker: [
      {
        "id": "bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC",
        "rank": "1",
        "price_usd": "4603.22",
        "price_btc": "1.0",
        "24h_volume_usd": "1846010000.0",
        "market_cap_usd": "76186513254.0",
        "available_supply": "16550700.0",
        "total_supply": "16550700.0",
        "percent_change_1h": "-0.15",
        "percent_change_24h": "0.2",
        "percent_change_7d": "-2.09",
        "last_updated": "1504811371",
        "price_thb": "152366.582",
        "24h_volume_thb": "61102931000.0",
        "market_cap_thb": "2521773588707"
      },
      {
        "id": "ethereum",
        "name": "Ethereum",
        "symbol": "ETH",
        "rank": "2",
        "price_usd": "328.345",
        "price_btc": "0.0708493",
        "24h_volume_usd": "741119000.0",
        "market_cap_usd": "31023778814.0",
        "available_supply": "94485309.0",
        "total_supply": "94485309.0",
        "percent_change_1h": "0.03",
        "percent_change_24h": "-1.38",
        "percent_change_7d": "-14.39",
        "last_updated": "1504811369",
        "price_thb": "10868.2195",
        "24h_volume_thb": "24531038900.0",
        "market_cap_thb": "1026887078746"
      },
      {
        "id": "bitcoin-cash",
        "name": "Bitcoin Cash",
        "symbol": "BCH",
        "rank": "3",
        "price_usd": "647.525",
        "price_btc": "0.140064",
        "24h_volume_usd": "1039630000.0",
        "market_cap_usd": "10726810115.0",
        "available_supply": "16565863.0",
        "total_supply": "16565863.0",
        "percent_change_1h": "-0.08",
        "percent_change_24h": "1.67",
        "percent_change_7d": "9.77",
        "last_updated": "1504811106",
        "price_thb": "21433.0775",
        "24h_volume_thb": "34411753000.0",
        "market_cap_thb": "355057414817"
      },
      {
        "id": "ripple",
        "name": "Ripple",
        "symbol": "XRP",
        "rank": "4",
        "price_usd": "0.224042",
        "price_btc": "0.00004834",
        "24h_volume_usd": "110352000.0",
        "market_cap_usd": "8590631023.0",
        "available_supply": "38343841883.0",
        "total_supply": "99994523265.0",
        "percent_change_1h": "-0.2",
        "percent_change_24h": "-0.03",
        "percent_change_7d": "-8.62",
        "last_updated": "1504811342",
        "price_thb": "7.4157902",
        "24h_volume_thb": "3652651200.0",
        "market_cap_thb": "284349886866"
      },
      {
        "id": "litecoin",
        "name": "Litecoin",
        "symbol": "LTC",
        "rank": "5",
        "price_usd": "78.8368",
        "price_btc": "0.0170112",
        "24h_volume_usd": "567685000.0",
        "market_cap_usd": "4164655058.0",
        "available_supply": "52826282.0",
        "total_supply": "52826282.0",
        "percent_change_1h": "-0.36",
        "percent_change_24h": "-0.6",
        "percent_change_7d": "13.89",
        "last_updated": "1504811344",
        "price_thb": "2609.49808",
        "24h_volume_thb": "18790373500.0",
        "market_cap_thb": "137850082423"
      },
      {
        "id": "nem",
        "name": "NEM",
        "symbol": "XEM",
        "rank": "6",
        "price_usd": "0.29638",
        "price_btc": "0.00006395",
        "24h_volume_usd": "4000810.0",
        "market_cap_usd": "2667420000.0",
        "available_supply": "8999999999.0",
        "total_supply": "8999999999.0",
        "percent_change_1h": "0.17",
        "percent_change_24h": "-2.14",
        "percent_change_7d": "-11.31",
        "last_updated": "1504811359",
        "price_thb": "9.810178",
        "24h_volume_thb": "132426811.0",
        "market_cap_thb": "88291601990.0"
      },
      {
        "id": "dash",
        "name": "Dash",
        "symbol": "DASH",
        "rank": "7",
        "price_usd": "343.408",
        "price_btc": "0.0740994",
        "24h_volume_usd": "25729000.0",
        "market_cap_usd": "2590537339.0",
        "available_supply": "7543614.0",
        "total_supply": "7543614.0",
        "percent_change_1h": "0.02",
        "percent_change_24h": "-0.74",
        "percent_change_7d": "-8.46",
        "last_updated": "1504811347",
        "price_thb": "11366.8048",
        "24h_volume_thb": "851629900.0",
        "market_cap_thb": "85746785929.0"
      },
      {
        "id": "monero",
        "name": "Monero",
        "symbol": "XMR",
        "rank": "8",
        "price_usd": "118.723",
        "price_btc": "0.0256177",
        "24h_volume_usd": "53493400.0",
        "market_cap_usd": "1786731647.0",
        "available_supply": "15049583.0",
        "total_supply": "15049583.0",
        "percent_change_1h": "-0.12",
        "percent_change_24h": "-2.34",
        "percent_change_7d": "-15.29",
        "last_updated": "1504811351",
        "price_thb": "3929.7313",
        "24h_volume_thb": "1770631540.0",
        "market_cap_thb": "59140817506.0"
      },
      {
        "id": "iota",
        "name": "IOTA",
        "symbol": "MIOTA",
        "rank": "9",
        "price_usd": "0.635951",
        "price_btc": "0.00013722",
        "24h_volume_usd": "28723300.0",
        "market_cap_usd": "1767645063.0",
        "available_supply": "2779530283.0",
        "total_supply": "2779530283.0",
        "percent_change_1h": "-5.07",
        "percent_change_24h": "-12.9",
        "percent_change_7d": "-26.45",
        "last_updated": "1504811397",
        "price_thb": "21.0499781",
        "24h_volume_thb": "950741230.0",
        "market_cap_thb": "58509051585.0"
      },
      {
        "id": "ethereum-classic",
        "name": "Ethereum Classic",
        "symbol": "ETC",
        "rank": "10",
        "price_usd": "17.9632",
        "price_btc": "0.00387605",
        "24h_volume_usd": "153492000.0",
        "market_cap_usd": "1711742572.0",
        "available_supply": "95291628.0",
        "total_supply": "95291628.0",
        "percent_change_1h": "-0.46",
        "percent_change_24h": "-1.07",
        "percent_change_7d": "11.48",
        "last_updated": "1504811377",
        "price_thb": "594.58192",
        "24h_volume_thb": "5080585200.0",
        "market_cap_thb": "56658679136.0"
      }
    ],
    global: {
      "total_market_cap_usd": 162928398901,
      "total_24h_volume_usd": 5830393854,
      "bitcoin_percentage_of_market_cap": 46.74,
      "active_currencies": 867,
      "active_assets": 237,
      "active_markets": 5494,
      "total_market_cap_thb": 5392930003623,
      "total_24h_volume_thb": 192986036582
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => this.fetchglobal(), 60000)
    this.timer = setInterval(() => this.fetchTicker(), 5000)
  }

  fetchglobal = () => {
    return fetch('https://api.coinmarketcap.com/v1/global/?convert=THB')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ isLoading: false, global: responseJson });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  fetchTicker = () => {
    return fetch('https://api.coinmarketcap.com/v1/ticker/?convert=THB&limit=100')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ isLoading: false, ticker: responseJson });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <Container>

        <Header style={{ backgroundColor: '#6ccdcf', height: 40 }}>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={{ fontWeight: '400' }}>THBCrypto Market Cap.</Title>
          </Body>
          <Right />
        </Header>

        <Header style={{ backgroundColor: '#ffffff' }}>
          <Left>
            <Text style={{ fontSize: 20 }}>Market Cap</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }} note>{(this.state.global.total_market_cap_thb).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ฿'}</Text>
          </Left>
          <Left>
            <Text style={{ fontSize: 20 }}>24h Volume</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }} note>{(this.state.global.total_24h_volume_thb).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ฿'}</Text>
          </Left>
          <Left>
            <Text style={{ fontSize: 20 }}>BTC Dominance</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }} note>{parseFloat(this.state.global.bitcoin_percentage_of_market_cap).toFixed(2) + '%'}</Text>
          </Left>
        </Header>

        <Header style={{ backgroundColor: '#ffffff' }}>
          <Left>
            <Icon name='md-globe' style={{ color: '#ababab' }} />
          </Left>
          <Body>
            <Text style={{ fontSize: 20, color: '#4bb8f2', fontWeight: 'bold' }}>Asia</Text>
          </Body>
          <Right>
            <Text style={{ fontSize: 20, color: '#4bb8f2', fontWeight: 'bold' }}>Thailand</Text>
          </Right>
        </Header>

        <Header searchBar rounded style={{ backgroundColor: '#ffffff' }}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-trending-up" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <Content>
          <ScrollView>
            <List>
              {
                this.state.ticker.map((u, i) => {
                  return (
                    <ListItem avatar key={i}>
                      <Left>
                        <Thumbnail source={{ uri: 'https://files.coinmarketcap.com/static/img/coins/128x128/' + u.id + '.png' }} />
                      </Left>
                      <Body>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{u.symbol}</Text>
                        <Text note>{u.name}</Text>
                      </Body>
                      <Right>
                        <Text note style={{ fontSize: 20, fontWeight: '400' }}>{parseFloat(u.price_thb).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ฿'}</Text>
                        <Text note>{parseFloat(u.price_usd).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' $'}</Text>
                      </Right>
                      <Right>
                        {
                          u.percent_change_1h < 0 ?
                            (
                              <Button style={{ backgroundColor: '#d7484c' }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', width: 60 }}>
                                  {parseFloat(u.percent_change_1h).toFixed(2).replace("-", "") + '%'}
                                </Text>
                              </Button>
                            ) : (
                              <Button style={{ backgroundColor: '#7fe2ae' }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', width: 60 }}>
                                  {parseFloat(u.percent_change_1h).toFixed(2) + '%'}
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

        <Footer style={{ backgroundColor: '#ffffff', height: 80 }}>
          <FooterTab style={{ backgroundColor: '#ffffff', position: "absolute", top: 0, bottom: 0, left: 0, right: 0, padding: 15 }}>
            <Button bordered info>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Sell</Text>
            </Button>

            <Button info>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#ffffff' }}>Buy</Text>
            </Button>

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
