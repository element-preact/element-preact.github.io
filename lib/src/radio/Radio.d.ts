import Component from '../libs/Component';
declare type Props = {
    model?: string;
    checked?: boolean;
    value?: string | number;
    disabled?: boolean;
    name?: string;
    size?: 'large' | 'small';
    onChange?: (value: string | number) => void;
};
declare type State = {
    checked: boolean;
    focus?: boolean;
};
export default class Radio extends Component<Props> {
    static elementType: string;
    state: State;
    constructor(props: Props);
    componentWillReceiveProps(props: Props): void;
    onChange(e: any): void;
    onFocus(): void;
    onBlur(): void;
    getChecked(props: Props): boolean;
    render(): JSX.Element;
}
export {};
