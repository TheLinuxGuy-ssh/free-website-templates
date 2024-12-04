<script>
import { MenuIcon } from "vue-feather-icons";

export default {
  props: {
    navcolor: {
      type: String,
      default: null,
    },
  },
  components: { MenuIcon },
  data() {
    return {};
  },
  mounted: () => {
    window.onscroll = function () {
      onwindowScroll();
    };
    var navbar = document.getElementById("navbar");
    function onwindowScroll() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        navbar.classList.add("nav-sticky");
      } else {
        navbar.classList.remove("nav-sticky");
      }
    }
  },
  methods: {
    /**
     * Toggle menu
     */
    toggleMenu() {
      document.getElementById("navbarCollapse").classList.toggle("show");
    },
  },
};
</script>

<template>
  <!--Navbar Start-->
  <nav class="navbar navbar-expand-lg fixed-top" id="navbar" :class="{'navbar-light': navcolor === 'light', 'navbar-light bg-white' : navcolor === 'light-white'}">
    <div class="container">
      <!-- LOGO -->
      <router-link class="navbar-brand logo" to="/">
        <img
          src="@/assets/images/logo-dark.png"
          alt=""
          class="logo-dark"
          height="28"
        />
        <img
          src="@/assets/images/logo-light.png"
          alt=""
          class="logo-light"
          height="28"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleMenu()"
      >
        <menu-icon class=""></menu-icon>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul
          class="navbar-nav ms-auto navbar-center"
          id="navbar-navlist"
          v-scroll-spy-active="{
            selector: 'li a.nav-link',
            class: 'active',
          }"
        >
          <li class="nav-item">
            <a
              v-scroll-to="'#home'"
              href="javascript: void(0);"
              class="nav-link"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="'#services'"
              href="javascript: void(0);"
              class="nav-link"
              >Services</a
            >
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="'#features'"
              href="javascript: void(0);"
              class="nav-link"
              >Features</a
            >
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="'#pricing'"
              href="javascript: void(0);"
              class="nav-link"
              >Pricing</a
            >
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="'#team'"
              href="javascript: void(0);"
              class="nav-link"
              >Team</a
            >
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="'#blog'"
              href="javascript: void(0);"
              class="nav-link"
              >Blog</a
            >
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="'#contact'"
              href="javascript: void(0);"
              class="nav-link"
              >Contact Us</a
            >
          </li>
        </ul>
        <a href="" class="btn btn-sm rounded-pill nav-btn ms-lg-3">Buy Now</a>
      </div>
    </div>
    <!-- end container -->
  </nav>
  <!-- Navbar End -->
</template>