import { html, query, css, LitElement, internalProperty } from "lit-element";
import { LTRouter } from "./router/router";
import { sharedStyles } from "./styles";

import "@kor-ui/kor";

export class PepoSite extends LitElement {
  @query("#outlet")
  outlet: HTMLElement;

  @internalProperty()
  loading: boolean = true;

  router: LTRouter;

  connectedCallback() {
    super.connectedCallback();
  }

  async firstUpdated() {
    this.router = new LTRouter();
    await this.router.setupRouter(this.outlet);
    this.loading = false;
  }

  render() {
    return html`<kor-page id="outlet"></kor-page>`;
  }

  static get styles() {
    return [
      sharedStyles,
      css`
        kor-page {
          height: auto;
        }
        #outlet {
          margin: 0 auto;
          padding: 5vw;
          max-width: 1000px;
        }
        a {
          color: white;
        }
      `,
    ];
  }
}
