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
import { StackNavigator } from "react-navigation";

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
            <Text style={{ fontSize: responsiveFontSize(1.5) }}>My Port</Text>
          </ListItem>
          <ListItem>
            <Icon
              name="md-alert"
              style={{
                color: "#ababab",
                paddingHorizontal: responsiveWidth(2)
              }}
            />
            <Text style={{ fontSize: responsiveFontSize(1.5) }}>Alerts</Text>
          </ListItem>
          <ListItem last>
            <Icon
              name="md-bookmarks"
              style={{
                color: "#ababab",
                paddingHorizontal: responsiveWidth(2)
              }}
            />
            <Text style={{ fontSize: responsiveFontSize(1.5) }}>
              My Favorite
            </Text>
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
            <Text style={{ fontSize: responsiveFontSize(1.5) }}>
              Market Capitalizations
            </Text>
          </ListItem>
          <ListItem last>
            <Icon
              name="md-trending-up"
              style={{
                color: "#ababab",
                paddingHorizontal: responsiveWidth(2)
              }}
            />
            <Text style={{ fontSize: responsiveFontSize(1.5) }}>
              Top Gainers / Losers
            </Text>
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
            <Text style={{ fontSize: responsiveFontSize(1.5) }}>
              Currency Converter
            </Text>
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
            <Text style={{ fontSize: responsiveFontSize(1.5) }}>Settings</Text>
          </ListItem>
          <ListItem>
            <Icon
              name="md-thumbs-up"
              style={{
                color: "#ababab",
                paddingHorizontal: responsiveWidth(2)
              }}
            />
            <Text style={{ fontSize: responsiveFontSize(1.5) }}>Rate Us</Text>
          </ListItem>
          <ListItem>
            <Icon
              name="md-share"
              style={{
                color: "#ababab",
                paddingHorizontal: responsiveWidth(2)
              }}
            />
            <Text style={{ fontSize: responsiveFontSize(1.5) }}>
              Invite Friends
            </Text>
          </ListItem>
          <ListItem>
            <Icon
              name="md-warning"
              style={{
                color: "#ababab",
                paddingHorizontal: responsiveWidth(2)
              }}
            />
            <Text style={{ fontSize: responsiveFontSize(1.5) }}>
              Send Feedback
            </Text>
          </ListItem>
          <ListItem last>
            <Icon
              name="md-power"
              style={{
                color: "#ababab",
                paddingHorizontal: responsiveWidth(2)
              }}
            />
            <Text style={{ fontSize: responsiveFontSize(1.5) }}>Exit</Text>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
