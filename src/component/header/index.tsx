import React, { Component } from 'react';
import './index.less';

export interface Props {
  title?: string;
}

export default class Header extends Component<Props, {}> {
  render = (): JSX.Element => {
    const { title = '书签' } = this.props;
    return <React.Fragment>
      <header className="header">
        {title}
      </header>
      <div className="headerbox"></div>
    </React.Fragment>;
  }
}
