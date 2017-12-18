# element-theme-extend
具体详细配置参考 [element-theme](https://github.com/ElementUI/element-theme)
> 扩展功能

1. themePath 扩展为 可指定主题库的目录
```
...
et.watch({
  ...
  themePath: './src/theme'
});
...
```
2. package.json中 扩展为 可指定主题库的目录 
```
{
    ...
    "element-theme": {
        ...
        "theme": "./src/theme",
        ...
    }
    ...
}
```
3. et -w 自动监听所配置主题库文件的变化编译

> 注意事项

1. 需要搭配使用
element-ui 2.x.x
主题使用 [element-theme-chalk](git@github.com:ElementUI/theme-chalk.git)

2. 使用 element-ui 1.x.x 请切换到 [v0.0.2 版本](https://github.com/Bob2622/element-theme-extend/tree/v0.0.2)
主题使用 [element-theme-default](git@github.com:ElementUI/theme-default.git)
## License
MIT
