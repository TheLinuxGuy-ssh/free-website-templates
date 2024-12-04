<script>
import { ChevronRightIcon } from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Team from "@/components/team";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default {
  components: {
    ChevronRightIcon,
    Navbar,
    Services,
    Features,
    Pricing,
    Team,
    Blog,
    Contact,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div>
    <Navbar :navcolor="'light'" />
    <div v-scroll-spy>
      <!-- Hero Start -->

      <!-- Hero Start -->
      <section
        class="hero-2 position-relative overflow-hidden"
        :style="{
          'background-image':
            'url(' + require('@/assets/images/hero-2-bg.png') + ')',
        }"
        id="home"
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <span class="badge badge-soft-primary mb-4">Creative Design</span>
              <h1 class="font-weight-semibold mb-4 hero-2-title">
                We Help Startups Launch Their Products
              </h1>
              <p class="mb-5 text-muted">
                Nemo enim ipsam voluptatem quia voluptas sit aut aspernatur aut
                fugit sed quia consequuntur magni dolores ratione voluptatem
                nesciunt.
              </p>
              <div class="custom-search">
                <div class="input-group mb-lg-0 mb-4">
                  <input
                    type="text"
                    class="form-control rounded-pill"
                    placeholder="Write to us"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-sm btn-primary rounded-pill px-2"
                      type="button"
                      id="button-addon2"
                    >
                      <chevron-right-icon class=""></chevron-right-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-10 mx-auto ms-lg-auto me-lg-0">
              <div class="mt-lg-0 mt-4">
                <img
                  src="@/assets/images/hero-2-img.png"
                  alt=""
                  class="img-xl-responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Hero End -->
      <Services />
      <Features />
      <Pricing />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </div>
  </div>
</template>