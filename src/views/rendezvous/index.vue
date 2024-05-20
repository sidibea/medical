<template>
  <Layout>
      <b-row>
          <b-col cols="12">
              <div class="hstack gap-3">
                  <input class="form-control me-auto" type="text" placeholder="Recherchez un patient...">
                  <button class="btn btn-md btn-primary" type="button">Rechercher</button>
                  <div class="vr"></div>
                  <button class="btn btn-md btn-outline-secondary" type="button">Actualiser</button>
              </div>
          </b-col>
      </b-row>
  </Layout>

</template>
<script>
import Layout from "@/layouts/main.vue";

export default {
    components: {
        Layout,
    },

}
</script>