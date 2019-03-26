import Component from '../libs/Component';
interface Props {
    name: "arrow-down" | "arrow-left" | "arrow-right" | "arrow-up" | "caret-bottom" | "caret-left" | "caret-right" | "caret-top" | "check" | "circle-check" | "circle-close" | "circle-cross" | "close" | "upload" | "d-arrow-left" | "d-arrow-right" | "d-caret" | "date" | "delete" | "document" | "edit" | "information" | "loading" | "menu" | "message" | "minus" | "more" | "picture" | "plus" | "search" | "setting" | "share" | "star-off" | "star-on" | "time" | "warning" | "delete2" | "upload2" | "view";
}
export default class Icon extends Component<Props> {
    render(): JSX.Element;
}
export {};