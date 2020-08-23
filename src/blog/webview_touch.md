# 一、webview 禁止长按保存图片&禁止文本选择

### 一、禁止图片长按
```css
img{
    pointer-events: none;/*禁用鼠标*/
}
```

### 一、禁止文本选择
```css
.no-select{
    -webkit-user-select:none;
    -moz-user-select:none;
    -o-user-select:none;
    user-select:none;
}

```
