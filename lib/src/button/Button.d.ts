import { VNode } from 'preact';
import Component from '../libs/Component';
interface Props {
    onClick?: (e: Event) => void;
    size?: "large" | "small" | "mini";
    type?: "primary" | "success" | "warning" | "danger" | "info" | "text";
    plain?: boolean;
    loading?: boolean;
    disabled?: boolean;
    icon?: "arrow-down" | "arrow-left" | "arrow-right" | "arrow-up" | "caret-bottom" | "caret-left" | "caret-right" | "caret-top" | "check" | "circle-check" | "circle-close" | "circle-cross" | "close" | "upload" | "d-arrow-left" | "d-arrow-right" | "d-caret" | "date" | "delete" | "document" | "edit" | "information" | "loading" | "menu" | "message" | "minus" | "more" | "picture" | "plus" | "search" | "setting" | "share" | "star-off" | "star-on" | "time" | "warning" | "delete2" | "upload2" | "view";
    nativeType?: "submit" | "reset";
}
export default class Button extends Component<Props> {
    onClick: (e: Event) => void;
    render(node: VNode): JSX.Element;
}
export {};
