import { PepoSite } from "./app";
import { Home } from "./containers/home";

(async function () {
  customElements.define("pepo-is", PepoSite);
  customElements.define("pepo-is-home", Home);
})();
