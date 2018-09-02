<template>
  <b-table striped :sort-by.sync="sortBy"
           :sort-desc.sync="sortDesc" :items="items"
           :fields="fields" class="account-table pagination-centered">
      <template slot="actions" slot-scope="data">
          <div>
              <button class="action-btn btn btn-info"><font-awesome-icon class="icon" icon="edit" /></button>
              <button class="action-btn btn btn-danger"><font-awesome-icon class="icon" icon="trash-alt" /></button>
          </div>
      </template>
  </b-table>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios';

export default {
    name: 'AccountTable',
    data() {
        return {
            sortBy: 'id',
            sortDesc: false,
            items: [],
            fields: [
                {
                    key: 'id',
                    label: 'ID',
                    sortable: true
                },
                {
                    key: 'forename',
                    label: 'Forename',
                    sortable: true
                },
                {
                    key: 'surname',
                    label: 'Surname',
                    sortable: true
                },
                {
                    key: 'actions',
                    label: '',
                    sortable: false
                }
            ],
            isActive: 1
        }
    },
    methods: {
        getAllAccounts: function() {
            axios.get("http://localhost:8080/api/v1").then(response => {
                this.items = response.data;
            }).catch(e => 1);
        }
    },
    mounted() {
        this.getAllAccounts();
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
.icon {
    width: 1em;
    height: 1em;
}
</style>
