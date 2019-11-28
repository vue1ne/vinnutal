<template>

<div class="lenda">

<div class="uk-card uk-card-default uk-width-1-1@m" v-for="post in posts">
        
        <div class="uk-card-header">
        <div class="uk-grid-large uk-flex-middle" uk-grid>

          <article class="uk-comment">
          <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
              <div class="uk-width-auto">
                <img class="uk-comment-avatar" v-bind:src="avatar" width="80" height="80" alt="">
              </div>
              <div class="uk-width-expand">
                  <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#"><span class="user" uk-icon="icon: user"></span>{{ username }}</a></h4>
                  <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                      <li><a href="#" :src="starf"></a></li>
                      <li><a href="#"><span class="user" uk-icon="icon: location"></span>Sundlaug Sauðárkróks</a></li>
                  </ul>
              </div>
          </header>

          <div class="uk-comment-body">
            <!-- <p>Velkominn <span>{{ username }} <br><br> -->

             <nuxt-link to="/posts"><button class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom">
             <span uk-icon="icon: plus"></span><span class="ny">Nýtt</span> Tímatal
             </button></nuxt-link>
             <nuxt-link to="/posts/optionsfundur"><button class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom">
             <span uk-icon="icon: plus"></span><span class="ny">Nýtt</span> Fundaratriði
             </button></nuxt-link>
             <nuxt-link to="/posts/vinnutal"><button class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"><span>Tíma</span>tal</button></nuxt-link>
             <nuxt-link to="/posts/fundartal"><button class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"><span>Fundar</span>atriði</button></nuxt-link>
              </span></p>
          </div>
          </article>
         <caption class="date">
           
         </caption>

        </div>
    </div>

<!-- tímatal //////////////////////////////////////////////// -->
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>

      <h3>
        <span class="">Tímatal</span>

    <div class="uk-card-header">

        <div class="uk-grid-small uk-flex-middle" uk-grid>
      
            <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom" v-if="post.vakt == 'fyrrivakt'">Fyrri vakt</h3>
                <h3 class="uk-card-title uk-margin-remove-bottom" v-else-if="post.vakt == 'seinnivakt'">Seinni vakt</h3>
                <h3 class="uk-card-title uk-margin-remove-bottom" v-else-if="post.vakt == 'helgarvakt'">Helgarvakt</h3>
                <h3 class="uk-card-title uk-margin-remove-bottom" v-else-if="post.vakt == 'varmahlid'">Varmahlíð</h3>

                <p class="uk-text-meta uk-margin-remove-top">
                <time><span class="date">{{ post.created_at | moment('timezone', 'Atlantic/Reykjavik', 'ddd ll') }}</span>
                </time></p>
            </div>

        </div><!-- .uk-grid-small -->

    </div><!-- .uk-card-header -->

    <div class="uk-card-body">

    <div class="uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-2@s uk-grid-match uk-grid-item-match" uk-grid>

    <div>

        <div class="" k-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: span; delay: 300; repeat: true">
              
              <span>Yfirvinna</span>

              <span class="uk-align-right">
                <span class="uk-text-danger">{{ post.yfirvinna }}</span>
              </span><!-- .uk-align-right -->
                            
        </div><!-- .slide-right -->

        <div class="" k-grid uk-scrollspy="cls: uk-animation-fade; target: span; delay: 500; repeat: true">
              
              <span>Helgarvinna</span>

              <span class="uk-align-right">
                <span class="uk-text-success">{{ post.helgarvinna }}</span>
              </span><!-- .uk-align-right -->

        </div><!-- .slide-left -->

              <div class="" k-grid uk-scrollspy="cls: uk-animation-fade; target: span; delay: 500; repeat: true">
              
              <span>33%</span>

              <span class="uk-align-right">
                <span class="uk-text-warning">{{ post.trjatiu }}</span>
              </span><!-- .uk-align-right -->
                            
        </div><!-- .slide-left -->

        <div class="" k-grid uk-scrollspy="cls: uk-animation-slide-top; target: span; delay: 300; repeat: true">
              
              <span>55%</span>

              <span class="uk-align-right">
                <span class="uk-text-danger">{{ post.fimtiu }}</span>
              </span><!-- .uk-align-right -->
                            
        </div><!-- .slide-right -->

        <div class="" k-grid uk-scrollspy="cls: uk-animation-fade; target: span; delay: 500; repeat: true">
              
              <span>77%</span>

              <span class="uk-align-right">
                <span class="uk-text-danger">{{ post.sjotiu }}</span>
              </span><!-- .uk-align-right -->
                            
        </div><!-- .slide-right -->

        <div class="" k-grid uk-scrollspy="cls: uk-animation-fade; target: span; delay: 500; repeat: true">
              
          <span>Samtals</span>

          <span class="uk-align-right">
          <input :value="yfirvinna+helgarvinna" class="uk-input uk-form-width-small">  

          <span class="uk-text-success">{{ result }}</span>
          </span><!-- .uk-align-right -->
                            
        </div><!-- .slide-right -->
        
    </div><!-- div -->

    
    </div><!-- .uk-card-body -->

</div><!-- .uk-card -->

            </h3>

        </div><!-- .uk-grid-small -->
    </div><!-- .uk-card-header -->
    <div class="uk-card-body">

     <ul uk-accordion>
      <li>
          <a class="uk-accordion-title" href="#">Athugasemd</a>

          <div class="uk-accordion-content">
          <p v-html="post.athugasemd"></p>
          </div><!-- .uk-accordion-content -->

      </li>
    </ul>

    </div><!-- .uk-card-body -->

<fundurlenda />

</div>

</div><!-- .lenda -->

</template>

<script>  
import axios from 'axios'
import strapi from '~/utils/Strapi'
import { mapMutations } from 'vuex'
import fundurlenda from './fundurlenda'

export default {
  
  components: {
    fundurlenda,
  },

  computed: {
    // Set your username thanks to your getter
    username() {
      return this.$store.getters['auth/username']
    },
    avatar() {
      return this.$store.getters['auth/avatar']
    },
    //total calculation
    total: function() {
      let calculatedTotal = this.yfirvinna + this.helgarvinna;
      this.alls_total = calculatedTotal
      return calculatedTotal;
    },
    total: function() {
      let calculatedTotal = this.malingkaldurpottur - this.testkaldurpottur;
      this.samtals_total = calculatedTotal
      return calculatedTotal;
    },
    total: function() {
      let calculatedTotal = this.malingheiturpottur - this.testheiturpottur;
      this.utkomaheiturpottur_total = calculatedTotal
      return calculatedTotal;
    },
    result() {
      return parseInt(this.yfirvinna) + parseInt(this.helgarvinna) * parseInt(this.alls_total);
    }
  },
  
  data() {
    return {
      // Initialize an empty restaurants variabkle
      posts: [],
      yfirvinna: 3676,
      helgarvinna: 4873,

    }
  },
  // wp reminders import
   async created() {
    axios.get(`http://localhost:1337/vinnutals?_limit=1&_sort=dagsetning:desc`)
    //axios.get(`https://sundlaug.herokuapp.com/klormalingars?_limit=1&_sort=created_at:desc`)
    .then(response => {
    this.posts = response.data
    })
    .catch(e => {
    })
  },
   ...mapMutations({
      setUser: 'auth/setUser'
    })
}
</script>