<template>

<div class="valmoguleikar">

<ul class="uk-breadcrumb">
    <li><nuxt-link to="/posts/lenda">Heim</nuxt-link></li>
    <li><span>+NýMæling</span></li>
</ul><!-- .uk-breadcrumb -->

<h1 align="center">Klórmæling / <span>+Ný<span class="maling">Mæling</span></span></h1>
<form @submit="formSubmit">
    <fieldset class="uk-fieldset">
        
        <!-- hitastig -->
        <h1 class="hitastig" align="center">°C /Hitastig</h1>

        <div class="uk-grid-collapse uk-child-width-1-3 uk-text-center" uk-grid>
        <div class="hiti">
            <p>Laug °C/<span class="laug">29.7</span> <br>
            <input class="uk-input  uk-form-width-small" type="text" placeholder="°C" v-model="hitisundlaug"></p>
        </div>

        <div class="hiti">
            <p>Kaldur °C/<span class="kaldur">39</span> <br>
            <input class="uk-input uk-form-width-small" type="text" placeholder="°C" v-model="hitikaldurpottur"></p>
        </div>

        <div class="hiti">
            <p>Heitur °C/<span class="heitur">40</span> <br>
            <input class="uk-input uk-form-width-small" type="text" placeholder="°C" v-model="hitiheiturpottur"></p>
        </div>

        </div><!-- .uk-grid-divider uk-child-width-expand@s -->

        <!-- mæling -->
         <h1 class="stada" align="center">Klórstöð</h1>

        <div class="uk-grid-collapse uk-child-width-1-3 uk-text-center" uk-grid>
        <div class="hiti">
            <p>Sundlaug <br>
            <input class="uk-input uk-form-width-small" type="text" placeholder="1.45" v-model="malingsundlaug"></p>
        </div>

        <div class="hiti">
            <p>Kaldur Pottur <br>
            <input class="uk-input uk-form-width-small" type="text" placeholder="2.40" v-model="malingkaldurpottur"></p>
        </div>

        <div class="hiti">
            <p>Heitur pottur <br>
            <input class="uk-input uk-form-width-small" type="text" placeholder="2.50" v-model="malingheiturpottur"></p>
        </div>

        </div><!-- .uk-grid-divider uk-child-width-expand@s -->

        <!-- test -->
         <h1 class="test" align="center">Mæling</h1>

        <div class="uk-grid-collapse uk-child-width-1-3 uk-text-center" uk-grid>
        <div class="hiti">
            <p>Sundlaug <br>
            <input class="uk-input uk-form-width-small" type="text" placeholder="1.45" v-model="testsundlaug"></p>
        </div>

        <div class="hiti">
            <p>Kaldur Pottur <br>
            <input class="uk-input uk-form-width-small" type="text" placeholder="2.40" v-model="testkaldurpottur"></p>
        </div>

        <div class="hiti">
            <p>Heitur pottur <br>
            <input class="uk-input uk-form-width-small" type="text" placeholder="2.50" v-model="testheiturpottur"></p>
        </div>

        </div><!-- .uk-grid-divider uk-child-width-expand@s -->

         <!-- leiðrétting -->
         <h1 class="leid" align="center">Leiðrétting</h1>

        <div class="uk-grid-collapse uk-child-width-1-3 uk-text-center" uk-grid>
        <div class="hiti">
            <p><small class="laug"><span>Útkoma:</span> Laug</small> <br>
            <input :value="testsundlaug-malingsundlaug" class="sundlaug uk-input uk-form-width-small"> 
            <p>Sundlaug <br>
            <input class="uk-input uk-form-width-small" type="text" placeholder="+ / -" v-model="utkomasundlaug"></p>
        </div>

        <div class="hiti">
            <p><small class="kaldur"><span>Útkoma:</span> Kaldur</small> <br>
            <input :value="testkaldurpottur-malingkaldurpottur" class="kaldur uk-input uk-form-width-small">
            <p>Kaldur Pottur <br>            
            <input class="uk-input uk-form-width-small" type="text" placeholder="+ / -" v-model="utkomakaldurpottur"></p>
        </div>

        <div class="hiti">
            <p><small class="heitur"><span>Útkoma:</span> Heitur</small> <br>
            <input :value="testheiturpottur-malingheiturpottur" placeholder="+ / -" class="heitur uk-input uk-form-width-small">
            <p>Heitur pottur <br>
            <input class="uk-input uk-form-width-small" type="text" placeholder="+ / -" v-model="utkomaheiturpottur"></p>
        </div>

        </div><!-- .uk-grid-divider uk-child-width-expand@s -->

         <div class="minnismidi">
            <p> Athugasemd
            <textarea class="uk-textarea" rows="5" placeholder="Athugasemd" v-model="minnismidi"></textarea></p>
        </div>

        <div class="klormagn">
          <p class="klormagn">
          <input class="uk-input uk-form-width-large" type="text" placeholder="Magn Klórbyrgða" v-model="klormagn"></p>  
        </div>

          <div class="starfsmadur">
            <p class="starfsmadur"> Starfsmaður á vakt? 
            <select class="uk-select" v-model="starfsmadur">
                <option value="odinn">Óðinn</option>
                <option value="robert">Róbert</option>
                <option value="oli">Óli</option>
                <option value="torvald">Þorvaldur</option>
                <option value="steina">Steina</option>
                <option value="halla">Halla</option>
                <option value="ragna">Ragna</option>
            </select>
            </p>
        </div>

