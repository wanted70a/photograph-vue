<template lang="html">
<div class="b-newsfeed">
    <div class="c-loader" v-show='loader'></div>
    <div class="mo-post" v-for='post in posts'>
        <div class="mo-post-inner">
            <div class="mo-post__avatar">
                <div class="mo-post__avatar__profile-picture">
                    <img :src='post.user.image ? imagesPath + post.user.image : defaultProfileImage'  alt="">
                </div>
                <h3 class='mo-post__avatar__name'>{{post.user.username}}</h3>
            </div>
            <div class="mo-post__media">
                <img v-if="post.type_id === 1" :src="imagesPath+post.media" alt="">
                <div class="" v-else>
                    <video :src="imagesPath+post.media" autoplay poster="posterimage.jpg"></video>
                </div>
            </div>
            <div class="mo-post__stats">
                <span>Add Comm</span>
                <span>Likes: {{post.likes_count}}</span>
            </div>
            <div class="mo-post__comments">
                <p v-for='(comment, indx) in post.comments' v-if='indx < 3'>{{indx+1 + '. '+comment.user.username}}: {{comment.body}}</p>
                <p>view all comments</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {apiAllPosts, getHeader} from './../../config'
import api from './../../api.js'


console.log(api)
export default {

    data(){
        return {
            loader:true,
            posts:'',
            imagePath:'http://192.168.0.154:8000/storage/',
            defaultImage:'https://dummyimage.com/360x360/000/fff.png'
        }
    },

    methods: {
        logout: function () {
            const authUser = {}
            window.localStorage.removeItem('authUser', JSON.stringify(authUser))
            this.$router.push({name: 'home'})
        },

        addCount(){
            this.$store.commit('addCount');
        },

        addFeed(){
            this.$store.commit('feedPost');
        }
    },

    //lifecycle hooks
    created(){
        const rqstHeader = getHeader();
        this.$http.get( apiAllPosts + '?amount=12&page=1', {headers: rqstHeader })
        .then(response => {
            this.loader=false;
            console.log(response.body.data);
            this.posts = response.body.data;
        })
    },

    computed:{
        count(){
            return this.$store.count;
        },

        imagesPath(){
            return this.$store.state.imagesPath;
        },

        defaultProfileImage(){
            return this.$store.state.defaultProfileImage;
        },

        feedPosts(){
            return this.$store.state.feedPosts;
        }
    }
}
</script>

<style lang="css">
</style>
