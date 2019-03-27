import { h } from 'preact';
import Component from '../libs/Component';
export default class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked,
            focus: props.focus,
            label: this.getLabel(props)
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            checked: nextProps.checked, focus: nextProps.focus, label: this.getLabel(nextProps)
        });
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
    onChange(e) {
        if (e.target instanceof HTMLInputElement) {
            const { label } = this.state;
            const { trueLabel, falseLabel } = this.props;
            const checked = e.target.checked;
            const group = this.context.ElCheckboxGroup;
            if (group) {
                const length = group.state.options.length + (checked ? 1 : -1);
                if (group.props.min !== undefined && length < group.props.min) {
                    return;
                }
                if (group.props.max !== undefined && length > group.props.max) {
                    return;
                }
            }
            let newLabel = label;
            if (this.props.trueLabel || this.props.falseLabel) {
                newLabel = checked ? trueLabel : falseLabel;
            }
            this.setState({
                checked: checked,
                label: newLabel
            }, () => {
                if (this.props.onChange) {
                    this.props.onChange(checked);
                }
            });
        }
    }
    getLabel(props) {
        if (props.trueLabel || props.falseLabel) {
            return props.checked ? props.trueLabel : props.falseLabel;
        }
        else {
            return props.label;
        }
    }
    render() {
        return (h("label", { style: this.style(), className: this.className('el-checkbox') },
            h("span", { className: this.classNames('el-checkbox__input', {
                    'is-disabled': this.props.disabled,
                    'is-checked': this.state.checked,
                    'is-indeterminate': this.props.indeterminate,
                    'is-focus': this.state.focus
                }) },
                h("span", { className: "el-checkbox__inner" }),
                h("input", { className: "el-checkbox__original", type: "checkbox", checked: this.state.checked, disabled: this.props.disabled, onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onChange: this.onChange.bind(this) })),
            h("span", { className: "el-checkbox__label" }, this.state.label || this.props.children)));
    }
}
Checkbox.elementType = 'Checkbox';
//# sourceMappingURL=Checkbox.js.map