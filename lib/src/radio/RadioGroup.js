import { h } from 'preact';
import Component from '../libs/Component';
export default class RadioGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
    }
    getChildContext() {
        const { props } = this;
        return {
            props
        };
    }
    onChange(value) {
        this.setState({ value });
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }
    render(node) {
        return (h("div", { style: this.style(), className: this.className('el-radio-group') }, node.children.map(item => h(item['nodeName'], Object.assign({}, item['attributes'], {
            onChange: this.onChange.bind(this),
            model: this.state.value,
            size: this.props.size,
            children: item['children']
        })))));
    }
}
//# sourceMappingURL=RadioGroup.js.map