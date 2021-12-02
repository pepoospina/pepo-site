import { Router } from "@vaadin/router";

/** components are dummy DIVs because rendering is manually done on the app.ts file. Router is used
 * to parse and manipulate the browser location */
export class LTRouter {
  router: Router;

  async setupRouter(outlet: HTMLElement) {
    this.router = new Router(outlet);

    this.router.setRoutes([
      {
        path: "/",
        component: "pepo-is-home",
      },
      { path: "(.*)", component: "app-error-page" },
    ]);

    await this.router.ready;
  }
}
