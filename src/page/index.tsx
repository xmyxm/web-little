import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Header from "../component/header/index"
import "../style/index.less";

export default class Index extends Component {

    constructor(props) {
        super(props)
    }
    
    render() {
        const title:string = "我是一个基于webpack + babel + react + TypeScript + eslint脚手架项目"
        return (
            <React.Fragment>
                <Header title="index"></Header>
                <div className="index-page">
                    <div className="icon-max"></div>
                    <div className="describe">{title}</div>
                    <div className="info">
                        使用方案介绍：
                        <p>支持图片统一压缩和icon的雪碧图方案</p>
                        <p>支持ES6转ES5配置</p>
                        <p>支持ES6转ES5配置</p>
                    </div>
                    <div className="info">
                        友情提示：
                        <p>因使用了图片压缩工具image-webpack-loader，导致安装依赖稍慢，在意安装速度的可以移除此插件及其引用</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<Index></Index>, document.querySelector("#main"))
