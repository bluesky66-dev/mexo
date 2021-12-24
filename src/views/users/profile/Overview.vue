<template>
  <!--begin::details View-->
  <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
    <!--begin::Card header-->
    <div class="card-header cursor-pointer">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">About us</h3>
      </div>
      <!--end::Card title-->
    </div>
    <!--begin::Card header-->

    <!--begin::Card body-->
    <div class="card-body p-9">
      <!--begin::Row-->
      <div class="row mb-7">
        <!--begin::Label-->
        <div class="d-flex flex-center flex-column py-5">
          <!--end::Label-->

          <!--begin::Col-->
          <div class="col-lg-8">
            <span class="fw-bolder fs-6 text-dark"
              >{{ companyprofile.aboutus }}
            </span>
          </div>
        </div>
        <!--end::Col-->
      </div>
    </div>
    <!--end::Card body-->
  </div>

  <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
    <!--begin::Card header-->
    <div class="card-header cursor-pointer">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Team</h3>
      </div>
      <!--end::Card title-->
    </div>
    <!--begin::Card header-->

    <!--begin::Card body-->
    <div class="card-body p-9">
      <!--begin::Row-->
      <div class="row mb-7">
        <!--begin::Label-->
        <div class="d-flex flex-center flex-column py-5">
          <!--end::Label-->
          <div class="col-lg-8">
            <span class="fw-bolder fs-6 text-dark">
              <div
                v-for="item in companyprofile.technicalteam"
                :key="item.name"
              >
                <div class="d-flex align-items-sm-center mb-7">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-60px symbol-2by3 me-4">
                    <div
                      class="symbol-label"
                      style="background-image: url('/media/illustrations/unitedpalms-1/9.png')"
                    ></div>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Content-->
                  <div
                    class="d-flex flex-row-fluid align-items-center flex-wrap my-lg-0 me-2"
                  >
                    <!--begin::Title-->
                    <div class="flex-grow-1 my-lg-0 my-2 me-2">
                      <a
                        href="#"
                        class="text-gray-800 fw-bolder text-hover-primary fs-6"
                      >
                        {{ item.name }}
                      </a>
                      <span class="text-muted fw-bold d-block pt-1"
                        >Engineers</span
                      >
                    </div>
                    <!--end::Title-->
                    <!--begin::Section-->
                    <div class="d-flex align-items-center">
                      <div class="me-6">
                        <i class="fa  me-1 text-warning fs-5"></i>
                        <span class="text-gray-800 fw-bolder">
                          {{ item.count }}
                        </span>
                      </div>
                    </div>
                    <!--end::Section-->
                  </div>
                  <!--end::Content-->
                </div>

                <!--begin::Col-->
              </div>
            </span>
          </div>
        </div>
        <!--end::Col-->
      </div>
    </div>
    <!--end::Card body-->
  </div>

  <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
    <!--begin::Card header-->
    <div class="card-header cursor-pointer">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Expertise</h3>
      </div>
      <!--end::Card title-->
    </div>
    <!--begin::Card header-->

    <!--begin::Card body-->
    <div class="card-body p-9">
      <!--begin::Row-->
      <div class="row mb-7">
        <!--begin::Label-->
        <div class="d-flex flex-center flex-column py-5">
          <!--end::Label-->
          <div class="col-lg-8">
            <span class="fw-bolder fs-6 text-dark">
              <div
                v-for="item in companyprofile.expertiseapplication"
                :key="item.name"
              >
                <!--begin::Col-->

                <!--begin::Col-->

                <!--end::Col-->
                <!--begin::Col-->
                <div class="row g-0">
                  <div class="col bg-light-primary px-6 py-8 rounded-2 mb-7">
                    <!--begin::Svg Icon | path: icons/duotune/finance/fin006.svg-->
                    <span
                      class="svg-icon svg-icon-3x svg-icon-primary d-block my-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          opacity="0.3"
                          d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                          fill="black"
                        ></path>
                        <path
                          d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                          fill="black"
                        ></path>
                      </svg>
                    </span>
                    <!--end::Svg Icon-->
                    <a href="#" class="text-primary fw-bold fs-6"
                      >{{ item.name }}
                    </a>
                  </div>
                </div>

                <!--end::Col-->
              </div>
            </span>
          </div>
        </div>
        <!--end::Col-->
      </div>
    </div>
    <!--end::Card body-->
  </div>

  <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
    <!--begin::Card header-->
    <div class="card-header cursor-pointer">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Team</h3>
      </div>
      <!--end::Card title-->
    </div>
    <!--begin::Card header-->

    <!--begin::Card body-->
    <div class="card-body p-9">
      <!--begin::Row-->
      <div class="row mb-7">
        <!--begin::Label-->
        <div class="d-flex flex-center flex-column py-5">
          <!--end::Label-->
          <div class="col-lg-8">
            <span class="fw-bolder fs-6 text-dark">
              <div v-for="item in companyprofile.customers" :key="item.name">
                <div class="d-flex align-items-sm-center mb-7">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-60px symbol-2by3 me-4">
                    <div
                      class="symbol-label"
                      style="background-image: url('/media/illustrations/unitedpalms-1/9.png')"
                    ></div>
                  </div>
                  <!--end::Symbol-->
                  <!--begin::Content-->
                  <div
                    class="d-flex flex-row-fluid align-items-center flex-wrap my-lg-0 me-2"
                  >
                    <!--begin::Title-->
                    <div class="flex-grow-1 my-lg-0 my-2 me-2">
                      <a
                        href="#"
                        class="text-gray-800 fw-bolder text-hover-primary fs-6"
                      >
                        {{ item.name }}
                      </a>
                      <span class="text-muted fw-bold d-block pt-1"
                        >Engineers</span
                      >
                    </div>
                    <!--end::Title-->
                    <!--begin::Section-->
                    <div class="d-flex align-items-center">
                      <div class="me-6">
                        <i class="fa  me-1 text-warning fs-5"></i>
                        <span class="text-gray-800 fw-bolder">
                          <li
                            v-for="(proj, index) in item.projectname"
                            :key="`proj-${index}`"
                          >
                            {{ proj }}
                          </li>
                        </span>
                      </div>
                    </div>
                    <!--end::Section-->
                  </div>
                  <!--end::Content-->
                </div>

                <!--begin::Col-->
              </div>
            </span>
          </div>
        </div>
        <!--end::Col-->
      </div>
    </div>
    <!--end::Card body-->
  </div>

  <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
    <!--begin::Card header-->
    <div class="card-header cursor-pointer">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Compnay</h3>
      </div>
      <!--end::Card title-->
    </div>
    <!--begin::Card header-->

    <!--begin::Card body-->
    <div class="card-body p-9">
      <!--begin::Row-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted"> CEO </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bolder fs-6 text-dark"
            >{{ companyprofile.ceo }}
          </span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Row-->

      <!--begin::Input group-->
      <!--     <div class="row mb-7">
        <label class="col-lg-4 fw-bold text-muted">Company</label> 
        <div class="col-lg-8 fv-row">
          <span class="fw-bold fs-6">{{ userprofile.companyname }}</span>
        </div>
      </div> -->
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
          <div v-if="userprofile.phoneconfirmed">
            <span class="badge badge-success">Verified</span>
          </div>
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
    </div>
  </div>

  <div class="card">
    <!--begin::Body-->
    <div class="card-body p-lg-17">
      <!--begin::Row-->
      <div class="row mb-3">
        <!--begin::Col-->
        <div class="col-md-6 pe-lg-10">
          <!--begin::Form-->
          <form
            action=""
            class="form mb-15 fv-plugins-bootstrap5 fv-plugins-framework"
            method="post"
            id="kt_contact_form"
          >
            <h1 class="fw-bolder text-dark mb-9">Send Us Email</h1>
            <!--begin::Input group-->
            <div class="row mb-5">
              <!--begin::Col-->
              <div class="col-md-6 fv-row fv-plugins-icon-container">
                <!--begin::Label-->
                <label class="fs-5 fw-bold mb-2">Name</label>
                <!--end::Label-->
                <!--begin::Input-->
                <input
                  type="text"
                  class="form-control form-control-solid"
                  placeholder=""
                  name="name"
                />
                <!--end::Input-->
                <div
                  class="fv-plugins-message-container invalid-feedback"
                ></div>
              </div>
              <!--end::Col-->
              <!--begin::Col-->
              <div class="col-md-6 fv-row fv-plugins-icon-container">
                <!--end::Label-->
                <label class="fs-5 fw-bold mb-2">Email</label>
                <!--end::Label-->
                <!--end::Input-->
                <input
                  type="text"
                  class="form-control form-control-solid"
                  placeholder=""
                  name="email"
                />
                <!--end::Input-->
                <div
                  class="fv-plugins-message-container invalid-feedback"
                ></div>
              </div>
              <!--end::Col-->
            </div>
            <!--end::Input group-->
            <!--begin::Input group-->
            <div class="d-flex flex-column mb-5 fv-row">
              <!--begin::Label-->
              <label class="fs-5 fw-bold mb-2">Subject</label>
              <!--end::Label-->
              <!--begin::Input-->
              <input
                class="form-control form-control-solid"
                placeholder=""
                name="subject"
              />
              <!--end::Input-->
            </div>
            <!--end::Input group-->
            <!--begin::Input group-->
            <div
              class="d-flex flex-column mb-10 fv-row fv-plugins-icon-container"
            >
              <label class="fs-6 fw-bold mb-2">Message</label>
              <textarea
                class="form-control form-control-solid"
                rows="6"
                name="message"
                placeholder=""
              ></textarea>
              <div class="fv-plugins-message-container invalid-feedback"></div>
            </div>
            <!--end::Input group-->
            <!--begin::Submit-->
            <button
              type="submit"
              class="btn btn-primary"
              id="kt_contact_submit_button"
            >
              <!--begin::Indicator-->
              <span class="indicator-label">Send</span>
              <span class="indicator-progress"
                >Please wait...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span
              ></span>
              <!--end::Indicator-->
            </button>
            <!--end::Submit-->
            <div></div>
          </form>
          <!--end::Form-->
        </div>
        <div class="col-md-6">
          <!-- AIzaSyAvEaJtEJVrovB5tQU7QQ6OKLr5L2NsRG0 -->
          <GoogleMap
            api-key="AIzaSyAvEaJtEJVrovB5tQU7QQ6OKLr5L2NsRG0"
            style="width: 100%; height: 500px"
            :center="
              companyprofile.map
                ? {
                    lat: parseFloat(companyprofile.map.split(', ')[0]),
                    lng: parseFloat(companyprofile.map.split(', ')[1])
                  }
                : { lat: 13.067439, lng: 80.237617 }
            "
            :zoom="15"
          >
            <Marker
              :options="
                companyprofile.map
                  ? {
                      position: {
                        lat: parseFloat(companyprofile.map.split(', ')[0]),
                        lng: parseFloat(companyprofile.map.split(', ')[1])
                      }
                    }
                  : { position: { lat: 13.067439, lng: 80.237617 } }
              "
            />
          </GoogleMap>
        </div> 
        <!--end::Col-->
        <!--begin::Col-->
        <!-- 	<div class="col-md-6 ps-lg-10">
											
												<div id="kt_contact_map" class="w-100 rounded mb-2 mb-lg-0 mt-2 leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom" style="height: 486px; position: relative;" tabindex="0"><div class="leaflet-pane leaflet-map-pane" style="transform: translate3d(-9px, 0px, 0px);"><div class="leaflet-pane leaflet-tile-pane"><div class="leaflet-layer " style="z-index: 1; opacity: 1;"><div class="leaflet-tile-container leaflet-zoom-animated" style="z-index: 18; transform: translate3d(0px, 0px, 0px) scale(1);"><img alt="" role="presentation" src="https://a.tile.openstreetmap.org/18/77197/98549.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(75px, 143px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://c.tile.openstreetmap.org/18/77197/98548.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(75px, -113px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://c.tile.openstreetmap.org/18/77196/98549.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(-181px, 143px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://b.tile.openstreetmap.org/18/77198/98549.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(331px, 143px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://b.tile.openstreetmap.org/18/77197/98550.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(75px, 399px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://b.tile.openstreetmap.org/18/77196/98548.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(-181px, -113px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://a.tile.openstreetmap.org/18/77198/98548.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(331px, -113px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://a.tile.openstreetmap.org/18/77196/98550.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(-181px, 399px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://c.tile.openstreetmap.org/18/77198/98550.png" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(331px, 399px, 0px); opacity: 1;"></div></div></div><div class="leaflet-pane leaflet-shadow-pane"></div><div class="leaflet-pane leaflet-overlay-pane"></div><div class="leaflet-pane leaflet-marker-pane"><div class="leaflet-marker-icon leaflet-marker leaflet-zoom-animated leaflet-interactive" tabindex="0" style="background-position: -10px -10px; margin-left: -20px; margin-top: -37px; width: 12px; height: 12px; transform: translate3d(311px, 312px, 0px); z-index: 312;"><span class="svg-icon svg-icon-primary shadow svg-icon-3x"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="24" width="24" height="0"></rect><path d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z" fill="#000000" fill-rule="nonzero"></path></g></svg></span></div></div><div class="leaflet-pane leaflet-tooltip-pane"></div><div class="leaflet-pane leaflet-popup-pane"><div class="leaflet-popup  leaflet-zoom-animated" style="opacity: 1; transform: translate3d(311px, 275px, 0px); bottom: -7px; left: -113px;"><div class="leaflet-popup-content-wrapper"><div class="leaflet-popup-content" style="width: 186px;">430 E 6th St, New York, 10009.</div></div><div class="leaflet-popup-tip-container"><div class="leaflet-popup-tip"></div></div></div></div><div class="leaflet-proxy leaflet-zoom-animated" style="transform: translate3d(1.97626e+07px, 2.52286e+07px, 0px) scale(131072);"></div></div><div class="leaflet-control-container"><div class="leaflet-top leaflet-left"><div class="leaflet-control-zoom leaflet-bar leaflet-control"><a class="leaflet-control-zoom-in leaflet-disabled" href="#" title="Zoom in" role="button" aria-label="Zoom in">+</a><a class="leaflet-control-zoom-out" href="#" title="Zoom out" role="button" aria-label="Zoom out">−</a></div></div><div class="leaflet-top leaflet-right"></div><div class="leaflet-bottom leaflet-left"></div><div class="leaflet-bottom leaflet-right"><div class="leaflet-control-attribution leaflet-control"><a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> | © <a href="https://osm.org/copyright">OpenStreetMap</a> contributors</div></div></div></div>
											
											</div>  -->
        <!--end::Col-->
        <!--    <div class="col-md-6 ps-lg-10">
          <div style="height: 500px; width: 100%">
            <div style="height: 200px; overflow: auto;">
              <p>
                First marker is placed at {{ withPopup.lat }},
                {{ withPopup.lng }}
              </p>
              <p>
                Center is at {{ currentCenter }} and the zoom is:
                {{ currentZoom }}
              </p>
              <button @click="showLongText">
                Toggle long popup
              </button>
              <button @click="showMap = !showMap">
                Toggle map
              </button>
            </div>
            <l-map
              v-if="showMap"
              :zoom="zoom"
              :center="center"
              :options="mapOptions"
              style="height: 80%"
              @update:center="centerUpdate"
              @update:zoom="zoomUpdate"
            >
              <l-tile-layer :url="url" :attribution="attribution" />
              <l-marker :lat-lng="withPopup">
                <l-popup>
                  <div @click="innerClick">
                    I am a popup
                    <p v-show="showParagraph">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque sed pretium nisl, ut sagittis sapien. Sed vel
                      sollicitudin nisi. Donec finibus semper metus id
                      malesuada.
                    </p>
                  </div>
                </l-popup>
              </l-marker>
              <l-marker :lat-lng="withTooltip">
                <l-tooltip :options="{ permanent: true, interactive: true }">
                  <div @click="innerClick">
                    I am a tooltip
                    <p v-show="showParagraph">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque sed pretium nisl, ut sagittis sapien. Sed vel
                      sollicitudin nisi. Donec finibus semper metus id
                      malesuada.
                    </p>
                  </div>
                </l-tooltip>
              </l-marker>
            </l-map>
          </div>
        </div> -->
      </div>
      <!--end::Row-->
      <!--begin::Row-->
      <div class="row g-5 mb-5 mb-lg-15">
        <!--begin::Col-->
        <div class="col-sm-6 pe-lg-10">
          <!--begin::Phone-->
          <div
            class="text-center bg-light card-rounded d-flex flex-column justify-content-center p-10 h-lg-100"
          >
            <!--begin::Icon-->
            <!--SVG file not found: icons/duotune/finance/fin006.svgPhone.svg-->
            <!--end::Icon-->
            <!--begin::Subtitle-->
            <h1 class="text-dark fw-bolder my-5">Let’s Speak</h1>
            <!--end::Subtitle-->
            <!--begin::Number-->
            <div class="text-gray-700 fw-bold fs-2">
              {{ userprofile.phonenumber }}
            </div>
            <!--end::Number-->
          </div>
          <!--end::Phone-->
        </div>
        <!--end::Col-->
        <!--begin::Col-->
        <div class="col-sm-6 ps-lg-10">
          <!--begin::Address-->
          <div
            class="text-center bg-light card-rounded d-flex flex-column justify-content-center p-10 h-lg-100"
          >
            <!--begin::Icon-->
            <!--begin::Svg Icon | path: icons/duotune/general/gen018.svg-->
            <span class="svg-icon svg-icon-3tx svg-icon-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
                  fill="black"
                ></path>
                <path
                  d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
                  fill="black"
                ></path>
              </svg>
            </span>
            <!--end::Svg Icon-->
            <!--end::Icon-->
            <!--begin::Subtitle-->
            <h1 class="text-dark fw-bolder my-5">Our Office</h1>
            <!--end::Subtitle-->
            <!--begin::Description-->
            <div class="text-gray-700 fs-3 fw-bold">
              {{ userprofile.address1 }}, {{ userprofile.address2 }},{{
                userprofile.city
              }}
              {{ userprofile.state }}, {{ userprofile.country }},{{
                userprofile.postalcode
              }}
            </div>
            <!--end::Description-->
          </div>
          <!--end::Address-->
        </div>
        <!--end::Col-->
      </div>
      <!--end::Row-->
      <!--begin::Card-->

      <!--end::Card-->
    </div>
    <!--end::Body-->
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

