import { h } from 'preact';
import Radio from './Radio';
export default class RadioButton extends Radio {
    constructor() {
        super(...arguments);
        this.size = () => {
            return this.parent().props.size;
        };
        this.isDisabled = () => {
            return this.props.disabled || this.parent().props.disabled;
        };
        this.activeStyle = () => {
            return {
                backgroundColor: this.parent().props.fill || '',
                borderColor: this.parent().props.fill || '',
                color: this.parent().props.textColor || ''
            };
        };
    }
    parent() {
        return this.context;
    }
    render() {
        const { children, value, name } = this.props;
        return (h("label", { style: this.style(), className: this.className('el-radio-button', this.props.size && `el-radio-button--${this.size()}`, {
                'is-active': this.state.checked
            }) },
            h("input", { type: "radio", className: "el-radio-button__orig-radio", checked: this.state.checked, disabled: this.isDisabled(), name: name, value: value, onChange: this.onChange.bind(this) }),
            h("span", { className: "el-radio-button__inner", style: this.state.checked ? this.activeStyle() : {} }, children && children['length'] || value)));
    }
}
RadioButton.elementType = 'RadioButton';
//# sourceMappingURL=RadioButton.js.map