import { h } from 'preact';
import Component from '../libs/Component';
export default class Icon extends Component {
    render() {
        return h("i", { style: this.style(), className: this.className(`el-icon-${this.props.name}`) });
    }
}
//# sourceMappingURL=index.js.map