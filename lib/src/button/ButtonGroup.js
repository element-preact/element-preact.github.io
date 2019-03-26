import { h } from 'preact';
import Component from '../libs/Component';
export default class ButtonGroup extends Component {
    render() {
        return (h("div", { style: this.style(), className: this.className('el-button-group') }, this.props.children));
    }
}
//# sourceMappingURL=ButtonGroup.js.map