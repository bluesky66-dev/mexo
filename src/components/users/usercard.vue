<template>
  <!--begin::Card-->
  <div class="card mb-5 mb-xxl-8">
    <!--begin::Card body-->
    <div class="card-body pb-0">
      <!--begin::Avatar-->

      <div class="symbol symbol-65px symbol-circle mb-5">
        <img :src="user.image" alt="image" />

        <div
          class="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3"
        ></div>
      </div>
      <!--end::Avatar-->
      <!--begin::Name-->
      <a href="#" class="text-gray-800 text-hover-primary fs-6 fw-bolder">{{
        user.name
      }}</a>
      <!--end::Name-->
      <!--begin::Position-->
      <div class="text-gray-400 fw-bold">
        {{ user.jobtittle }}
      </div>
      <!--end::Position-->
      <!--begin::Info-->
      <div class="d-flex flex-center flex-wrap">
        <!--begin::Stats-->
        <!--begin::Button-->
        <button
          ref="submitButtonRef"
          type="submit"
          id="kt_modal_create_api_key_submit"
          class="btn btn-primary"
        >
          <span class="indicator-label">
            Submit
          </span>
          <span class="indicator-progress">
            Please wait...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
        <!--end::Button-->
        <!--end::Info-->
      </div>
    </div>
    <!--end::Card body-->
  </div>
</template>

<script>
export default {
  name: "usercard",
  props: {
    user: Object
  },
  setup() {
    return {
      users: []
    };
  }
};
</script>
