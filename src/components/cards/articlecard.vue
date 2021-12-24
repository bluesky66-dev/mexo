<template>
  <div>
    <div
      v-if="company.id == 1"
      id="first-article"
      class="card border-2 border-gray-300 mb-5 mb-xl-8"
    >
      <div class="article-head">
        Latest News
      </div>
      <div class="first-article-body">
        <!--begin::Summary-->
        <!--begin::User Info-->
        <div class="d-flex flex-column py-1">
          <!--begin::Avatar-->
          <div class="mb-7 rounded w-full">
            <!-- <img src="assets/media/avatars/150-1.jpg" alt="image"> -->
            <img :src="company.url" alt="image" class="p-3" />
          </div>
          <div class="py-5 px-5">
            <span class="article-date">
              {{ company.date }}
            </span>
            <span class="fs-3 text-white fw-bolder mb-3 article-title">
              {{ company.title }}
            </span>
            <!--end::Name-->
            <!--begin::Position-->
            <div class="mb-9">
              <!--begin::Badge-->
              <!-- <div class="badge badge-lg badge-light-primary d-inline">{{ company.service }}</div> -->
              <!--begin::Badge-->
            </div>
            <!--end::Position-->
            <div class="d-flex flex-wrap flex-center">
              {{ company.summary.substring(0, 120) + "..." }}
            </div>
          </div>
          <!--end::Info-->
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
    </div>
    <div
      v-if="company.id != 1"
      id="article"
      class="card border-2 border-gray-300 mb-5 mb-xl-8"
    >
      <!--begin::Card body-->
      <div class="article-body">
        <!--begin::Summary-->
        <!--begin::User Info-->
        <div class="d-flex flex-row py-1">
          <!--begin::Avatar-->
          <div class="mb-7 rounded">
            <!-- <img src="assets/media/avatars/150-1.jpg" alt="image"> -->
            <img :src="company.url" alt="image" class="p-3" />
          </div>
          <div class="py-5">
            <span class="article-date">
              {{ company.date }}
            </span>
            <span class="fs-3 text-white fw-bolder mb-3 article-title">
              {{ company.title }}
            </span>
            <!--end::Name-->
            <!--begin::Position-->
            <div class="mb-9">
              <!--begin::Badge-->
              <!-- <div class="badge badge-lg badge-light-primary d-inline">{{ company.service }}</div> -->
              <!--begin::Badge-->
            </div>
            <!--end::Position-->
            <div class="d-flex flex-wrap flex-center">
              {{ company.summary.substring(0, 120) + "..." }}
            </div>
          </div>
          <!--end::Info-->
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
      if (this.company.url == null) {
        e.error = "";
        e.target.src = "media/illustrations/unitedpalms-1/9-dark.png";
        return true;
      } else {
        e.target.src = this.company.url;
      }
      e.preventDefault();
    }
  },
  setup() {
    const showthis = computed(() => {
      return false;
    });
    return {
      showthis
    };
  }
};
</script>
<style scoped>
.article-body {
  padding: 2px;
}
#article:hover {
  box-shadow: 5px 5px 13px -3px #000000;
}
#first-article {
  box-shadow: 5px 5px 13px -3px #000000;
}
#first-article img {
  width: 100%;
}
img {
  height: auto;
  max-width: 100%;
  border-radius: 5px;
}
.article-date {
  font-size: 16px;
  color: #696969;
  margin-right: 10px;
}
.article-title {
  margin-left: 10px;
  background-color: #8d751e;
  border-radius: 15px;
  padding: 6px 13px 6px 13px;
  color: white;
}
.article-head {
  background: url(/media/images/mi-head.png) no-repeat;
  background-size: contain;
  background-size: 100% 100%;
  display: flex;
  border-radius: 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 5px 5px 10px;
  margin-bottom: 10px;
  height: 60px;
  margin-left: 5px;
  margin-right: 10px;
  margin-top: 5px;
  color: white;
  margin-bottom: 0;
  font-size: 1.9em;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
}
</style>
