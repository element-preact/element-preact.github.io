import Component from '../libs/Component';
import { TypeIcon } from '../interfaces';
interface Props {
    name: TypeIcon;
}
export default class Icon extends Component<Props> {
    render(): JSX.Element;
}
export {};
