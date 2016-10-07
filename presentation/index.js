// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  globeit: require("../assets/GlobeIT.png"),
  parker: require("../assets/parker.jpg"),
  campic: require("../assets/campic.png"),
  davejungst: require("../assets/davejungst.png"),
  neco: require("../assets/neco.png"),
  john: require("../assets/john.png")
};

preloader(images);

const theme = createTheme({
  primary: "black"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={[""]} transitionDuration={500}>
        <Slide bgColor="primary">
          <Heading caps fit>The Team</Heading>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                John Amador
              </Heading>
              <Image img src={images.john}></Image>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Necoline Hubner
              </Heading>
              <Image img src={images.neco}></Image>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Cameron Packer
              </Heading>
              <Image img src={images.campic}></Image>
            </Fill>
            {/* <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Parker Bond
              </Heading>
              <Image img src={images.parker}></Image>
            </Fill> */}
          </Layout>
        </Slide>
          {/* <Slide transition={["zoom"]}>
            <img src={images.globeit.replace("/", "")}
            style={{ height: "100%", width: "100%"}}
            />
          </Slide> */}
          <Slide transition={["slide"]} bgColor="black" notes="This is the why">
           <Heading size={2} fit textColor="white" textFont="primary">
             GlobeIT
           </Heading>
           <Text textSize="2em" textColor="White">
             The story behind the masterpiece
           </Text>
         </Slide>
          {/* <Slide transition={["spin"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="White">
              What is GlobeIT?
            </Heading>
            <Text textSize="2em" textColor="White">
              explanation of what GlobIT is
            </Text>
            <a href="./assets/testing.mov" target="_blank">How does it work?</a>
          </Slide> */}
          <Slide transition={["fade"]} bgColor="black" notes="the what with video">
            <Heading>How did we create this app?</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/globeit.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="black" textColor="white" notes="how... and bunch of images">
            <Heading textColor="white">Technologies Used:</Heading>
            <List>
              <Appear><ListItem>React</ListItem></Appear>
              <Appear><ListItem>Express</ListItem></Appear>
              <Appear><ListItem>NodeJS</ListItem></Appear>
              <Appear><ListItem>React-Router</ListItem></Appear>
              <Appear><ListItem>Flux/Redux</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
              <Appear><ListItem>Many, many, hours of hard work</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Special Thanks!</Heading>
            <Layout>
              <Fill>
                <Heading size={6} caps textColor="secondary" bgColor="white" margin={5}>
                  Parker Bond
                </Heading>
                <Image img src={images.parker}></Image>
              </Fill>
              <Fill>
                <Heading size={6} caps textColor="secondary" bgColor="white" margin={5}>
                  Dave Jungst
                </Heading>
                {/* <Image img src={images.davejungst}></Image> */}
              </Fill>
              <Fill>
                <Heading size={6} caps textColor="secondary" bgColor="white" margin={5}>
                  Tasha Johnson
                </Heading>
              </Fill>
              <Fill>
                <Heading size={6} caps textColor="secondary" bgColor="white" margin={5}>
                  DevPoint Labs!
                </Heading>
              </Fill>
              <Fill>
                <Heading size={6} caps textColor="secondary" bgColor="white" margin={5}>
                  Chrome Expirements
                </Heading>
              </Fill>
              <Fill>
                <Heading size={6} caps textColor="secondary" bgColor="white" margin={5}>
                  Zhixuan Lai - react template for webgl
                </Heading>
              </Fill>
              <Fill>
                <Heading size={6} caps textColor="secondary" bgColor="white" margin={5}>
                  Vojtěch Král
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading caps fit>Team</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  John Amador
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Necoline Hubner
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Cameron Packer
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Parker Bond
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          {/*<Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide> */}
        </Deck>
      </Spectacle>
    );
  }
}
