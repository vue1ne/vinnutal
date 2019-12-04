<template>

  <div class="fundartal">

   <v-data-table
   dense
   :items="posts"
   :headers="headers"
   :single-expand="singleExpand"
   :expanded.sync="expanded"
   show-expand
   :search="search"
    :footer-props="{
    'items-per-page-options': [10, 20, 50, 100, -1],
    }"
   :items-per-page-all-text="itemsPerPageAllText"
   :items-per-page="10"
   :options.sync="pagination"
   >

   <template v-slot:top>
         <v-col offset-lg="3" :lg="6" :sm="12"><v-text-field v-model="search" label="Leita...." class="mx-4"></v-text-field></v-col>
      </template>

   <template #item.dagsetning="{item}">
     <time><span class="date">{{ item.created_at | moment('DD') }}</span>    
     <span class="month">{{ item.created_at | moment('MMM') }}</span> 
     <span class="dag">{{ item.created_at | moment('timezone', 'Atlantic/Reykjavik', 'dddd') }}</span>
     </time>
   </template>

   <template #item.hvad="{item}">

           <div class="uk-grid-small uk-flex-middle" uk-grid>
      
                <span class="vinna" v-if="item.hvad == 'vinna'">Vinna</span>
                <span class="vinna" v-else-if="item.hvad == 'vinnufelagi'">Vinnufélagi</span>
                <span class="vinna" v-else-if="item.hvad == 'vaktir'">Vaktir</span>
                <span class="vinna" v-else-if="item.hvad == 'adstada'">Aðstaða</span>
                <span class="vinna" v-else-if="item.hvad == 'morall'">Mórall</span>
                <span class="skoli" v-else-if="item.hvad == 'skolatengt'">Skólatengt</span>
                <span class="skoli" v-else-if="item.hvad == 'skolasund'">Skólasund</span>
                <span class="skoli" v-else-if="item.hvad == 'sundkennarar'">Sundkennarar</span>
                <span class="afingar" v-else-if="item.hvad == 'sundafingar'">Sundæfingar</span>
                <span class="sundlaug" v-else-if="item.hvad == 'sundgestir'">Sundgestir</span>
                <span class="sundlaug" v-else-if="item.hvad == 'skemmdir'">Skemmdir</span>
                <span class="sundlaug" v-else-if="item.hvad == 'annad'">Annað</span>

        </div><!-- .uk-grid-small -->

   </template>

    <template #expanded-item="{ headers,item }" #post.lysing="{item}">
    <td :colspan="headers.length">
       {{ item.lysing }}
    </td>
    </template>

   <template #item.atridi="{item}">
     <span class="atridi">{{ item.atridi }}</span>
   </template>

      <template #item.nasti="{item}">
     <time><span class="date">{{ item.created_at | moment('DD') }}</span>    
     <span class="month">{{ item.created_at | moment('MMM') }}</span> 
     <span class="dag">{{ item.created_at | moment('timezone', 'Atlantic/Reykjavik', 'dddd') }}</span>
     <span class="time">{{ item.nasti | moment("H:mm") }}</span>
     </time>

   </template>

   </v-data-table>

  </div><!-- .fundartal -->

</template>

<script>
import axios from "axios";
import strapi from "~/utils/Strapi";
import { mapMutations } from "vuex";
export default {
  computed: {
    // Set your username thanks to your getter
    username() {
      return this.$store.getters["auth/username"];
    },
    avatar() {
      return this.$store.getters["auth/avatar"];
    },
    headers(){
     return [
      {text: 'Dagsetning', value: 'dagsetning', 'sortable': true, 'filterable': true},
      {text: 'Atriði', value: 'atridi'},
      {text: 'Hvað', value: 'hvad', 'sortable': true},
      {text: 'Næsti fundur', value: 'nasti', 'sortable': true},
     ]
    },
  },
  data() {
    return {
     posts: [],
     expanded: [],
     singleExpand: false,
     search: '',
     itemsPerPageItems: [5, 10, 15, 20, 30, 40, 50, 100, -1],
     pagination: {
        itemsPerPage: 10
     },
     itemsPerPageAllText: "Allar",
     
    }
  },
  // wp reminders import
  async created() {
    axios
      //.get(`http://localhost:1337/fundartals?_sort=created_at:desc`)
      .get(`https://vinnutal.herokuapp.com/fundatals?_sort=created_at:desc`)
      .then(response => {
        this.posts = response.data;
      })
      .catch(e => {});
  },
  methods: {
      filterOnlyCapsText (value, search, item) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
      },
    },
}
</script>