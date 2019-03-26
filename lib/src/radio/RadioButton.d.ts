import Radio from './Radio';
export default class RadioButton extends Radio {
    static elementType: string;
    parent(): any;
    size: () => string;
    isDisabled: () => boolean;
    activeStyle: () => {
        backgroundColor: string;
        borderColor: string;
        color: string;
    };
    render(): JSX.Element;
}
