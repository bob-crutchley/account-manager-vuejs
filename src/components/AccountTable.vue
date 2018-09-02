<template>
    <div class="account-table pagination-centered">
        <div class="float-right account-util-btn ">
            <button class="action-btn btn btn-info" @click="getAllAccounts()">
                <font-awesome-icon class="icon" icon="sync-alt" />
            </button>
            <button class="action-btn btn btn-success"  @click="deleteAccount(data.item.id)">
                <font-awesome-icon class="icon" icon="plus" />
            </button>
        </div>
        <b-table striped :sort-by.sync="sortBy"
               :sort-desc.sync="sortDesc" :items="items"
               :fields="fields">
            <AccountTableRow></AccountTableRow>
      </b-table>

    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios';
import AccountTableRow from './AccountTableRow';


export default {
    name: 'AccountTable',
    components: {AccountTableRow},
    data() {
        return {
            sortBy: 'id',
            sortDesc: false,
            items: [{'id': 'test', forename: 'test', surname: 'test' }],
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
                    label: 'Actions',
                    sortable: false
                }
            ]
        }
    },
    methods: {
        getAllAccounts: function() {
            axios.get("/all").then(response => {
                this.items = response.data;
            }).catch(e => 1);
        },
        deleteAccount: function(id) {
            axios.delete("/delete/" + id).then(response => {
                this.items.forEach((account, index) => {
                    if (account.id === response.data.id) {
                        this.items.splice(index, 1)
                    }
                })
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
.account-util-btn {
    margin-bottom: 1em;
}
.icon {
    width: 1em;
    height: 1em;
}

</style>
