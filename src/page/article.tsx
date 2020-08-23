/** @format */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from '@component/header';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import '../style/article.less';

interface BlogProps {
  name: string;
}

class Index extends React.Component<BlogProps> {
  public state = {
    contentText: '',
  }

  componentDidMount = async (): Promise<void> => {
    const name = 'git_book';
    const response: { data: string } = await axios.get(`/api/blog/${name}`);
    this.setState({ contentText: response.data });
    console.log(response.data);
  }

  render = (): JSX.Element => {
    const { contentText } = this.state;
    return <React.Fragment>
      <Header title="博客"></Header>
      <div className="article-page">
        {
          contentText ? <ReactMarkdown source={contentText} /> : <div>加载中</div>
        }
      </div>
    </React.Fragment>;
  }
}

ReactDOM.render(<Index name="博客"></Index>, document.querySelector('#main'));
