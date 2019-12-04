<template>

<div class="fundurlenda">

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

<span v-for="post in posts">
<!-- fundaratridi //////////////////////////////////////// -->
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>

      <h3>
        <span class="">Fundaratriði</span>

    <div class="uk-card-header">

        <div class="uk-grid-small uk-flex-middle" uk-grid>
      
            <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom">{{ post.atridi }}</h3>
                <p class="uk-text-meta uk-margin-remove-top">
                <time>
                <span class="date">{{ post.created_at | moment('timezone', 'Atlantic/Reykjavik', 'ddd ll') }}</span>
                <span class="timi" uk-icon="icon: clock"></span><span class="time">{{ post.created_at | moment("H:mm") }}</span>
                </time></p>

            </div>

        </div><!-- .uk-grid-small -->

    </div><!-- .uk-card-header -->

    <div class="uk-card-body">

    <div class="uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-2@s uk-grid-match uk-grid-item-match" uk-grid>

    <div>

        <div class="" k-grid uk-scrollspy="cls: uk-animation-fade; target: span; delay: 500; repeat: true">
              
              <span>Hvað</span>

              <span class="uk-align-right">
                <span class="vinna" v-if="post.hvad == 'vinna'">Vinna</span>
                <span class="vinna" v-else-if="post.hvad == 'vinnufelagi'">Vinnufélagi</span>
                <span class="vinna" v-else-if="post.hvad == 'vaktir'">Vaktir</span>
                <span class="vinna" v-else-if="post.hvad == 'adstada'">Aðstaða</span>
                <span class="vinna" v-else-if="post.hvad == 'morall'">Mórall</span>
                <span class="skoli" v-else-if="post.hvad == 'skolatengt'">Skólatengt</span>
                <span class="skoli" v-else-if="post.hvad == 'skolasund'">Skólasund</span>
                <span class="skoli" v-else-if="post.hvad == 'sundkennarar'">Sundkennarar</span>
                <span class="afingar" v-else-if="post.hvad == 'sundafingar'">Sundæfingar</span>
                <span class="sundlaug" v-else-if="post.hvad == 'sundgestir'">Sundgestir</span>
                <span class="sundlaug" v-else-if="post.hvad == 'skemmdir'">Skemmdir</span>
                <span class="sundlaug" v-else-if="post.hvad == 'annad'">Annað</span>
              </span><!-- .uk-align-right -->

        </div><!-- .slide-left -->

        <div class="" k-grid uk-scrollspy="cls: uk-animation-fade; target: span; delay: 500; repeat: true">
              
          <span>Næsti Fundur</span>

          <span class="uk-align-right">
                <span class="uk-text-warning">
                  <time><span class="date">{{ post.nasti | moment('DD') }}</span>    
                  <span class="month">{{ post.nasti | moment('MMM') }}</span> 
                  <span class="dag">{{ post.nasti | moment('timezone', 'Atlantic/Reykjavik', 'dddd') }}</span>
                  <span class="time">{{ post.nasti | moment("H:mm") }}</span>
                  </time>
                </span>
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
          <a class="uk-accordion-title" href="#">Lýsing</a>

          <div class="uk-accordion-content">
          <p v-html="post.lysing"></p>
          </div><!-- .uk-accordion-content -->

      </li>
    </ul>

    </div><!-- .uk-card-body -->
</span>

</div><!-- .fundurlenda -->

</template>

<script>  
import axios from 'axios'
import strapi from '~/utils/Strapi'
import { mapMutations } from 'vuex'

export default {
 name: "fundurlenda",

  computed: {
    // Set your username thanks to your getter
    username() {
      return this.$store.getters['auth/username']
    },
    avatar() {
      return this.$store.getters['auth/avatar']
    }
  },
  
  data() {
    return {
      // Initialize an empty restaurants variabkle
      posts: [],

    }
  },
  // wp reminders import
   async created() {
    //axios.get(`http://localhost:1337/fundartals?_limit=1&_sort=created_at:desc`)
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