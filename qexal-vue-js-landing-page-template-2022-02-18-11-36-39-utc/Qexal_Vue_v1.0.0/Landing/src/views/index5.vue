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
      <section
        class="hero-5 position-relative"
        :style="{
          'background-image':
            'url(' + require('@/assets/images/hero-5-bg.png') + ')',
        }"
        id="home"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="text-center">
                <img
                  src="@/assets/images/rocket.png"
                  alt=""
                  class="img-fluid d-block mx-auto"
                />
                <h1 class="font-weight-semibold my-4 hero-5-title">
                  We help startups launch their products with awesome website
                </h1>
                <p class="mb-5 text-muted subtitle w-75 mx-auto">
                  Nemo enim ipsam voluptatem quia voluptas sit aut aspernatur
                  aut fugit sed consequuntur magni dolores nesciunt.
                </p>
                <a href="#" class="btn btn-primary rounded-pill me-2"
                  >Get Started</a
                >
              </div>
              <div class="row justify-content-center mt-5">
                <div class="col-md-8">
                  <div
                    class="position-relative overflow-hidden rounded-lg shadow-lg"
                  >
                    <img
                      src="@/assets/images/hero-5-img.jpg"
                      alt=""
                      class="img-fluid d-block mx-auto"
                    />
                    <div class="bg-overlay bg-dark"></div>
                    <div class="hero-5-img-content">
                      <div
                        class="d-inline-block"
                        v-b-modal.modal
                        header-class="home-modal"
                      >
                        <a
                          href="javascript: void(0);"
                          class="play-icon-circle video-play-icon"
                        >
                          <play-icon class="icon ps-1"></play-icon>
                        </a>
                      </div>
                    </div>
                  </div>

                  <!-- Modal -->
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