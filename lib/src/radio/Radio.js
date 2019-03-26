import { h } from 'preact';
import Component from '../libs/Component';
export default class Radio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.getChecked(props)
        };
    }
    componentWillReceiveProps(props) {
        const checked = this.getChecked(props);
        if (this.state.checked != checked) {
            this.setState({ checked });
        }
    }
    onChange(e) {
        const checked = e.target.checked;
        if (checked) {
            if (this.props.onChange) {
                this.props.onChange(this.props.value);
            }
        }
        this.setState({ checked });
    }
    onFocus() {
        this.setState({
            focus: true
        });
    }
    onBlur() {
        this.setState({
            focus: false
        });
    }
    getChecked(props) {
        return props.model == props.value || Boolean(props.checked);
    }
    render() {
        const { checked, focus } = this.state;
        const { disabled, value, children, name } = this.props;
        return (h("label", { style: this.style(), className: this.className('el-radio') },
            h("span", { className: this.classNames({
                    'el-radio__input': true,
                    'is-checked': checked,
                    'is-disabled': disabled,
                    'is-focus': focus
                }) },
                h("span", { className: "el-radio__inner" }),
                h("input", { type: "radio", className: "el-radio__original", checked: checked, disabled: disabled, name: name, value: value, onChange: this.onChange.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this) })),
            h("span", { className: "el-radio__label" }, children || value)));
    }
}
Radio.elementType = 'Radio';
//# sourceMappingURL=Radio.js.map