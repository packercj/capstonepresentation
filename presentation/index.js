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
  Text,
  Table,
  TableRow,
  TableItem
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
// const video = {
//   globetest: require("../assets/globetest.m4v")
// };

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
          </Layout>
        </Slide>
          <Slide transition={["zoom"]} bgColor="black" notes="This is the why">
           <Heading size={2} fit textColor="white" textFont="primary">
             GlobeIT
           </Heading>
           <Text textSize="2em" textColor="White">
             The story behind the masterpiece
           </Text>
         </Slide>
          <Slide transition={["spin"]} bgColor="black" notes="the what with video">
            <Heading>How did we create this app?</Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="black" textColor="white" notes="how... and bunch of images">
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
          {/* <Slide transition={["zoom"]} bgColor="black" textColor="white" notes="how... and bunch of images">
            <Heading textColor="white">Special Thanks to:</Heading>
            <List>
              <ListItem>Dave Jungst</ListItem>
              <ListItem>Parker Bond</ListItem>
              <ListItem>Tasha Johnson</ListItem>
              <ListItem>DevPoint Labs</ListItem>
              <ListItem>Chrome Expirements</ListItem>
              <ListItem>Zhixuan Lai - react webgl template</ListItem>
              <ListItem>Vojtěch Král - endo webgl template</ListItem>
            </List>
          </Slide> */}
          {/* <Slide transition={["zoom"]} bgColor="primary">
            <Heading caps fit>Special Thanks!</Heading>
            <Layout>
              <Fill>
                <Heading caps textColor="secondary" bgColor="white" margin={5}>
                  Parker Bond
                </Heading>
              </Fill>
              <Fill>
                <Heading caps textColor="secondary" bgColor="white" margin={5}>
                  Dave Jungst
                </Heading>
              </Fill>
              <Fill>
                <Heading caps textColor="secondary" bgColor="white" margin={5}>
                  Tasha Johnson
                </Heading>
              </Fill>
              <Fill>
                <Heading caps textColor="secondary" bgColor="white" margin={5}>
                  DevPoint Labs!
                </Heading>
              </Fill>
              <Fill>
                <Heading caps textColor="secondary" bgColor="white" margin={5}>
                  Chrome Expirements
                </Heading>
              </Fill>
              <Fill>
                <Heading caps textColor="secondary" bgColor="white" margin={5}>
                  Zhixuan Lai - react webgl template
                </Heading>
              </Fill>
              <Fill>
                <Heading caps textColor="secondary" bgColor="white" margin={5}>
                  Vojtěch Král - endo webgl template
                </Heading>
              </Fill>
            </Layout>
          </Slide> */}
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading caps fit>Special Thanks!</Heading>
            <Table>
              <TableRow>
                <TableItem caps fit textColor="secondary" bgColor="white">
                  Parker Bond
                </TableItem>
                <TableItem caps fit textColor="secondary" bgColor="white">
                  Dave Jungst
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem caps fit textColor="secondary" bgColor="white">
                  Tasha Johnson
                </TableItem>
                <TableItem caps fit textColor="secondary" bgColor="white">
                  DevPoint Labs!
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem caps fit textColor="secondary" bgColor="white">
                  Chrome Expirements
                </TableItem>
                <TableItem caps fit textColor="secondary" bgColor="white">
                  Zhixuan Lai - react webgl template
                  </TableItem>
              </TableRow>
              <TableRow>
                <TableItem caps fit textColor="secondary" bgColor="white">
                Vojtěch Král - endo webgl template
                </TableItem>
                <TableItem caps fit textColor="secondary" bgColor="white">
                Data Resource - https://hourofcode.com
                </TableItem>
              </TableRow>
            </Table>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
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
