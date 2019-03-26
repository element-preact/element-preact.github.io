import * as Preact from 'preact';
export default abstract class<P = {}, S = {}> extends Preact.Component<P & {
    className?: string;
    style?: any;
}, S> {
    classNames: any;
    className(...args: any[]): string;
    style(args?: any): any;
}
