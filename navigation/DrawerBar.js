import React from "react";
import {
  Container,
  Content,
  Separator,
  ListItem,
  Text,
  Icon
} from "native-base";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <Content>
          <Separator bordered>
            <Text
              style={{ fontSize: responsiveFontSize(1.8), fontWeight: "bold" }}
            >
              Profile
            </Text>
          </Separator>

          <ListItem>
            <Icon
              name="md-briefcase"
              style={{
                color: "#ababab",
                paddingHorizontal: responsiveWidth(2)
              }}
            />
            <Text>My Port</Text>
          </ListItem>
          <ListItem>
            <Icon
              name="md-alert"
              style={{
                color: "#ababab",
                paddingHorizontal: responsiveWidth(2)
              }}
            />
            <Text>Alerts</Text>
          </ListItem>
          <ListItem last>
            <Icon
              name="md-bookmarks"
              style={{
                color: "#ababab",
                paddingHorizontal: responsiveWidth(2)
              }}
            />
            <Text>My Favorite</Text>
          </ListItem>

          <Separator bordered>
            <Text
              style={{ fontSize: responsiveFontSize(1.8), fontWeight: "bold" }}
            >
              Live Markets
            </Text>
          </Separator>

          <ListItem>
            <Icon
              name="md-analytics"
              style={{
                color: "#ababab",
                paddingHorizontal: responsiveWidth(2)
              }}
            />
            <Text>Market Capitalizations</Text>
          </ListItem>
          <ListItem last>
            <Icon
              name="md-trending-up"
              style={{
                color: "#ababab",
                paddingHorizontal: responsiveWidth(2)
              }}
            />
            <Text>Top Gainers / Losers</Text>
          </ListItem>

          <Separator bordered>
            <Text
              style={{ fontSize: responsiveFontSize(1.8), fontWeight: "bold" }}
            >
              Tools
            </Text>
          </Separator>

          <ListItem last>
            <Icon
              name="md-swap"
              style={{
                color: "#ababab",
                paddingHorizontal: responsiveWidth(2)
              }}
            />
            <Text>Currency Converter</Text>
          </ListItem>

          <Separator bordered>
            <Text
              style={{ fontSize: responsiveFontSize(1.8), fontWeight: "bold" }}
            >
              More
            </Text>
          </Separator>

          <ListItem>
            <Icon
              name="md-settings"
              style={{
                color: "#ababab",
                paddingHorizontal: responsiveWidth(2)
              }}
            />
            <Text>Settings</Text>
          </ListItem>
          <ListItem>
            <Icon
              name="md-thumbs-up"
              style={{
                color: "#ababab",
                paddingHorizontal: responsiveWidth(2)
              }}
            />
            <Text>Rate Us</Text>
          </ListItem>
          <ListItem>
            <Icon
              name="md-share"
              style={{
                color: "#ababab",
                paddingHorizontal: responsiveWidth(2)
              }}
            />
            <Text>Invite Friends</Text>
          </ListItem>
          <ListItem>
            <Icon
              name="md-warning"
              style={{
                color: "#ababab",
                paddingHorizontal: responsiveWidth(2)
              }}
            />
            <Text>Send Feedback</Text>
          </ListItem>
          <ListItem last>
            <Icon
              name="md-power"
              style={{
                color: "#ababab",
                paddingHorizontal: responsiveWidth(2)
              }}
            />
            <Text>Exit</Text>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
