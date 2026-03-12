<template>
  <router-view />
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  font-size: 13.33vw;
  height: 100%;
  overflow: hidden;
}
#app {
  height: 100%;
}
.wrap {
  width: 100%;
  height: 100%;
}
div::-webkit-scrollbar {
  display: none;
}
nav::-webkit-scrollbar {
  display: none;
}
section::-webkit-scrollbar {
  display: none;
}
</style>
