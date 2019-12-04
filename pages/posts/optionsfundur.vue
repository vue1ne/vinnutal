<template>

<div class="optionsfundur">

<ul class="uk-breadcrumb">
    <li><nuxt-link to="/posts/lenda">Heim</nuxt-link></li>
    <li><span>+NýttFundaratriði</span></li>
</ul><!-- .uk-breadcrumb -->

<h1 align="center">Fundartal / <span>+Nýtt<span class="maling">Fundaratriði</span></span></h1>
<v-container>
    <v-row justify="center">
      <v-col lg="12">  

<form @submit="formSubmit">
    <fieldset class="uk-fieldset">

        <v-text-field
        v-model="atridi"
        :counter="10"
        label="Fundaratriði"
        required
        ></v-text-field>

        <p> Hvað
        <select class="uk-select" v-model="hvad">
         <option value="vinna">Vinna</option>
         <option value="vinnufelagi">Vinnufélagi</option>
         <option value="vaktir">Vaktir</option>
         <option value="adstada">Aðstaða</option>
         <option value="morall">Mórall</option>
         <option value="skolatengt">Skólatengt</option>
         <option value="skolasund">Skólasund</option>
         <option value="sundkennarar">Sundkennaarar</option>
         <option value="sundafingar">Sundæfingar</option>
         <option value="sundgestir">Sundgestir</option>
         <option value="skemmdir">Skemmdir</option>
         <option value="annad">Annað</option>
        </select></p>

        <!-- <v-text-field
        v-model="lysing"
        :counter="100"
        label="Lýsing"
        required
        ></v-text-field> -->

        <v-textarea
          v-model="lysing"
          name="input-7-1"
          label="Lýsing"
          hint="Lýsing á Fundaratriði"
        ></v-textarea>

        <b-field label="Næsti Fundur">
            <b-datetimepicker
                v-model="nasti"
                placeholder="Næsti..."
                icon="calendar-today"
                editable>
            </b-datetimepicker>
        </b-field>
        <br>
        
    </fieldset>
    
    <button class="uk-button uk-button-secondary uk-width-1-1 right">vista</button>
    <pre>
    {{output}}
    </pre>
</form>

</v-col>
</v-row>
</v-container>

</div><!-- .optionsfundur -->

</template>

<script>
import axios from 'axios'
import strapi from '~/utils/Strapi'
import { mapMutations } from 'vuex'
import { NotificationProgrammatic as Notification } from 'buefy'

export default {
name: "valmoguleikar",

components: {
},

data () {

    return {
     posts: [],
     atridi: null,
     hvad: null,
     nasti: null,
     lysing: null,
     output: ''

     // utkoma calculated

    }
  },

/*    computed: {
    total: function() {
      let calculatedTotal = this.form.sale_quantity * this.form.sale_rate;
      this.sale_total = calculatedTotal;
      
      return calculatedTotal;
    },
 */
   // Pushes posts to the server when called.
    methods: {
            async formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                //axios.post('http://localhost:1337/klormalingars', {
                axios.post('https://vinnutal.herokuapp.com/fundatals', {
                    atridi: this.atridi,
                    hvad: this.hvad,
                    nasti: this.nasti,
                    lysing: this.lysing,
                })
                .then(function (response) {
                    currentObj.output = response.data;

                    Notification.open({
                    message: 'Fundaratriði Vistað! <br> Eigðu Góðan dag😉',
                    type: 'is-success',
                    position: 'is-top',
                    })

                })
                .catch(function (error) {
                    currentObj.output = error;

                    Notification.open({
                    message: 'Þú hefur ekki leyfi til að Posta þessu Fundaratriði!',
                    type: 'is-danger',
                    position: 'is-top',
                    })

                });
            },
             ...mapMutations({
            setUser: 'auth/setUser'
            })
        }
}
</script>