import React from "react";
import { ScrollView, StyleSheet, View, Image, FlatList } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Item,
  Input,
  Thumbnail,
  List,
  ListItem,
  Drawer
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

import DrawerBar from "../navigation/DrawerBar";

export default class HomeScreen extends React.Component {
  state = {
    ticker: [],
    global: {
      total_market_cap_thb: 0,
      total_24h_volume_thb: 0
    },
    tickerShow: [],
    refreshing: false,
    searchInput: ""
  };

  render() {
    return (
      <Container>
        <View style={{ backgroundColor: "#53bcf3" }}>
          <Image
            style={{
              resizeMode: Image.resizeMode.stretch,
              height: responsiveHeight(7),
              width: responsiveWidth(100),
              position: "absolute"
            }}
            source={require("../assets/images/fadedBar.png")}
          />
          <Header
            style={{
              backgroundColor: "transparent",
              height: responsiveHeight(7)
            }}
          >
            <Left>
              <Button transparent onPress={() => this.openDrawer()}>
                <Icon
                  name="menu"
                  style={{ fontSize: responsiveFontSize(3), color: "#ffffff" }}
                />
              </Button>
            </Left>
            <Body>
              <Title
                style={{
                  fontSize: responsiveFontSize(1.8),
                  fontWeight: "bold",
                  color: "#ffffff"
                }}
              >
                THBCrypto - Market Capitalizations
              </Title>
            </Body>
          </Header>
        </View>
        <Drawer
          ref={ref => {
            this.drawer = ref;
          }}
          content={<DrawerBar />}
          side="left"
          panOpenMask={0.8}
          captureGestures="open"
          onClose={this.closeDrawer.bind(this)}
          onOpen={this.openDrawer.bind(this)}
        >
          <Grid>
            <Row
              style={{
                backgroundColor: "#ffffff",
                paddingVertical: responsiveHeight(1),
                height: responsiveHeight(6),
                paddingLeft: responsiveWidth(3),
                paddingRight: responsiveWidth(3)
              }}
            >
              <Col>
                <Text
                  style={{
                    fontSize: responsiveFontSize(1.8),
                    textAlign: "left"
                  }}
                >
                  Market Cap
                </Text>
                <Text
                  style={{
                    fontSize: responsiveFontSize(1.5),
                    textAlign: "left",
                    fontWeight: "bold"
                  }}
                  note
                >
                  {parseFloat(this.state.global.total_market_cap_thb)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " ฿"}
                </Text>
              </Col>
              <Col>
                <Text
                  style={{
                    fontSize: responsiveFontSize(1.8),
                    textAlign: "right"
                  }}
                >
                  24h Volume
                </Text>
                <Text
                  style={{
                    fontSize: responsiveFontSize(1.5),
                    textAlign: "right",
                    fontWeight: "bold"
                  }}
                  note
                >
                  {parseFloat(this.state.global.total_24h_volume_thb)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " ฿"}
                </Text>
              </Col>
            </Row>

            <Row
              style={{
                backgroundColor: "#ffffff",
                paddingVertical: responsiveHeight(1),
                height: responsiveHeight(5)
              }}
            >
              <Col style={{ width: responsiveWidth(10) }}>
                <Icon
                  name="md-globe"
                  style={{
                    fontSize: responsiveFontSize(2),
                    color: "#ababab",
                    paddingLeft: responsiveWidth(3)
                  }}
                />
              </Col>
              <Col>
                <Text
                  style={{
                    fontSize: responsiveFontSize(1.8),
                    color: "#53bcf3",
                    fontWeight: "bold",
                    textAlign: "left"
                  }}
                >
                  Southeast Asia
                </Text>
              </Col>
              <Col>
                <Text
                  style={{
                    fontSize: responsiveFontSize(1.8),
                    color: "#53bcf3",
                    fontWeight: "bold",
                    textAlign: "right",
                    paddingRight: responsiveWidth(3)
                  }}
                >
                  Thailand
                </Text>
              </Col>
            </Row>

            <Header
              noShadow
              searchBar
              rounded
              style={{
                paddingLeft: responsiveWidth(1),
                borderColor: "#ffffff",
                backgroundColor: "#ffffff",
                height: responsiveHeight(6),
                marginTop: responsiveHeight(-1.2)
              }}
            >
              <Item>
                <Icon
                  name="ios-search"
                  style={{ fontSize: responsiveFontSize(2), color: "#ababab" }}
                />
                <Input
                  placeholder="Search"
                  style={{ fontSize: responsiveFontSize(1.8) }}
                  onChangeText={text => {
                    this.setState({ searchInput: text });
                    this.updateTickerShow(text);
                  }}
                  value={this.state.searchInput}
                />
                <Icon
                  name="ios-trending-up"
                  style={{ fontSize: responsiveFontSize(2), color: "#ababab" }}
                />
              </Item>
              <Button transparent>
                <Text
                  style={{
                    fontSize: responsiveFontSize(1.8),
                    color: "#53bcf3"
                  }}
                >
                  Search
                </Text>
              </Button>
            </Header>

            <Row>
              <Content>
                <ScrollView>
                  <List>
                    <FlatList
                      data={this.state.tickerShow}
                      keyExtractor={item => item.rank}
                      renderItem={({ item }) => (
                        <ListItem avatar style={{ padding: 0 }}>
                          <Left>
                            <Thumbnail
                              square
                              style={{
                                width: responsiveWidth(10),
                                height: responsiveWidth(10)
                              }}
                              source={{
                                uri:
                                  "https://files.coinmarketcap.com/static/img/coins/64x64/" +
                                  item.id +
                                  ".png"
                              }}
                            />
                          </Left>
                          <Body>
                            <Grid>
                              <Row>
                                <Text
                                  style={{
                                    fontSize: responsiveFontSize(2),
                                    fontWeight: "bold"
                                  }}
                                >
                                  {item.symbol}
                                </Text>
                                {item.percent_change_24h < 0 ? (
                                  <Col>
                                    <Text
                                      style={{
                                        color: "#d7484c",
                                        fontSize: responsiveFontSize(2),
                                        fontWeight: "bold"
                                      }}
                                    >
                                      ▼
                                    </Text>
                                  </Col>
                                ) : (
                                  <Col>
                                    <Text
                                      style={{
                                        color: "#7fe2ae",
                                        fontSize: responsiveFontSize(2),
                                        fontWeight: "bold"
                                      }}
                                    >
                                      ▲
                                    </Text>
                                  </Col>
                                )}
                              </Row>
                            </Grid>
                            <Text
                              note
                              style={{ fontSize: responsiveFontSize(1.5) }}
                            >
                              {item.name}
                            </Text>
                          </Body>
                          <Right>
                            <Text
                              style={{
                                fontSize: responsiveFontSize(2),
                                fontWeight: "bold",
                                color: "#ababab"
                              }}
                            >
                              {parseFloat(item.price_thb)
                                .toFixed(2)
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " ฿"}
                            </Text>
                            <Text
                              note
                              style={{ fontSize: responsiveFontSize(1.5) }}
                            >
                              {parseFloat(item.price_usd)
                                .toFixed(2)
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " $"}
                            </Text>
                          </Right>
                          <Right>
                            {item.percent_change_24h < 0 ? (
                              <Button
                                style={{
                                  backgroundColor: "#d7484c",
                                  height: responsiveHeight(5)
                                }}
                              >
                                <Text
                                  style={{
                                    fontSize: responsiveFontSize(1.8),
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    width: responsiveWidth(14)
                                  }}
                                >
                                  {parseFloat(item.percent_change_24h)
                                    .toFixed(2)
                                    .replace("-", "") + "%"}
                                </Text>
                              </Button>
                            ) : (
                              <Button
                                style={{
                                  backgroundColor: "#7fe2ae",
                                  height: responsiveHeight(5)
                                }}
                              >
                                <Text
                                  style={{
                                    fontSize: responsiveFontSize(1.8),
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    width: responsiveWidth(14)
                                  }}
                                >
                                  {parseFloat(item.percent_change_24h).toFixed(
                                    2
                                  ) + "%"}
                                </Text>
                              </Button>
                            )}
                          </Right>
                        </ListItem>
                      )}
                    />
                  </List>
                </ScrollView>
              </Content>
            </Row>
          </Grid>

          <Footer
            style={{
              backgroundColor: "#ffffff",
              height: responsiveHeight(10),
              paddingHorizontal: responsiveWidth(3),
              paddingVertical: responsiveHeight(1.5)
            }}
          >
            <Grid>
              <Col>
                <Button
                  bordered
                  style={{ alignSelf: "center", borderColor: "#53bcf3" }}
                >
                  <Text
                    style={{
                      width: responsiveWidth(36),
                      color: "#53bcf3",
                      fontSize: responsiveFontSize(1.8),
                      fontWeight: "bold",
                      textAlign: "center"
                    }}
                  >
                    Sell
                  </Text>
                </Button>
              </Col>
              <Col>
                <Button
                  style={{
                    alignSelf: "center",
                    borderColor: "#53bcf3",
                    backgroundColor: "#53bcf3"
                  }}
                >
                  <Text
                    style={{
                      width: responsiveWidth(36),
                      fontSize: responsiveFontSize(1.8),
                      fontWeight: "bold",
                      color: "#ffffff",
                      textAlign: "center"
                    }}
                  >
                    Buy
                  </Text>
                </Button>
              </Col>
            </Grid>
          </Footer>
        </Drawer>
      </Container>
    );
  }

  componentDidMount() {
    this.fetchGlobal();
    this.fetchTicker(5);
    this.updateTickerShow();

    this.timer = setInterval(() => this.fetchGlobal(), 60000);
    this.timer = setInterval(() => this.fetchTicker(10), 60000);
  }

  fetchGlobal = () => {
    console.log("fetchglobal");
    return fetch("https://api.coinmarketcap.com/v1/global/?convert=THB")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          global: responseJson
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  fetchTicker = limit => {
    console.log("fetchTicker : " + limit);
    return fetch(
      "https://api.coinmarketcap.com/v1/ticker/?convert=THB&limit=" + limit
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            ticker: responseJson
          },
          function() {
            this.updateTickerShow(this.state.searchInput);
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  };

  updateTickerShow = (inputText = "") => {
    let filtered = [];

    if (inputText != "") {
      filtered = this.state.ticker.filter(function(el) {
        return el.symbol.includes(inputText.toUpperCase());
      });
      this.setState({ tickerShow: filtered });
    } else {
      this.setState({ tickerShow: this.state.ticker });
    }
  };

  _onRefresh = () => {
    this.setState({ refreshing: true }, () => {
      this.fetchTicker(0);
    });
  };

  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };
}
