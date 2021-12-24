<template>
  <div>
    <div class="companies-list">
      <a href="single-company-profile.html" class="company">
        <div class="company-inner-alignment">
          <span class="company-logo"> <img :src="user.image" alt=""/></span>
          <h4>{{ user.name }}</h4>
          <div class="star-rating" data-rating="3.5">
            <span class="star"></span><span class="star"></span
            ><span class="star"></span><span class="star half"></span
            ><span class="star empty"></span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "company",
  components: {},
  props: {
    user: Object
  },
  data() {
    return {
      users: []
    };
  }
};
</script>
