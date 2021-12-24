<template>
  <div class="col-12 col-md-4 col-lg-4">
    <div class="card portal-card">
      <div class="card-body">
        <div class="portalImage">
          <img v-if="image" :src="image" alt="" />
        </div>
        <h2 class="text-center">{{ title }}</h2>
        <p class="text-center">{{ text }}</p>
        <a href="/">Start Here</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "portal-card",
  components: {},
  props: {
    image: String,
    title: String,
    text: String,
    classname: String
  }
});
</script>
<style scoped>
.portal-card {
  height: 510px;
}
.portal-card .card-body {
  padding: 30px 30px 45px 30px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.portalImage {
  height: 45%;
}
.portalImage img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.portal-card h2 {
  margin-top: 20px;
  margin-bottom: 0px;
  font-size: 23px !important;
  font-weight: 600;
}
.portal-card p {
  color: #9ea3a5;
  margin-bottom: 0;
  height: 80px;
}
a {
  background-color: #85742b !important;
  padding: 14px 45px;
  color: white;
  width: 100%;
  box-shadow: 0 15px 20px 0 rgb(0 0 0 / 10%) !important;
  border-radius: 8px;
  font-size: 17px;
  line-height: 1.2;
  min-width: 190px;
  width: 215px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
}
@media screen and (max-width: 991px) {
  .portal-card .card-body {
    padding: 20px 20px 20px 20px !important;
  }
  .portal-card a {
    width: 100%;
  }
}
@media screen and (max-width: 768px) {
  .portal-card {
    margin-bottom: 30px;
  }
  .portalImage {
    max-height: 210px;
  }
}
</style>
