<template>
  <!--begin::Navbar-->
  <div class="card mb-5 mb-xxl-8">
    <div class="card-body pt-9 pb-0">
      <!--begin::Details-->
      <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
        <div class="card-body d-flex flex-column">
          <div class="flex-grow-1">
            <!--begin::Info-->
            <div class="d-flex align-items-center pe-2 mb-5">
              <span class="text-muted fw-bolder fs-5 flex-grow-1">{{
                Project.title
              }}</span>
              <!-- <div class="symbol symbol-50px">
                <span class="symbol-label bg-light"
                  ><img
                    src="media/svg/brand-logos/plurk.svg"
                    class="h-50 align-self-center"
                    alt=""
                /></span>
              </div> -->
            </div>
            <!--end::Info-->
            <!--begin::Link-->
            <a href="#" class="text-dark fw-bolder text-hover-primary fs-4"
              >Description</a
            >
            <!--end::Link-->
            <!--begin::Desc-->
            <p class="py-3">
              <span>{{ project.description }}</span>
            </p>
            <!--end::Desc-->
          </div>
        </div>
      </div>
      <!--end::Details-->
    </div>
  </div>
  <!--end::Navbar-->
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
//import projects from "@/core/data/projects";

export default defineComponent({
  name: "project",
  components: {},
  mounted() {
    setTimeout(() => {
      this.project = this.Project;
    }, 750);
  },
  data: () => {
    return {
      project: {},
      users: [
        { name: "Emma Smith", src: "media/avatars/150-1.jpg" },
        { name: "Rudy Stone", src: "media/avatars/150-2.jpg" },
        { name: "Susan Redwood", initials: "S", state: "primary" }
      ]
    };
  },
  setup() {
    const store = useStore();

    const Project = computed(() => {
      console.log(
        "Getting project list from Store -- " +
          JSON.stringify(store.getters.Singleproject)
      );

      return store.getters.Singleproject;
    });

    return {
      Project
    };
  },

  methods: {
    getStatusDataBadgeColor(status) {
      if (status === "Completed") {
        return "badge-light-success";
      } else if (status === "Overdue") {
        return "badge-light-danger";
      } else if (status === "In Progress") {
        return "badge-light-primary";
      } else if (status === "Pending") {
        return "badge-light";
      } else {
        return "badge-light-primary";
      }
    }
  },
  loaddefaultimage(e) {
    e.error = "";
    e.target.src = "media/illustrations/unitedpalms-1/9-dark.png";
    return true;
  }
});
</script>
