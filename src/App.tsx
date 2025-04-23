import "./App.css";
import { Box, Button, Grommet, Heading, Image, Text } from "grommet";
import { Project } from "./components/Project";
import { CaretDownFill } from "grommet-icons";

interface IconLinkProps {
  _href: string;
  _src: string;
}

function IconImg(props: IconLinkProps) {
  return (
    <a href={props._href} target="_blank" rel="noreferrer">
      <Box align="center" style={{ margin: "0px 12px" }}>
        <Box
          style={{
            width: "12vw",
            height: "12vw",
            maxWidth: "60px",
            maxHeight: "60px",
            minWidth: "24px",
          }}
        >
          <Image fit="contain" src={props._src}></Image>
        </Box>

        {/* <Button
      secondary
      color="brand"
      style={{
        width: "100px",
        fontWeight: "bold",
        marginTop: "8px",
      }}
    >
      <Text color="brand" size="medium">
        Github
      </Text>
    </Button> */}
      </Box>
    </a>
  );
}

function App() {
  const clickDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Grommet style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <Box
          style={{ height: "100vh", padding: "0vw 10vw" }}
          justify="center"
          align="center"
        >
          <Box style={{ height: "10vw", maxHeight: "100px" }}></Box>

          <Box align="center" justify="center" style={{ flexGrow: "1" }}>
            <Box
              style={{
                width: "20vw",
                maxWidth: "300px",
                maxHeight: "300px",
                minWidth: "120px",
              }}
            >
              <Image fit="contain" src="/pepo-avatar.png"></Image>
            </Box>
            <Box style={{ fontSize: "100px" }} justify="center">
              <Text size="100px" color="#495059ff">
                Pepo
              </Text>
            </Box>
            <Box>
              <Box style={{ height: "3vw", maxHeight: "100px" }}></Box>
              <Box style={{ margin: "0px 0px" }}>
                Entrepreneur - Software Developer - Builder
              </Box>
              <Box style={{ height: "3vw", maxHeight: "100px" }}></Box>
              <Box style={{ height: "3vw", maxHeight: "100px" }}></Box>
              <Box
                style={{
                  padding: "0px 0px",
                  textDecoration: "underline",
                  color: "rgb(49, 60, 160)",
                  maxWidth: "900px",
                  margin: "0 auto",
                }}
                direction="row"
                justify="center"
                wrap
              >
                {[
                  "fullstack",
                  "blockchain",
                  "ethereum",
                  "web3",
                  "social-networks",
                  "note-taking-apps",
                ].map((tag) => {
                  return <Box style={{ margin: "0px 10px" }}>#{tag}</Box>;
                })}
              </Box>
              <Box style={{ height: "3vw", maxHeight: "100px" }}></Box>
              <Box
                direction="row"
                justify="center"
                align="center"
                style={{ marginTop: "24px" }}
              >
                <IconImg
                  _href="https://github.com/pepoospina"
                  _src="/Github.svg"
                ></IconImg>

                <IconImg
                  _href="https://x.com/pepoospina"
                  _src="/twitter.svg"
                ></IconImg>

                <IconImg
                  _href="mailto:pepo.ospina@gmail.com"
                  _src="/email.svg"
                ></IconImg>

                <IconImg
                  _href="https://www.linkedin.com/in/pepo"
                  _src="/linkedin.svg"
                ></IconImg>
              </Box>
            </Box>
          </Box>

          <Button style={{ padding: "8px 40px" }} onClick={() => clickDown()}>
            <Box
              direction="row"
              align="center"
              justify="center"
              style={{ padding: "0px 30px" }}
            >
              <Heading level="2">Recent Work</Heading>
              <CaretDownFill></CaretDownFill>
            </Box>
          </Button>
        </Box>
        <Box
          style={{
            padding: "0px 0vw",
          }}
          direction="column"
          align="center"
        >
          <Project
            shade
            logo="/cv-logo.png"
            name="CommonValue"
            codeUrl="https://github.com/Common-Value"
            demo={
              <video
                controls
                src="https://pepo-public.s3.amazonaws.com/cv-demo.mp4"
              ></video>
            }
            subtitle={`Programmable engine for distributing Web3 rewards based on Web2 activity`}
            role="Architecture and Development lead"
            links={[]}
            summary={
              <>
                <p>
                  CommonValue is a customizable platform, built on Ethereum,
                  that automatically converts Web2 activity in Web3 rewards. It
                  was initially focused on GitHub, and it allowed projects to
                  distribute any ERC-20 token based on merged pull-requests to
                  one or more repositories.
                </p>

                <p>
                  The project was built from scratch by a team of 4 inside{" "}
                  <a
                    href="https://daostack.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DAOstack
                  </a>
                  . The team consisted of two developers, one UX and one
                  Marketing person. I personally architected the solution and
                  lead the development from idea until production.
                </p>

                <p>
                  The architecture was purposely built to facilitate the
                  integration with different Web2 platforms and to facilitate
                  the implementation, by third parties, of any set of rules that
                  would convert Web2 activity on Web3 rewards.
                </p>

                <p>
                  The project was unfortunately halted by DAOstack on May 2023
                  for internal reasons.
                </p>
              </>
            }
            technologies={["Typescript", "Ethereum", "React", "NodeJS"]}
            subprojects={[
              {
                name: "Frontend",
                type: "React-based Web3 Frontend",
                summary: (
                  <>
                    <p>A multi-chain Web3 React-based frontend.</p>

                    <p>
                      The frontend dynamically loaded and displayed components
                      for each ruleset available on an independent repository
                      that served as the ruleset library.
                    </p>

                    <p>
                      New rulesets, including their UI components, could then be
                      independently developed, making the addition of new
                      rulesets straightforward.
                    </p>

                    <p>The code for this tool is currently not open source.</p>
                  </>
                ),
                links: [],
              },
              {
                name: "Oracle",
                type: "Web2 Oracle",
                links: [],
                summary: (
                  <>
                    <p>
                      A NodeJS engine that monitored onchain activity to
                      identify new CommonValue campaigns, programmed itself to
                      compute the ruleset (fetching data from Web2 platforms),
                      computed the shareholders of the campaign at the
                      predefined date and time, and published the shares
                      onchain.
                    </p>

                    <p>
                      It also served as an API to fetch data about running
                      campaigns.
                    </p>

                    <p>The code for this tool is currently not open source.</p>
                  </>
                ),
              },
              {
                name: "Smart Contracts",
                type: "Updatable Tokenized Pools",
                links: [],
                summary: (
                  <>
                    <p>
                      A tokenized vault that can hold any type of ERC-20 tokens
                      and native cryptocurrency and will distribute its balance
                      among its share-holders, defined as an updatable merkle
                      root.
                    </p>

                    <p>
                      The "trust design" was optimistic, giving a time window
                      for the campaign creator to block an update to the
                      campaign shareholders after it was published by the
                      Oracle.
                    </p>
                    <p>
                      You can check the code{" "}
                      <a
                        href="https://github.com/Common-Value/contracts"
                        target="_blank"
                        rel="noreferrer"
                      >
                        here
                      </a>
                      .
                    </p>
                  </>
                ),
              },
            ]}
          ></Project>

          <Project
            name="Underscore Protocol"
            role="Founder, Architect and Development lead"
            codeUrl="https://github.com/uprtcl"
            logo="/uprtcl-logo.png"
            demo={
              <video
                controls
                src="https://collectiveone-t1.s3.us-east-2.amazonaws.com/Intercreativity-Personal-Site.webm"
              ></video>
            }
            subtitle={`Multiplatform content management inspired in GIT`}
            links={[]}
            summary={
              <>
                <p>
                  The Underscore Protocol is a protocol and a set of tools for
                  building interoperable content-management applications where
                  any digital object can be stored or forked on multiple
                  platforms (including web3) and by different users.
                </p>
                <p>
                  Working on _Prtcl comprised the development of different tools
                  on top of different platforms and technologies. For a detailed
                  overview of the protocol, check it's{" "}
                  <a
                    href="https://uprtcl.github.io/js-uprtcl/guide/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    documentation page
                  </a>
                  .
                </p>
                <p>
                  The project's{" "}
                  <a
                    href="https://twitter.com/uprtcl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter account
                  </a>{" "}
                  will also help you understand its purpose and trajectory.
                </p>
              </>
            }
            technologies={[
              "Typescript",
              "LitElement",
              "Local-First",
              "Ethereum",
              "Solidity",
              "IPFS",
              "OrbitDB",
              "NodeJS",
              "DGraph",
              "Prosemirror",
              "Aragon",
              "DAOstack",
            ]}
            subprojects={[
              {
                name: "Intercreativity",
                type: "Block-based text editor",
                summary: (
                  <>
                    <p>
                      Intercreativity is a block-based editor built on top of
                      _Prtcl and using LitElement web-components. It is inspired
                      in tools like Notion or Roam Research but built for
                      interoperability and supporting forking and merging
                      content from different platforms.
                    </p>

                    <p>
                      The same application can work with content (blocks) stored
                      on multiple platforms, including the local device, a
                      web-server or Ethereum and IPFS.
                    </p>

                    <p>
                      A detailed overview of the design of Intercreativity can
                      be found on the{" "}
                      <a
                        href="https://www.notion.so/uprtcl/Intercreativity-689f6c877df04e04a9e100a5c5448523"
                        target="_blank"
                        rel="noreferrer"
                      >
                        project's page
                      </a>
                    </p>
                    <p>
                      You can check the code{" "}
                      <a
                        href="https://github.com/uprtcl/linked-thoughts"
                        target="_blank"
                        rel="noreferrer"
                      >
                        here
                      </a>
                      .
                    </p>
                  </>
                ),
                links: [],
              },
              {
                name: "js-uprtcl",
                type: "NPM core-library",
                links: [],
                summary: (
                  <>
                    <p>
                      A Typescript library and SDK for building
                      _Prtcl-compatible applications. It is divided in different
                      npm packages and included code for handling _Prtcl objects
                      locally and asynchronously storing/reading them on
                      multiple _Prtcl remotes.
                    </p>

                    <p>
                      You can check the{" "}
                      <a
                        href="https://uprtcl.github.io/js-uprtcl/guide/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        documentation
                      </a>{" "}
                      site to see more details about the architecture and its
                      features.
                    </p>

                    <p>
                      You can check the code{" "}
                      <a
                        href="https://github.com/uprtcl/js-uprtcl"
                        target="_blank"
                        rel="noreferrer"
                      >
                        here
                      </a>
                      .
                    </p>
                  </>
                ),
              },
              {
                name: "js-uprtcl-server",
                type: "NodeJS Service for Data Storage and Indexing",
                links: [],
                summary: (
                  <>
                    <p>
                      A NodeJS + DGraph backend to store and query linked and
                      nested _Prtcl objects using _Prtcl own{" "}
                      <a
                        href="https://uprtcl.github.io/js-uprtcl/guide/04-querying.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        query standard
                      </a>
                      .
                    </p>
                    <p>
                      It monitors Web3 platforms and index new _Prtcl objects.
                      This index can be used to build content-management
                      applications.
                    </p>
                    <p>
                      You can check the code{" "}
                      <a
                        href="https://github.com/uprtcl/js-uprtcl-server"
                        target="_blank"
                        rel="noreferrer"
                      >
                        here
                      </a>
                      .
                    </p>
                  </>
                ),
              },
              {
                name: "eth-uprtcl",
                type: "Ethereum Data Storage",
                links: [],
                summary: (
                  <>
                    <p>
                      An Ethereum-based _Prtcl-remote to govern digital content
                      on top of Ethereum and IPFS.
                    </p>
                    <p>
                      It also includes a prototype for a naming system based on
                      harberger taxes.
                    </p>
                    <p>
                      You can check the code for the content management and the
                      naming system{" "}
                      <a
                        href="https://github.com/uprtcl/eth-uprtcl"
                        target="_blank"
                        rel="noreferrer"
                      >
                        here
                      </a>
                      .
                    </p>
                  </>
                ),
              },
              {
                name: "Reasonable",
                type: "Exit-to-comunity Legal Entities",
                links: [],
                summary: (
                  <>
                    <p>
                      A combination of Legal and Ethereum-based infrastructure
                      created to support the organization behind _Prtcl's
                      development.
                    </p>
                    <p>
                      It includes an enforced exit-to community scheme where
                      investment is only provided as loans that, once paid back,
                      transfer the ownership of all the assets of the protocol
                      to a non-for-profit DAO legally incorported in Vermont.
                    </p>
                    <p>
                      The design is similar to the one{" "}
                      <a
                        href="https://techcrunch.com/2019/03/11/openai-shifts-from-nonprofit-to-capped-profit-to-attract-capital/?guccounter=1&guce_referrer=aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnLw&guce_referrer_sig=AQAAADV0ny3oI_DyDyxDrcvWIslzoEBTs5_YfkVhjf8okoiPnpvWNk9S7fASrG7k3Nv5NZuvWvpZtc2eC-L3X25B6J8aJ4b3Q53HK44dvGrn_SDNYlpr_F6XDAggh5hWgdQPsfk2rvLWfmj5yzKSn9UFzJOxFuD_s9_WRu_7es4SBMcH"
                        target="_blank"
                        rel="noreferrer"
                      >
                        recently chosen
                      </a>{" "}
                      by OpenAI, as their capped investment model.
                    </p>
                    <p>
                      You can check the code for the onchain implementation part
                      of the model{" "}
                      <a
                        href="https://github.com/uprtcl/reasonable"
                        target="_blank"
                        rel="noreferrer"
                      >
                        here
                      </a>
                      .
                    </p>
                  </>
                ),
              },
            ]}
          ></Project>
          <Project
            shade
            name="CollectiveOne"
            role="Founder, Architect and Development lead"
            codeUrl="https://github.com/Common-Value"
            logo="/C1.png"
            demo={
              <video
                controls
                src="https://collectiveone-t1.s3.us-east-2.amazonaws.com/c1-pepo-site.webm"
              ></video>
            }
            links={[]}
            subtitle={`An experimental tool for comunication and decision making`}
            summary={
              <>
                <p>
                  Web2 application for open and distributed collaboration. It
                  included value-tracking using community-specific tokens and a
                  hybrid chat/content-board feature for discussing and curating
                  content.
                </p>
                <p>
                  It supported an advanced and flexible content architecture
                  where each "channel" consisted of a chat and a board for
                  "cards". Channels could then be nested in multiple levels,
                  while one channel could be included under different "parent"
                  channels.
                </p>
                <p>
                  The app mixed project-centric display, where all members of
                  the organization would see the same content structure, with
                  agent-centric display, where each member of the organization
                  could include personal notes and private content next to the
                  shared one.
                </p>
                <p>
                  The app also supported peer-reviewed value distribution, where
                  each team would split a bag of tokens among them by averging
                  the subjective value attribution provided by each member of
                  the team.
                </p>
              </>
            }
            technologies={["VueJS", "Java", "Postgres"]}
            subprojects={[
              {
                name: "Frontend",
                type: "Block-based editor + Nested channels chat",
                summary: (
                  <>
                    <p>
                      The frontend was a VueJS application. It supported all the
                      features mentioned above on the project description,
                      namely: Multichannel chat and card boads, token creation
                      and transfer.
                    </p>
                    <p>
                      You can check the code{" "}
                      <a
                        href="https://github.com/CollectiveOne/CollectiveOneWebapp/tree/master/frontend"
                        target="_blank"
                        rel="noreferrer"
                      >
                        here
                      </a>
                      .
                    </p>
                  </>
                ),
                links: [],
              },
              {
                name: "Backend",
                type: "Java/Hibernate Backend",
                summary: (
                  <>
                    <p>
                      An API that will serve the frontend application. It was
                      built in Java, the first technology I learnt for Web
                      development. It included a plethora of features, including
                      email notifications, websockets, data indexing and
                      querying and more.
                    </p>
                    <p>
                      You can check the code{" "}
                      <a
                        href="https://github.com/CollectiveOne/CollectiveOneWebapp/tree/master/backend"
                        target="_blank"
                        rel="noreferrer"
                      >
                        here
                      </a>
                      .
                    </p>
                  </>
                ),
                links: [],
              },
            ]}
          ></Project>
        </Box>
        <Box style={{ height: "180px" }} justify="center">
          <Text size="small">Built by Pepo / 2025</Text>
          <a href="mailto:pepo.ospina@gmail.com">
            <Text size="small">pepo.ospina@gmail.com</Text>
          </a>
        </Box>
      </Grommet>
    </div>
  );
}

export default App;
