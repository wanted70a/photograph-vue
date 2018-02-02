<template>
    <div class="p-dashboard">
        <app-header></app-header>
        <app-list-posts></app-list-posts>

        <div class="wrapper" id="dashboard-wrapper">
            <button v-on:click='logout' class="btn btn-primary">Logout</button>
        </div>
    </div>

</template>

<script>
import {apiDomain, apiAllPosts, getHeader, userUrl} from './../config'
import Header from '../components/Header.vue'
import ListPosts from '../components/posts/ListPosts.vue'

export default{
    components:{
        'app-header':Header,
        'app-list-posts':ListPosts
    },
    data(){
        return {
            posts:[],
        }
    },

    methods: {
        logout: function () {
            const authUser = {}
            window.localStorage.removeItem('authUser', JSON.stringify(authUser))
            this.$router.push({name: 'home'})
        }
    }
}
</script>
