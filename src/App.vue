<template>
  <div id="app">
      <h2>Account Manager</h2>
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
  margin-top: 3em;
}
</style>