<script>
import { defineComponent, computed } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
//import KTChartWidget1 from "@/components/widgets/charts/Widget1.vue";
//import KTListWidget5 from "@/components/widgets/list/Widget5.vue";
//import KTTableWidget3 from "@/components/widgets/table/Widget3.vue";
//import KTListWidget1 from "@/components/widgets/list/Widget1.vue";
//import { StepperComponent } from "@/assets/ts/components/_contact";

import { useStore } from "vuex";
import { latLng } from "leaflet";
export default defineComponent({
  name: "account-overview",
  components: {
    GoogleMap,
    Marker
  },
  data() {
    return {
      zoom: 13,
      center: latLng(47.41322, -1.219482),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(47.41322, -1.219482),
      withTooltip: latLng(47.41422, -1.250482),
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    }
  },
  setup() {
    const store = useStore();
    //const router = useRouter();

    /* onMounted(() => {
      store.dispatch(Actions.GET_PROFILE)
      setCurrentPageBreadcrumbs("Overview", ["Account"]);
    }); */

    const userprofile = computed(() => {
      console.log(
        "Getting user Details -- " +
          JSON.stringify(store.getters.gettingSingleuserprofile)
      );
      return store.getters.gettingSingleuserprofile;
    });

    const companyprofile = computed(() => {
      console.log(
        "Getting Compnay Details in User Profile View page-- " +
          JSON.stringify(store.getters.getSingleCompanyprofile)
      );
      return store.getters.getSingleCompanyprofile;
    });

    return {
      userprofile,
      companyprofile
    };
  }
});
</script>
