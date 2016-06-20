// Import React
import React from "react";

// Import Spectacle Core tags
import {
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  Markdown,
  Slide,
  Spectacle,
  Text,
  List,
  ListItem
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Draft from "../assets/draft";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  screenshot: require("../assets/screenshot.png")
};

preloader(images);

const theme = createTheme({
  primary: "#663399"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="white">
              Remarkbelow
            </Heading>
            <Text size={3} fit textColor="black">
              A markdown editor built with <strong>React</strong> and <strong>Draft.js</strong>.
            </Text>
            <Link href="https://github.com/kevin940726/remarkbelow">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
          </Slide>
          <Slide transition={["slide"]} notes="You can even put notes on your slide. How awesome is that?">
            <Layout>
                <Fill>
                    <Image src="https://cdn.auth0.com/blog/react-js/react.png" margin="0px auto 40px" height="300px"/>
                    <Heading size={4} textColor="white">
                        React
                    </Heading>
                </Fill>
                <Fill>
                    <Image src="https://www.draft-js-plugins.com/images/draft-js-plugins.png" margin="0px auto 40px" height="300px"/>
                    <Heading size={4} textColor="white">
                        Draft.js
                    </Heading>
                </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]}>
            <Layout>
                <Fill style={{ backgroundColor: "#EEE", border: "1px solid #AAA", padding: "20px", textAlign: "left" }}>
                    <Draft />
                </Fill>
                <Fill>
                    <Image src="https://www.draft-js-plugins.com/images/draft-js-plugins.png" margin="0px auto 40px" height="300px"/>
                    <Heading size={4} textColor="white">
                        Draft.js
                    </Heading>
                </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="#EEE" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading caps size={4} textColor="primary">
                Markdown
            </Heading>
            <CodePane
              lang="markdown"
              source={require("raw!../assets/test.example")}
              margin="20px auto"
              textSize="22px"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="#EEE">
            <Heading caps size={4} textColor="primary">
              Render to...
            </Heading>
            <Markdown>
              {require("raw!../assets/test.example")}
            </Markdown>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Heading size={1} caps textColor="white">
              DEMO
            </Heading>
            <Image src={images.screenshot} width="80%" />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Heading size={1} caps textColor="white">
              TODO
            </Heading>
            <List textColor="#FFF">
              <ListItem>so many bugs...</ListItem>
              <ListItem>performance</ListItem>
              <ListItem>syntax highlighting</ListItem>
              <ListItem>desktop app and online version</ListItem>
              <ListItem>all markdown syntax support</ListItem>
              <ListItem>online saving</ListItem>
              <ListItem>collaborative editing</ListItem>
              <ListItem>and so much more...</ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
