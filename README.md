# Polyfill-My-Browser

> 给自己的老浏览器打补丁，防止那些用到 JS 新特性的网站跑不起来。

## 背景

我的 Chrome 老版本无法正常使用 ChatGPT 网页版了，因为网页用到了 `Array#toSorted()` 方法，而此方法是在 Chrome 较新版本中引入的。当我使用 ChatGPT 的对话功能时，控制台就会报 `TypeError: n.toSorted is not a function` 错误，同时网页显示 “Oops, an error occurred! [Try again]”。

## 解决方案

通过用户脚本来给老浏览器打补丁，使其支持新特性。

## 已知问题

这个用户脚本目前仅处理上述这一个问题。未来可能发展为一款更通用的 polyfill 加载工具。

***

## License

MIT
