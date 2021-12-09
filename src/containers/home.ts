import { html, css, LitElement } from "lit-element";

export class Home extends LitElement {
  async firstUpdated() {}

  render() {
    return html`
      <kor-grid>
        <kor-card flat grid-cols="12"
          ><img class="avatar" src="./src/assets/avatar.png" />

          <div class="icons-container">
            <a href="https://github.com/pepoospina" target="_blank"
              ><img class="icon" src="./src/assets/github.svg"
            /></a>
            <a href="https://twitter.com/pepoospina" target="_blank"
              ><img class="icon" src="./src/assets/twitter.png"
            /></a>
            <a href="mailto:pepo.ospina@gmail.com" target="_blank"
              ><img class="icon" src="./src/assets/mail.svg"
            /></a>
          </div>

          <h2>Welcome to my personal website. I'm Pepo.</h2>

          <kor-card
            ><p>
              <em>
                I'm an entrepreneur and software developer. My current focus is
                collaboration and coordination tools for communities on top of
                web3 technologies.</em
              >
            </p>
            <p>
              <em
                >I've been a DAO enthusiast for a long time, which made me
                discover
                <a
                  href="https://web.archive.org/web/20160427120234/http://daohub.org/"
                  >"The Dao"</a
                >
                in 2016. I'm lucky enough to have been close to Ethereum since
                then and I'm familiar with different web3 technologies and the
                blockchain ecosystem in general.</em
              >
            </p>
            <p>
              <em
                >After a long period of hard work, experimentation and learning
                as an entrepreneur, I'm now moving forward and actively looking
                to join an existing and experienced team to work with.
              </em>
            </p>
            <p>
              <em
                >I live in a small town near Barcelona, Spain, and my goal is to
                combine working as a researcher and software developer with
                spending time outdoors with my kids and family. If you want to
                get in touch, you can find me on twitter at
                <a href="https://twitter.com/pepoospina" target="_blank"
                  >@pepoospina</a
                >
                or send me an email to
                <a href="mailto:pepo.ospina@gmail.com">pepo.ospina@gmail.com</a
                >.</em
              >
            </p></kor-card
          >
        </kor-card>

        <kor-card flat grid-cols="12"><h2>Projects</h2></kor-card>

        <kor-card
          label="The Underscore Protocol (_Prtcl)"
          grid-cols="6"
          grid-cols-m="12"
          image="./src/assets/uprtcl-logo.png"
        >
          <p>
            _Prtcl started as a tool for collective content management inspired
            in GIT. It then evolved into a generic protocol for building
            interoperable content-management applications were any digital
            object could be stored or forked on multiple platforms (including
            web3) and by different users.
          </p>

          <p>Technologies used:</p>

          <div class="tag-container">
            <kor-tag label="Typescript"></kor-tag>
            <kor-tag label="Lit-Element"></kor-tag>
            <kor-tag label="Local-First"></kor-tag>
            <kor-tag label="Ethereum"></kor-tag>
            <kor-tag label="Solidity"></kor-tag>
            <kor-tag label="IPFS"></kor-tag>
            <kor-tag label="OrbitDB"></kor-tag>
            <kor-tag label="NodeJS"></kor-tag>
            <kor-tag label="DGraph"></kor-tag>
            <kor-tag label="Prosemirror"></kor-tag>
            <kor-tag label="Aragon"></kor-tag>
            <kor-tag label="DAOstack"></kor-tag>
          </div>

          <p>
            The work done around _Prtcl was extensive, and it involved the
            development of a few different tools, some of which are listed
            below:
          </p>

          <kor-accordion label="intercreativity">
            <p class="links">
              <a
                href="https://www.notion.so/uprtcl/Intercreativity-689f6c877df04e04a9e100a5c5448523"
                target="_blank"
                >Product Design</a
              >
              -
              <a
                href="https://github.com/uprtcl/linked-thoughts"
                target="_blank"
                >Github</a
              >
            </p>

            <p>
              A content-management application built on top of _Prtcl. Inspired
              in tools like Notion or Roam Research but built for
              interoperability and supporting forking and merging content from
              different platforms.
            </p>

            <p>
              The same application could be configured to work in three modes:
            </p>

            <ul>
              <li>Local, with content stored on the local device.</li>
              <li>Web2, with content stored on a web-server.</li>
              <li>Web3, with content stored on Ethreum and IPFS.</li>
            </ul>

            <p>
              The video below will give you an idea of what Intercreativity is:
            </p>

            <p>
              <video
                controls
                src="https://collectiveone-t1.s3.us-east-2.amazonaws.com/Intercreativity-Personal-Site.webm"
              ></video>
            </p>
          </kor-accordion>

          <kor-accordion label="js-uprtcl">
            <p class="links">
              <a
                href="https://uprtcl.github.io/js-uprtcl/guide/"
                target="_blank"
                >Documentation</a
              >
              -
              <a href="https://github.com/uprtcl/js-uprtcl" target="_blank"
                >Github</a
              >
              -
              <a href="https://www.uprtcl.io/" target="_blank">Landing</a>
              -
              <a href="https://mobile.twitter.com/uprtcl" target="_blank"
                >Twitter</a
              >
            </p>

            <p>
              A Typescript library for building _Prtcl-compatible applications.
              It is divided in different npm packages and included code for
              handling _Prtcl objects locally and asynchronously storing/reading
              them on multiple _Prtcl remotes.
            </p>

            <p>
              Check the
              <a
                href="https://uprtcl.github.io/js-uprtcl/guide/"
                target="_blank"
                >documentation</a
              >
              site with all the details about the architecture and its features.
            </p>
          </kor-accordion>

          <kor-accordion label="js-uprtcl-server">
            <p class="links">
              <a
                href="https://github.com/uprtcl/js-uprtcl-server"
                target="_blank"
                >Github</a
              >
            </p>

            <p>
              A NodeJS + DGraph backend to store and query linked _Prtcl objects
              using _Prtcl own
              <a
                href="https://uprtcl.github.io/js-uprtcl/guide/04-querying.html"
                target="_blank"
                >query standard</a
              >.
            </p>
            <p>
              It stores linked and nested _Prtcl objects and exposes endpoints
              to efficiently query them.
            </p>
          </kor-accordion>

          <kor-accordion label="eth-uprtcl">
            <p class="links">
              <a href="https://github.com/uprtcl/eth-uprtcl" target="_blank"
                >Github</a
              >
            </p>

            <p>
              An Ethereum-based _Prtcl-remote to govern digital content on top
              of Ethereum and IPFS.
            </p>
            <p>
              It also includes a prototype for a naming system based on
              harberger taxes.
            </p>
          </kor-accordion>

          <kor-accordion label="reasonable">
            <p class="links">
              <a
                href="https://www.notion.so/uprtcl/_Prtcl-Exit-to-Community-Model-is-now-live-8a0aab38125b47369ee4756a9e1fbdb5"
                target="_blank"
                >Summary</a
              >
              -
              <a href="https://github.com/uprtcl/reasonable" target="_blank"
                >Github</a
              >
            </p>

            <p>
              An Ethereum-based infrastructure to support the organizations
              behind _Prtcl development. It includes an onchain enforced exit-to
              community scheme.
            </p>
          </kor-accordion></kor-card
        >

        <kor-card
          label="CollectiveOne"
          grid-cols="6"
          grid-cols-m="12"
          image="./src/assets/c1-logo.png"
          ><p class="links">
            <a href="https://www.collectiveone.org/" target="_blank">Live</a>
            -
            <a
              href="https://github.com/CollectiveOne/CollectiveOneWebapp"
              target="_blank"
              >Github</a
            >
          </p>

          <p>
            A web2 application for open and distributed collaboration. It
            included value tracking using community-specific tokens and a hybrid
            chat/content-board feature for chatting and curating common content.
          </p>

          <p>
            Channels included a chat and a board for "cards" and could be freely
            nested in multiple levels, while one channel could be included under
            different "parent" channels.
          </p>

          <p>Technologies used:</p>

          <div class="tag-container">
            <kor-tag label="Vue JS"></kor-tag>
            <kor-tag label="Java"></kor-tag>
            <kor-tag label="Postgres"></kor-tag>
          </div>

          <p>The video below will give you an idea of what CollectiveOne is.</p>

          <video
            controls
            src="https://collectiveone-t1.s3.us-east-2.amazonaws.com/c1-pepo-site.webm"
          ></video>
        </kor-card>

        <kor-card
          label="Aerospace Engineer"
          grid-cols="6"
          grid-cols-m="12"
          image="./src/assets/ixv.jpg"
          ><p>
            Prior to being an entrepreneur, I worked as an Aerospace Engineer
            for three different projects funded by the European Space Agency.
          </p>

          <p>
            I worked as a researcher, a project engineer and project manager and
            used to keep my
            <a href="https://www.linkedin.com/in/pepo/">LinkedIn</a> updated at
            that time. You can find more details about that part of my career
            there.
          </p>

          <p>Technologies used:</p>

          <div class="tag-container">
            <kor-tag label="Matlab"></kor-tag>
            <kor-tag label="Simulink"></kor-tag>
            <kor-tag label="C"></kor-tag>
          </div>

          <p>
            Besides the different projects I worked in during my career as an
            Aerospace Engineer, these are the tools/prototypes I personally
            built from scratch during this time:
          </p>

          <h4>Conpat</h4>

          <p>
            I built an internal object-oriented tool for signal processing and
            visualization on Matlab. The tool is still one of the core tools
            used by the GNC team at the company
            <a href="https://elecnor-deimos.com/" target="_blank"
              >(Deimos-Space)</a
            >. The tool is closed source.
          </p>

          <h4>Atmospheric Guided Entry</h4>

          <p>
            I designed a model-based 6DOF attitude and trajectory control for an
            interplanetary entry capsule reaching Mars atmosphere. I also built
            a simulator to test the controller. Both the simulator and the GNC
            algorithms were written in C.
          </p>

          <p class="links">
            <a
              href="https://drive.google.com/file/d/11OOR4UgcCb3FHN16ucthjAwS2az7ngLe/view?usp=sharings"
              target="_blank"
              >Attitude GNC</a
            >
            -
            <a
              href="https://drive.google.com/file/d/1Bu_hACyE-7uGMl_NlKZq-YQJLbfpJ57I/view?usp=sharing"
              target="_blank"
              >Trajectory GNC</a
            >
          </p></kor-card
        >

        <kor-card
          label="Academic Research"
          grid-cols="6"
          grid-cols-m="12"
          image="./src/assets/academic.png"
        >
          <h4>Control Systems Ph.D.</h4>
          <p class="links">
            <a
              href="https://www.researchgate.net/scientific-contributions/Jose-Ospina-13810078"
              target="_blank"
              >Publications</a
            >
          </p>

          <p>
            I spent 5 years next to
            <a href="https://www.gekant.it/">Prof. Enrico Canuto</a>, with whom
            I deep dived into the essence of modelling real-life systems for the
            purpose of controlling them. Learned how either practice-only, or
            theory-only approaches are comfortable and relatively simple, while
            the real challenge lies in combining the two.
          </p>

          <p>Technologies used:</p>

          <div class="tag-container">
            <kor-tag label="circuit design"></kor-tag>
            <kor-tag label="microcontrollers"></kor-tag>
            <kor-tag label="pcb"></kor-tag>
            <kor-tag label="C"></kor-tag>
            <kor-tag label="C#"></kor-tag>
          </div>

          <p>
            During this time I built a relatively simple temperature control
            system. But learn't a lot during the process.
          </p>

          <h4>Electronic Engineering Undergraduate Thesis</h4>

          <p class="links">
            <a
              href="https://vdocumento.com/tesis-imagenes-tactiles-jose-ospina.html"
              target="_blank"
              >Thesis</a
            >
          </p>

          <p>
            As my final project, I ideated, designed and built a tactile image
            transducer that converted visual images from a web cam into tactile
            stimlation patterns using an electrode matrix.
          </p>
          <p>
            The work recevied the Otto de Greiff award, a national undergraduate
            thesis contest.
          </p>
        </kor-card>
      </kor-grid>
    `;
  }

  static get styles() {
    return [
      css`
        a {
          color: rgba(0, 0, 0, 0.5);
        }
        p {
          margin: 0.7rem 0rem;
        }
        .avatar {
          width: 150px;
        }
        .icons-container {
          margin-top: 12px;
        }
        .icon {
          height: 36px;
          margin-right: 1rem;
        }
        .heading-container {
          width: 100%;
          clear: both;
        }
        video {
          width: 100%;
          max-width: 600px;
          border-radius: 6px;
        }
        .tag-container > * {
          float: left;
          margin-right: 0.3rem;
          margin-bottom: 0.2rem;
        }

        kor-accordion {
          margin-bottom: 1rem;
        }

        kor-card {
          margin: 1rem 0;
        }
      `,
    ];
  }
}
