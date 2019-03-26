## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `el-icon-iconName` 来使用即可。例如：

:::demo
```js
render() {
  return (
    <div>
      <i className="el-icon-edit"></i>
      <i className="el-icon-share"></i>
      <i className="el-icon-delete"></i>
      <Button type="primary" icon="search">搜索</Button>
    </div>
  )
}
```
:::

### 图标集合

:::demo
```js
render() {
    const iconList = [
      "arrow-down",
      "arrow-left",
      "arrow-right",
      "arrow-up",
      "caret-bottom",
      "caret-left",
      "caret-right",
      "caret-top",
      "check",
      "circle-check",
      "circle-close",
      "circle-cross",
      "close",
      "upload",
      "d-arrow-left",
      "d-arrow-right",
      "d-caret",
      "date",
      "delete",
      "document",
      "edit",
      "information",
      "loading",
      "menu",
      "message",
      "minus",
      "more",
      "picture",
      "plus",
      "search",
      "setting",
      "share",
      "star-off",
      "star-on",
      "time",
      "warning",
      "delete2",
      "upload2",
      "view"
    ];
    return (
    <ul className="icon-list">
      {iconList.map((v, i) =>
        <li key={i}><span><Icon name={v} />{v}</span></li>
      )}
    </ul>
  )
}
```
:::