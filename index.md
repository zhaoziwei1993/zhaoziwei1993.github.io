---
layout: post
title: Flex Layout
date: 2019-3-20
---

---
## 基本概念

- `Flex` 全称是 `Flexible Box`，意为有「弹性的盒子」，我们一般称其为「弹性布局」。

- 我们把采用「Flex 布局」的元素称为「容器」，该元素的所有子元素称为「项目」。需要注意的是，项目的 `float` ，`clear` 以及 `vertical-align` 属性都将失效。

- 容器在水平方向有一根主轴 `main axis`，从 `main start` 到 `main end`。容器在垂直方向还有一根相交轴 `cross axis`，从 `cross start` 到 `cross end`。项目的水平方向宽度称为 `main size`，垂直方向高度称为 `cross size`。

---

## 容器属性与可选值

|flex-direction|设置主轴方向|
|:-            |:-        |
|row 默认值     |从左到右    |
|row-reverse   |从右向左    |
|column        |从上向下    |
|column-reverse|从下向上    |

|flex-wrap|设置项目数量多了之后是否换行|
|:-            |:-        |
|nowrap 默认 |不换行|
|wrap |换行 |
|wrap-reverse |反向换行（第一行在最下面）|

- flex-flow 这个属性其实就是上面两个属性合在一起
  - row nowrap 默认

- justify-content 项目在主轴上的对齐方式
  - flex-start 默认 向 `main start` 对齐
  - flex-end   向 `main end` 对齐
  - center 居中
  - space-between 两端对齐 统一项目间距
  - space-around  

- align-items
- align-content


1. 213
2. 123
2. 213

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

<a>3
    <b>1</b>
    <b>2</b>
</a>

<a>link</a>

[link](asdad/asd)