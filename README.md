# React-Nodejs-Project-Quickly-Start
从零开始 - 使用React+Webpack+Nodejs+Express快速构建项目

## 前言

目前`React`、`Webpack`等技术如火如荼，你是不是还在愁苦如何把这些杂乱的知识统统学习一下，开启一段新的前端开发之路呢？本文将以一个例子来讲解如何使用`React`、`Webpack`、`Nodejs`、`Express`这些技术快速构建项目，为后期的深入学习铺好道路，接下来我们就一起动手体验一下吧！

## 1. 安装及配置环境 ##

### 1.1 安装Node.js与NPM ###
Windows下安装`Node.js`还是比较方便的，请自行下载并安装， 安装包及源码下载地址为：[https://nodejs.org/en/download/][1]。安装过程基本就一直‘NEXT’就可以。安装完成后，记得到环境变量里配置了`Node.js`，变量值就是你的安装路径，例如“ C:\Program Files\nodejs ”。

`NPM`是随同`Node.js`一起安装的包管理器，新版的`Node.js`已经集成了`npm`，所以之前`npm`也一并安装好了。这里就不详细说了，如有问题可自行百度一下。

### 1.2 创建并初始化项目 ###
首先，进到你的工作目录里新建一个项目并打开

    D:\my-work>mkdir React-Nodejs-learn && cd React-Nodejs-learn

通过`npm init`命令为你的项目创建一个`package.json`文件。

    D:\my-work\React-Nodejs-learn>npm init

该命令会要求你输入一些参数，包括应用名、版本等，可以直接按回车设置为默认值。需要注意的是，其中有一项为`entry point:`，它的值为项目的入口文件，你可以设置成你想要的名称，例如`app.js`或者`index.js`等，在这儿我就默认选择了`app.js`。

### 1.3 创建项目目录 ###


![clipboard.png](https://sfault-image.b0.upaiyun.com/224/784/2247843038-577b79f058997_articlex)


### 1.4 安装Webpack并创建配置文件webpack.config.js ###

`Webpack`是当下较热门的前端资源模块化管理和打包工具，它不仅可以将松散的模块按照规则打包成前端资源，还可以实现模块的按需加载。任何形式的资源都可以被视为模块，如 CommonJs模块、AMD模块、ES6模块、CSS、图片、JSON、Coffeescript、SASS等。对应各种不同文件类型的资源，`Webpack`有对应的模块`loader`。

####1.4.1 安装Webpack####

使用`npm`安装依赖模块时，可以选择全局安装（通过`-g`参数），也可以选择只在项目中安装。同时，如果还指定了`--save`参数，那么被安装的模块还将被添加到`package.json`文件中的`dependencies`依赖列表中。这样，通过`npm install`命令即可自动安装依赖列表中所列出的所有模块。执行以下命令安装`Webpack`。

    npm install webpack --save -g

#### 1.4.2 安装loader ####

本项目中目前使用到的有`babel-loader`、`css-loader`、`style-loader`、`jsx-loader`。之后如有需要可以再按需安装其他`loader`。

    npm install babel-loader css-loader style-loader jsx-loader --save


#### 1.4.3 创建webpack.config.js  ####

每个项目下都必须配置有一个`webpack.config.js`文件，通俗的讲，它的作用就是告诉`Webpack`要做什么。进到“React-Nodejs-Learn\client\static”目录下新建一个`webpack.config.js`配置文件，可以参考如下内容：

```
var webpack = require('webpack');

module.exports = {
    // 页面入口文件配置
    entry : {
        'view/main/index': './js/view/main/index.js'
    },
    // 入口文件输出配置
    output : {
        path : __dirname + '/output/js/',
        filename : '[name].bundle.js'
    },
    module: {
        // 加载器配置
        loaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader!jsx-loader?harmony'
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }
        ]        
    },
    // 其他解决方案配置
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.json'],
    },
    // 插件项
    plugins : [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
}
```

写完配置文件，就可以通过在控制台执行命令打包了。打开控制台并进入到`webpack.config.js`文件所在目录下，执行`webpack`命令：

    webpack

执行这个命令时会自动读取`webpack.config.js`文件，按照配置进行打包。命令执行成功后，控制台会显示打包结果，如下图：


![clipboard.png](https://sfault-image.b0.upaiyun.com/346/802/3468023148-577b9a31b28d9_articlex)

这里需要注意的是，如果执行`webpack`命令不带参数的话，每次修改文件都要重新手动执行一下这个命令，会很麻烦，由此，我们可以在该命令后加一个`- watch`参数，这样我们每次改完文件都会自动编译，无需再手动执行一次了。

    webpack --watch

### 1.5 安装React ###

`React`可以直接下载使用，可以到官网 [http://facebook.github.io/react/][2] 下载最新版，然后在主页`html`中引入 `react.min.js`（React的核心库） 、`react-dom.min.js`（提供与DOM相关的功能）和 `browser.min.js`（用于将 JSX 语法转为 JavaScript 语法）这三个库就可以。

当然也可以通过`npm`安装`React`，执行以下命令来完成安装。

    npm install react --save
    npm install react-dom --save

同时，也需要安装一些`babel`插件：

    npm install babel-core --save
    npm install babel-preset-react --save
    npm install babel-preset-es2015 --save

### 1.6 安装Express ###

`Express`是一个简洁而灵活的`node.js` Web应用框架, 提供一系列强大特性帮助你创建各种Web应用。全局安装`Express`并将其保存到依赖列表中：

    npm install express --save -g

### 1.7 安装模板引擎EJS ###

`EJS`是一款`Node.js`的模板引擎，同样使用`npm`安装。

    npm install ejs --save -g

## 2. 写代码 ##

环境搭建好后，就可以开始我们的代码作业了。

### 2.1 编写主页index.html ###

目录“React-Nodejs-Learn\client\view”下的`index.html`是我们项目的首页面。在`index.html`中引入`css`文件和`webpack`打包后的`js`文件。

```
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8"/>
	<title>React-Nodejs-Learn</title>
	<link rel="stylesheet" href="../client/static/css/style.css" type="text/css"/>
</head>
<body>
	<div id="main-container"></div>
	<script src="../client/static/output/js/view/main/index.bundle.js"></script>
</body>
</html>
```

### 2.2 修改入口文件app.js ###

```
// 引入模块
var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express();

// 对所有(/)URL或路由返回index.html 
app.get('/', function (req, res) {
	res.render('index');
});

// 设置views路径和模板
app.set('views', './client/view');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// 静态文件配置
app.use('/client/static', express.static(path.join(__dirname, 'client/static')));

// 启动一个服务，监听从8888端口进入的所有连接请求
var server = app.listen(8888, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Listening at http://%s:%s', host, port);
}); 
```

 通过如下命令启动`app.js`：

    node app.js


然后在浏览器中打开 http://localhost:8888/ 并查看输出结果，结果如下图所示。


![clipboard.png](https://sfault-image.b0.upaiyun.com/280/195/2801953499-577ba6d085e62_articlex)

要补充的一点是，`node`命令也是只能执行一次，每次修改文件都要再重新手动执行一下这个命令，会很麻烦。我们可以通过`npm`安装一个`nodemon`：

    npm install nodemon --save

再运行命令：

    nodemon app.js

这样每次修改代码后，无需手动重新启动`app.js`，它会帮助你自动启动`app.js`。

![clipboard.png](https://sfault-image.b0.upaiyun.com/516/929/516929405-577ca058d6d50_articlex)


### 2.3 用JSON模拟后台数据 ###

进到“React-Nodejs-Learn\server”目录下，后端代码都写在该目录下。新建一个“data”文件夹并打开，编写模拟数据代码。（D:\my-work\React-Nodejs-Learn\server\data\getMessage.js）

```
var MessageList = [

{ "Message":"Hello React"},

{ "Message":"Hello Webpack"},

{ "Message":"Hello Nodejs"},

{ "Message":"Hello Express"}

];

exports.getMessageList = function (callback) {
	callback(MessageList);
};
```

当然我们也可以直接去连数据库，这一块儿有机会再分享给大家。

### 2.4 封装接口 ###

进到“React-Nodejs-Learn\server”目录下，新建一个“action\data”文件夹并打开，编写对应的取数据的代码。（D:\my-work\React-Nodejs-Learn\server\action\data\getMessage.js）

```
var getMessageList = require('../../data/getMessage');

exports.execute = function (req, res) {
	 getMessageList.getMessageList(function (data) {
	 	res.send(data);
	 });
};
```

### 2.5 定义接口并修改路由配置 ###

修改`app.js`

```
// 引入模块
var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express();

// 新增接口路由
app.get('/data/:module', function (req, res, next) {
	var c_path = req.params.module;
	var Action = require('./server/action/data/' + c_path);
	Action.execute(req, res);
});

// 对所有(/)URL或路由返回index.html 
app.get('/', function (req, res) {
	res.render('index');
});

// 设置views路径和模板
app.set('views', './client/view');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// app.use配置
app.use('/client/static', express.static(path.join(__dirname, 'client/static')));

// 启动一个服务，监听从8888端口进入的所有连接请求
var server = app.listen(8888, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Listening at http://%s:%s', host, port);
}); 
```

接口定义好了后，在浏览器里访问一下： `http://localhost:8888/data/getMessage/`，可以看到数据正确的返回。


![clipboard.png](https://sfault-image.b0.upaiyun.com/164/144/164144923-577cb16c18cf1_articlex)


### 2.6 编写React组件 ###

首先进到目录“React-Nodejs-Learn\client\static\js\store\main”下，新建一个`index.js`文件。该文件用于组件与后端数据的交互。

```
var EventEmitter = require('events').EventEmitter;

class Store_MessageList extends EventEmitter {
	constructor() {
		this.allData = null;
	}

	getAllData(callback) {
		var self = this;
		fetch(
			"/data/getMessage/"
		)
		.then(function(res) {
			if (res.ok) {
				res.json().then(function(data) {
					self.allData = data;
					callback(self.allData);
				});
			} else {
				console.log("Looks like the response wasn't perfect, got status", res.status);
			}
		}, function(e) {
			console.log("Fetch failed!", e);
		});
	}
}

module.exports = new Store_MessageList();
```

然后进到目录“React-Nodejs-Learn\client\static\js\view\main”，新建`index.js`。编写视图组件并渲染到页面上。

```
var React = require('react');
var ReactDOM = require('react-dom');
var store = require('../../store/main');

class MessageList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messageList: []
		};
		this.getData();
	}

	render() {
        var self = this;
        var messages = this.state.messageList;
        var arr = [];

        messages
        .forEach(function(em) {
            arr.push(<li key={em}> {em} </li>);
        });
		return <section className="pageContentInner">
            <div className="head-section"><h1>MessageList: </h1></div>
            <ul>
                {arr}
            </ul>
        </section>;
	}

	getData() {
        var self = this;
        store
        .getAllData(function (data) {
        	var i = 0;
        	var len = data.length;
        	var messageListArr = [];
        	for(; i<len; i++) {
        		messageListArr[i] = data[i].Message;
        	}
        	self.setState({messageList: messageListArr});
        	console.log(self.state.messageList);
        })
    }
}

ReactDOM.render(
  <MessageList />,
  document.getElementById('main-container')
);
```
刷新一下页面，组件已经成功读取数据并渲染到页面上了，这时候可以继续编写样式代码了，在此我们就省略不写样式了。

![clipboard.png](https://sfault-image.b0.upaiyun.com/266/083/2660837534-577cf72c0b0dd_articlex)

## 3. 总结 ##

至此，一个项目就快速构建好了，这样我们就可以继续后续开发工作了。当然，项目开始时，其实我们可以直接使用`Express`创建项目，例如通过命令`express -t ejs project`创建项目，此时，会自动生成一个`project`文件夹。文件夹里面面会有`model`、`public`、`routes`和`views`文件夹，还有`app.js`和`package.json`两个文件。不再需要我们手动创建目录。

本篇文章只着重讲了如何快速构建项目，只是一个demo，其中涉及到的知识还需大家深入学习与探索，一起加油吧！

  [1]: https://nodejs.org/en/download/
  [2]: http://facebook.github.io/react/
