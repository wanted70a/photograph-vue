<template lang="html">
    <div class="">
        <h2>TERMS OF USE</h2>
        <router-link :to="{ name: 'home', params: {} }" @click='hide'>Back</router-link>
    </div>

</template>

<script>
export default {
    methods:{
        hide(){
                this.$store.commit('hide');
        },
    }
}
</script>

<style lang="css">
</style>
