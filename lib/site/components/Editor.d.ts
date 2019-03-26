/// <reference types="node" />
import { Component } from 'preact';
export interface EditorProps {
    onChange: (value: string) => void;
    value?: string;
}
export default class Editor extends Component<EditorProps> {
    cm: any;
    editor: HTMLDivElement;
    timeout: NodeJS.Timer;
    componentDidMount(): void;
    render(): JSX.Element;
}
