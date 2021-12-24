<template>
  <div
    class="content flex-row-fluid"
    id="kt_content"
    data-select2-id="select2-data-kt_content"
  >
    <!--begin::Form-->
    <form action="#">
      <!--begin::Card-->
      <div class="card mb-7">
        <!--begin::Card body-->
        <div class="card-body">
          <!--begin::Compact form-->
          <div class="d-flex align-items-center">
            <!--begin::Input group-->
            <div class="position-relative w-md-400px me-md-2">
              <!--begin::Svg Icon | path: icons/duotone/General/Search.svg-->
              <span
                class="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ms-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                >
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <rect x="0" y="0" width="24" height="24"></rect>
                    <path
                      d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                      fill="#000000"
                      fill-rule="nonzero"
                      opacity="0.3"
                    ></path>
                    <path
                      d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                      fill="#000000"
                      fill-rule="nonzero"
                    ></path>
                  </g>
                </svg>
              </span>
              <!--end::Svg Icon-->
              <input
                type="text"
                class="form-control form-control-solid ps-10"
                name="search"
                value=""
                placeholder="Search"
              />
            </div>
            <!--end::Input group-->
            <!--begin:Action-->
            <div class="d-flex align-items-center">
              <button type="submit" class="btn btn-primary me-5">Search</button>
              <a
                id="kt_horizontal_search_advanced_link"
                class="btn btn-link collapsed"
                data-bs-toggle="collapse"
                href="#kt_advanced_search_form"
                aria-expanded="false"
                >Advanced Search</a
              >
            </div>
            <!--end:Action-->
          </div>
          <!--end::Compact form-->
          <!--begin::Advance form-->
          <div
            class="collapse"
            id="kt_advanced_search_form"
            style=""
            data-select2-id="select2-data-kt_advanced_search_form"
          >
            <!--begin::Separator-->
            <div class="separator separator-dashed mt-9 mb-6"></div>
            <!--end::Separator-->
            <!--begin::Row-->
            <div class="row g-8 mb-8">
              <!--begin::Col-->
              <div class="col-xxl-7">
                <label class="fs-6 form-label fw-bolder text-dark">Tags</label>
                <tags
                  class="tagify form-control form-control-solid tagify--noTags tagify--empty"
                  tabindex="-1"
                >
                  <span
                    contenteditable=""
                    data-placeholder="&ZeroWidthSpace;"
                    aria-placeholder=""
                    class="tagify__input"
                    role="textbox"
                    aria-autocomplete="both"
                    aria-multiline="false"
                  ></span> </tags
                ><input
                  type="text"
                  class="form-control form-control form-control-solid"
                  name="tags"
                  value="products, users, events"
                />
              </div>
              <!--end::Col-->
              <!--begin::Col-->
              <div class="col-xxl-5">
                <!--begin::Row-->
                <div class="row g-8">
                  <!--begin::Col-->
                  <div class="col-lg-6">
                    <label class="fs-6 form-label fw-bolder text-dark"
                      >Team Type</label
                    >
                    <!--begin::Select-->
                    <select
                      class="form-select form-select-solid select2-hidden-accessible"
                      data-control="select2"
                      data-placeholder="In Progress"
                      data-hide-search="true"
                      data-select2-id="select2-data-10-j0pq"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option value=""></option>
                      <option value="1">Not started</option>
                      <option
                        value="2"
                        selected="selected"
                        data-select2-id="select2-data-12-j9ja"
                        >In Progress</option
                      >
                      <option value="3">Done</option> </select
                    ><span
                      class="select2 select2-container select2-container--bootstrap5"
                      dir="ltr"
                      data-select2-id="select2-data-11-2evi"
                      style="width: 100%;"
                      ><span class="selection"
                        ><span
                          class="select2-selection select2-selection--single form-select form-select-solid"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabindex="0"
                          aria-disabled="false"
                          aria-labelledby="select2-u63h-container"
                          aria-controls="select2-u63h-container"
                          ><span
                            class="select2-selection__rendered"
                            id="select2-u63h-container"
                            role="textbox"
                            aria-readonly="true"
                            title="In Progress"
                            >In Progress</span
                          ><span
                            class="select2-selection__arrow"
                            role="presentation"
                            ><b role="presentation"></b></span></span></span
                      ><span class="dropdown-wrapper" aria-hidden="true"></span
                    ></span>
                    <!--end::Select-->
                  </div>
                  <!--end::Col-->
                  <!--begin::Col-->
                  <div class="col-lg-6">
                    <label class="fs-6 form-label fw-bolder text-dark"
                      >Select Group</label
                    >
                    <!--begin::Radio group-->
                    <div class="nav-group nav-group-fluid">
                      <!--begin::Option-->
                      <label>
                        <input
                          type="radio"
                          class="btn-check"
                          name="type"
                          value="has"
                          checked="checked"
                        />
                        <span
                          class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bolder px-4"
                          >All</span
                        >
                      </label>
                      <!--end::Option-->
                      <!--begin::Option-->
                      <label>
                        <input
                          type="radio"
                          class="btn-check"
                          name="type"
                          value="users"
                        />
                        <span
                          class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bolder px-4"
                          >Users</span
                        >
                      </label>
                      <!--end::Option-->
                      <!--begin::Option-->
                      <label>
                        <input
                          type="radio"
                          class="btn-check"
                          name="type"
                          value="orders"
                        />
                        <span
                          class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bolder px-4"
                          >Orders</span
                        >
                      </label>
                      <!--end::Option-->
                    </div>
                    <!--end::Radio group-->
                  </div>
                  <!--end::Col-->
                </div>
                <!--end::Row-->
              </div>
              <!--end::Col-->
            </div>
            <!--end::Row-->
            <!--begin::Row-->
            <div class="row g-8" data-select2-id="select2-data-92-fwkz">
              <!--begin::Col-->
              <div class="col-xxl-7">
                <!--begin::Row-->
                <div class="row g-8">
                  <!--begin::Col-->
                  <div class="col-lg-4">
                    <label class="fs-6 form-label fw-bolder text-dark"
                      >Min. Amount</label
                    >
                    <!--begin::Dialer-->
                    <div
                      class="position-relative"
                      data-kt-dialer="true"
                      data-kt-dialer-min="1000"
                      data-kt-dialer-max="50000"
                      data-kt-dialer-step="1000"
                      data-kt-dialer-prefix="$"
                      data-kt-dialer-decimals="2"
                    >
                      <!--begin::Decrease control-->
                      <button
                        type="button"
                        class="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0"
                        data-kt-dialer-control="decrease"
                      >
                        <!--begin::Svg Icon | path: icons/duotone/Code/Minus.svg-->
                        <span class="svg-icon svg-icon-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <circle
                              fill="#000000"
                              opacity="0.3"
                              cx="12"
                              cy="12"
                              r="10"
                            ></circle>
                            <rect
                              fill="#000000"
                              x="6"
                              y="11"
                              width="12"
                              height="2"
                              rx="1"
                            ></rect>
                          </svg>
                        </span>
                        <!--end::Svg Icon-->
                      </button>
                      <!--end::Decrease control-->
                      <!--begin::Input control-->
                      <input
                        type="text"
                        class="form-control form-control-solid border-0 ps-12"
                        data-kt-dialer-control="input"
                        placeholder="Amount"
                        name="manageBudget"
                        readonly="readonly"
                        value="$50"
                      />
                      <!--end::Input control-->
                      <!--begin::Increase control-->
                      <button
                        type="button"
                        class="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0"
                        data-kt-dialer-control="increase"
                      >
                        <!--begin::Svg Icon | path: icons/duotone/Code/Plus.svg-->
                        <span class="svg-icon svg-icon-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <circle
                              fill="#000000"
                              opacity="0.3"
                              cx="12"
                              cy="12"
                              r="10"
                            ></circle>
                            <path
                              d="M11,11 L11,7 C11,6.44771525 11.4477153,6 12,6 C12.5522847,6 13,6.44771525 13,7 L13,11 L17,11 C17.5522847,11 18,11.4477153 18,12 C18,12.5522847 17.5522847,13 17,13 L13,13 L13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 L11,13 L7,13 C6.44771525,13 6,12.5522847 6,12 C6,11.4477153 6.44771525,11 7,11 L11,11 Z"
                              fill="#000000"
                            ></path>
                          </svg>
                        </span>
                        <!--end::Svg Icon-->
                      </button>
                      <!--end::Increase control-->
                    </div>
                    <!--end::Dialer-->
                  </div>
                  <!--end::Col-->
                  <!--begin::Col-->
                  <div class="col-lg-4">
                    <label class="fs-6 form-label fw-bolder text-dark"
                      >Max. Amount</label
                    >
                    <!--begin::Dialer-->
                    <div
                      class="position-relative"
                      data-kt-dialer="true"
                      data-kt-dialer-min="1000"
                      data-kt-dialer-max="50000"
                      data-kt-dialer-step="1000"
                      data-kt-dialer-prefix="$"
                      data-kt-dialer-decimals="2"
                    >
                      <!--begin::Decrease control-->
                      <button
                        type="button"
                        class="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0"
                        data-kt-dialer-control="decrease"
                      >
                        <!--begin::Svg Icon | path: icons/duotone/Code/Minus.svg-->
                        <span class="svg-icon svg-icon-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <circle
                              fill="#000000"
                              opacity="0.3"
                              cx="12"
                              cy="12"
                              r="10"
                            ></circle>
                            <rect
                              fill="#000000"
                              x="6"
                              y="11"
                              width="12"
                              height="2"
                              rx="1"
                            ></rect>
                          </svg>
                        </span>
                        <!--end::Svg Icon-->
                      </button>
                      <!--end::Decrease control-->
                      <!--begin::Input control-->
                      <input
                        type="text"
                        class="form-control form-control-solid border-0 ps-12"
                        data-kt-dialer-control="input"
                        placeholder="Amount"
                        name="manageBudget"
                        readonly="readonly"
                        value="$100"
                      />
                      <!--end::Input control-->
                      <!--begin::Increase control-->
                      <button
                        type="button"
                        class="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0"
                        data-kt-dialer-control="increase"
                      >
                        <!--begin::Svg Icon | path: icons/duotone/Code/Plus.svg-->
                        <span class="svg-icon svg-icon-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <circle
                              fill="#000000"
                              opacity="0.3"
                              cx="12"
                              cy="12"
                              r="10"
                            ></circle>
                            <path
                              d="M11,11 L11,7 C11,6.44771525 11.4477153,6 12,6 C12.5522847,6 13,6.44771525 13,7 L13,11 L17,11 C17.5522847,11 18,11.4477153 18,12 C18,12.5522847 17.5522847,13 17,13 L13,13 L13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 L11,13 L7,13 C6.44771525,13 6,12.5522847 6,12 C6,11.4477153 6.44771525,11 7,11 L11,11 Z"
                              fill="#000000"
                            ></path>
                          </svg>
                        </span>
                        <!--end::Svg Icon-->
                      </button>
                      <!--end::Increase control-->
                    </div>
                    <!--end::Dialer-->
                  </div>
                  <!--end::Col-->
                  <!--begin::Col-->
                  <div class="col-lg-4">
                    <label class="fs-6 form-label fw-bolder text-dark"
                      >Team Size</label
                    >
                    <input
                      type="text"
                      class="form-control form-control form-control-solid"
                      name="city"
                    />
                  </div>
                  <!--end::Col-->
                </div>
                <!--end::Row-->
              </div>
              <!--end::Col-->
              <!--begin::Col-->
              <div class="col-xxl-5">
                <!--begin::Row-->
                <div class="row g-8">
                  <!--begin::Col-->
                  <div class="col-lg-6" data-select2-id="select2-data-91-d40t">
                    <label class="fs-6 form-label fw-bolder text-dark"
                      >Category</label
                    >
                    <!--begin::Select-->
                    <select
                      class="form-select form-select-solid select2-hidden-accessible"
                      data-control="select2"
                      data-placeholder="In Progress"
                      data-hide-search="true"
                      data-select2-id="select2-data-13-0rjc"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option
                        value=""
                        data-select2-id="select2-data-93-5l49"
                      ></option>
                      <option value="1" data-select2-id="select2-data-94-2qlx"
                        >Not started</option
                      >
                      <option
                        value="2"
                        selected="selected"
                        data-select2-id="select2-data-15-nb0k"
                        >Select</option
                      >
                      <option value="3" data-select2-id="select2-data-95-mn0j"
                        >Done</option
                      > </select
                    ><span
                      class="select2 select2-container select2-container--bootstrap5 select2-container--below"
                      dir="ltr"
                      data-select2-id="select2-data-14-l1ff"
                      style="width: 100%;"
                      ><span class="selection"
                        ><span
                          class="select2-selection select2-selection--single form-select form-select-solid"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabindex="0"
                          aria-disabled="false"
                          aria-labelledby="select2-0x02-container"
                          aria-controls="select2-0x02-container"
                          ><span
                            class="select2-selection__rendered"
                            id="select2-0x02-container"
                            role="textbox"
                            aria-readonly="true"
                            title="Select"
                            >Select</span
                          ><span
                            class="select2-selection__arrow"
                            role="presentation"
                            ><b role="presentation"></b></span></span></span
                      ><span class="dropdown-wrapper" aria-hidden="true"></span
                    ></span>
                    <!--end::Select-->
                  </div>
                  <!--end::Col-->
                  <!--begin::Col-->
                  <div class="col-lg-6">
                    <label class="fs-6 form-label fw-bolder text-dark"
                      >Status</label
                    >
                    <div
                      class="form-check form-switch form-check-custom form-check-solid mt-1"
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexSwitchChecked"
                        checked="checked"
                      />
                      <label class="form-check-label" for="flexSwitchChecked"
                        >Active</label
                      >
                    </div>
                  </div>
                  <!--end::Col-->
                </div>
                <!--end::Row-->
              </div>
              <!--end::Col-->
            </div>
            <!--end::Row-->
          </div>
          <!--end::Advance form-->
        </div>
        <!--end::Card body-->
      </div>
      <!--end::Card-->
    </form>
    <!--end::Form-->
    <!--begin::Tab Content-->
    <div class="tab-content">
      <!--begin::Tab pane-->
      <div id="kt_project_users_card_pane" class="tab-pane fade show active">
        <usercard v-for="user in users" :key="user.id" :user="user" />
        <!--begin::Row-->
        <div class="row g-6 g-xl-9">
          <!--begin::Col-->
          <div class="col-md-6 col-xxl-4"></div>
          <!--end::Col-->
        </div>
        <!--end::Row-->
        <!--begin::Pagination-->
        <div class="d-flex flex-stack flex-wrap pt-10">
          <div class="fs-6 fw-bold text-gray-700">
            Showing 1 to 10 of 50 entries
          </div>
          <!--begin::Pages-->
          <ul class="pagination">
            <li class="page-item previous">
              <a href="#" class="page-link">
                <i class="previous"></i>
              </a>
            </li>
            <li class="page-item active">
              <a href="#" class="page-link">1</a>
            </li>
            <li class="page-item">
              <a href="#" class="page-link">2</a>
            </li>
            <li class="page-item">
              <a href="#" class="page-link">3</a>
            </li>
            <li class="page-item">
              <a href="#" class="page-link">4</a>
            </li>
            <li class="page-item">
              <a href="#" class="page-link">5</a>
            </li>
            <li class="page-item">
              <a href="#" class="page-link">6</a>
            </li>
            <li class="page-item next">
              <a href="#" class="page-link">
                <i class="next"></i>
              </a>
            </li>
          </ul>
          <!--end::Pages-->
        </div>
        <!--end::Pagination-->
      </div>
      <!--end::Tab pane-->
      <!--begin::Tab pane-->
      <div id="kt_project_users_table_pane" class="tab-pane fade">
        <!--begin::Card-->
        <div class="card card-flush">
          <!--begin::Card body-->
          <div class="card-body pt-0">
            <!--begin::Table container-->
            <div class="table-responsive">
              <!--begin::Table-->
              <div
                id="kt_project_users_table_wrapper"
                class="dataTables_wrapper dt-bootstrap4 no-footer"
              >
                <div class="table-responsive">
                  <table
                    id="kt_project_users_table"
                    class="table table-row-bordered table-row-dashed gy-4 align-middle fw-bolder dataTable no-footer"
                    role="grid"
                  >
                    <!--begin::Head-->
                    <thead class="fs-7 text-gray-400 text-uppercase">
                      <tr role="row">
                        <th
                          class="min-w-250px sorting"
                          tabindex="0"
                          aria-controls="kt_project_users_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Manager: activate to sort column ascending"
                          style="width: 0px;"
                        >
                          Manager
                        </th>
                        <th
                          class="min-w-150px sorting"
                          tabindex="0"
                          aria-controls="kt_project_users_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Date: activate to sort column ascending"
                          style="width: 0px;"
                        >
                          Date
                        </th>
                        <th
                          class="min-w-90px sorting"
                          tabindex="0"
                          aria-controls="kt_project_users_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Amount: activate to sort column ascending"
                          style="width: 0px;"
                        >
                          Amount
                        </th>
                        <th
                          class="min-w-90px sorting"
                          tabindex="0"
                          aria-controls="kt_project_users_table"
                          rowspan="1"
                          colspan="1"
                          aria-label="Status: activate to sort column ascending"
                          style="width: 0px;"
                        >
                          Status
                        </th>
                        <th
                          class="min-w-50px text-end sorting_disabled"
                          rowspan="1"
                          colspan="1"
                          aria-label="Details"
                          style="width: 0px;"
                        >
                          Details
                        </th>
                      </tr>
                    </thead>
                    <!--end::Head-->
                    <!--begin::Body-->
                    <tbody class="fs-6">
                      <tr class="odd">
                        <td>
                          <!--begin::User-->
                          <div class="d-flex align-items-center">
                            <!--begin::Wrapper-->
                            <div class="me-5 position-relative">
                              <!--begin::Avatar-->
                              <div class="symbol symbol-35px symbol-circle">
                                <img
                                  alt="Pic"
                                  src="assets/media/avatars/150-1.jpg"
                                />
                              </div>
                              <!--end::Avatar-->
                            </div>
                            <!--end::Wrapper-->
                            <!--begin::Info-->
                            <div
                              class="d-flex flex-column justify-content-center"
                            >
                              <a
                                href=""
                                class="mb-1 text-gray-800 text-hover-primary"
                                >Emma Smith</a
                              >
                              <div class="fw-bold fs-6 text-gray-400">
                                e.smith@kpmg.com.au
                              </div>
                            </div>
                            <!--end::Info-->
                          </div>
                          <!--end::User-->
                        </td>
                        <td data-order="2021-07-25T00:00:00+08:00">
                          Jul 25, 2021
                        </td>
                        <td>$484.00</td>
                        <td>
                          <span
                            class="badge badge-light-info fw-bolder px-4 py-3"
                            >In progress</span
                          >
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr class="even">
                        <td>
                          <!--begin::User-->
                          <div class="d-flex align-items-center">
                            <!--begin::Wrapper-->
                            <div class="me-5 position-relative">
                              <!--begin::Avatar-->
                              <div class="symbol symbol-35px symbol-circle">
                                <span
                                  class="symbol-label bg-light-danger text-danger fw-bold"
                                  >M</span
                                >
                              </div>
                              <!--end::Avatar-->
                              <!--begin::Online-->
                              <div
                                class="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"
                              ></div>
                              <!--end::Online-->
                            </div>
                            <!--end::Wrapper-->
                            <!--begin::Info-->
                            <div
                              class="d-flex flex-column justify-content-center"
                            >
                              <a
                                href=""
                                class="mb-1 text-gray-800 text-hover-primary"
                                >Melody Macy</a
                              >
                              <div class="fw-bold fs-6 text-gray-400">
                                melody@altbox.com
                              </div>
                            </div>
                            <!--end::Info-->
                          </div>
                          <!--end::User-->
                        </td>
                        <td data-order="2021-10-25T00:00:00+08:00">
                          Oct 25, 2021
                        </td>
                        <td>$873.00</td>
                        <td>
                          <span
                            class="badge badge-light-info fw-bolder px-4 py-3"
                            >In progress</span
                          >
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr class="odd">
                        <td>
                          <!--begin::User-->
                          <div class="d-flex align-items-center">
                            <!--begin::Wrapper-->
                            <div class="me-5 position-relative">
                              <!--begin::Avatar-->
                              <div class="symbol symbol-35px symbol-circle">
                                <img
                                  alt="Pic"
                                  src="assets/media/avatars/150-26.jpg"
                                />
                              </div>
                              <!--end::Avatar-->
                            </div>
                            <!--end::Wrapper-->
                            <!--begin::Info-->
                            <div
                              class="d-flex flex-column justify-content-center"
                            >
                              <a
                                href=""
                                class="mb-1 text-gray-800 text-hover-primary"
                                >Max Smith</a
                              >
                              <div class="fw-bold fs-6 text-gray-400">
                                max@kt.com
                              </div>
                            </div>
                            <!--end::Info-->
                          </div>
                          <!--end::User-->
                        </td>
                        <td data-order="2021-12-20T00:00:00+08:00">
                          Dec 20, 2021
                        </td>
                        <td>$480.00</td>
                        <td>
                          <span
                            class="badge badge-light-danger fw-bolder px-4 py-3"
                            >Rejected</span
                          >
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr class="even">
                        <td>
                          <!--begin::User-->
                          <div class="d-flex align-items-center">
                            <!--begin::Wrapper-->
                            <div class="me-5 position-relative">
                              <!--begin::Avatar-->
                              <div class="symbol symbol-35px symbol-circle">
                                <img
                                  alt="Pic"
                                  src="assets/media/avatars/150-4.jpg"
                                />
                              </div>
                              <!--end::Avatar-->
                            </div>
                            <!--end::Wrapper-->
                            <!--begin::Info-->
                            <div
                              class="d-flex flex-column justify-content-center"
                            >
                              <a
                                href=""
                                class="mb-1 text-gray-800 text-hover-primary"
                                >Sean Bean</a
                              >
                              <div class="fw-bold fs-6 text-gray-400">
                                sean@dellito.com
                              </div>
                            </div>
                            <!--end::Info-->
                          </div>
                          <!--end::User-->
                        </td>
                        <td data-order="2021-02-21T00:00:00+08:00">
                          Feb 21, 2021
                        </td>
                        <td>$866.00</td>
                        <td>
                          <span
                            class="badge badge-light-danger fw-bolder px-4 py-3"
                            >Rejected</span
                          >
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr class="odd">
                        <td>
                          <!--begin::User-->
                          <div class="d-flex align-items-center">
                            <!--begin::Wrapper-->
                            <div class="me-5 position-relative">
                              <!--begin::Avatar-->
                              <div class="symbol symbol-35px symbol-circle">
                                <img
                                  alt="Pic"
                                  src="assets/media/avatars/150-15.jpg"
                                />
                              </div>
                              <!--end::Avatar-->
                            </div>
                            <!--end::Wrapper-->
                            <!--begin::Info-->
                            <div
                              class="d-flex flex-column justify-content-center"
                            >
                              <a
                                href=""
                                class="mb-1 text-gray-800 text-hover-primary"
                                >Brian Cox</a
                              >
                              <div class="fw-bold fs-6 text-gray-400">
                                brian@exchange.com
                              </div>
                            </div>
                            <!--end::Info-->
                          </div>
                          <!--end::User-->
                        </td>
                        <td data-order="2021-07-25T00:00:00+08:00">
                          Jul 25, 2021
                        </td>
                        <td>$706.00</td>
                        <td>
                          <span
                            class="badge badge-light-success fw-bolder px-4 py-3"
                            >Approved</span
                          >
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr class="even">
                        <td>
                          <!--begin::User-->
                          <div class="d-flex align-items-center">
                            <!--begin::Wrapper-->
                            <div class="me-5 position-relative">
                              <!--begin::Avatar-->
                              <div class="symbol symbol-35px symbol-circle">
                                <span
                                  class="symbol-label bg-light-warning text-warning fw-bold"
                                  >M</span
                                >
                              </div>
                              <!--end::Avatar-->
                              <!--begin::Online-->
                              <div
                                class="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"
                              ></div>
                              <!--end::Online-->
                            </div>
                            <!--end::Wrapper-->
                            <!--begin::Info-->
                            <div
                              class="d-flex flex-column justify-content-center"
                            >
                              <a
                                href=""
                                class="mb-1 text-gray-800 text-hover-primary"
                                >Mikaela Collins</a
                              >
                              <div class="fw-bold fs-6 text-gray-400">
                                mikaela@pexcom.com
                              </div>
                            </div>
                            <!--end::Info-->
                          </div>
                          <!--end::User-->
                        </td>
                        <td data-order="2021-06-20T00:00:00+08:00">
                          Jun 20, 2021
                        </td>
                        <td>$402.00</td>
                        <td>
                          <span
                            class="badge badge-light-success fw-bolder px-4 py-3"
                            >Approved</span
                          >
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr class="odd">
                        <td>
                          <!--begin::User-->
                          <div class="d-flex align-items-center">
                            <!--begin::Wrapper-->
                            <div class="me-5 position-relative">
                              <!--begin::Avatar-->
                              <div class="symbol symbol-35px symbol-circle">
                                <img
                                  alt="Pic"
                                  src="assets/media/avatars/150-8.jpg"
                                />
                              </div>
                              <!--end::Avatar-->
                            </div>
                            <!--end::Wrapper-->
                            <!--begin::Info-->
                            <div
                              class="d-flex flex-column justify-content-center"
                            >
                              <a
                                href=""
                                class="mb-1 text-gray-800 text-hover-primary"
                                >Francis Mitcham</a
                              >
                              <div class="fw-bold fs-6 text-gray-400">
                                f.mitcham@kpmg.com.au
                              </div>
                            </div>
                            <!--end::Info-->
                          </div>
                          <!--end::User-->
                        </td>
                        <td data-order="2021-11-10T00:00:00+08:00">
                          Nov 10, 2021
                        </td>
                        <td>$676.00</td>
                        <td>
                          <span
                            class="badge badge-light-warning fw-bolder px-4 py-3"
                            >Pending</span
                          >
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr class="even">
                        <td>
                          <!--begin::User-->
                          <div class="d-flex align-items-center">
                            <!--begin::Wrapper-->
                            <div class="me-5 position-relative">
                              <!--begin::Avatar-->
                              <div class="symbol symbol-35px symbol-circle">
                                <span
                                  class="symbol-label bg-light-danger text-danger fw-bold"
                                  >O</span
                                >
                              </div>
                              <!--end::Avatar-->
                              <!--begin::Online-->
                              <div
                                class="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"
                              ></div>
                              <!--end::Online-->
                            </div>
                            <!--end::Wrapper-->
                            <!--begin::Info-->
                            <div
                              class="d-flex flex-column justify-content-center"
                            >
                              <a
                                href=""
                                class="mb-1 text-gray-800 text-hover-primary"
                                >Olivia Wild</a
                              >
                              <div class="fw-bold fs-6 text-gray-400">
                                olivia@corpmail.com
                              </div>
                            </div>
                            <!--end::Info-->
                          </div>
                          <!--end::User-->
                        </td>
                        <td data-order="2021-08-19T00:00:00+08:00">
                          Aug 19, 2021
                        </td>
                        <td>$636.00</td>
                        <td>
                          <span
                            class="badge badge-light-success fw-bolder px-4 py-3"
                            >Approved</span
                          >
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr class="odd">
                        <td>
                          <!--begin::User-->
                          <div class="d-flex align-items-center">
                            <!--begin::Wrapper-->
                            <div class="me-5 position-relative">
                              <!--begin::Avatar-->
                              <div class="symbol symbol-35px symbol-circle">
                                <span
                                  class="symbol-label bg-light-primary text-primary fw-bold"
                                  >N</span
                                >
                              </div>
                              <!--end::Avatar-->
                              <!--begin::Online-->
                              <div
                                class="bg-success position-absolute border border-4 border-white h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n1 mt-n1"
                              ></div>
                              <!--end::Online-->
                            </div>
                            <!--end::Wrapper-->
                            <!--begin::Info-->
                            <div
                              class="d-flex flex-column justify-content-center"
                            >
                              <a
                                href=""
                                class="mb-1 text-gray-800 text-hover-primary"
                                >Neil Owen</a
                              >
                              <div class="fw-bold fs-6 text-gray-400">
                                owen.neil@gmail.com
                              </div>
                            </div>
                            <!--end::Info-->
                          </div>
                          <!--end::User-->
                        </td>
                        <td data-order="2021-09-22T00:00:00+08:00">
                          Sep 22, 2021
                        </td>
                        <td>$808.00</td>
                        <td>
                          <span
                            class="badge badge-light-warning fw-bolder px-4 py-3"
                            >Pending</span
                          >
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-light btn-sm">View</a>
                        </td>
                      </tr>
                      <tr class="even">
                        <td>
                          <!--begin::User-->
                          <div class="d-flex align-items-center">
                            <!--begin::Wrapper-->
                            <div class="me-5 position-relative">
                              <!--begin::Avatar-->
                              <div class="symbol symbol-35px symbol-circle">
                                <img
                                  alt="Pic"
                                  src="assets/media/avatars/150-6.jpg"
                                />
                              </div>
                              <!--end::Avatar-->
                            </div>
                            <!--end::Wrapper-->
                            <!--begin::Info-->
                            <div
                              class="d-flex flex-column justify-content-center"
                            >
                              <a
                                href=""
                                class="mb-1 text-gray-800 text-hover-primary"
                                >Dan Wilson</a
                              >
                              <div class="fw-bold fs-6 text-gray-400">
                                dam@consilting.com
                              </div>
                            </div>
                            <!--end::Info-->
                          </div>
                          <!--end::User-->
                        </td>
                        <td data-order="2021-12-20T00:00:00+08:00">
                          Dec 20, 2021
                        </td>
                        <td>$749.00</td>
                        <td>
                          <span
                            class="badge badge-light-danger fw-bolder px-4 py-3"
                            >Rejected</span
                          >
                        </td>
                        <td class="text-end">
                          <a href="#" @click="view" class="btn btn-light btn-sm"
                            >View</a
                          >
                          <button @click="greet">Greet</button>
                        </td>
                      </tr>
                    </tbody>
                    <!--end::Body-->
                  </table>
                </div>
                <div class="row">
                  <div
                    class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"
                  >
                    <div
                      class="dataTables_length"
                      id="kt_project_users_table_length"
                    >
                      <label
                        ><select
                          name="kt_project_users_table_length"
                          aria-controls="kt_project_users_table"
                          class="form-select form-select-sm form-select-solid"
                          ><option value="10">10</option
                          ><option value="25">25</option
                          ><option value="50">50</option
                          ><option value="100">100</option></select
                        ></label
                      >
                    </div>
                  </div>
                  <div
                    class="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end"
                  >
                    <div
                      class="dataTables_paginate paging_simple_numbers"
                      id="kt_project_users_table_paginate"
                    >
                      <ul class="pagination">
                        <li
                          class="paginate_button page-item previous disabled"
                          id="kt_project_users_table_previous"
                        >
                          <a
                            href="#"
                            aria-controls="kt_project_users_table"
                            data-dt-idx="0"
                            tabindex="0"
                            class="page-link"
                            ><i class="previous"></i
                          ></a>
                        </li>
                        <li class="paginate_button page-item active">
                          <a
                            href="#"
                            aria-controls="kt_project_users_table"
                            data-dt-idx="1"
                            tabindex="0"
                            class="page-link"
                            >1</a
                          >
                        </li>
                        <li class="paginate_button page-item ">
                          <a
                            href="#"
                            aria-controls="kt_project_users_table"
                            data-dt-idx="2"
                            tabindex="0"
                            class="page-link"
                            >2</a
                          >
                        </li>
                        <li class="paginate_button page-item ">
                          <a
                            href="#"
                            aria-controls="kt_project_users_table"
                            data-dt-idx="3"
                            tabindex="0"
                            class="page-link"
                            >3</a
                          >
                        </li>
                        <li
                          class="paginate_button page-item next"
                          id="kt_project_users_table_next"
                        >
                          <a
                            href="#"
                            aria-controls="kt_project_users_table"
                            data-dt-idx="4"
                            tabindex="0"
                            class="page-link"
                            ><i class="next"></i
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!--end::Table-->
            </div>
            <!--end::Table container-->
          </div>
          <!--end::Card body-->
        </div>
        <!--end::Card-->
      </div>
      <!--end::Tab pane-->
    </div>
    <!--end::Tab Content-->
  </div>
