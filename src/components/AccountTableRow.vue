<template slot="actions" slot-scope="data">
    <div>
        {{data.item}}
        <b-btn v-b-modal.modallg variant="primary" class="action-btn">
            <font-awesome-icon class="icon" icon="edit" />
        </b-btn>

        <button class="action-btn btn btn-danger"  @click="deleteAccount(data.item.id)">
            <font-awesome-icon class="icon" icon="trash-alt" />
        </button>
        <b-modal id="modallg" size="lg" title="Edit Account">
            <div><AccountForm v-bind:account="data.item" /></div>
        </b-modal>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios';
import AccountForm from "./AccountForm";


export default {
    name: 'AccountTableRow',
    components: {AccountForm},
    data() {
        return {

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
