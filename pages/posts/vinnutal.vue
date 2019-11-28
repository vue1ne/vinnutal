<template> 

<div class="vinnutal">



</div><!-- .vinnutal -->

</template>

<script>  
import axios from 'axios'
import strapi from '~/utils/Strapi'
import { mapMutations } from 'vuex'

//const token = 'df247647-aec0-4dbc-9652-786bdf07a93c';

export default {
  
  computed: {
    // Set your username thanks to your getter
    username() {
      return this.$store.getters['auth/username']
    },
    avatar() {
      return this.$store.getters['auth/avatar']
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
    axios.get(`http://localhost:1337/klormalingars?_sort=created_at:desc`)
    //axios.get(`https://sundlaug.herokuapp.com/klormalingars?_sort=created_at:desc`)
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