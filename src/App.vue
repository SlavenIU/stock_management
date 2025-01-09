<!-- src/App.vue -->
<template>
  <div id="app">
    <h1>Stock Management</h1>
    <router-view></router-view>  <!-- This is where the routed views will be displayed -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
}
</style>
