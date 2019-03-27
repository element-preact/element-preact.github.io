import Component from '../libs/Component';
declare type State = {
    checked?: boolean;
    focus?: boolean;
    label?: string;
};
declare type Props = {
    label?: string;
    trueLabel?: string;
    falseLabel?: string;
    disabled?: boolean;
    checked?: boolean;
    indeterminate?: boolean;
    focus?: boolean;
    onChange?: (checked: boolean) => void;
};
export default class Checkbox extends Component<Props, State> {
    static elementType: string;
    state: State;
    constructor(props: Props);
    componentWillReceiveProps(nextProps: Props): void;
    onFocus(): void;
    onBlur(): void;
    onChange(e: Event): void;
    getLabel(props: Props): string;
    render(): JSX.Element;
}
export {};
