import Component from '../libs/Component';
interface Props {
    gutter: number | string;
    type?: 'flex';
    justify?: 'end' | 'center' | 'space-around' | 'space-between';
    align?: 'middle' | 'bottom';
    tag?: string;
}
export default class extends Component<Props> {
    getChildContext(): {
        gutter: string | number;
    };
    getStyle(): {
        paddingLeft: number;
        paddingRight: number;
    };
    render(): import("preact").VNode<any>;
}
export {};
