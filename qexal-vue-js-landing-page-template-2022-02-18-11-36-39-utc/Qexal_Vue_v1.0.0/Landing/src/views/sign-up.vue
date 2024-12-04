<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <section
    class="bg-account-pages vh-100 d-flex align-items-center bg-center position-relative"
    :style="{
      'background-image': 'url(' + require('@/assets/images/auth-bg.png') + ')',
    }"
  >
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="bg-white shadow">
            <div class="p-4">
              <div class="text-center mt-3">
                <router-link to="/">
                  <img
                    src="@/assets/images/logo-dark.png"
                    alt=""
                    class="logo-dark"
                    height="30"
                  />
                </router-link>
                <p class="text-muted mt-2">Sign up for a new Account</p>
              </div>
              <div class="p-3">
                <form novalidate="" action="#" method="get" class="av-invalid">
                  <div class="mb-3">
                    <label for="firstname" class="form-label">First Name</label>
                    <input
                      name="firstname"
                      required=""
                      placeholder="First Name"
                      id="firstname"
                      type="text"
                      class="form-control"
                      value=""
                    />
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input
                      name="email"
                      required=""
                      placeholder="Enter Email"
                      id="email"
                      type="email"
                      class="form-control"
                      value=""
                    />
                  </div>
                  <div class="mb-3">
                    <label for="userpassword" class="form-label"
                      >Password</label
                    >
                    <input
                      name="password"
                      required=""
                      placeholder="Enter password"
                      id="userpassword"
                      type="password"
                      class="form-control"
                      value=""
                    />
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="termcondition-Check"
                    />
                    <label class="form-check-label" for="termcondition-Check">
                      I accept
                      <a
                        href="javascript: void(0);"
                        class="text-dark font-weight-semibold"
                        >Terms and Conditions</a
                      >
                    </label>
                  </div>
                  <div class="d-grid mt-3">
                    <button
                      type="button"
                      class="btn-primary btn btn-none btn-block"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="text-center mt-4">
            <p>
              Already have an account ?
              <router-link
                to="/login"
                class="font-weight-semibold text-primary"
              >
                Signin
              </router-link>
            </p>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
  <!-- end section -->
</template>