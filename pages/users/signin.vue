<template>  
<div>

  <div class="uk-child-width-1-2@m uk-grid">
      <div>
          <div class="uk-card uk-card-default uk-card-small uk-card-body">
            <img src="https://tinyurl.com/qpzez7a" height="500" width="500" class="uk-align-center" alt="">
          </div>
      </div>
      <div>
          <div class="uk-card uk-card-default uk-card-large uk-card-body">

              <form @submit.stop.prevent="handleSubmit">
                  <fieldset class="uk-fieldset">

<!--                       <div class="uk-margin">
                        <a href="https://sundlaug.herokuapp.com/connect/google"><button style="background: #007ee5; color: white;" class="uk-button uk-width-1-1">Nýskrá með <span class="timi" uk-icon="icon: google"></span>oogle</button></a>
                      </div> -->

                      <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">E-mail</label>
                        <input class="uk-input" v-model="email" type="email" placeholder="email@email.com">
                      </div>

                      <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">Lykilorð</label>
                        <input class="uk-input" v-model="password" type="password">
                      </div>

                      <div class="uk-margin">
                        <button style="background: #4DB6AC; color: white;" class="uk-button uk-width-1-1" :disabled="loading" type="submit">Innskrá</button>
                      </div>

                  </fieldset>
              </form>

<!--                    <div class="uk-margin">
                   <a href="https://sundlaug.herokuapp.com/connect/google/callback"><button style="background: #007ee5; color: white;" class="uk-button uk-width-1-1">Innskrá með <span class="timi" uk-icon="icon: google"></span>oogle</button></a>
                  </div>

                      <div class="uk-margin">
                        <a href="http://localhost:1337/connect/google/callback"><button style="background: #007ee5; color: white;" class="uk-button uk-width-1-1">Nýskrá með <span class="timi" uk-icon="icon: google"></span>oogle</button></a>
                      </div> -->

          </div>
      </div>
  </div>

</div>  
</template>

<script>
import axios from 'axios'  
import { mapMutations } from 'vuex'  
import strapi from '~/utils/Strapi'
import { NotificationProgrammatic as Notification } from 'buefy'

export default {
 name: "signin", 
  
  data() {
    return {
      email: '',
      password: '',
      jwt: "",
      loading: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true
        const response = await strapi.login(
          this.email,
          this.password
        )
        this.loading = false
        this.setUser(response.user)
        this.$router.push("/posts/lenda")
        Notification.open({
        message: 'Velkominn 😎',
        type: 'is-success',
        position: 'is-top',
        })
      } catch (err) {
        this.loading = false
        alert(err.message || 'An error occurred.')
        Notification.open({
        message: 'Vitlaust E-mail eða lykilorð!',
        type: 'is-danger',
        position: 'is-top',
        })
      }
    },
    ...mapMutations({
      setUser: 'auth/setUser'
    })
  }
}
</script>