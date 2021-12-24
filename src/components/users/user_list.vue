<template>
  <usercard v-for="user in users" :key="user.id" :user="user" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import usercard from "@/components/users/usercard.vue";

export default defineComponent({
  name: "kt-widget-2",
  components: {
    usercard
  },
  props: {
    widgetClasses: String
  },
  setup() {
    const users = ref([
      {
        avatar: "media/avatars/150-1.jpg",
        name: "Emma Smith",
        description: "Project Manager"
      },
      {
        avatar: "media/avatars/150-4.jpg",
        name: "Sean Bean",
        description: "PHP, SQLite, Artisan CLI"
      },
      {
        avatar: "media/avatars/150-12.jpg",
        name: "Brian Cox",
        description: "PHP, SQLite, Artisan CLI"
      },
      {
        avatar: "media/avatars/150-8.jpg",
        name: "Francis Mitcham",
        description: "PHP, SQLite, Artisan CLI"
      },
      {
        avatar: "media/avatars/150-6.jpg",
        name: "Dan Wilson",
        description: "PHP, SQLite, Artisan CLI"
      }
    ]);

    return {
      users
    };
  }
});
</script>
