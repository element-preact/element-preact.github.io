import { Component, VNode } from "preact";
export default class Markdown extends Component<{
    name?: string;
    document?: string;
}> {
    components: Map<string, VNode<any>>;
    renderer: any;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(): void;
    renderDOM(): void;
    render(): JSX.Element;
}