</template>

<script lang="ts">
import { push } from "object-path";
import { defineComponent, ref, reactive, onMounted, computed } from "vue";
import usercard from "@/components/users/listcard.vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums.ts";
export default defineComponent({
  name: "kt-widget-2",
  components: {
    usercard
  },
  props: {
    widgetClasses: String,
    profile: Object
  },

  methods: {},

  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch(Actions.GET_ALLCOMPANYPROFILES);
      //setCurrentPageBreadcrumbs("Overview", ["Account"]);
    });

    const users = computed(() => {
      console.log(
        "Getting user Details -- " +
          JSON.stringify(store.getters.Companyprofile)
      );
      return store.getters.Companyprofile;
    });

    /*
    const users = ref([
      {
        id : 1,
        email: "durairajasivam@gmail.com",
        image:"media/avatars/150-4.jpg",
        nickname: "Dhanabalan",
        name: "Durairajasivam",
        surname: "Dhanabalan",
        job: "Software Engineer",
        address1: "39 Bedok SouthRoad",
        address2: "#03-713",
        phonenumber:"92283994",
        postalcode: "460039",
        city: "Singapore",
        state: "Singapore",
        country: "Singapore",
        website: "www.mexo.com",        
        companyname: "Mexo Solutions pte ltd"      
      },
      {
        id : 2,
        image: "media/avatars/150-4.jpg",
        name: "Sean Bean",
        jobtitle: "PHP, SQLite, Artisan CLI"
      },
      {
        id : 3,
        image: "media/avatars/150-12.jpg",
        name: "Brian Cox",
        jobtitle: "PHP, SQLite, Artisan CLI"
      },
      {
        id : 4,  
        image: "media/avatars/150-8.jpg",
        name: "Francis Mitcham",
        jobtitle: "PHP, SQLite, Artisan CLI"
      },
      {
        id : 5,
        image: "media/avatars/150-6.jpg",
        name: "Dan Wilson",
        jobtitle: "PHP, SQLite, Artisan CLI"
      },
       {
        id : 6,
        image: "media/avatars/150-1.jpg",
        name: "Emma Smith",
        jobtitle: "Project Manager"
      },
      {
        id : 7,
        image: "media/avatars/150-4.jpg",
        name: "Sean Bean",
        jobtitle: "PHP, SQLite, Artisan CLI"
      },
      {
        id : 8,
        image: "media/avatars/150-12.jpg",
        name: "Brian Cox",
        jobtitle: "PHP, SQLite, Artisan CLI"
      },
      {
        id : 9,  
        image: "media/avatars/150-8.jpg",
        name: "Francis Mitcham",
        jobtitle: "PHP, SQLite, Artisan CLI"
      },
      {
        id : 10,
        image: "media/avatars/150-6.jpg",
        name: "Dan Wilson",
        jobtitle: "PHP, SQLite, Artisan CLI"
      }
    ]); */

    return {
      users,
      nested: reactive({})
    };
  }
});
</script>
