import { Component } from "preact";
export default class extends Component<{
    name: string;
    code: string;
}, {
    showBlock: boolean;
    code: string;
}> {
    playerId: string;
    document: string[];
    description: string;
    source: string[];
    constructor(props: any);
    componentDidMount(): void;
    blockControl: () => void;
    renderSource: () => any;
    container: HTMLDivElement;
    refContainer: (container: HTMLDivElement) => void;
    render(): JSX.Element;
}
