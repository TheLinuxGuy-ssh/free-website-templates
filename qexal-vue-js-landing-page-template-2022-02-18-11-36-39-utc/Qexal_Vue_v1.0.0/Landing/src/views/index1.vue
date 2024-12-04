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
    <Navbar />
    <div v-scroll-spy>
      <!-- Hero Start -->
      <section
        class="hero-1 bg-center bg-primary position-relative"
        :style="{
          'background-image':
            'url(' + require('@/assets/images/hero-1-bg.png') + ')',
        }"
        id="home"
      >
        <div class="container">
          <div class="row align-items-center hero-content">
            <div class="col-lg-5">
              <h1
                class="text-white display-4 font-weight-semibold mb-4 hero-1-title"
              >
                Optimize Your Service Business
              </h1>
              <p class="text-white-70 mb-4 mb-lg-5">
                Nemo enim ipsam voluptatem quia voluptas sit aut aspernatur aut
                fugit sed quia consequuntur magni dolores ratione voluptatem
                nesciunt.
              </p>
              <a
                href="javascript: void(0);"
                class="btn btn-lg btn-light rounded-pill me-2"
                >Get Started</a
              >
              <div
                class="d-inline-block"
                data-toggle="modal"
                data-target="#watchvideomodal"
              >
                <a
                  href="javascript: void(0);"
                  class="video-play-icon text-white"
                  v-b-modal.modal
                >
                  <span class="play-icon-circle me-2">
                    <play-icon class="icon-sm icon m-3"></play-icon
                  ></span>
                  <span class="">Watch The Video!</span>
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-sm-10 ms-auto ms-lg-auto me-lg-0">
              <div class="mt-lg-0 mt-4">
                <img
                  src="@/assets/images/hero-1-img.png"
                  alt=""
                  class="img-md-responsive"
                />
              </div>
            </div>
          </div>
          <!-- end row -->

          <b-modal
            id="modal"
            hide-footer
            size="lg"
            centered
            header-class="home-modal"
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
        <!-- end container -->
        <div class="hero-bottom-shape">
          <img
            src="@/assets/images/hero-1-bottom-shape.png"
            alt=""
            class="img-fluid d-block mx-auto"
          />
        </div>
        <!-- end hero shape -->
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