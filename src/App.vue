<template>
  <div id="app">
    <SelectLocale />
    <HelloGator />
  </div>
</template>

<script>
import HelloGator from './components/HelloGator.vue'
import SelectLocale from './components/SelectLocale.vue'

export default {
  name: 'App',
  components: {
    HelloGator,
    SelectLocale
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
