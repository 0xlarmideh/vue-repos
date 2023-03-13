<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: 'Clash Display', sans-serif;
  /* font-weight: 400; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0 1.4rem;

  /* color: #111414;
  background-color: #efefef; */
}

body {
  color: #111414;
  background-color: #efefef;

}
</style>
