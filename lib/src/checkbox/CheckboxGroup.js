import { h } from 'preact';
import Component from '../libs/Component';
export default class CheckboxGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: this.props.value || []
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                options: nextProps.value
            });
        }
    }
    getChildContext() {
        return {
            ElCheckboxGroup: this
        };
    }
    onChange(value, checked) {
        const index = this.state.options.indexOf(value);
        if (checked) {
            if (index === -1) {
                this.state.options.push(value);
            }
        }
        else {
            this.state.options.splice(index, 1);
        }
        this.forceUpdate();
        if (this.props.onChange) {
            this.props.onChange(this.state.options);
        }
    }
    render(node) {
        const { options } = this.state;
        return (h("div", { style: this.style(), className: this.className("el-checkbox-group") }, node.children.map((item, index) => {
            const props = Object.assign({}, item['attributes']);
            return h(item['nodeName'], Object.assign({}, props, {
                key: index,
                checked: props.checked ||
                    options.indexOf(props.value) >= 0 ||
                    options.indexOf(props.label) >= 0,
                onChange: this.onChange.bind(this, props.value ? props.value : props.value === 0 ? 0 : props.label),
                children: item['children']
            }));
        })));
    }
}
//# sourceMappingURL=CheckboxGroup.js.map