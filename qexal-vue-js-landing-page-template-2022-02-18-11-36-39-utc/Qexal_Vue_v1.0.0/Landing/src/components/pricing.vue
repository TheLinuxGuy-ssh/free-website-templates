<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <!-- Pricing start -->
  <section class="section" id="pricing">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-lg-7 text-center">
          <h2 class="fw-bold">Pricing Plan</h2>
          <p class="text-muted">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem ab illo inventore.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="text-center mb-4 pricing-tab">
            <b-tabs
              pills
              justified
              nav-class="rounded-pill d-inline-block shadow-sm"
              content-class="mt-4"
            >
              <b-tab
                title-item-class="d-inline-block"
                title-link-class="rounded-pill"
              >
                <template v-slot:title> Monthly </template>
                <div class="row">
                  <div class="col-lg-4">
                    <div
                      class="card plan-card mt-4 rounded text-center border-0 shadow overflow-hidden"
                    >
                      <div class="card-body px-4 py-5">
                        <div
                          class="icon-mono avatar-md bg-soft-primary rounded mx-auto mb-5 p-3"
                        >
                          <img
                            src="@/assets/images/pricing/1.png"
                            alt=""
                            class="img-fluid d-block mx-auto"
                          />
                        </div>
                        <h4 class="text-uppercase mb-4 pb-1">Basic</h4>
                        <p class="text-muted">
                          Onlinespace: <span class="fw-bold">50MB</span>
                        </p>
                        <p class="text-muted">
                          Support: <span class="fw-bold">No</span>
                        </p>
                        <p class="text-muted mb-4 pb-1">Domain 1</p>
                        <p class="text-muted font-size-14 mb-1">
                          All Extension Included
                        </p>
                        <p
                          class="text-dark font-size-16 font-weight-semibold mb-4"
                        >
                          $9.00 / Month
                        </p>
                        <a
                          href="javascript: void(0);"
                          class="btn btn-soft-primary"
                          >Buy Now</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div
                      class="card plan-card mt-4 rounded text-center border-0 shadow overflow-hidden"
                    >
                      <div class="card-body px-4 py-5">
                        <span
                          class="badge badge-primary pricing-badge shadow-lg"
                          >Most Popular</span
                        >

                        <div
                          class="icon-mono avatar-md bg-soft-primary rounded mx-auto mb-5 p-3"
                        >
                          <img
                            src="@/assets/images/pricing/2.png"
                            alt=""
                            class="img-fluid d-block mx-auto"
                          />
                        </div>
                        <h4 class="text-uppercase mb-4 pb-1">Standard</h4>
                        <p class="text-muted">
                          Onlinespace: <span class="fw-bold">100MB</span>
                        </p>
                        <p class="text-muted">
                          Support: <span class="fw-bold">Yes</span>
                        </p>
                        <p class="text-muted mb-4 pb-1">Domain 1</p>
                        <p class="text-muted font-size-14 mb-1">
                          All Extension Included
                        </p>
                        <p
                          class="text-dark font-size-16 font-weight-semibold mb-4"
                        >
                          $39.00 / Month
                        </p>
                        <a href="javascript: void(0);" class="btn btn-primary"
                          >Buy Now</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div
                      class="card plan-card mt-4 rounded text-center border-0 shadow overflow-hidden"
                    >
                      <div class="card-body px-4 py-5">
                        <div
                          class="icon-mono avatar-md bg-soft-primary rounded mx-auto mb-5 p-3"
                        >
                          <img
                            src="@/assets/images/pricing/3.png"
                            alt=""
                            class="img-fluid d-block mx-auto"
                          />
                        </div>
                        <h4 class="text-uppercase mb-4 pb-1">Premium</h4>
                        <p class="text-muted">
                          Onlinespace: <span class="fw-bold">200MB</span>
                        </p>
                        <p class="text-muted">
                          Support: <span class="fw-bold">No</span>
                        </p>
                        <p class="text-muted mb-4 pb-1">Domain 1</p>
                        <p class="text-muted font-size-14 mb-1">
                          All Extension Included
                        </p>
                        <p
                          class="text-dark font-size-16 font-weight-semibold mb-4"
                        >
                          $79.00 / Month
                        </p>
                        <a
                          href="javascript: void(0);"
                          class="btn btn-soft-primary"
                          >Buy Now</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <!--end row-->
              </b-tab>
              <b-tab
                title-item-class="d-inline-block"
                title-link-class="rounded-pill"
              >
                <template v-slot:title> Yearly </template>
                <div class="row">
                  <div class="col-lg-4">
                    <div
                      class="card plan-card mt-4 rounded text-center border-0 shadow overflow-hidden"
                    >
                      <div class="card-body px-4 py-5">
                        <div
                          class="icon-mono avatar-md bg-soft-primary rounded mx-auto mb-5 p-3"
                        >
                          <img
                            src="@/assets/images/pricing/1.png"
                            alt=""
                            class="img-fluid d-block mx-auto"
                          />
                        </div>
                        <h4 class="text-uppercase mb-4 pb-1">Basic</h4>
                        <p class="text-muted">
                          Onlinespace: <span class="fw-bold">50MB</span>
                        </p>
                        <p class="text-muted">
                          Support: <span class="fw-bold">No</span>
                        </p>
                        <p class="text-muted mb-4 pb-1">Domain 1</p>
                        <p class="text-muted font-size-14 mb-1">
                          All Extension Included
                        </p>
                        <p
                          class="text-dark font-size-16 font-weight-semibold mb-4"
                        >
                          $29.00 / Year
                        </p>
                        <a
                          href="javascript: void(0);"
                          class="btn btn-soft-primary"
                          >Buy Now</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div
                      class="card plan-card mt-4 rounded text-center border-0 shadow overflow-hidden"
                    >
                      <div class="card-body px-4 py-5">
                        <div
                          class="icon-mono avatar-md bg-soft-primary rounded mx-auto mb-5 p-3"
                        >
                          <img
                            src="@/assets/images/pricing/2.png"
                            alt=""
                            class="img-fluid d-block mx-auto"
                          />
                        </div>
                        <h4 class="text-uppercase mb-4 pb-1">Standard</h4>
                        <p class="text-muted">
                          Onlinespace: <span class="fw-bold">100MB</span>
                        </p>
                        <p class="text-muted">
                          Support: <span class="fw-bold">Yes</span>
                        </p>
                        <p class="text-muted mb-4 pb-1">Domain 1</p>
                        <p class="text-muted font-size-14 mb-1">
                          All Extension Included
                        </p>
                        <p
                          class="text-dark font-size-16 font-weight-semibold mb-4"
                        >
                          $49.00 / Year
                        </p>
                        <a
                          href="javascript: void(0);"
                          class="btn btn-soft-primary"
                          >Buy Now</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div
                      class="card plan-card mt-4 rounded text-center border-0 shadow overflow-hidden"
                    >
                      <div class="card-body px-4 py-5">
                        <span
                          class="badge badge-primary pricing-badge shadow-lg"
                          >Most Popular</span
                        >
                        <div
                          class="icon-mono avatar-md bg-soft-primary rounded mx-auto mb-5 p-3"
                        >
                          <img
                            src="@/assets/images/pricing/3.png"
                            alt=""
                            class="img-fluid d-block mx-auto"
                          />
                        </div>
                        <h4 class="text-uppercase mb-4 pb-1">Premium</h4>
                        <p class="text-muted">
                          Onlinespace: <span class="fw-bold">200MB</span>
                        </p>
                        <p class="text-muted">
                          Support: <span class="fw-bold">No</span>
                        </p>
                        <p class="text-muted mb-4 pb-1">Domain 1</p>
                        <p class="text-muted font-size-14 mb-1">
                          All Extension Included
                        </p>
                        <p
                          class="text-dark font-size-16 font-weight-semibold mb-4"
                        >
                          $99.00 / Year
                        </p>
                        <a
                          href="javascript: void(0);"
                          class="btn btn-soft-primary"
                          >Buy Now</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <!--end row-->
              </b-tab>
            </b-tabs>

            
          </div>
          <!-- end tab content -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
  <!-- Pricing end -->
</template>