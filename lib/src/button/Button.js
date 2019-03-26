import { h } from 'preact';
import Component from '../libs/Component';
export default class Button extends Component {
    constructor() {
        super(...arguments);
        this.onClick = (e) => {
            if (!this.props.loading) {
                this.props.onClick && this.props.onClick(e);
            }
        };
    }
    render(node) {
        const { type = 'default', size, disabled, loading, plain, nativeType = 'button', icon } = this.props;
        return (h("button", { style: this.style(), className: this.className('el-button', `el-button--${type}`, size && `el-button--${size}`, {
                'is-disabled': disabled,
                'is-loading': loading,
                'is-plain': plain
            }), disabled: disabled, type: nativeType, onClick: this.onClick },
            loading && h("i", { className: "el-icon-loading" }),
            icon && !loading && h("i", { className: `el-icon-${icon}` }),
            node.children && !!node.children.length && h("span", null, node.children)));
    }
}
//# sourceMappingURL=Button.js.map