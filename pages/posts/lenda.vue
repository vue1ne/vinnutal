<template>

<div class="lenda">

<div class="uk-card uk-card-default" v-for="post in posts">

        <div class="uk-card-header">
        <div>

          <article class="uk-comment">
          <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
              <div class="uk-width-auto">
                <img class="uk-comment-avatar" v-bind:src="avatar" width="80" height="80" alt="">
              </div>
              <div class="uk-width-expand">
                  <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#"><span class="user" uk-icon="icon: user"></span>{{ username }}</a></h4>
                  <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                      <li><a href="#"><span class="user" uk-icon="icon: location"></span>Vinnutal</a></li>
                  </ul>
              </div>
          </header>

          <div class="uk-comment-body">
            <!-- <p>Velkominn <span>{{ username }} <br><br> -->


             <nuxt-link to="/posts/optionsfundur"><button class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom">
             <span uk-icon="icon: plus"></span><span class="ny">Nýtt</span> Fundaratriði
             </button></nuxt-link>
             <nuxt-link to="/posts/fundartal"><button class="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"><span>Fundar</span>atriði</button></nuxt-link>
              </span></p>
          </div>
          </article>

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
                <time>
                <span class="date">{{ post.dagsetning | moment('timezone', 'Atlantic/Reykjavik', 'ddd ll') }}</span>
                                  <span class="timi" uk-icon="icon: clock"></span><span class="time">{{ post.dagsetning | moment("H:mm") }}</span>
                </time></p>
            </div>

        </div><!-- .uk-grid-small -->

    </div><!-- .uk-card-header -->

    <div class="uk-card-body">

    <div class="uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-2@s uk-grid-match uk-grid-item-match" uk-grid>

    <div>

       <div class="" k-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: span; delay: 300; repeat: true">
              
              <span>Dagvinna</span>

              <span class="uk-align-right">
                <span class="uk-text-danger">{{ post.dagvinna }}</span>
              </span><!-- .uk-align-right -->
                            
        </div><!-- .slide-right -->

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

        <span>Samtals:</span>

        <div v-if="post.vakt == 'fyrrivakt'" class="" k-grid uk-scrollspy="cls: uk-animation-fade; target: span; delay: 500; repeat: true">              
        <span>Fyrri Vakt</span>
        <span class="uk-align-right">
        <span class="uk-text-success">{{ fyrrivakt }}</span>
        </span><!-- .uk-align-right -->
        </div><!-- .slide-right -->

        <div v-if="post.vakt == 'seinnivakt'" class="" k-grid uk-scrollspy="cls: uk-animation-fade; target: span; delay: 500; repeat: true">              
        <span>Seinni Vakt</span>
        <span class="uk-align-right">
        <span class="uk-text-success">{{ seinni }}</span>
        </span><!-- .uk-align-right -->
        </div><!-- .slide-right -->

        <div v-if="post.vakt == 'helgarvakt'" class="" k-grid uk-scrollspy="cls: uk-animation-fade; target: span; delay: 500; repeat: true">              
        <span>Tímakaup</span>
        <span class="uk-align-right">
        <span class="uk-text-success">{{ helgi }}</span>
        </span><!-- .uk-align-right -->
        </div><!-- .slide-right -->

        <div v-if="post.vakt == 'helgarvakt'" class="" k-grid uk-scrollspy="cls: uk-animation-fade; target: span; delay: 500; repeat: true">              
        <span>Helgarvakt</span>
        <span class="uk-align-right">
        <span class="uk-text-success">{{ helgisamtals }}</span>
        </span><!-- .uk-align-right -->
        </div><!-- .slide-right -->

        <div v-if="post.vakt == 'varmalhlid'" class="" k-grid uk-scrollspy="cls: uk-animation-fade; target: span; delay: 500; repeat: true">              
        <span>Varmahlíð</span>
        <span class="uk-align-right">
        <span class="uk-text-success">{{ varmahlid }}</span>
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

</div><!-- .uk-card .uk-card-default -->

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
    fyrrivakt: function() {
      let calculatedTotal = this.trjatiu + this.yfirvinna;
      this.alls_total = calculatedTotal
      return calculatedTotal;
    },
    seinnivakt: function() {
      let calculatedTotal = this.malingkaldurpottur - this.testkaldurpottur;
      this.samtals_total = calculatedTotal
      return calculatedTotal;
    },
    helgarvakt: function() {
      let calculatedTotal = this.yfirvinna + this.trjatiu * this.helgarvinna;
      this.samtals_total = calculatedTotal
      return calculatedTotal;
    },
    helgi() {
      return this.dagvinna + this.fimtiu;
    },
    helgisamtals() {
      return this.dagfimtiu * 7;
    },
    fyrri() {
      return parseInt(this.yfirvinna) + parseInt(this.trjatiu);
    },
    seinni() {
      return parseInt(this.yfirvinna) + parseInt(this.trjatiu);
    },
    varmahlid() {
      return parseInt(this.yfirvinna) + parseInt(this.trjatiu);
    }
  },
  
  data() {
    return {
      // Initialize an empty restaurants variabkle
      posts: [],
      // reiknað saman
      dagfimtiu: 3035,  

      // actual laun
      dagvinna: 1838,
      yfirvinna:3676,
      helgarvinna: 0,
      trjatiu: 725,
      fimtiu: 1197


    }
  },
  // wp reminders import
   async created() {
    //axios.get(`http://localhost:1337/vinnutals?_limit=1&_sort=dagsetning:desc`)
    axios.get(`https://vinnutal.herokuapp.com/fundatals?_limit=1&_sort=created_at:desc`)
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