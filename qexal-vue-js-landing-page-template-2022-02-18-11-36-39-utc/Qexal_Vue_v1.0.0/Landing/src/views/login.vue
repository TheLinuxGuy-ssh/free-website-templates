<script>

import { LockIcon } from "vue-feather-icons";

export default {
  components:{LockIcon},
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
        <div class="col-md-8 col-lg-6 col-xl-5">
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
                <p class="text-muted mt-2">Sign in to continue to Qexal.</p>
              </div>
              <div class="p-3">
                <form novalidate="" action="#" method="get" class="av-invalid">
                  <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input
                      name="username"
                      required=""
                      placeholder="Enter username"
                      id="username"
                      type="text"
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
                      id="remember-Check"
                    />
                    <label class="form-check-label" for="remember-Check">
                      Remember me
                    </label>
                  </div>
                  <div class="d-grid mt-3">
                    <button type="button" class="btn btn-primary btn-none btn-block">
                      Log In
                    </button>
                  </div>
                  <div class="mt-4 mb-0 text-center">
                    <router-link class="text-dark" to="/password-forget"
                      ><lock-icon class="icon-xs icon me-1"></lock-icon>
                      Forgot your password?</router-link
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="text-center mt-4">
            <p>
              Don't have an account ?
              <router-link
                to="/sign-up"
                class="font-weight-semibold text-primary"
              >
                Signup
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