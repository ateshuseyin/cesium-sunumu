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
  myself: require('../assets/myself.jpg'),
  architecture: require('../assets/architecture.jpg'),
  sandcatsle: require('../assets/sandcatsle.png'),
  question: require('../assets/question.jpg'),
  pjcozzi: require('../assets/pjcozzi.jpg')
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
          <Text textColor="secondary" size={1}>http://cesium-sunum.surge.sh</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" bgImage={images.myself}>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>An open-source JavaScript library for world-class 3D globes and
            maps</Heading>
          <List>
            <ListItem>3045 Github Yıldızı</ListItem>
            <ListItem>1346 Fork</ListItem>
            <ListItem>10 Ekip İçi Geliştirici + 140 Katkı Sağlayıcı</ListItem>
            <ListItem>143K Kod + 131K Test = %95 Coverage</ListItem>
            <ListItem>6778 Forum Konusu</ListItem>
            <ListItem>Mükemmel Dokümantasyon</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary">TEKNOLOJİ</Heading>
          <List>
            <ListItem>Vanilla JS (es5)</ListItem>
            <ListItem>WebGL</ListItem>
            <ListItem>requirejs</ListItem>
            <ListItem>gulp</ListItem>
            <ListItem>jasmine + karma</ListItem>
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
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary">ÖZELLİKLER</Heading>
          <List>
            <ListItem>2D, 3D ve 2.5D</ListItem>
            <ListItem>wms, wmts, arcgis, google, mapbox, bing, osm</ListItem>
            <ListItem>Temel grafikler</ListItem>
            <ListItem>3D model</ListItem>
            <ListItem>Yeryüzü kabartma</ListItem>
            <ListItem>3D Tiles</ListItem>
            <ListItem>KML, GeoJSON, TopoJSON, CZML</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary">Mimari</Heading>
          <Image src={images.architecture}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary">Sandcastle = CesiumFiddle</Heading>
          <Image src={images.sandcatsle}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading textColor="primary" fit>Dersler</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
          <Heading textColor="tertiary" fit>Güven ve Fikre Saygı</Heading>
          <Image src={images.pjcozzi}/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">
          <Heading textColor="primary" fit>Ekibe Dahil Etme</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading textColor="secondary" fit>Onure Etme</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
          <Heading textColor="tertiary" fit>Açık Geliştirme</Heading>
          <Text>Katkı sağlayıcı olmak güzel :)</Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">
          <Heading textColor="primary" fit>Ders Çıkartma ve Aksiyon Alma</Heading>
          <Text textColor="primary">cesium-concierge</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading textColor="secondary" fit>Başarı Hikayesi</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" bgImage={images.question}>
        </Slide>
      </Deck>
    );
  }
}


