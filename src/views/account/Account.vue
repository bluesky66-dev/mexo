<template>
  <!--begin::Navbar-->
  <div class="card mb-5 mb-xl-10">
    <div class="card-body pt-9 pb-0">
      <!--begin::Details-->
      <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
        <!--begin: Pic-->
        <div class="me-7 mb-4">
          <div
            class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative"
          >
            <img v-bind:src="userprofile.image" alt="image" />
            <div
              class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"
            ></div>
          </div>
        </div>
        <!--end::Pic-->

        <!--begin::Info-->
        <div class="flex-grow-1">
          <!--begin::Title-->
          <div
            class="d-flex justify-content-between align-items-start flex-wrap mb-2"
          >
            <!--begin::User-->
            <div class="d-flex flex-column">
              <!--begin::Name-->
              <div class="d-flex align-items-center mb-2">
                <a
                  href="#"
                  class="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                  >{{ userprofile.name }} {{ userprofile.surname }}</a
                >
                <a href="#">
                  <span
                    class="svg-icon svg-icon-1 svg-icon-primary"
                    v-if="userprofile.accountverified"
                  >
                    <inline-svg src="media/icons/duotone/Design/Verified.svg" />
                  </span>
                </a>

                <!-- <a
                  href="#"
                  class="btn btn-sm btn-light-success fw-bolder ms-2 fs-8 py-1 px-3"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_upgrade_plan"
                  >Upgrade to Pro</a
                >  -->
              </div>
              <!--end::Name-->

              <!--begin::Info-->
              <div class="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                <a
                  href="#"
                  class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                >
                  <span class="svg-icon svg-icon-4 me-1">
                    <inline-svg src="media/icons/duotone/General/User.svg" />
                  </span>
                  {{ userprofile.job }}
                </a>
                <a
                  href="#"
                  class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                >
                  <span class="svg-icon svg-icon-4 me-1">
                    <inline-svg src="media/icons/duotone/Map/Marker1.svg" />
                  </span>
                  {{ userprofile.address1 }}, {{ userprofile.address2 }}
                </a>
                <a
                  href="#"
                  class="d-flex align-items-center text-gray-400 text-hover-primary mb-2"
                >
                  <span class="svg-icon svg-icon-4 me-1">
                    <inline-svg
                      src="media/icons/duotone/Communication/Mail-at.svg"
                    />
                  </span>
                  {{ userprofile.email }}
                </a>
              </div>
              <!--end::Info-->
            </div>
            <!--end::User-->

            <!--begin::Progress-->
            <div
              class="d-flex align-items-center w-200px w-sm-300px flex-column mt-3"
            >
              <div class="d-flex justify-content-between w-100 mt-auto mb-2">
                <span class="fw-bold fs-6 text-gray-400"
                  >Profile Completion</span
                >
                <span class="fw-bolder fs-6">50%</span>
              </div>

              <div class="h-5px mx-3 w-100 bg-light mb-3">
                <div
                  class="bg-success rounded h-5px"
                  role="progressbar"
                  style="width: 50%;"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <!--end::Progress-->
          </div>
          <!--end::Stats-->
        </div>
        <!--end::Info-->
      </div>
      <!--end::Details-->

      <!--begin::Navs-->
      <div class="d-flex overflow-auto h-55px">
        <ul
          class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap"
        >
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              to="overview"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              Overview
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              to="settings"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              Settings
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item" v-if="userprofile.accounttype == 'si'">
            <router-link
              to="Company"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              Company Details
            </router-link>
          </li>

          <!--end::Nav item-->
        </ul>
      </div>
      <!--begin::Navs-->
    </div>
  </div>
  <!--end::Navbar-->
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { Actions } from "@/store/enums/StoreEnums";
import { useStore } from "vuex";
export default defineComponent({
  name: "kt-account",
  components: {
    //Dropdown3
  },
  setup() {
    const store = useStore();
    //const router = useRouter();

    onMounted(() => {
      store.dispatch(Actions.GET_PROFILE);
    });

    const userprofile = computed(() => {
      console.log(
        "Getting user Details in Account -- " +
          JSON.stringify(store.getters.userprofile)
      );
      return store.getters.userprofile;
    });
    return {
      userprofile
    };
  }
});
</script>
