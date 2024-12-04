<script>
import { StarIcon, ArrowRightIcon } from "vue-feather-icons";

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
    StarIcon,
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
    <Navbar />
    <div v-scroll-spy>
      <!-- Hero Start -->
      <section
        class="hero-8 bg-center position-relative"
        :style="{
          'background-image':
            'url(' + require('@/assets/images/hero-8-bg.jpg') + ')',
        }"
        id="home"
      >
        <div class="bg-overlay bg-dark"></div>
        <div class="container">
          <div class="row justify-content-center hero-content">
            <div class="col-lg-9">
              <div class="text-center">
                <star-icon
                  class="text-white sw-1_5 icon-lg icon-spin mb-4"
                ></star-icon>
                <h1 class="font-weight-semibold mb-4 text-white hero-8-title">
                  We help startups launch their products with awesome website
                </h1>
                <p class="mb-5 text-white-70 w-lg-75 mx-auto">
                  Nemo enim ipsam voluptatem quia voluptas sit aut aspernatur
                  aut fugit sed quia consequuntur magni dolores ratione
                  voluptatem nesciunt.
                </p>
                <a href="#" class="btn btn-light"
                  >Get Started
                  <arrow-right-icon class="icon-sm ms-1"></arrow-right-icon
                ></a>
              </div>
            </div>
          </div>
        </div>
        <vue-particles
          class="particles-effect"
          color="#dedede"
          :moveSpeed="6"
          :particleSize="4"
        ></vue-particles>
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


<style scoped>
.particles-effect {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
}
</style>