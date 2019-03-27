import { h } from 'preact';
import CheckBox from './Checkbox';
export default class CheckboxButton extends CheckBox {
    render() {
        const group = this.context.ElCheckboxGroup;
        return (h("label", { style: this.style(), className: this.className('el-checkbox-button', group.props.size ? 'el-checkbox-button--' + group.props.size : '', {
                'is-disabled': this.props.disabled,
                'is-checked': this.state.checked,
                'is-focus': this.state.focus
            }) },
            h("input", { className: "el-checkbox-button__original", type: "checkbox", checked: this.state.checked, disabled: this.props.disabled, onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onChange: this.onChange.bind(this) }),
            h("span", { className: "el-checkbox-button__inner", style: this.state.checked ? {
                    boxShadow: '-1px 0 0 0 ' + group.props.fill,
                    backgroundColor: group.props.fill || '',
                    borderColor: group.props.fill || '',
                    color: group.props.textColor || ''
                } : {} }, this.state.label || this.props.children)));
    }
}
CheckboxButton.elementType = 'CheckboxButton';
//# sourceMappingURL=CheckboxButton.js.map