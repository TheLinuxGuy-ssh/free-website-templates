<script>
import { FacebookIcon, TwitterIcon, InstagramIcon } from "vue-feather-icons";
export default {
  components: { FacebookIcon, TwitterIcon, InstagramIcon },
  data() {
    return {
      teamData: [
        {
          profile: require("@/assets/images/team/1.jpg"),
          name: "Frances Thompson",
          designation: "Developer",
        },
        {
          profile: require("@/assets/images/team/2.jpg"),
          name: "John Jones",
          designation: "CEO",
        },
        {
          profile: require("@/assets/images/team/3.jpg"),
          name: "Della Hobbs",
          designation: "Designer",
        },
        {
          profile: require("@/assets/images/team/4.jpg"),
          name: "Troy Jordon",
          designation: "Developer",
        },
      ],
    };
  },
};
</script>

<template>
  <!-- Team start -->
  <section class="section bg-light" id="team">
    <div class="container">
      <div class="row justify-content-center mb-4">
        <div class="col-lg-7 text-center">
          <h2 class="fw-bold">Our Team Members</h2>
          <p class="text-muted">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem ab illo inventore.
          </p>
        </div>
      </div>

      <div class="row">
        <div
          class="col-lg-3 col-sm-6"
          v-for="(item, index) of teamData"
          :key="index"
        >
          <div
            class="team-box mt-4 position-relative overflow-hidden rounded text-center shadow"
          >
            <div class="position-relative overflow-hidden">
              <img
                :src="item.profile"
                alt=""
                class="img-fluid d-block mx-auto"
              />
              <ul class="list-inline p-3 mb-0 team-social-item">
                <li class="list-inline-item mx-3">
                  <a
                    href="javascript: void(0);"
                    class="team-social-icon h-primary"
                    ><facebook-icon class="icon-sm"></facebook-icon
                  ></a>
                </li>
                <li class="list-inline-item mx-3">
                  <a href="javascript: void(0);" class="team-social-icon h-info"
                    ><twitter-icon class="icon-sm"></twitter-icon
                  ></a>
                </li>
                <li class="list-inline-item mx-3">
                  <a
                    href="javascript: void(0);"
                    class="team-social-icon h-danger"
                    ><instagram-icon class="icon-sm"></instagram-icon
                  ></a>
                </li>
              </ul>
            </div>
            <div class="p-4">
              <h5 class="font-size-19 mb-1">{{ item.name }}</h5>
              <p class="text-muted text-uppercase font-size-14 mb-0">
                {{ item.designation }}
              </p>
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
  <!-- Team end -->
</template>