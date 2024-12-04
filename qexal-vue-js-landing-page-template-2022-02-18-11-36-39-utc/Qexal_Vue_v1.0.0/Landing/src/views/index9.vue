<script>
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
        class="hero-9 bg-center position-relative"
        :style="{
          'background-image':
            'url(' + require('@/assets/images/hero-9-bg.jpg') + ')',
        }"
        id="home"
      >
        <div class="bg-overlay bg-dark"></div>
        <div class="container">
          <div class="row justify-content-center hero-content">
            <div class="col-lg-9">
              <div class="text-center">
                <h1 class="font-weight-semibold mb-4 text-white hero-9-title">
                  We help startups launch their products with awesome website
                </h1>
                <p class="mb-5 text-white w-lg-75 mx-auto">
                  Nemo enim ipsam voluptatem quia voluptas sit aut aspernatur
                  aut fugit sed quia consequuntur magni dolores ratione
                  voluptatem nesciunt.
                </p>
                <div class="text-center subscribe-form margin-t-30">
                  <form class="">
                    <input
                      type="text"
                      placeholder="Email"
                      class="form-control"
                      required=""
                    />
                    <button
                      type="submit"
                      class="btn-primary rounded-pill btn btn-none"
                    >
                      Subscribe
                    </button>
                  </form>
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


<style scoped>
.particles-effect {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
}
</style>