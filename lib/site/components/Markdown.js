import { h, Component, render } from "preact";
import Demo from "./Demo";
export default class Markdown extends Component {
    constructor(props) {
        super(props);
        this.components = new Map();
        this.renderer = new marked.Renderer();
        this.renderer.table = (header, body) => {
            return `<table class="grid"><thead>${header}</thead><tbody>${body}</tbody></table>`;
        };
    }
    componentDidMount() {
        this.renderDOM();
    }
    componentDidUpdate() {
        this.renderDOM();
    }
    renderDOM() {
        for (const [id, component] of this.components) {
            const div = document.getElementById(id);
            if (div instanceof HTMLElement) {
                render(component, div);
            }
        }
    }
    render() {
        const { components } = this;
        const { document, name } = this.props;
        if (document) {
            components.clear();
            const html = marked(document.replace(/:::\s?demo\s?([^]+?):::/g, (match, code, offset) => {
                const id = offset.toString(36);
                components.set(id, h(Demo, { name, code }, code));
                return `<div id=${id}></div>`;
            }), { renderer: this.renderer });
            return (h("div", { className: "content" },
                h("div", { dangerouslySetInnerHTML: {
                        __html: html
                    } })));
        }
        else {
            return h("div", { className: "content" },
                h("span", null));
        }
    }
}
//# sourceMappingURL=Markdown.js.map