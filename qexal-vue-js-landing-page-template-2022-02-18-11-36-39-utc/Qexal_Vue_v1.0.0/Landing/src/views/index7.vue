<script>
import { ArrowRightIcon } from "vue-feather-icons";

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
        class="hero-7 bg-center position-relative"
        :style="{
          'background-image':
            'url(' + require('@/assets/images/hero-7-bg.jpg') + ')',
        }"
        id="home"
      >
        <div class="bg-overlay bg-dark"></div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <h1 class="font-weight-semibold mb-4 text-white hero-7-title">
                We Help Startups Launch Their Products
              </h1>
              <p class="mb-5 text-white-70">
                Nemo enim ipsam voluptatem quia voluptas sit aut aspernatur aut
                fugit sed quia consequuntur magni dolores ratione voluptatem
                nesciunt.
              </p>
              <a href="#" class="btn btn-light me-2"
                >Get Started
                <arrow-right-icon class="icon-sm ms-1"></arrow-right-icon
              ></a>
            </div>
            <div class="col-xl-4 col-lg-5 ms-lg-auto">
              <div class="mx-auto rounded bg-white mt-5 mt-lg-0 p-4">
                <h5 class="form-title mb-4 text-center">
                  Get 30 days FREE Trial
                </h5>
                <div class="mb-4"></div>
                <form class="registration-form">
                  <div class="form-group mb-4">
                    <label
                      for="exampleFormControlInput1"
                      class="text-muted font-size-15 mb-2"
                      >Your Name*</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder=""
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label
                      for="exampleFormControlInput1"
                      class="text-muted font-size-15 mb-2"
                      >Your email*</label
                    >
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput2"
                      placeholder=""
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label
                      for="exampleFormControlInput1"
                      class="text-muted font-size-15 mb-2"
                      >Password*</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="exampleFormControlInput3"
                      placeholder=""
                    />
                  </div>
                  <div class="d-grid">
                    <button
                      type="submit"
                      class="btn btn-primary btn-sm text-uppercase"
                    >
                      Get Started
                    </button>
                  </div>
                </form>
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