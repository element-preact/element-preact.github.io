import { h, Component } from "preact";
import * as Element from '../../src';
import Editor from './Editor';
export default class extends Component {
    constructor(props) {
        super(props);
        this.blockControl = () => {
            this.setState({
                showBlock: !this.state.showBlock
            });
        };
        this.renderSource = () => {
            const $ = { createElement: h, vnode: null };
            const args = ['context', 'React', 'Component'];
            const argv = [this, $, Component];
            for (const key in Element) {
                args.push(key);
                argv.push(Element[key]);
            }
            const code = Babel.transform(`
        class Demo extends Component {
            ${this.state.code}
        }
        React.vnode = <Demo {...context.props} />
        `, {
                presets: ['react']
            }).code;
            args.push(code);
            new Function(...args).apply(null, argv);
            return $.vnode;
        };
        this.refContainer = (container) => {
            this.container = container;
        };
        this.playerId = `${Math.floor(Math.random() * 1e9).toString(36)}`;
        this.document = this.props.code.match(/([^]*)\n?(```[^]+```)/);
        this.description = marked(this.document[1]);
        this.source = this.document[2].match(/```(.*)\n?([^]+)```/);
        this.state = {
            showBlock: false,
            code: this.source[2]
        };
    }
    componentDidMount() {
        this.renderSource();
    }
    render() {
        const { name } = this.props;
        const { code } = this.state;
        return h("div", { className: `demo-block demo-box demo-${name}` },
            h("div", { className: "source" }, this.renderSource()),
            this.state.showBlock && (h("div", { className: "meta" },
                this.description && (h("div", { className: "description", dangerouslySetInnerHTML: { __html: this.description } })),
                h(Editor, { value: code, onChange: code => this.setState({ code }) }))),
            h("div", { className: "demo-block-control", onClick: this.blockControl }, this.state.showBlock
                ?
                    h("span", null,
                        h("i", { className: "el-icon-caret-top" }),
                        " \u9690\u85CF")
                :
                    h("span", null,
                        h("i", { className: "el-icon-caret-bottom" }),
                        " \u663E\u793A")));
    }
}
//# sourceMappingURL=Demo.js.map