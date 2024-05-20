<script>


import { Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import Layout from "@/layouts/main.vue";
import fr from "flatpickr/dist/l10n/fr";

export default {

  components: {
    Layout,
  },
    computed: {
        config(){
            //var current_month = 12 - new Date().getMonth();
            return   {
                locale: fr.fr,
                mode: "range",
                dateFormat: "Y-m-d",
                firstDayOfWeek: 1,
                defaultDate: (this.selectedAnnee != null)?[this.selectedAnnee +"-" +new Date().getMonth()+"-01", this.selectedAnnee +"-12-"+new Date().getDay()]:[new Date().getFullYear()+'-'+ new Date().getMonth()+"-01", new Date().getFullYear()+'-'+new Date().getFullYear()+'-'+ new Date().getMonth()+"-31"],
            }

        },
    },

  data() {
    return {
        selectedAnnee: null,
      title: this.$t('t-dashboards'),
      items: [{
        text: this.$t('t-dashboards'),
        href: "/",
      },

      ],
      Autoplay, Mousewheel
    };
  },
  methods: {


  },
  mounted() {

  },
  created() {
      this.title = this.$t('t-dashboards')
      this.selectedAnnee = this.$store.state.selectedAnnee;

  }

};
</script>

<template>
  <Layout>
      <div class="row row-cols-xxl-5 row-cols-lg-3 row-cols-1">
          <b-col >
              <router-link :to="{name: 'rendezvous'}">
                  <div class="card card-body" style="background: #ee9900">
                      <div class="row">
                          <div class="col-3 justify-content-center align-items-center align-content-center">
                              <i class="mdi ri-5x text-white  mdi-calendar avatar-sm rounded-circle justify-content-center align-items-center align-content-center"></i>
                          </div>
                          <div class="col-6 justify-content-center align-items-center align-content-center ">
                              <h3 class="justify-content-center text-white align-items-center align-content-center text-center">Rendez-vous médical</h3>
                          </div>
                      </div>
                  </div>

              </router-link>
          </b-col>
          <b-col >
              <div class="card card-body" style="background: #0077aa">
                 <div class="row">
                     <div class="col-3 justify-content-center align-items-center align-content-center">
                         <i class="mdi ri-5x text-white  mdi-doctor avatar-sm rounded-circle justify-content-center align-items-center align-content-center"></i>

                     </div>
                     <div class="col-6 justify-content-center align-items-center align-content-center ">
                         <h3 class="justify-content-center text-white align-items-center align-content-center text-center">Analyse médicale</h3>
                     </div>
                 </div>
              </div>
          </b-col>
          <b-col >
              <div class="card card-body" style="background: #f06548">
                  <div class="row">
                      <div class="col-3 justify-content-center align-items-center align-content-center">
                          <i class="mdi ri-5x text-white  mdi-doctor avatar-sm rounded-circle justify-content-center align-items-center align-content-center"></i>

                      </div>
                      <div class="col-6 justify-content-center align-items-center align-content-center ">
                          <h3 class="justify-content-center text-white align-items-center align-content-center text-center">Interventions</h3>
                      </div>
                  </div>
              </div>
          </b-col>

      </div>
  </Layout>
</template>