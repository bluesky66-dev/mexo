<template>
  <div class="mb-n10 mb-lg-n20 z-index-2">
    <!--begin::Container-->
    <div class="container">
      <!--begin::Heading-->
      <!-- <div class="text-center mb-17">        
        <h3
          class="fs-2hx text-white mb-5"
          id="how-it-works"
          data-kt-scroll-offset="{default: 100, lg: 150}"
        >
          How it Works
        </h3>       
        <div class="fs-5 text-white fw-bold">
          Save thousands to millions of bucks by using single tool <br />for
          different amazing and great useful admin
        </div>      
      </div> -->

      <!--begin::Row-->
      <div class="row w-100 gy-10 mb-md-20">
        <!--begin::Col-->
        <div class="col-md-4 px-5">
          <!--begin::Story-->
          <div class="text-center mb-10 mb-md-0">
            <!--begin::Illustration-->
            <img
              src="media/illustrations/sigma-1/2.png"
              class="mh-125px mb-9"
              alt=""
            />
            <!--end::Illustration-->
            <!--begin::Heading-->
            <div class="d-flex flex-center mb-5">
              <!--begin::Badge-->
              <span
                class="
                  badge badge-circle badge-light-success
                  fw-bolder
                  p-5
                  me-3
                  fs-3
                "
                >1</span
              >
              <!--end::Badge-->
              <!--begin::Title-->
              <div class="fs-5 fs-lg-3 fw-bolder text-dark">Jane Miller</div>
              <!--end::Title-->
            </div>
            <!--end::Heading-->
            <!--begin::Description-->
            <div class="fw-bold fs-6 fs-lg-4 text-muted">
              Save thousands to millions of bucks <br />by using single tool for
              different <br />amazing and great
            </div>
            <!--end::Description-->
          </div>
          <!--end::Story-->
        </div>
        <!--end::Col-->
        <!--begin::Col-->
        <div class="col-md-4 px-5">
          <!--begin::Story-->
          <div class="text-center mb-10 mb-md-0">
            <!--begin::Illustration-->
            <img
              src="media/illustrations/sigma-1/8.png"
              class="mh-125px mb-9"
              alt=""
            />
            <!--end::Illustration-->
            <!--begin::Heading-->
            <div class="d-flex flex-center mb-5">
              <!--begin::Badge-->
              <span
                class="
                  badge badge-circle badge-light-success
                  fw-bolder
                  p-5
                  me-3
                  fs-3
                "
                >2</span
              >
              <!--end::Badge-->
              <!--begin::Title-->
              <div class="fs-5 fs-lg-3 fw-bolder text-dark">Setup Your App</div>
              <!--end::Title-->
            </div>
            <!--end::Heading-->
            <!--begin::Description-->
            <div class="fw-bold fs-6 fs-lg-4 text-muted">
              Save thousands to millions of bucks <br />by using single tool for
              different <br />amazing and great
            </div>
            <!--end::Description-->
          </div>
          <!--end::Story-->
        </div>
        <!--end::Col-->
        <!--begin::Col-->
        <div class="col-md-4 px-5">
          <!--begin::Story-->
          <div class="text-center mb-10 mb-md-0">
            <!--begin::Illustration-->
            <img
              src="media/illustrations/sigma-1/12.png"
              class="mh-125px mb-9"
              alt=""
            />
            <!--end::Illustration-->
            <!--begin::Heading-->
            <div class="d-flex flex-center mb-5">
              <!--begin::Badge-->
              <span
                class="
                  badge badge-circle badge-light-success
                  fw-bolder
                  p-5
                  me-3
                  fs-3
                "
                >3</span
              >
              <!--end::Badge-->
              <!--begin::Title-->
              <div class="fs-5 fs-lg-3 fw-bolder text-dark">
                Enjoy Nautica App
              </div>
              <!--end::Title-->
            </div>
            <!--end::Heading-->
            <!--begin::Description-->
            <div class="fw-bold fs-6 fs-lg-4 text-muted">
              Save thousands to millions of bucks <br />by using single tool for
              different <br />amazing and great
            </div>
            <!--end::Description-->
          </div>
          <!--end::Story-->
        </div>
        <!--end::Col-->
      </div>
      <!--end::Row-->
      <!--begin::Product slider-->

      <!--end::Product slider-->
    </div>
    <!--end::Container-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "card-4",
  components: {},
  props: {
    totalSales: String
  },
  setup() {
    return {};
  }
});
</script>
