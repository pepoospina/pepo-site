import "./App.css";
import { Box, Button, Grommet, Heading, Image, Text } from "grommet";
import { Project } from "./components/Project";
import { CaretDownFill } from "grommet-icons";

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
          style={{ height: "100vh", padding: "10vw 10vw" }}
          justify="center"
          align="center"
        >
          <Box style={{ width: "200px" }}>
            <Image
              fit="cover"
              src="https://pepo-public.s3.amazonaws.com/pepo-avatar.png"
            ></Image>
          </Box>
          <Box style={{ fontSize: "100px", flexGrow: "1" }} justify="center">
            Pepo
          </Box>
          <Box style={{ flexGrow: "1" }}>
            <Box>Entrepeneur - Software Developer - Builder</Box>
            <Box
              style={{
                padding: "30px",
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
                "blockchain",
                "ethereum",
                "daos",
                "governance",
                "decision-making",
                "content-management",
                "tools-for-thought",
                "collective-intelligence",
              ].map((tag) => {
                return <Box style={{ margin: "0px 10px" }}>#{tag}</Box>;
              })}
            </Box>
            <Box direction="row" justify="center" align="center">
              <a
                href="https://github.com/pepoospina"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  secondary
                  color="brand"
                  style={{ width: "100px", fontWeight: "bold" }}
                >
                  <Text color="brand" size="medium">
                    Github
                  </Text>
                </Button>
              </a>
              <a
                href="https://x.com/pepoospina"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  secondary
                  color="brand"
                  style={{ width: "100px", fontWeight: "bold" }}
                >
                  <Text color="brand" size="medium">
                    Twitter
                  </Text>
                </Button>
              </a>
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
            logo="https://pepo-public.s3.amazonaws.com/logo-cv.png"
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
                  The project was built from scratch by a team of 4 inside of{" "}
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
                  The architecture was purposedly built to facilitate the
                  integration with different Web2 platforms and the
                  implementation of any set of rules that would convert Web2
                  activity on Web3 rewards.
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
                      for each ruleset that was available on an independent
                      ruleset library.
                    </p>

                    <p>
                      New rulesets, including their UI components, could then be
                      independenlty developed and dynamically integrated in the
                      app.
                    </p>
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
                      It also served as an API to fetch data about runing
                      campaigns.
                    </p>
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
                      The "trust design" was optimistic, allowing the campaign
                      creator to block a new share-holders distribution after it
                      was published by the Oracle.
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
            logo="https://pepo-public.s3.amazonaws.com/uprtcl-logo.png"
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
                      _Prtcl. Inspired in tools like Notion or Roam Research but
                      built for interoperability and supporting forking and
                      merging content and and from different platforms.
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
                      The process is similar to the one{" "}
                      <a
                        href="https://techcrunch.com/2019/03/11/openai-shifts-from-nonprofit-to-capped-profit-to-attract-capital/?guccounter=1&guce_referrer=aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnLw&guce_referrer_sig=AQAAADV0ny3oI_DyDyxDrcvWIslzoEBTs5_YfkVhjf8okoiPnpvWNk9S7fASrG7k3Nv5NZuvWvpZtc2eC-L3X25B6J8aJ4b3Q53HK44dvGrn_SDNYlpr_F6XDAggh5hWgdQPsfk2rvLWfmj5yzKSn9UFzJOxFuD_s9_WRu_7es4SBMcH"
                        target="_blank"
                        rel="noreferrer"
                      >
                        recently chosen{" "}
                      </a>
                      by OpenAI.
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
            demo={
              <video
                controls
                src="https://collectiveone-t1.s3.us-east-2.amazonaws.com/c1-pepo-site.webm"
              ></video>
            }
            links={[]}
            subtitle={`A modern tool for communities comunication and decision making.`}
            summary={
              <>
                <p>
                  Web2 application for open and distributed collaboration. It
                  included value tracking using community-specific tokens and a
                  hybrid chat/content-board feature for chatting and curating
                  common content.
                </p>
                <p>
                  Channels included a chat and a board for "cards" and could be
                  freely nested in multiple levels, while one channel could be
                  included under different "parent" channels.
                </p>
                <p>
                  The app mixed project-centric display, where all members of
                  the organization would see the same content structure, with
                  agent-centric display, where each member of the organization
                  could include personal notes and content next to the shared
                  one.
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
                      A web2 application for open and distributed collaboration.
                      It included value tracking using community-specific tokens
                      and a hybrid chat/content-board feature for chatting and
                      curating common content.
                    </p>

                    <p>
                      Channels included a chat and a board for "cards" and could
                      be freely nested in multiple levels, while one channel
                      could be included under different "parent" channels.{" "}
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
                  </>
                ),
                links: [],
              },
            ]}
          ></Project>
        </Box>
      </Grommet>
    </div>
  );
}

export default App;
