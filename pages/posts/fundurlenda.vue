<template>

<div class="fundurlenda">

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
                <time><span class="date">{{ post.created_at | moment('timezone', 'Atlantic/Reykjavik', 'ddd ll') }}</span>
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
                <span class="uk-text-success" v-if="post.hvad == 'vinna'">Vinna</span>
                <span class="uk-text-success" v-else-if="post.hvad == 'vinnufelagi'">Vinnufélagi</span>
                <span class="uk-text-success" v-else-if="post.hvad == 'vaktir'">Vaktir</span>
                <span class="uk-text-success" v-else-if="post.hvad == 'adstada'">Aðstaða</span>
                <span class="uk-text-success" v-else-if="post.hvad == 'morall'">Mórall</span>
                <span class="uk-text-success" v-else-if="post.hvad == 'skolatengt'">Skólatengt</span>
              </span><!-- .uk-align-right -->

        </div><!-- .slide-left -->

        <div class="" k-grid uk-scrollspy="cls: uk-animation-fade; target: span; delay: 500; repeat: true">
              
          <span>Næsti Fundur</span>

          <span class="uk-align-right">
                <span class="uk-text-warning">
                  <time><span class="date">{{ post.created_at | moment('timezone', 'Atlantic/Reykjavik', 'ddd ll') }}</span></time>
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
    },
    starf() {
      return this.$store.getters['auth/starf']
    },
  },
  
  data() {
    return {
      // Initialize an empty restaurants variabkle
      posts: [],

    }
  },
  // wp reminders import
   async created() {
    axios.get(`http://localhost:1337/fundartals?_limit=1&_sort=created_at:desc`)
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