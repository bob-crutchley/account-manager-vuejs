<template>
  <div id="app">
    <AccountTable/>
  </div>
</template>

<script>
import AccountTable from './components/AccountTable.vue'

export default {
  name: 'app',
  components: {
      AccountTable
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
