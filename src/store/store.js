import Vue from 'vue'
import Vuex from 'vuex'
import {imagesPath, defaultProfileImage,  getHeader} from './../config'
import api from './../api.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        loader:true, //spinner animation
        show:true, //login signup display
        imagesPath:imagesPath,//path to images
        defaultProfileImage:defaultProfileImage ,//if user did not uploaded profile pic, this is default
        feedPosts:[]
    },

    mutations:{
        addCount: state => state.count++,
        toggleShow: state => state.show = !state.show,
        hide: state => state.show = false,
        feedPosts:function(state, items){
            state.feedPosts = items;
        }

    },

    actions:{

    }
});
