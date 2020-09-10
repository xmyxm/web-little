/** @format */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from '@component/header';
import bookmarkList from '../util/bookmark';
import '../style/index.less';

class Index extends React.Component {
  render = (): JSX.Element => <React.Fragment>
    <Header title="书签"></Header>
    <div className="index-page">
      <div className="blog-box">

      </div>
      {
        bookmarkList.map((categoryData) => <div key={categoryData.name} className="category-box">
          <div className="category_name">{categoryData.name}</div>
          {
            categoryData.list.map((item) => <a
              className="bookmark-name"
              key={item.name}
              rel="noopener noreferrer"
              target="_blank"
              href={/(:\/\/)+/.test(item.link) ? item.link : `/article.html?name=${item.link}`}>
              {
                item.icon && <img className="bookmark-icon" src={item.icon} />
              }
              {item.name}
            </a>)
          }
        </div>)
      }
    </div>
  </React.Fragment>
}

ReactDOM.render(<Index></Index>, document.querySelector('#main'));
