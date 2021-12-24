<template>
  <Div v-if="showthis">
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
            <img :src="company.image" alt="image" class="p-3" />
          </div>
          <!--end::Avatar-->
        </div>
        <!--end::Car Title-->

        <!--begin::Card toolbar-->
        <!--   <div class="card-toolbar">
        <span
          :class="getStatusDataBadgeColor"
          class="badge fw-bolder me-auto px-4 py-3"
          >{{ project.status }}</span
        >
      </div> -->
        <!--end::Card toolbar-->
      </div>
      <!--end:: Card header-->

      <!--begin:: Card body-->
      <div class="card-body p-9">
        <!--begin::Name-->
        <div class="fs-3 fw-bolder text-dark">
          {{ company.companyname }}
        </div>
        <!--end::Name-->

        <!--begin::Description-->
        <p class="text-gray-400 fw-bold fs-5 mt-1 mb-1">
          {{ company.aboutus }}
        </p>

        <!--end::Description-->

        <p class="fw-bold fs-5 mb-7">
          {{ company.company }}
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
            <div class="fs-6 text-gray-800 fw-bolder"></div>
            <div class="fw-bold text-gray-400">Budget</div>
          </div>
          <!--end::Budget-->
        </div>
        <!--end::Info-->

        <!--begin::Progress-->
        <!--  <div
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

        <!--  <template v-if="company.users">
      
        <div class="symbol-group symbol-hover">
          <template v-for="(user, index) in project.users" :key="index">
       
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
          
          </template>
        </div>
       
      </template> -->
      </div>
      <!--end:: Card body-->
    </a>
  </Div>
  <!--end::Card-->
  <div class="card border-2 border-gray-300 mb-5 mb-xl-8">
    <!--begin::Card body-->
    <div class="card-body">
      <!--begin::Summary-->
      <!--begin::User Info-->
      <div class="d-flex flex-center flex-column py-5">
        <!--begin::Avatar-->
        <div class="symbol symbol-100px symbol-circle mb-7">
          <!-- <img src="assets/media/avatars/150-1.jpg" alt="image"> -->
          <img src="media/mexo/robot.png" alt="image" class="p-3" />
        </div>
        <a
          href="#"
          class="fs-3 text-gray-800 text-hover-primary fw-bolder mb-3"
          @click="handleLink($event)"
        >
          {{ company.companyname }}
        </a>
        <!--end::Name-->
        <!--begin::Position-->
        <div class="mb-9">
          <!--begin::Badge-->
          <!-- <div class="badge badge-lg badge-light-primary d-inline">{{ company.service }}</div> -->
          <!--begin::Badge-->
        </div>
        <!--end::Position-->
        <!--begin::Info-->
        <!--begin::Info heading-->
        <div class="fw-bolder mb-3">About us</div>
        <!--end::Info heading-->
        <div class="d-flex flex-wrap flex-center">
          {{ company.aboutus.substring(0, 30) + "..." }}
        </div>
        <!--end::Info-->
      </div>
      <div class="d-flex flex-wrap flex-center">
        <a
          @click="handleNavigate($event)"
          class="btn btn-sm btn-primary font-weight-bolder text-uppercase"
          >View</a
        >
      </div>
      <div id="kt_user_view_details" class="collapse" style="">
        <div class="pb-5 fs-6">
          <!--begin::Details item-->
          <div class="fw-bolder mt-5">Account ID</div>
          <div class="text-gray-600">ID-45453423</div>
          <!--begin::Details item-->
          <!--begin::Details item-->
          <div class="fw-bolder mt-5">Email</div>
          <div class="text-gray-600">
            <a href="#" class="text-gray-600 text-hover-primary"
              >info@keenthemes.com</a
            >
          </div>
          <!--begin::Details item-->
          <!--begin::Details item-->
          <div class="fw-bolder mt-5">Address</div>
          <div class="text-gray-600">
            101 Collin Street, <br />Melbourne 3000 VIC <br />Australia
          </div>
          <!--begin::Details item-->
          <!--begin::Details item-->
          <div class="fw-bolder mt-5">Language</div>
          <div class="text-gray-600">English</div>
          <!--begin::Details item-->
          <!--begin::Details item-->
          <div class="fw-bolder mt-5">Last Login</div>
          <div class="text-gray-600">25 Jul 2021, 11:30 am</div>
          <!--begin::Details item-->
        </div>
      </div>
      <!--end::Details content-->
    </div>
    <!--end::Card body-->
  </div>
</template>

<script>
import { computed } from "vue";
import { Actions } from "@/store/enums/StoreEnums.ts";
export default {
  name: "project-card",
  components: {},
  props: {
    company: Object,
    contact: Object
  },

  methods: {
    handleLink(event) {
      event.preventDefault();
      this.$router.push({ name: "userprofile-overview" });
    },
    handleNavigate(event) {
      event.preventDefault();
      console.log(
        "calling get project +++++++++++++++++++++++++++++++++++++++++++++"
      );
      //console.log('Project ID ---  ${this.project.projectid}' + this.project.projectid )
      // this.$router.push(`project/${this.project && this.project.projectid}/overview`)
      this.getproject();
    },
    getproject() {
      const obj = { email: this.company.email };
      //const store = useStore();
      console.log(
        "calling get project +++++++++++++++++++++++++++++++++++++++++++++" +
          JSON.stringify(obj)
      );
      this.$store.dispatch(Actions.GET_SINGLEUSERPROFILE, obj);
      this.$store.dispatch(Actions.GET_SINGLECOMPANYPROFILE, obj);
      setTimeout(() => {
        //this.$router.push({ name: "project-overview" });
        this.$router.push({ name: "userprofile" });
      }, 500);
    },

    loaddefaultimage(e) {
      if (this.company.image == null) {
        e.error = "";
        e.target.src = "media/illustrations/unitedpalms-1/9-dark.png";
        return true;
      } else {
        e.target.src = this.company.image;
      }
      e.preventDefault();
    }
  },
  setup() {
    /*   const getBudget = computed(() => {
      if (props.project && props.project.budget) {
        return `$ ${props.project.budget
          .toFixed(2)
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;
      }
      return "";
    });
 */
    /*  const getStatusDataBadgeColor = computed(() => {
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
    }); */
    const showthis = computed(() => {
      return false;
    });
    return {
      showthis
    };
  }
};
</script>
