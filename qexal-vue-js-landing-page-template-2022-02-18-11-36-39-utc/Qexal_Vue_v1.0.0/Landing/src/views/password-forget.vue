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
                <p class="text-muted mt-2">Reset Password</p>
              </div>
              <div class="p-3">
                <div class="alert alert-warning text-center" role="alert">
                  Enter your email address and we'll send you an email with
                  instructions to reset your password.
                </div>
                <form novalidate="" action="#" method="get" class="av-invalid">
                  <div>
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
                  <div class="d-grid mt-3">
                    <button type="button" class="btn btn-primary btn-none btn-block">
                      Reset your Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
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