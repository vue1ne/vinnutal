<template>

  <div class="vinnutal">

   <v-data-table
   dense
   :items="posts"
   :headers="headers"
   :single-expand="singleExpand"
   :expanded.sync="expanded"
   show-expand
   :search="search"
   select-all
    :footer-props="{
    'items-per-page-options': [10, 20, 50, 100, -1],
    }"
   :items-per-page-all-text="itemsPerPageAllText"
   :items-per-page="10"
   :options.sync="pagination"
   >

   <template v-slot:top>
         <v-col offset-lg="3" :lg="6" :sm="12"><v-text-field v-model="search" label="Leita... ensk orð t.d odinn - robert.. tími = 06:50.." class="mx-4"></v-text-field></v-col>
      </template>

   <template #item.created_at="{item}">
     <time><span class="date">{{ item.dagsetning | moment('DD') }}</span>    
     <span class="month">{{ item.dagsetning | moment('MMM') }}</span> 
     <span class="dag">{{ item.dagsetning | moment('timezone', 'Atlantic/Reykjavik', 'dddd') }}</span>
     </time>
   </template>

   <template #item.starfsmadur="{item}">

           <div class="uk-grid-small uk-flex-middle" uk-grid>
      
            <div class="uk-width-expand">
                <h3 class="uk-card-title uk-margin-remove-bottom odinn" v-if="item.vakt == 'fyrrivakt'">Fyrri Vakt</h3>
                <h3 class="uk-card-title uk-margin-remove-bottom robert" v-else-if="item.vakt == 'seinnivakt'">Seinni Vakt </h3>
                <h3 class="uk-card-title uk-margin-remove-bottom olafur" v-else-if="item.vakt == 'helgarvakt'">Helgarvakt</h3>
                <h3 class="uk-card-title uk-margin-remove-bottom valdi" v-else-if="item.vakt == 'varmahlid'">varmahlid</h3>
                <h3 class="uk-card-title uk-margin-remove-bottom steina" v-else-if="item.vakt == 'steina'">Skiptivakt</h3>
                <h3 class="uk-card-title uk-margin-remove-bottom halla" v-else-if="item.vakt == 'halla'">Yfirvinna</h3>
            </div>

        </div><!-- .uk-grid-small -->

   </template>

    <template #expanded-item="{ headers,item }" #post.minnismidi="{item}">
    <td :colspan="headers.length">
       {{ item.minnismidi }}
    </td>
    </template>

   <!-- tímatal ///////////////////////////// -->
   <template #post.dagvinna="{item}">
     {{ item.dagvinna }}
   </template>

   <template #post.yfirvinnas="{item}">
     {{ item.yfirvinna }}
   </template>

   <template #post.trjatiu="{item}">
     {{ item.trjatiu }}
   </template>

   <template #post.fimtiu="{item}">
     {{ item.fimtiu }}
   </template>

   <template #post.sjotiu="{item}">
     {{ item.sjotiu }}
   </template>
   
   <!-- dagvinna -->
   <template #item.dag="{item}">
       <span v-if="item.vakt == 'helgarvakt'">{{ dagvinna }}</span>
       <span v-else-if="item.vakt == 'fyrrivakt'">{{ fyrri }}</span>
       <span v-else-if="item.vakt == 'seinnivakt'">{{ seinni }}</span>
       <span v-else-if="item.vakt == 'varmahlid'">{{ helgi }}</span>
   </template>

      <!-- Y 33% 55% 77% -->
      <template #item.yv="{item}">
       <span v-if="item.vakt == 'helgarvakt'">{{ fimtiu }}</span>
       <span v-else-if="item.vakt == 'fyrrivakt'">{{ dagtrjatiu }}</span>
       <span v-else-if="item.vakt == 'seinnivakt'">{{ seinnitrjatiudag }}</span>
       <span v-else-if="item.vakt == 'varmahlid'">{{ helgi }}</span>
   </template>

   <!-- samtals dag -->
   <template #item.morguntrjatiu="{item}">
       <span v-if="item.vakt == 'helgarvakt'">{{ helgardag }}</span>
       <span v-else-if="item.vakt == 'fyrrivakt'">{{ fyrrisamtals }}</span>
       <span v-else-if="item.vakt == 'seinnivakt'">{{ seinnidag }}</span>
       <span v-else-if="item.vakt == 'varmahlid'">{{ helgisamtals }}</span>
   </template>

      <!-- samtals Y 33% 55$ 77% -->
   <template #item.helgisamtals="{item}">
       <span v-if="item.vakt == 'helgarvakt'">{{ helgarfimtiu }}</span>
       <span v-else-if="item.vakt == 'fyrrivakt'">{{ morguntrjatiu }}</span>
       <span v-else-if="item.vakt == 'seinnivakt'">{{ seinnitrjatiusamtals }}</span>
       <span v-else-if="item.vakt == 'varmahlid'">{{ helgisamtals }}</span>
   </template>

         <!-- samtals alls -->
   <template #item.alls="{item}">
       <span v-if="item.vakt == 'helgarvakt'">{{ helgisamtals }}</span>
       <span v-else-if="item.vakt == 'fyrrivakt'">{{ fyrrialls }}</span>
       <span v-else-if="item.vakt == 'seinnivakt'">{{ seinnialls }}</span>
       <span v-else-if="item.vakt == 'varmahlid'">{{ helgisamtals }}</span>
   </template>

    <!-- <template v-slot:body.append>
        <tr class="footer">
          <td class="dag" colspan="2">Dag</td>
          <td class="vakt" colspan="1"></td>
          <td class="dvinna" colspan="1">{{  }}</td>
          <td class="yv" colspan="1">4444:</td>
          <td class="trjatiu" colspan="1">4444:</td>
          <td class="fimtiu" colspan="1">4444:</td>
          <td class="sjotiu" colspan="1">4444:</td>
          <td class="dvinnaday" colspan="1">4444:</td>
          <td class="yvinnaday" colspan="1">4444:</td>
          <td class="samtalsdag" colspan="1">4444:</td>
          <td class="samtalsyv" colspan="1">4444:</td>
          <td class="alls" colspan="1">4444:</td>
        </tr>
      </template> -->

    <template v-slot:footer>
        <div class="samtalsfooter uk-align-right">
          Samtals: {{ samtalsalls }}
        </div>
      </template>

   </v-data-table>

  </div><!-- .vinnutal -->

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
      // dagsetning
      //{text: 'M', value: 'minnismidi'},
      {text: 'Dagsetning', value: 'created_at', 'sortable': true, 'filterable': true},
      {text: 'Vakt', value: 'starfsmadur'},
      //sundlaug
      {text: 'Dagvinna', value: 'dagvinna', 'sortable': true},
      {text: 'Yfirvinna', value: 'yfirvinna', 'sortable': true},
      {text: '33%', value: 'trjatiu', 'sortable': true},
      {text: '55%', value: 'fimtiu', 'sortable': true},
      {text: '77%', value: 'sjotiu', 'sortable': true},
      {text: 'Dagvinna', value: 'dag', 'sortable': true},
      {text: 'Y 33% 55% 77%', value: 'yv', 'sortable': true},
      {text: 'Samtals Dag', value: 'morguntrjatiu', 'sortable': true},
      {text: 'Samtals Y 33% 55% 77%', value: 'helgisamtals', 'sortable': true},
      {text: 'Alls', value: 'alls', 'sortable': true},
     ]
    },
    helgi() {
      return this.dagvinna + this.fimtiu;
    },
    helgardag() {
     return this.dagvinna * 6.45;
    },
    helgarfimtiu() {
     return this.fimtiu * 6.45;
    },
    fyrri() {
      return this.dagvinna;
    },
    fyrritrjatiu() {
      return this.dagvinna + this.trjatiu;
    },
    seinni() {
      return this.dagvinna;
    },
    seinnidag() {
      return this.dagvinna * 3;
    },
    seinnitrjatiusamtals() {
      return this.seinnitrjatiu * 4.15;
    },
    seinnitrjatiudag() {
      return this.trjatiu + this.dagvinna;
    },
    seinnialls() {
      return this.seinnidag + this.seinnitrjatiusamtals;
    },
    helgisamtals() {
      return this.helgifimtiu * 6.45;
    },
    fyrrisamtals() {
      return this.dagvinna * 6;
    },
    fyrrialls() {
      return this.morguntrjatiu + this.fyrrisamtals;
    },
    seinnisamtals() {
      return this.dagfimtiu * 7;
    },
    samtalsalls() {
      return this.helgisamtals + this.fyrrialls + this.seinnialls;
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
     
     // reiknað saman
      dagfimtiu: 3035,  

      // actual laun
      dagvinna: 1838,
      dagtrjatiu: 2563,
      yfirvinna:3676,
      helgarvinna: 0,
      trjatiu: 725,
      morguntrjatiu: 3844,
      helgifimtiu: 3035,
      fimtiu: 1197,
      dagfimtiu: 3035,
      seinnitrjatiu: 2563,
    }
  },
  // wp reminders import
  async created() {
    axios
      .get(`http://localhost:1337/vinnutals?_sort=dagsetning:desc`)
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