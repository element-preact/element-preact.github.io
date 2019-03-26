import * as Preact from 'preact';
import classNames from './classnames';
export default class extends Preact.Component {
    constructor() {
        super(...arguments);
        this.classNames = classNames;
    }
    className(...args) {
        const { className } = this.props;
        return classNames(args.concat(className));
    }
    style(args) {
        const { style } = this.props;
        return Object.assign({}, args, style);
    }
}
//# sourceMappingURL=Component.js.map