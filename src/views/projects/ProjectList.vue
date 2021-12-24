<template>
  <!--begin::Dashboard-->
  <projects> </projects>
  <!--end::Dashboard-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import projects from "@/components/projects/Projects.vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "dashboard",
  components: {
    projects
  },
  setup() {
    onMounted(() => {
      setCurrentPageTitle("Projects");
    });
  }
});
</script>