<!--         <div class="uk-grid-collapse uk-child-width-1-2 uk-text-center" uk-grid>
        <ul class="uk-list uk-list-striped"> 
        <li><label><input class="uk-radio" type="radio" name="radio1" v-on:change="tokamotiklor"> Tók á móti klór</label></li>
        <br>
        <br>
        <li><label><input class="uk-radio" type="radio" name="radio" v-on:change="threifklornema"> Þreif Klórnema</label></li>
        </ul>
        </div>
        <br> -->


<!--   <input v-model="malingsundlaug">
  <input v-model="testsundlaug">
  <input :value="malingsundlaug-testsundlaug" > -->
  
    </fieldset>
    
    <button class="uk-button uk-button-secondary uk-width-1-1 right">vista</button>
    <pre>
    {{output}}
    </pre>
</form>

<!-- <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Vue Axios Post - ItSolutionStuff.com</div>
    
                    <div class="card-body">
                        <form @submit="formSubmit">
                        <strong>Hiti Sundlaug</strong>
                        <input type="text" class="form-control" v-model="hitisundlaug">
                        <strong>Hiti kaldur pottur:</strong>
                        <textarea class="form-control" v-model="hitikaldurpottur"></textarea>
    
                        <button class="btn btn-success">Submit</button>
                        </form>
                        <strong>Output:</strong>
                        <pre>
                        {{output}}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

</div><!-- .valmoguleikar -->

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
     hitisundlaug: null,
     hitikaldurpottur: null,
     hitiheiturpottur: null,
     malingsundlaug: null,
     malingkaldurpottur: null,
     malingheiturpottur: null,
     testsundlaug: null,
     testkaldurpottur: null,
     testheiturpottur: null,
     utkomasundlaug: null,
     utkomakaldurpottur: null,
     utkomaheiturpottur: null,
     minnismidi: null,
     klormagn: null,
     tokamotiklor: null,
     threifklornema: null,
     mynd: "",
     id: "",
     starfsmadur: "",
     output: ''

     // utkoma calculated

    }
  },
 
 computed: {
  total: function() {
      let calculatedTotal = this.malingsundlaug - this.testsundlaug;
      this.utkomasundlaug_total = calculatedTotal
      return calculatedTotal;
    },
    total: function() {
      let calculatedTotal = this.malingkaldurpottur - this.testkaldurpottur;
      this.utkomakaldurpottur_total = calculatedTotal
      
      return calculatedTotal;
    },
    total: function() {
      let calculatedTotal = this.malingheiturpottur - this.testheiturpottur;
      this.utkomaheiturpottur_total = calculatedTotal
      
      return calculatedTotal;
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
                axios.post('https://sundlaug.herokuapp.com/klormalingars', {
                    hitisundlaug: this.hitisundlaug,
                    hitikaldurpottur: this.hitikaldurpottur,
                    hitiheiturpottur: this.hitiheiturpottur,
                    malingsundlaug: this.malingsundlaug,
                    malingkaldurpottur: this.malingkaldurpottur,
                    malingheiturpottur: this.malingheiturpottur,
                    testsundlaug: this.testsundlaug,
                    testkaldurpottur: this.testkaldurpottur,
                    testheiturpottur: this.testheiturpottur,
                    utkomasundlaug: this.utkomasundlaug,
                    utkomakaldurpottur: this.utkomakaldurpottur,
                    utkomaheiturpottur: this.utkomaheiturpottur,
                    minnismidi: this.minnismidi,
                    klormagn: this.klormagn,
                    tokamotiklor: this.tokamotiklor,
                    threifklornema: this.threifklornema,
                    mynd: this.mynd,
                    id: this.id,
                    starfsmadur: this.starfsmadur,
                })
                .then(function (response) {
                    currentObj.output = response.data;

                    Notification.open({
                    message: 'Klórmæling Vistuð! <br> Eigðu Góðan dag😉',
                    type: 'is-success',
                    position: 'is-top',
                    })

                })
                .catch(function (error) {
                    currentObj.output = error;

                    Notification.open({
                    message: 'Þú hefur ekki leyfi til að Posta þessari Klórmælingu!',
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