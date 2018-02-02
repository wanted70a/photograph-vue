<template>
  <div class="wrapper" id="home-wrapper">
      <h1>Welcome to <span>Photogram</span></h1>
      <section class="login">
          <div class="row">
            <div class="col-md-6 col-md-push-3">

                <div class="panel panel-default">
                    <div class="panel-heading"><strong>Forgot Your Password</strong></div>
                        <div class="panel-body">
                            <form v-on:submit.prevent="handleResetFormSubmit()">
                                <div class="form-group">
                                    <label>Email address</label>
                                    <input class="form-control" placeholder="Enter your email adress" type="email" v-model='email'>
                                     <div class="message">{{ validation.firstError('email') }}</div>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input class="form-control" placeholder="Enter Your Password" type="password" v-model='password'>
                                      <div class="message">{{ validation.firstError('password') }}</div>
                                </div>
                                <div class="form-group">
                                    <label>Repeat Password</label>
                                    <input class="form-control" placeholder="Enter Your Password Again" type="password" v-model='repeat'>
                                      <div class="message">{{ validation.firstError('repeat') }}</div>
                                </div>

                                <button class="btn btn-primary">Send</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
      </section>
  </div>
</template>

<script>
import {resetPassword, getHeader} from '../../config'
import toastr from 'toastr'
var Vue = require('vue');
var SimpleVueValidation = require('simple-vue-validator');
var Validator = SimpleVueValidation.Validator;

Vue.use(SimpleVueValidation);

function getParameterByName(name, url) { if (!url) { url = window.location.href; } name = name.replace(/[\[\]]/g, "\\$&"); var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url); if (!results) return null; if (!results[2]) return ''; return decodeURIComponent(results[2].replace(/\+/g, " ")); }
const getToken = getParameterByName('token')
export default {

    data(){
        return{
            email: '',
            password: '',
            repeat: '',
            submitted: false
        }
    },
    validators: {
        email: function(value) {
          return Validator.value(value).required().email();
      },
      password: function (value) {
        return Validator.value(value).required().minLength(6);
      },
      'repeat, password': function (repeat, password) {
        if (this.submitted || this.validation.isTouched('repeat')) {
          return Validator.value(repeat).required().match(password);
        }
    },
    },
    methods:{
        handleResetFormSubmit (){
            const postData = {
                email: this.email,
                password: this.password,
                password_confirmation: this.repeat,
                token: getToken

            }
            this.$http.post(resetPassword, postData)

            .then(response => {
                if (response.status === 200){
                    toastr.success('New password has been added !')

                    setTimeout(
                        this.$router.push({name: 'home'})
                    ,3000);
                    // this.$http.get(apiDomain, {headers: getHeader()})
                    // this.$router.push({name: 'dashboard'})
                    // .then(response => {
                    //     window.localStorage.setItem('authUser', JSON.stringify(authUser))
                    //     this.$router.push({name: 'dashboard'})
                    // })
                }
            }, (response) => {
              toastr.warning('Something went wrong !')
        });
    }
}
}
</script>

<style lang="scss">

</style>
