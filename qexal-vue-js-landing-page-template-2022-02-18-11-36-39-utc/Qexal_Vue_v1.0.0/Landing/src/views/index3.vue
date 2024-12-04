<script>
import { PlayCircleIcon } from "vue-feather-icons";

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
    PlayCircleIcon,
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
      <section
        class="hero-3 bg-center position-relative"
        :style="{
          'background-image':
            'url(' + require('@/assets/images/hero-3-bg.png') + ')',
        }"
        id="home"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="text-center">
                <span class="badge badge-soft-primary mb-4"
                  >Professional Landing</span
                >
                <h1 class="font-weight-semibold mb-4 hero-3-title">
                  Professional, Multipurpose Landing Page
                </h1>
                <p class="mb-5 text-muted subtitle w-75 mx-auto">
                  Nemo enim ipsam voluptatem quia voluptas sit aut aspernatur
                  aut fugit sed consequuntur magni dolores nesciunt.
                </p>

                <div>
                  <button
                    type="button"
                    class="btn btn-primary rounded-pill me-2"
                  >
                    Sign up for free
                  </button>
                  <button
                    type="button"
                    class="btn btn-light rounded-pill me-2"
                    data-toggle="modal"
                    v-b-modal.modal
                  >
                    Play video
                    <play-circle-icon class="ms-1 icon-sm"></play-circle-icon>
                  </button>
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