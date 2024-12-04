<script>
import { SunriseIcon, ArrowRightIcon } from "vue-feather-icons";

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
    SunriseIcon,
    ArrowRightIcon,
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
        class="hero-6 bg-center position-relative overflow-hidden"
        :style="{
          'background-image':
            'url(' + require('@/assets/images/hero-6-bg.png') + ')',
        }"
        id="home"
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <sunrise-icon
                class="mb-4 icon-lg sw-1_5 text-primary"
              ></sunrise-icon>
              <h1 class="font-weight-semibold mb-4 hero-6-title">
                Get Your Professional Website Done With <b>Qexal</b>
              </h1>
              <p class="mb-5 text-muted">
                Nemo enim ipsam voluptatem quia voluptas sit aut aspernatur aut
                fugit sed quia consequuntur magni dolores ratione voluptatem
                nesciunt.
              </p>
              <a href="#" class="btn btn-primary me-2"
                >Get Started
                <arrow-right-icon class="icon-sm ms-1"></arrow-right-icon
              ></a>
            </div>
            <div class="col-lg-6 col-sm-10 mx-auto ms-lg-auto me-lg-0">
              <div class="mt-lg-0 mt-5">
                <img
                  src="@/assets/images/hero-6-img.png"
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