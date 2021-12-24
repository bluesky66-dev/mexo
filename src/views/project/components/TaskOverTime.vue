<template>
  <div class="card card-flush h-lg-100">
    <!--begin::Card header-->
    <div class="card-header mt-6">
      <!--begin::Card title-->
      <div class="card-title flex-column">
        <h3 class="fw-bolder mb-1">Tasks Over Time</h3>
        <!--begin::Labels-->
        <div class="fs-6 d-flex text-gray-400 fs-6 fw-bold">
          <!--begin::Label-->
          <div class="d-flex align-items-center me-6">
            <span class="menu-bullet d-flex align-items-center me-2">
              <span class="bullet bg-success"></span> </span
            >Complete
          </div>
          <!--end::Label-->
          <!--begin::Label-->
          <div class="d-flex align-items-center">
            <span class="menu-bullet d-flex align-items-center me-2">
              <span class="bullet bg-primary"></span> </span
            >Incomplete
          </div>
          <!--end::Label-->
        </div>
        <!--end::Labels-->
      </div>
    </div>
    <div class="card-body pt-10 pb-0 px-5">
      <apexchart
        type="area"
        class="task-overtime-chart"
        :options="options"
        :series="series"
      ></apexchart>
      <!--end::Chart-->
    </div>
    <!--end::Card body-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";
import projects from "@/core/data/projects";

interface SeriesPropTypes {
  name: string;
  data: Array<number>;
}

export default defineComponent({
  name: "tisk-overtime",
  data: () => {
    return {
      series: [] as Array<SeriesPropTypes>
    };
  },
  setup() {
    const labelColor = getCSSVariableValue("--bs-gray-500");
    const borderColor = getCSSVariableValue("--bs-gray-200");
    const strokeColor = getCSSVariableValue("--bs-gray-300");

    const color1 = getCSSVariableValue("--bs-primary");
    const color1Light = getCSSVariableValue("--bs-light-primary");

    const color2 = getCSSVariableValue("--bs-success");
    const color2Light = getCSSVariableValue("--bs-light-success");

    const options = {
      chart: {
        fontFamily: "inherit",
        type: "area",
        height: 350,
        toolbar: {
          show: false
        }
      },

      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "solid",
        opacity: 1
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: [color1, color2]
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: true,
          style: {
            colors: labelColor,
            fontSize: "12px"
          }
        },
        crosshairs: {
          position: "front",
          stroke: {
            color: strokeColor,
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: false
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: labelColor,
            fontSize: "12px"
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0
          }
        },
        hover: {
          filter: {
            type: "none",
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: "12px"
        },
        y: {
          formatter: function(val) {
            return "$" + val + " thousands";
          }
        }
      },
      colors: [color1Light, color2Light],
      grid: {
        borderColor: borderColor,
        strokeDashArray: 4,
        padding: {}
      },
      markers: {
        colors: [color1, color2],
        strokeColor: [color1, color2],
        strokeWidth: 3
      }
    };

    return {
      options
    };
  },
  created() {
    this.series = projects.find(project => project.id === 1)?.overtimes || [];
  }
});
</script>
