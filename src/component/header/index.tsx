import React, { Component } from 'react';
import './index.less';

export interface Props {
  title: string;
  next: string;
}

export default class Header extends Component {
  back = (): void => {
    history.back();
  };

  next = (): void => {
    const { next } = this.props;
    if (next) location.href = nextPage;
  };

  render(): JSX.Element {
    const { next = '', title = 'ESLint + TypeScript' } = this.props;

    return (
      <React.Fragment>
        <header className="header">
          <div onClick={this.back} className="back"></div>
          <div className="title">{title}</div>
          <div
            onClick={this.next}
            className={next ? 'next-page' : 'next'}
          ></div>
        </header>
        <div className="headerbox"></div>}
      </React.Fragment>
    );
  }
}
