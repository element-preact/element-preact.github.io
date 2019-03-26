import * as Preact from 'preact';
import classNames from './classnames';
export default class extends Preact.Component {
    constructor() {
        super(...arguments);
        this.classNames = classNames.bind(this);
    }
    className(...args) {
        return classNames(args.concat(this.props.className));
    }
    style(args) {
        return Object.assign({}, args, this.props.style);
    }
}
//# sourceMappingURL=Component.js.map