<script>
import { PlayIcon } from "vue-feather-icons";

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
    PlayIcon,
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
    <Navbar :navcolor="'light-white'" />
    <div v-scroll-spy>
      <!-- Hero Start -->

      <!-- Hero Start -->
      <section
        class="hero-4 position-relative bg-light"
        :style="{
          'background-image':
            'url(' + require('@/assets/images/hero-4-bg.jpg') + ')',
        }"
        id="home"
      >
        <div class="bg-overlay bg-dark"></div>
        <div
          class="bg-overlay-img"
          :style="{
            'background-image':
              'url(' + require('@/assets/images/hero-4-overlay.png') + ')',
          }"
        ></div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <span class="badge badge-soft-primary mb-4">Creative Design</span>
              <h1 class="font-weight-semibold mb-4 hero-4-title">
                We Help Startups Launch Their Products
              </h1>
              <p class="mb-5 text-muted">
                Nemo enim ipsam voluptatem quia voluptas sit aut aspernatur aut
                fugit sed quia consequuntur magni dolores ratione voluptatem
                nesciunt.
              </p>
              <a href="#" class="btn btn-lg btn-primary me-2">Get Started</a>
              <a href="#" class="btn btn-lg btn-soft-primary me-2"
                >Try for free</a
              >
            </div>
            <div class="col-lg-4 ms-lg-auto text-center mt-lg-0 mt-5">
              <div class="d-inline-block" v-b-modal.modal>
                <a
                  href="javascript: void(0);"
                  class="play-icon-circle video-play-icon"
                >
                  <play-icon class="icon ps-1"></play-icon>
                </a>
              </div>

              <!-- Modal -->
              <b-modal
                id="modal"
                hide-footer
                size="lg"
                centered
                header-close-variant="white"
              >
                <youtube
                  video-id="RnDC9MXSqCY"
                  ref="youtube"
                  width="750"
                  height="450"
                ></youtube>
              </b-modal>
              <!-- end modal -->
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