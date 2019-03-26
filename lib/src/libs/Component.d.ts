import * as Preact from 'preact';
import classNames from './classnames';
export default abstract class<P = {}, S = {}> extends Preact.Component<P & {
    className?: string;
    style?: any;
}, S> {
    classNames: typeof classNames;
    className(...args: any[]): string;
    style(args?: any): any;
}
