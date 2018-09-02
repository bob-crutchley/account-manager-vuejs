<template>
    <div>
        this is the account form... soon
        <input v-model="props.account.forename"/>
        <input v-model="props.account.surname"/>
        <p>
            Account Details: {{props.account.forename}}:{{props.account.surname}}
        </p>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import axios from 'axios';

export default {
    name: 'AccountForm',
    data() {
        return {
            props: {
                account: {
                    forename: '',
                    surname: ''
                }
            }
        }
    },
    methods: {
    }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.account-table {
    margin: auto;
    width: 85%
}
.action-btn {
    margin-left: 0.1em;
    margin-right: 0.1em;
}
.account-util-btn {
    margin-bottom: 1em;
}
.icon {
    width: 1em;
    height: 1em;
}

</style>
