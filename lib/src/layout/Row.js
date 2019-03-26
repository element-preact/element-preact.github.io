import { h } from "preact";
import Component from '../libs/Component';
export default class extends Component {
    getChildContext() {
        return {
            gutter: this.props.gutter
        };
    }
    getStyle() {
        return this.context.gutter ? {
            paddingLeft: this.context.gutter / 2,
            paddingRight: this.context.gutter / 2
        } : {
            paddingLeft: 0,
            paddingRight: 0
        };
    }
    render() {
        const { justify = 'start', align = 'top', tag = 'div', type, children } = this.props;
        return h(tag, {
            className: this.className('el-row', `is-justify-${justify}`, `is-align-${align}`, {
                'el-row--flex': type === 'flex'
            }),
            style: this.style(this.getStyle())
        }, children);
    }
}
//# sourceMappingURL=Row.js.map