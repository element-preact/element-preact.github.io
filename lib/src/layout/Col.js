import { h } from "preact";
import Component from '../libs/Component';
export default class extends Component {
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
        const { tag = 'div', span = 24, children } = this.props;
        let classList = [];
        ['span', 'offset', 'pull', 'push'].forEach(prop => {
            if (this.props[prop] >= 0) {
                classList.push(prop !== 'span'
                    ? `el-col-span-${span}`
                    : `el-col-${this.props[prop]}`);
            }
        });
        ['xs', 'sm', 'md', 'lg'].forEach(size => {
            if (typeof this.props[size] === 'object') {
                let props = this.props[size];
                Object.keys(props).forEach(prop => {
                    classList.push(prop !== 'span'
                        ? `el-col-${size}-${prop}-${props[prop]}`
                        : `el-col-${size}-${props[prop]}`);
                });
            }
            else if (this.props[size] >= 0) {
                classList.push(`el-col-${size}-${Number(this.props[size])}`);
            }
        });
        return h(tag, {
            className: this.className('el-col', classList),
            style: this.style(this.getStyle())
        }, children);
    }
}
//# sourceMappingURL=Col.js.map