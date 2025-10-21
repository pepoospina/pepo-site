import "./App.css";
import { Box, Button, Grommet, Heading, Image, Text } from "grommet";
import { Project } from "./components/Project";
import { CaretDownFill } from "grommet-icons";
import { CSSProperties, useState, useEffect } from "react";

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
  const [mobile, setMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const clickDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  const parStyle: CSSProperties = {
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: "300",
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
                maxWidth: "200px",
                maxHeight: "200px",
                minWidth: "120px",
              }}
            >
              <Image fit="contain" src="/pepo-avatar.png"></Image>
            </Box>
            <Box style={{ fontSize: "100px" }} justify="center">
              <Text size={mobile ? "60px" : "80px"} color="#495059ff">
                Pepo
              </Text>
            </Box>
            <Box style={{ flexGrow: "1" }}>
              <Box style={{ height: "3vw", maxHeight: "100px" }}></Box>
              <Box
                style={{ margin: "0px 0px", flexGrow: "1" }}
                gap="32px"
                align="center"
              >
                <Text size="24px">
                  Software Developer - Builder - Entrepreneur
                </Text>
                <Box
                  style={{
                    maxWidth: "600px",
                    overflow: "auto",
                    flexGrow: "1",
                  }}
                  justify="center"
                  gap="16px"
                >
                  <Text style={parStyle}>
                    Hi! I'm Pepo, I'm an experienced software developer based in
                    Spain. I've been bulding new projects, from idea to MVP and
                    early adoption, for over 8 years.
                  </Text>
                  <Text style={parStyle}>
                    I'm good at rapidly prototyping fullstack applications on
                    top of blockchain and web3 technologies, and I'm also
                    familiar with the typical (hard) challenges that emerge
                    around early stage startups.
                  </Text>
                  <Text style={parStyle}>
                    Right now I'm having fun building{" "}
                    <a
                      style={{ margin: "0px 4px" }}
                      href="https://payif.io/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Payif.io
                    </a>
                    , but I'm open to new opportunities!
                  </Text>
                </Box>
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
            logo="/payif/logo.png"
            name="Payif.io"
            codeUrl="https://github.com/pepoospina/payif-app"
            demo="https://payif.io/"
            subtitle={`Protected payments for free`}
            role="Architecture and Development"
            links={["https://slowfeed.ai/"]}
            summary={
              <>
                <p>
                  PayIf.io let buyers and sellers safely exchange goods and
                  services online.
                </p>
                <p>
                  It works as follows: buyers lock the funds before buying,
                  sellers can then safely deliver the goods/services with a
                  guaranteed payment and the funds are automatically released if
                  the goods/services are delivered successfully.
                </p>
                <p>
                  PayIf, powered by UMA, uses economic incentives to ensure the
                  great majority of exchanges are successful, while the small
                  minority that get disputed by the payer are correctly
                  resolved.
                </p>
              </>
            }
            technologies={[
              "EVM",
              "Smart Contracts",
              "Stablecoins",
              "UMA",
              "React",
              "NodeJS",
              "Firebase",
              "AAVE",
            ]}
            subprojects={[
              {
                name: "Escrow contract",
                type: "EVM Smart Contract",
                summary: (
                  <>
                    <p>
                      A{" "}
                      <a
                        href="https://github.com/pepoospina/payif-contracts/tree/main"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Smart Contract
                      </a>{" "}
                      that receives the funds from the buyer and releases them
                      to the seller if the goods/services are delivered
                      successfully.
                    </p>

                    <p>
                      It integrates Aave as a revenue source, and UMA for
                      resolving potential disputes between the buyer and the
                      seller. Revenue is earned through yield on the locked
                      funds while remaining 100% trustless.
                    </p>
                  </>
                ),
                links: [],
              },
              {
                name: "PayIf SDK",
                type: "npm package",
                summary: (
                  <>
                    <p>
                      A super-simple{" "}
                      <a
                        href="https://www.npmjs.com/package/@payif/sdk"
                        target="_blank"
                        rel="noreferrer"
                      >
                        NPM package
                      </a>{" "}
                      that lets businesses add a "PayIfDelivered" button to
                      their websites, offering their customers the ability to
                      pay for goods/services only after they are delivered.
                    </p>
                  </>
                ),
                links: [],
              },
              {
                name: "Fullstack Web-app",
                type: "Web application",
                summary: (
                  <>
                    <p>
                      A frontend application built with React and NodeJS that
                      allows users to create and manage their PayIf payments.
                    </p>
                  </>
                ),
                links: [],
              },
            ]}
          ></Project>
          <Project
            logo="/yoga.png"
            name="Slowfeed.ai"
            codeUrl="https://github.com/Common-SenseMakers/sensemakers"
            demo="https://slowfeed.ai/"
            subtitle={`Cross-platform list creator and AI bot autoposter`}
            role="Architecture and Development"
            links={["https://slowfeed.ai/"]}
            summary={
              <>
                <p>
                  Slowfeed.ai lets users easily create and consume ranked lists
                  of posts from multiple social networks (X, Bluesky and
                  Mastodon). These lists are much more interesting to consume
                  than the chronological or viral feeds from these platforms.
                </p>
                <p>
                  List creators can also connect an existing Bluesky or X
                  Account to a list and Slowfeed will autopost summaries from
                  that list into that account.
                </p>
              </>
            }
            technologies={[
              "Bluesky",
              "X-API",
              "Mastodon",
              "AI",
              "React",
              "NodeJS",
              "Firebase",
            ]}
            subprojects={[
              {
                name: "Cross-platform Social Media Annotation tool",
                type: "Web application",
                summary: (
                  <>
                    <p>
                      The application was built by a team of 4, with me as
                      technical lead, one designer, and two other developers.
                    </p>

                    <p>
                      It was built on top of Google Firebase infrastructure.
                    </p>
                  </>
                ),
                links: [],
              },
            ]}
          ></Project>
          <Project
            shade
            logo="/cosmik-logo.jpg"
            name="Cosmik Network"
            codeUrl="https://github.com/Common-SenseMakers/sensemakers"
            demo="https://app.cosmik.network/"
            subtitle={`Cross-platform social media aggregator for scientists`}
            role="Architecture and Development lead"
            links={["https://bsky.app/profile/cosmik.network"]}
            summary={
              <>
                <p>
                  As CTO and co-founder, I developed prototypes to integrate
                  social networks into scientific workflows. Using AI, we
                  annotated posts with keywords and RDF links, creating a global
                  knowledge graph published on the nanopublications network.
                  Later, we built an app for cross-platform list creation,
                  AI-annotated feeds, and enhanced navigation with hyperlinks.
                </p>
              </>
            }
            technologies={[
              "Bluesky",
              "RDF",
              "AI",
              "LLMs",
              "React",
              "NodeJS",
              "Firebase",
            ]}
            subprojects={[
              {
                name: "Cross-platform Social Media Annotation tool",
                type: "Web application",
                summary: (
                  <>
                    <p>
                      The application was built by a team of 4, with me as
                      technical lead, one designer, and two other developers.
                    </p>

                    <p>
                      It was built on top of Google Firebase infrastructure.
                    </p>
                  </>
                ),
                links: [],
              },
            ]}
          ></Project>
          <Project
            logo="/mr-logo.png"
            name="Microdemocracies"
            codeUrl="https://github.com/pepoospina/microdemocracies"
            demo={
              <Box>
                <Image fit="contain" src="/mr-MVP 01.png"></Image>
                <Image fit="contain" src="/mr-MVP 02.png"></Image>
              </Box>
            }
            subtitle={`Tool for launching onchain communities with ZK anonymous voting`}
            role="Founder, Architecture and Development lead"
            links={["https://warpcast.com/microdemocracies/0xe9af72f5"]}
            summary={
              <>
                <p>
                  A microdemocracy is a safe space with decentralized onchain
                  membership control based on a web of trust. Members can post
                  questions or create polls, while other members can answer
                  them. The answers remain completely anonymous, and their
                  anonymity is guaranteed by ZK-proofs.
                </p>

                <p>
                  This is a small side-project I built and maintained for a few
                  months while exploring DAO applications that addressed the
                  real needs of communities more effectively.
                </p>

                <p>
                  It included a community bootstrapping smart contract along
                  with backend and frontend apps to handle anonymous
                  publications and reactions using ZK-proofs.
                </p>
              </>
            }
            technologies={[
              "ZK-proofs",
              "Typescript",
              "Ethereum",
              "React",
              "NodeJS",
            ]}
            subprojects={[
              {
                name: "Community/DAO Bootstrapping Contracts",
                type: "Ethereum Smart Contracts",
                summary: (
                  <>
                    <p>
                      Smart contracts that allow the creation of a community/DAO
                      with decentralized membership control.
                    </p>

                    <p>
                      A set of founders can each invite other people. These new
                      members can further invite others. If someone adds a
                      member without respecting the membership rules for that
                      community/DAO, other members can expel the new member,
                      automatically expelling all the members they invited.
                    </p>

                    <p>
                      With time, membership gets "solidified" and cannot be
                      challenged anymore, disolving the original hierarchy.
                    </p>

                    <p>
                      You can check the code{" "}
                      <a
                        href="https://github.com/pepoospina/microdemocracies/tree/main/contracts"
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
                name: "No-Wallet Blockchain App",
                type: "EIP-4337 compatible app",
                links: [],
                summary: (
                  <>
                    <p>
                      I experimented with{" "}
                      <a
                        href="https://www.erc4337.io/docs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        AccountAbstraction and EIP-4337
                      </a>
                      , so that actions taken from the app were executed using
                      user operations that did not require having funds to pay
                      for the transaction.
                    </p>

                    <p>
                      I also integrated a Wallet-as-a-Service solution to handle
                      an Ethereum wallet for users who did not have one.
                    </p>
                  </>
                ),
              },
            ]}
          ></Project>
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
                  CommonValue is a customizable Ethereum-based platform that
                  converts Web2 activity into Web3 rewards, initially focusing
                  on GitHub to distribute ERC-20 tokens for merged pull
                  requests. Built from scratch by a four-person DAOstack team
                  (two developers, one UX, one marketing)
                </p>

                <p>
                  I architected and led its development from concept to
                  production. The architecture supports integration with various
                  Web2 platforms and enables third-party rule implementation for
                  Web2-to-Web3 reward conversion. The project was halted by
                  DAOstack in May 2023 for internal reasons.
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
            role="Founder, Architecture and Development lead"
            codeUrl="https://github.com/uprtcl"
            logo="/uprtcl-logo.png"
            demo={
              <video
                controls
                src="https://storage.googleapis.com/pepo-site-r/Intercreativity-Personal-Site.webm"
              ></video>
            }
            subtitle={`Multiplatform content management inspired in GIT`}
            links={[]}
            summary={
              <>
                <p>
                  The Underscore Protocol is a protocol and set of tools for
                  building interoperable content-management applications where
                  any digital object can be stored or forked across multiple
                  platforms (including web3) by different users.
                </p>
                <p>
                  Working on _Prtcl comprised the development of different tools
                  on top of various platforms and technologies. For a detailed
                  overview of the protocol, check its{" "}
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
                type: "Exit-to-community Legal Entities",
                links: [],
                summary: (
                  <>
                    <p>
                      A combination of Legal and Ethereum-based infrastructure
                      created to support the organization behind _Prtcl's
                      development.
                    </p>
                    <p>
                      It includes an enforced exit-to-community scheme where
                      investment is only provided as loans that, once paid back,
                      transfer the ownership of all the assets of the protocol
                      to a not-for-profit DAO legally incorporated in Vermont.
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
            role="Founder, Architecture and Development lead"
            codeUrl="https://github.com/Common-Value"
            logo="/C1.png"
            demo={
              <video
                controls
                src="https://storage.googleapis.com/pepo-site-r/c1-pepo-site.webm"
              ></video>
            }
            links={[]}
            subtitle={`An experimental tool for communication and decision making`}
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
                  shared content.
                </p>
                <p>
                  The app also supported peer-reviewed value distribution, where
                  each team would split a bag of tokens among themselves by
                  averaging the subjective value attribution provided by each
                  member of the team.
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
                      features mentioned above in the project description,
                      namely: Multichannel chat and card boards, token creation
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
                      An API that served the frontend application. It was built
                      in Java, the first technology I learned for Web
                      development. It included a plethora of features, including
                      email notifications, websockets, data indexing, querying,
                      and more.
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
          <Text size="small">Built by Pepo © 2025</Text>
          <a href="mailto:pepo.ospina@gmail.com">
            <Text size="small">pepo.ospina@gmail.com</Text>
          </a>
        </Box>
      </Grommet>
    </div>
  );
}

export default App;
