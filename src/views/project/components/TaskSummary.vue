<template>
  <div class="card card-flush h-lg-100">
    <!--begin::Card header-->
    <div class="card-header mt-6">
      <!--begin::Card title-->
      <div class="card-title flex-column">
        <h3 class="fw-bolder mb-1">Tasks Summary</h3>
        <div class="fs-6 fw-bold text-gray-400">24 Overdue Tasks</div>
      </div>
      <!--end::Card title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <a href="#" class="btn btn-light btn-sm">View Tasks</a>
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->
    <!--begin::Card body-->
    <div class="card-body p-9 pt-5">
      <!--begin::Wrapper-->
      <div class="d-flex flex-wrap">
        <!--begin::Chart-->
        <div
          class="position-relative d-flex flex-center h-175px w-175px me-15 mb-7"
        >
          <div
            class="position-absolute translate-middle start-50 top-50 d-flex flex-column flex-center"
          >
            <span class="fs-2qx fw-bolder">{{ totalTasks }}</span>
            <span class="fs-6 fw-bold text-gray-400">Total Tasks</span>
          </div>
          <apexchart
            type="donut"
            width="300px"
            :options="options"
            :series="series"
          ></apexchart>
          <!-- <canvas id="project_overview_chart"></canvas> -->
        </div>
        <!--end::Chart-->
        <!--begin::Labels-->
        <div
          class="d-flex flex-column justify-content-center flex-row-fluid pe-11 mb-5"
        >
          <!--begin::Label-->
          <div class="d-flex fs-6 fw-bold align-items-center mb-3">
            <div class="bullet bg-primary me-3"></div>
            <div class="text-gray-400">Active</div>
            <div class="ms-auto fw-bolder text-gray-700">{{ series[0] }}</div>
          </div>
          <!--end::Label-->
          <!--begin::Label-->
          <div class="d-flex fs-6 fw-bold align-items-center mb-3">
            <div class="bullet bg-success me-3"></div>
            <div class="text-gray-400">Completed</div>
            <div class="ms-auto fw-bolder text-gray-700">{{ series[1] }}</div>
          </div>
          <!--end::Label-->
          <!--begin::Label-->
          <div class="d-flex fs-6 fw-bold align-items-center mb-3">
            <div class="bullet bg-danger me-3"></div>
            <div class="text-gray-400">Overdue</div>
            <div class="ms-auto fw-bolder text-gray-700">0</div>
          </div>
          <!--end::Label-->
          <!--begin::Label-->
          <div class="d-flex fs-6 fw-bold align-items-center">
            <div class="bullet bg-gray-300 me-3"></div>
            <div class="text-gray-400">Yet to start</div>
            <div class="ms-auto fw-bolder text-gray-700">{{ series[2] }}</div>
          </div>
          <!--end::Label-->
        </div>
        <!--end::Labels-->
      </div>
      <!--end::Wrapper-->
      <!--begin::Notice-->
      <div
        class="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6 mt-5"
      >
        <!--begin::Wrapper-->
        <div class="d-flex flex-stack flex-grow-1">
          <!--begin::Content-->
          <div class="fw-bold">
            <div class="fs-6 text-gray-700">
              <a href="#" class="fw-bolder me-1"
                >Invite New .NET Collaborators</a
              >to create great outstanding business to business .jsp modutr
              class scripts
            </div>
          </div>
          <!--end::Content-->
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Notice-->
    </div>
    <!--end::Card body-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import projects from "@/core/data/projects";

export default defineComponent({
  name: "task-summary",
  data: () => {
    return {
      series: [] as Array<number>,
      totalTasks: 0
    };
  },
  setup() {
    const options = {
      chart: {
        type: "donut"
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "solid",
        opacity: 1
      },
      legend: {
        show: false
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    // const series = [30, 45, 25]

    return {
      options
      // series
    };
  },
  created() {
    this.series = projects.find(project => project.id === 1)?.summary || [];
    this.totalTasks =
      projects.find(project => project.id === 1)?.totalTasks || 0;
  }
});
</script>
