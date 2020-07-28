import { Component } from 'react';
import './index.less';
export interface Props {
    title?: string;
    next?: string;
}
export default class Header extends Component<Props, {}> {
    back: () => void;
    next: () => void;
    render(): JSX.Element;
}
