(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{378:function(a,e,s){"use strict";s.r(e);var t=s(0),n=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"源码启动nuls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码启动nuls","aria-hidden":"true"}},[a._v("#")]),a._v(" 源码启动NULS")]),a._v(" "),s("h2",{attrs:{id:"需要依赖的资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#需要依赖的资源","aria-hidden":"true"}},[a._v("#")]),a._v(" 需要依赖的资源")]),a._v(" "),s("ul",[s("li",[a._v("JDK 1.8")]),a._v(" "),s("li",[a._v("Maven 3.3+")]),a._v(" "),s("li",[a._v("Git 2.x")]),a._v(" "),s("li",[a._v("IDE ( 可选 )")]),a._v(" "),s("li",[a._v("运行环境: 64 位系统，4G 及以上可用内存")])]),a._v(" "),s("h2",{attrs:{id:"获取源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取源码","aria-hidden":"true"}},[a._v("#")]),a._v(" 获取源码")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ git clone https://github.com/nuls-io/nuls.git && cd nuls\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译","aria-hidden":"true"}},[a._v("#")]),a._v(" 编译")]),a._v(" "),s("p",[a._v("首先，请确保 maven 版本大于3.3，JDK 版本是 1.8。")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ mvn -v\nApache Maven 3.5.4 (1edded0938998edf8bf061f1ceb3cfdeccf443fe; 2018-06-18T02:33:14+08:00)\nMaven home: /usr/local/Cellar/maven/3.5.4/libexec\nJava version: 1.8.0_171, vendor: Oracle Corporation, runtime: /Library/Java/JavaVirtualMachines/jdk1.8.0_171.jdk/Contents/Home/jre\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("如果你的 JDK 版本不是1.8，建议安装并设置为使用1.8版本。")]),a._v(" "),s("p",[a._v("现在，我们可以执行编译了。")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ mvn clean package\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("命令成功执行，编译出的钱包核心会保存在如下路径")]),a._v(" "),s("blockquote",[s("p",[a._v("client-module/client/target/nuls-node.tar.gz")])]),a._v(" "),s("h2",{attrs:{id:"启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[a._v("#")]),a._v(" 启动")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ mvn clean package\n$ cd client-module/client/target\n$ mkdir nuls-node\n$ tar -zxvf nuls-node.tar.gz -C nuls-node\n$ cd nuls-node/bin\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("ul",[s("li",[a._v("start.sh 启动 NULS 钱包。")]),a._v(" "),s("li",[a._v("stop.sh 停止 NULS 钱包.")]),a._v(" "),s("li",[a._v("cmd.sh 启动 NULS Shell.")])]),a._v(" "),s("h2",{attrs:{id:"导入-idea"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入-idea","aria-hidden":"true"}},[a._v("#")]),a._v(" 导入 IDEA")]),a._v(" "),s("p",[a._v("导入工程目录到 IDEA，并设置好启动入口，即可调试运行。")]),a._v(" "),s("p",[s("img",{attrs:{src:"assert/launcher.jpg",alt:"图片"}})])])}],!1,null,null,null);n.options.__file="3-1sourceCodeStartNULS.md";e.default=n.exports}}]);