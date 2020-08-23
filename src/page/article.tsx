/** @format */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from '@component/header';
import Remarkable from 'remarkable';
import axios from 'axios';
import '../style/index.less';

const md = new Remarkable();

interface BlogProps {
  name: string;
}

class Index extends React.Component<BlogProps> {
  private contentText = '';

  componentDidMount = async (): Promise<void> => {
    const name = 'git_book';
    const response: string = await axios.get(`/api/blog/${name}`);
    this.contentText = response;
    console.log(response);
  }

  BlogContent = (contentText = ''): JSX.Element => <div dangerouslySetInnerHTML={{ __html: md.render(contentText) }} />

  render = (): JSX.Element => <React.Fragment>
    <Header title="博客"></Header>
    <div className="blog-detail-page">
      详情页
      {
        this.BlogContent(this.contentText)
      }
    </div>
  </React.Fragment>
}

ReactDOM.render(<Index name="博客"></Index>, document.querySelector('#main'));
