import { Component } from 'react';
import './index.less';
export interface Props {
    title?: string;
}
export default class Header extends Component<Props, {}> {
    render: () => JSX.Element;
}
