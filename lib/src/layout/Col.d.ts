import Component from '../libs/Component';
declare type location = {
    span: number;
    offset?: number;
};
interface Props {
    span: number;
    offset?: number;
    push?: number;
    pull?: number;
    xs?: number | location;
    sm?: number | location;
    md?: number | location;
    lg?: number | location;
    tag?: string;
}
export default class extends Component<Props> {
    getStyle(): {
        paddingLeft: number;
        paddingRight: number;
    };
    render(): import("preact").VNode<any>;
}
export {};
