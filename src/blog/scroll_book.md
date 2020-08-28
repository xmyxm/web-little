# 一、滚动穿透解决方案

### 一、事例代码

```javascript
// 一旦我们让 body 脱离文档流，那它是不会受内部子元素(弹窗)滚动而影响，因为事件冒泡的原因，子元素在滚动空间不存在的时候就会导致可滚动的父节继续滚动。
// 而我们在此就是让body不具备滚动条件即可！

let top = 0;
const minBox = document.getElementById('minBox');
function show(): void {
  // 在弹出层显示之前，记录当前的滚动位置
  top = document.body.scrollTop || document.documentElement.scrollTop;
  // 使body脱离文档流
  document.body.style.cssText = `position: fixed;width: 100%;top: ${top}px;`;
  // 显示弹层
  minBox.style.display = 'block';
}

// 隐藏弹出层
function hide(): void {
  // body回到了文档流中
  document.body.style.cssText = '';
  // body回滚到之前位置
  document.body.scrollTop = top;
  // 关闭弹层
  minBox.style.display = 'none';
}

document.body.addEventListener('click', show);
minBox.addEventListener('click', hide);
```
体验地址：[Demo链接](https://github.com/xmyxm/Javascript_test/blob/master/滚动穿透最优实现方案.html)
