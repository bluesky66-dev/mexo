<template>
  <!--begin::Tables Widget 1-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5 px-0">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fs-5 mb-1">Uploaded File</span>
      </h3>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3 px-0">
      <!--begin::Table container-->
      <div class="table-responsive mh-300px scroll-y me-n7 pe-7">
        <!--begin::Table-->
        <table class="table align-middle gs-0 gy-5">
          <!--begin::Table head-->
          <thead>
            <tr>
              <th class="p-0 w-50px"></th>
              <th class="p-0 min-w-200px"></th>
              <th class="p-0 min-w-100px"></th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(item, index) in items" :key="index">
              <tr>
                <th>
                  <div class="symbol symbol-50px me-2">
                    <span class="symbol-label">
                      <img
                        :src="item.image"
                        class="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                </th>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                    >{{ item.info.title }}</a
                  >
                  <span class="text-muted fw-bold d-block fs-7">{{
                    item.info.description
                  }}</span>
                </td>

                <td class="text-end">
                  <div class="dropdown ">
                    <button
                      class="btn btn-secondary dropdown-toggle select2-selection select2-selection--single"
                      type="button"
                      :id="`dropdownMenuButton-${index}`"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      @click="handleToggle(index)"
                    >
                      Edit
                    </button>
                    <div
                      class="dropdown-menu kt-dropdown"
                      :class="selectedIndex === index ? 'd-block' : ''"
                      :aria-labelledby="`dropdownMenuButton-${index}`"
                    >
                      <a class="dropdown-item" href="#" @click="handleClose"
                        >Remove</a
                      >
                      <a class="dropdown-item" href="#" @click="handleClose"
                        >Modify</a
                      >
                      <a class="dropdown-item" href="#" @click="handleClose"
                        >Select</a
                      >
                    </div>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
  </div>
  <!--endW::Tables Widget 1-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "upload-files",
  props: {
    widgetClasses: String
  },
  data: () => {
    return {
      selectedIndex: ""
    };
  },
  setup() {
    const items = [
      {
        image: "media/svg/brand-logos/plurk.svg",
        info: {
          title: "Top Authors",
          description: "Successful Fellas"
        },
        progress: {
          value: "70",
          color: "primary"
        }
      },

      {
        image: "media/svg/brand-logos/telegram.svg",
        info: {
          title: "Popular Authors",
          description: "Most Successful"
        },
        progress: {
          value: "50",
          color: "primary"
        }
      },

      {
        image: "media/svg/brand-logos/vimeo.svg",
        info: {
          title: "New Users",
          description: "Awesome Users"
        },
        progress: {
          value: "80",
          color: "primary"
        }
      },

      {
        image: "media/svg/brand-logos/bebo.svg",
        info: {
          title: "Active Customers",
          description: "Best Customers"
        },
        progress: {
          value: "90",
          color: "primary"
        }
      },

      {
        image: "media/svg/brand-logos/kickstarter.svg",
        info: {
          title: "Bestseller Theme",
          description: "Amazing Templates"
        },
        progress: {
          value: "70",
          color: "primary"
        }
      }
    ];

    return {
      items
    };
  },
  methods: {
    handleToggle(index) {
      if (index === this.selectedIndex) {
        this.selectedIndex = "";
      } else {
        this.selectedIndex = index;
      }
    },
    handleClose() {
      this.selectedIndex = "";
    }
  }
});
</script>
