<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
  methods: {}
}
</script>

<style>
body {
  margin: 0;
  background-color: #f4f4f4;
  padding: 0;
}
html {
  width: 100%;
  font-size: 20px;
  color: #333;
  margin: 0;
  padding: 0;
  font-family: PingFangSC-Regular, sans-serif;
}

html,
body,
header,
section,
footer,
div,
ul,
ol,
li,
img,
a,
span,
em,
del,
legend,
center,
strong,
var,
fieldset,
form,
label,
dl,
dt,
dd,
cite,
input,
hr,
time,
mark,
code,
figcaption,
figure,
textarea,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  border: 0;
  padding: 0;
  font-style: normal;
}
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  -webkit-backface-visibility: hidden;
  -webkit-touch-callout: none; /*系统默认菜单被禁用*/
  -webkit-user-select: none; /*webkit浏览器*/
  -khtml-user-select: none; /*早期浏览器*/
  -moz-user-select: none; /*火狐*/
  -ms-user-select: none; /*IE10*/
  user-select: none;
}
*::-webkit-scrollbar {
  display: none;
}
input,
textarea {
  -webkit-user-select: auto; /*webkit浏览器*/
  outline: none;
  background: none;
  border: 0px;
}
li {
  text-decoration: none;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix:after {
  content: '';
  display: block;
  clear: both;
  height: 0;
}
.popup_box {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999;
  background: rgba(74, 74, 74, 0.6);
}

.popup_box::after {
  content: '';
  display: inline-block;
  height: 100%;
  width: 0;
  vertical-align: middle;
}

.popup_cont {
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  display: inline-block;
  vertical-align: middle;
  margin-top: -5rem;
}

.fadeInDown {
  animation: 0.5s fadeInDown forwards;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.fadeInUp {
  animation: 0.5s fadeInUp forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 50%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.fadeIn {
  animation: 0.8s fadeIn forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeOutDown {
  animation: 0.5s fadeOutDown forwards;
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
}
/* 文字省略 */
.ellip-1 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.ellip-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.ellip-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.ellip-4 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}
html,body,#app{
  width: 100%;
  height:100%;
  background-color: #fff;
  }
</style>
