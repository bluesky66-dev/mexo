<template>
  <!--begin::details View-->
  <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
    <!--begin::Card header-->
    <div class="card-header cursor-pointer">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Profile Details</h3>
      </div>
      <!--end::Card title-->

      <!--begin::Action-->
      <router-link to="settings" class="btn btn-primary align-self-center"
        >Edit Profile</router-link
      >
      <!--end::Action-->
    </div>
    <!--begin::Card header-->

    <!--begin::Card body-->
    <div class="card-body p-9">
      <!--begin::Row-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted">Name</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bolder fs-6 text-dark"
            >{{ userprofile.name }} {{ userprofile.surname }}</span
          >
        </div>
        <!--end::Col-->
      </div>
      <!--end::Row-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted">Company</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8 fv-row">
          <span class="fw-bold fs-6">{{ userprofile.companyname }}</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted">
          Contact Phone
          <i
            class="fas fa-exclamation-circle ms-1 fs-7"
            data-bs-toggle="tooltip"
            title="Phone number must be active"
          ></i>
        </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8 d-flex align-items-center">
          <span class="fw-bolder fs-6 me-2">{{ userprofile.phonenumber }}</span>

          <span class="badge badge-success" v-if="userprofile.phoneconfirmed"
            >Verified</span
          >
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted">Company Site</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <a href="#" class="fw-bold fs-6 text-dark text-hover-primary">{{
            userprofile.website
          }}</a>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted">
          Country
          <i
            class="fas fa-exclamation-circle ms-1 fs-7"
            data-bs-toggle="tooltip"
            title="Country of origination"
          ></i>
        </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bolder fs-6 text-dark">{{
            userprofile.country
          }}</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted">Communication</label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bolder fs-6 text-dark">Email, Phone</span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-10">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted">Allow Changes</label>
        <!--begin::Label-->

        <!--begin::Label-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6">Yes</span>
        </div>
        <!--begin::Label-->
      </div>
      <!--end::Input group-->
      <!--begin::
       <div
        class="notice d-flex bg-light-warning rounded border-warning border border-dashed  p-6"
      >
        <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
          <inline-svg src="media/icons/duotone/Code/Warning-1-circle.svg" />
        </span>
        begin::Wrapper
                <div class="d-flex flex-stack flex-grow-1 ">
        begin::Content
          <div class=" fw-bold">
            <h4 class="text-gray-800 fw-bolder">We need your attention!</h4>

            <div class="fs-6 text-gray-600 ">
              Your payment was declined. To start using tools, please
              <a class="fw-bolder" href="#">Add Payment Method</a>.
            </div>
          </div>
        end::Content
        </div>
        end::Wrapper
      </div>  -->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::details View-->

  <!--begin::Row
  <div class="row gy-10 gx-xl-10">
   
    <div class="col-xl-6">
      <KTChartWidget1
        widget-classes="card-xxl-stretch mb-5 mb-xl-10"
      ></KTChartWidget1>
    </div>
  

  
    <div class="col-xl-6">
      <KTListWidget1
        widget-classes="card-xxl-stretch mb-5 mb-xl-10'"
      ></KTListWidget1>
    </div>
   
  </div>
 end::Row-->

  <!--begin::Row
  <div class="row gy-10 gx-xl-10">
   
    <div class="col-xl-6">
      <KTListWidget5
        widget-classes="card-xxl-stretch mb-5 mb-xl-10"
      ></KTListWidget5>
    </div>
    
    <div class="col-xl-6">
      <KTTableWidget3
        widget-classes="card-xxl-stretch mb-5 mb-xl-10"
      ></KTTableWidget3>
    </div>
   
  </div>
  end::Row-->
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { Actions } from "@/store/enums/StoreEnums";
import { useStore } from "vuex";
export default defineComponent({
  name: "account-overview",
  components: {},
  setup() {
    const store = useStore();
    //const router = useRouter();

    onMounted(() => {
      store.dispatch(Actions.GET_PROFILE);
      setCurrentPageBreadcrumbs("Overview", ["Account"]);
    });

    const userprofile = computed(() => {
      console.log(
        "Getting user Details -- " + JSON.stringify(store.getters.userprofile)
      );
      return store.getters.userprofile;
    });
    return {
      userprofile
    };
  }
});
</script>
