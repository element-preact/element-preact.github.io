import { VNode } from 'preact';
import Component from '../libs/Component';
declare type mixed = string | number;
declare type Color = string;
export declare type RadioGroupProps = {
    value?: mixed;
    size?: 'large' | 'small';
    fill?: Color;
    textColor?: Color;
    onChange?: (value: any) => void;
};
export default class RadioGroup extends Component<RadioGroupProps, {
    value: mixed;
}> {
    constructor(props: RadioGroupProps);
    getChildContext(): {
        props: Readonly<RadioGroupProps & {
            className?: string;
            style?: any;
        } & import("preact").Attributes & {
            children?: import("preact").ComponentChildren;
            ref?: import("preact").Ref<any>;
        }>;
    };
    onChange(value: mixed): void;
    render(node: VNode): JSX.Element;
}
export {};
