// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";


// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const images = {
  cesiumLogo: require('../assets/cesium_color_black.png'),
  myself: require('../assets/myself.jpg')
};

const helloWorld = require('../assets/helloworld.txt');

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const fullPage = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.cesiumLogo}/>
          <Text textColor="tertiary" size={1} bold>
            Javascript Ankara
          </Text>
          <Text textColor="tertiary" size={1} bold>
            Nisan 2018
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" bgImage={images.myself}>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>An open-source JavaScript library for world-class 3D globes and
            maps</Heading>
          <List>
            <ListItem>3045 Github Yıldızı</ListItem>
            <ListItem>1346 Fork</ListItem>
            <ListItem>10 Geliştirici + 140 Katkı Sağlayıcı</ListItem>
            <ListItem>143K Kaynak Kod + 131K Test Kodu</ListItem>
            <ListItem>%95 Coverage</ListItem>
            <ListItem>Mükemmel Dokümantasyon</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Mimari</Heading>
          <List>
            <ListItem>WebGL</ListItem>
            <ListItem></ListItem>
            <ListItem>10 Geliştirici</ListItem>
            <ListItem>150 Katkı Sağlayıcı</ListItem>
            <ListItem>143K Kaynak Kod + 131K Test Kodu</ListItem>
            <ListItem>%95 Coverage</ListItem>
            <ListItem>Mükemmel Dokümantasyon</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <iframe src="https://cesiumjs.org/Cesium/Build/Apps/CesiumViewer" className="fill">
          </iframe>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">
          <CodePane source={helloWorld} lang="html"/>
        </Slide>
      </Deck>
    );
  }
}
