<template lang="html">
<header class='b-header'>
    <nav class="b-header__navigation">
        <router-link class='b-header__navigation-link' to="/dashboard">
            <i class='b-header__icon'>HP</i>
        </router-link>

        <router-link class='b-header__navigation-link' to="/dashboard">
            <div class='b-header__icon'>
                <img src="https://dummyimage.com/256x256/f024f0/000000.jpg" alt="">
            </div>
        </router-link>

        <router-link class='b-header__navigation-link' to="/dashboard">
            <i class='b-header__icon'>UP</i>
        </router-link>

        <router-link class='b-header__navigation-link' to="/dashboard">
            <i class='b-header__icon'>FD</i>
        </router-link>
    </nav>
    <div class="b-header__logo">
        <h1 class="logo__white animated fadeIn"><span>Photo</span>gram</h1>
    </div>
    <div class="b-header__utilities">
        <div class="b-header__utilities-search">
            <i class='b-header__icon'>src</i>
        </div>
        <div class="b-header__utilities-lang">
            <i>SRB</i>
        </div>
    </div>
</header>

</template>

<script>
export default {
}
</script>


<style>

</style>
