<script>
import { BoxIcon, LayersIcon, ServerIcon } from "vue-feather-icons";

export default {
  components: { BoxIcon, LayersIcon, ServerIcon },
  data() {
    return {};
  },
};
</script>

<template>
  <!-- Services start -->
  <section class="section" id="services">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-lg-7 text-center">
          <h2 class="fw-bold">Our Services</h2>
          <p class="text-muted">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem ab illo inventore.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4">
          <div class="service-box text-center px-4 py-5 position-relative mb-4">
            <div class="service-box-content p-4">
              <div class="icon-mono service-icon avatar-md mx-auto mb-4">
                <box-icon class=""></box-icon>
              </div>
              <h4 class="mb-3 font-size-22">Digital Design</h4>
              <p class="text-muted mb-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis.
              </p>
            </div>
          </div>
        </div>
        <!-- end col -->

        <div class="col-lg-4">
          <div
            class="service-box text-center px-4 py-5 position-relative mb-4 active"
          >
            <div class="service-box-content p-4">
              <div class="icon-mono service-icon avatar-md mx-auto mb-4">
                <layers-icon class=""></layers-icon>
              </div>
              <h4 class="mb-3 font-size-22">Awesome Support</h4>
              <p class="text-muted mb-0">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit.
              </p>
            </div>
          </div>
        </div>
        <!-- end col -->

        <div class="col-lg-4">
          <div class="service-box text-center px-4 py-5 position-relative mb-4">
            <div class="service-box-content p-4">
              <div class="icon-mono service-icon avatar-md mx-auto mb-4">
                <server-icon class=""></server-icon>
              </div>
              <h4 class="mb-3 font-size-22">Easy to customize</h4>
              <p class="text-muted mb-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                doloremque.
              </p>
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
  <!-- Services end -->
</template>