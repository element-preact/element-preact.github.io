import { VNode } from 'preact';
import Component from '../libs/Component';
import { TypeIcon } from '../interfaces';
interface Props {
    onClick?: (e: Event) => void;
    size?: "large" | "small" | "mini";
    type?: "primary" | "success" | "warning" | "danger" | "info" | "text";
    plain?: boolean;
    loading?: boolean;
    disabled?: boolean;
    icon?: TypeIcon;
    nativeType?: "submit" | "reset";
}
export default class Button extends Component<Props> {
    onClick: (e: Event) => void;
    render(node: VNode): JSX.Element;
}
export {};
