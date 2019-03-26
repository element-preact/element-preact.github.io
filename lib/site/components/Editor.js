import { h, Component } from 'preact';
export default class Editor extends Component {
    componentDidMount() {
        const { onChange, value } = this.props;
        this.cm = CodeMirror(this.editor, {
            mode: "jsx",
            keyMap: 'sublime',
        });
        this.cm.setValue(value);
        this.cm.on('changes', cm => {
            if (onChange) {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    onChange(cm.getValue());
                }, 300);
            }
        });
    }
    render() {
        return h("div", { className: "editor", ref: ref => (this.editor = ref) });
    }
}
//# sourceMappingURL=Editor.js.map