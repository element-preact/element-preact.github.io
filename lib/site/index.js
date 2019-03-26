import { h, render } from 'preact';
import SideNav from './containers/SideNav';
import Markdown from './containers/Markdown';
const app = document.getElementById('app');
render(h("div", { className: "main container" },
    h(SideNav, null),
    h(Markdown, null)), app);
//# sourceMappingURL=index.js.map