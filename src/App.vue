<template>
  <div class="wrapper" id="home-wrapper">
      <section class="smallWrapper">

        <div v-if="show" class="login">
          <img class="login__background" src='./assets/img/background.jpg'/>
          <div class="login__holder">
            <h1 class="logo__white animated fadeIn"><span>Photo</span>gram</h1>
            <div class="form animated lightSpeedIn">
                <form v-on:submit.prevent="handleLoginFormSubmit()">
                    <div class="form__input">
                        <icon class="icon" name="envelope-o"></icon>
                        <input class="" placeholder="Enter your email adress" type="text" v-model='email'>
                    </div>

                    <div class="form__input">
                        <icon class="icon" name="lock"></icon>
                        <input class="" placeholder="Enter your password" type="password" v-model='password'>
                    </div>
                    <a class="forgotPassword" href='/forgot'>Forgot password?</a>
                    <button class="btn">Log in</button>
                </form>
            </div>
              <div class="switchLogin animated lightSpeedIn">Don't have account? <span><a @click='show = !show'>Sign up</a></span></div>
              </div>
          </div>
              <div v-else class="register">
                      <h1 class="logo animated fadeIn"><span>Photo</span>gram</h1>
                      <div class="form animated lightSpeedIn">
                          <form v-on:submit.prevent="handleRegisterFormSubmit()">
                              <div class="form__input">
                                  <icon class="icon" name="envelope-o"></icon>
                                  <input class="" placeholder="Enter your email adress" type="text" v-model='registeremail'>
                              </div>

                              <div class="form__input">
                                  <icon class="icon" name="lock"></icon>
                                  <input class="" placeholder="Enter your password" type="password" v-model='registerpassword'>
                              </div>

                              <div class="form__input">
                                  <icon class="icon" name="lock"></icon>
                                  <input class="" placeholder="Enter your password" type="password" v-model='registerpassword'>
                              </div>

                              <div class="form__input">
                                  <icon class="icon" name="user-o"></icon>
                                  <input class="" placeholder="Username" type="text" v-model='name'>
                              </div>
                              <div class="terms">I accept to the <span>Terms & Privacy Policy</span></div>

                              <button class="btn">Sign Up</button>
                          </form>
                      </div>
                        <div class="switchLogin animated lightSpeedIn">Already have Account? <span><a @click='show = !show'>Log in</a></span></div>
                  </div>
                </section>
              </div>
</template>

<script>
import {apiDomain, getHeader, userUrl, registerUrl} from './config'
import toastr from 'toastr'

export default {
    data(){
        return{
            email: '',
            password:'',
            username: '',
            name: '',
            registeremail: '',
            registerpassword: '',
            show: true
        }
    },
    methods:{
        handleLoginFormSubmit (){
            const postData = {
                email: this.email,
                password: this.password
            }
            const authUser = {}
            this.$http.post(apiDomain, postData)
            .then(response => {
                if (response.status === 200){
                    authUser.access_token = response.body.token
                    window.localStorage.setItem('authUser', JSON.stringify(authUser))
                    this.$router.push({name: 'dashboard'})
                    // this.$http.get(apiDomain, {headers: getHeader()})
                    // this.$router.push({name: 'dashboard'})
                    // .then(response => {
                    //     window.localStorage.setItem('authUser', JSON.stringify(authUser))
                    //     this.$router.push({name: 'dashboard'})
                    // })
                }
            }, (response) => {
              toastr.warning('Username or password is incorrect, please try again !')
        });
    },
    handleRegisterFormSubmit (){
        const registerData = {
            email: this.registeremail,
            username: this.username,
            name: this.name,
            password: this.registerpassword
        }
        this.$http.post(registerUrl, registerData)
        .then(response => {
            if (response.status >= 200){
                console.log(response)
            }
        }, (response) => {
            if (response.error != ''){
                toastr.error('Duplicated email, please try something else !')
            }
    });
}
}
}
</script>

<style lang="scss" scoped>
  @import "/assets/scss/default.scss"
</style>
