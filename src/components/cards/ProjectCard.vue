<template>
  <!--begin::Card-->
  <a
    href="#"
    class="card border border-2 border-gray-300 border-hover"
    @click="handleNavigate($event)"
  >
    <!--begin::Card header-->
    <div class="card-header border-0 pt-9">
      <!--begin::Card Title-->
      <div class="card-title m-0">
        <!--begin::Avatar-->
        <div class="symbol symbol-50px w-50px bg-light">
          <img
            :src="project.logo"
            alt="image"
            @error="loaddefaultimage"
            class="p-3"
          />
        </div>
        <!--end::Avatar-->
      </div>
      <!--end::Car Title-->

      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <span
          :class="getStatusDataBadgeColor"
          class="badge fw-bolder me-auto px-4 py-3"
          >{{ project.status }}</span
        >
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end:: Card header-->

    <!--begin:: Card body-->
    <div class="card-body p-9">
      <!--begin::Name-->
      <div class="fs-3 fw-bolder text-dark">
        {{ project.title }}
      </div>
      <!--end::Name-->

      <!--begin::Description-->
      <p class="text-gray-400 fw-bold fs-5 mt-1 mb-1">
        {{ project.description.substring(0, 30) + "..." }}
      </p>

      <!--end::Description-->

      <p class="fw-bold fs-5 mb-7">
        {{ project.company }}
      </p>

      <!--begin::Info-->
      <div class="d-flex flex-wrap mb-5">
        <!--begin::Budget-->
        <div
          class="
            border border-gray-300 border-dashed
            rounded
            min-w-125px
            py-3
            px-4
            mb-3
          "
        >
          <div class="fs-6 text-gray-800 fw-bolder">{{ getBudget }}</div>
          <div class="fw-bold text-gray-400">Budget</div>
        </div>
        <!--end::Budget-->
      </div>
      <!--end::Info-->

      <!--begin::Progress-->
      <!-- <div
        class="h-4px w-100 bg-light mb-5"
        data-bs-toggle="tooltip"
        :title="`This project ${project.progress}% completed`"
      >
        <div
          :class="getStatusDataColor"
          class="rounded h-4px"
          role="progressbar"
          :style="{ width: project.progress + `%` }"
          :aria-valuenow="progress"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div> -->
      <!--end::Progress-->

      <template v-if="project.users">
        <!--begin::Users-->
        <div class="symbol-group symbol-hover">
          <template v-for="(user, index) in project.users" :key="index">
            <!--begin::User-->
            <div
              class="symbol symbol-35px symbol-circle"
              data-bs-toggle="tooltip"
              :title="user.title"
            >
              <img v-if="user.src" alt="Pic" :src="user.src" />
              <span
                v-else
                class="symbol-label fw-bolder"
                :class="`bg-${user.state} text-inverse-${user.state}`"
                >{{ user.initials }}</span
              >
            </div>
            <!--begin::User-->
          </template>
        </div>
        <!--end::Users-->
      </template>
    </div>
    <!--end:: Card body-->
  </a>
  <!--end::Card-->
</template>

<script>
import { computed } from "vue";
import { Actions } from "@/store/enums/StoreEnums.ts";
export default {
  name: "project-card",
  components: {},
  props: {
    project: Object
  },

  methods: {
    handleNavigate(event) {
      event.preventDefault();
      console.log("calling get project");
      //console.log('Project ID ---  ${this.project.projectid}' + this.project.projectid )
      // this.$router.push(`project/${this.project && this.project.projectid}/overview`)
      this.getproject();
    },
    getproject() {
      const obj = { projectid: this.project.projectid };
      //const store = useStore();
      this.$store.dispatch(Actions.GET_PROJECT, obj);
      setTimeout(() => {
        this.$router.push({ name: "project-overview" });
      }, 500);
    },
    loaddefaultimage(e) {
      if (this.project.logo == null) {
        e.error = "";
        e.target.src = "media/illustrations/unitedpalms-1/9-dark.png";
        return true;
      } else {
        e.target.src = this.project.logo;
      }
      e.preventDefault();
    }
  },
  setup(props) {
    const getBudget = computed(() => {
      if (props.project && props.project.budget) {
        return `$ ${props.project.budget
          .toFixed(2)
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;
      }
      return "";
    });

    const getStatusDataBadgeColor = computed(() => {
      if (props.project && props.project.status === "Completed") {
        return "badge-light-success";
      } else if (props.project && props.project.status === "Overdue") {
        return "badge-light-danger";
      } else if (props.project && props.project.status === "In Progress") {
        return "badge-light-primary";
      } else if (props.project && props.project.status === "Pending") {
        return "badge-light";
      } else {
        return "badge-light-primary";
      }
    });
    const getStatusDataColor = computed(() => {
      return "bg-primary";
    });
    return {
      getBudget,
      getStatusDataBadgeColor,
      getStatusDataColor
    };
  }
};
</script>

<style lang="scss" scoped>
.background-3 {
  background-image: linear-gradient(#8b9da9, #fff6e4);
  box-shadow: inset 0 0 100px hsla(0, 0%, 0%, 0.3);
}
</style>
