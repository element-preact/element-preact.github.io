import { VNode } from 'preact';
import Component from '../libs/Component';
declare type Color = string;
declare type State = {
    options?: Array<string>;
};
declare type Props = {
    min?: number;
    max?: number;
    size?: "small" | "large";
    fill?: Color;
    textColor?: Color;
    value?: string[];
    onChange?: (value: string[]) => void;
};
export default class CheckboxGroup extends Component<Props, State> {
    state: State;
    constructor(props: Props);
    componentWillReceiveProps(nextProps: Props): void;
    getChildContext(): {
        ElCheckboxGroup: CheckboxGroup;
    };
    onChange(value: string, checked: boolean): void;
    render(node: VNode): JSX.Element;
}
export {};
