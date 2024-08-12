# Polyfill-My-Browser

> 给自己的老浏览器打补丁，防止那些用到 JS 新特性的网站跑不起来。

## 背景

我的 Chrome 老版本无法正常使用 ChatGPT 网页版了，因为网页用到了 `Array.prototype.toSorted()` 方法，而此方法是在 Chrome 较新版本中引入的。当我使用 ChatGPT 的对话功能时，控制台就会报 `TypeError: n.toSorted is not a function` 错误，同时网页显示 “Oops, an error occurred! [Try again]”。

我们可能暂时不方便升级浏览器，此时就需要想办法让 ChatGPT 在这个老 Chrome 中运行起来。


## 解决方案

通过用户脚本来给老浏览器打补丁，使其支持新特性。


## 使用方法

1. 在 Chrome 浏览器中安装 [Tampermonkey（篡改猴）插件](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo)。

	> 小提示：如果你使用的 Chrome 浏览器版本过低无法安装 Tampermonkey 最新版，则可以尝试在 [这个页面](https://www.crx4chrome.com/crx/363794/) 下载并安装它的旧版本。——⚠️ 需要注意的是，这个页面不是 Chrome 官方提供的，可能存在安全风险。

2. 点击 [这个用户脚本的完整代码](https://github.com/UserScript/Polyfill-My-Browser/raw/master/dist/polyfill-my-browser.user.js)，会自动进入 Tampermonkey 安装新脚本的界面。此时点击 “安装” 按钮即可安装。

3. 回到 ChatGPT 网页版，刷新页面，即可正常使用。


## 测试

由于 ChatGPT 官网随时可能更新，这里准备了一个 [测试页面](https://www.cssmagic.net/lab/userscript-polyfill/)，大家可以体验这个用户脚本的效果。


## 局限

这个用户脚本目前仅处理上述这一个问题。未来可能发展为一款更通用的 polyfill 加载工具。


***

## License

MIT
