<template>
    <div class="wrapper" id="dashboard-wrapper">
        <p>Welcome to the dash</p>
        <button v-on:click='logout' class="btn btn-primary">Logout</button>
    </div>
</template>

<script>
import {apiDomain, getHeader, userUrl} from './../config'
    export default{
        methods: {
            logout: function () {
                const authUser = {}
                window.localStorage.removeItem('authUser', JSON.stringify(authUser))
                this.$router.push({name: 'home'})
            }
    }
    }
</script>
