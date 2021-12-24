<template>
  <div>
    <div class="banner-video w-100">
      <video
        src="https://www.howtorobot.com/sites/default/files/2021-09/HowToRobot%20cover%20video%20-%20no%20graphics.mov"
        muted
        autoplay
        loop
      ></video>
    </div>

    <div class="text-center banner-info w-100">
      <h3
        class="fs-2hx text-white mb-5"
        id="how-it-works"
        data-kt-scroll-offset="{default: 100, lg: 150}"
      >
        How it Works
      </h3>
      <div class="fs-5 text-white fw-bold">
        Save thousands to millions of bucks by using single tool <br />for
        different amazing and great useful admin
      </div>
    </div>
    <div class="content-section">
      <div class="container">
        <div class="portal-cards">
          <div class="row">
            <PortalCard
              title="Ask for solutions and prices"
              text="Ask more than 15.000 suppliers for price indications, robot solutions, spare parts, or services"
              image="/media/portal/quotes.png"
            />
            <PortalCard
              title="Guides & Insights"
              text="Start your automation journey with our digital tools, how-to articles, robot news & fresh market reports"
              image="/media/portal/marketinsight.png"
            />
            <PortalCard
              title="Browse Directory"
              text="Find robot & automation suppliers & their products in our directory"
              image="/media/portal/robotdir.png"
            />
          </div>
        </div>
        <div class="market-cards">
          <div class="row">
            <div class="col-12">
              <h2 class="text-center">
                How your business can benefit from HowToRobot
              </h2>
            </div>
            <ExampleCard
              title="Get quotes from robot suppliers"
              text="Receive solution proposals from system integrators or get quotations on components & services from suppliers."
              image="/media/examples/getrobots.png"
            />
            <ExampleCard
              title="Discover your robot business potential"
              text="Use our digital tools to get an overview of the automation potential in your business, calculate savings and wins, and get price indications from the market."
              image="/media/examples/discover.png"
            />
            <ExampleCard
              title="Get market insights on the robot business"
              text="Access our how-to guides on robotics and find the latest news and insights about the market."
              image="/media/examples/market.png"
            />
            <ExampleCard
              title="Access to fresh world wide market reports"
              text="Check out the most comprehensive data source on robot & automation suppliers for a range of countries. Complete supplier lists included to find resellers and business partners."
              image="/media/examples/acess.png"
            />
            <ExampleCard
              title="Ask an expert for consultancy"
              text="Our growing partner network can help you fast-track automation efforts. Independent experts will estimate your automation potential, calculate business cases and get you offers from suppliers."
              image="/media/examples/consultancy.png"
            />
            <ExampleCard
              title="Supplier? Sign up and get in touch with clients"
              text="Connect your robot & automation business to a world of buyers. Join for free and get your company exposed on our platform in no time."
              image="/media/examples/supplier.png"
              classname="last"
            />
          </div>
        </div>
        <div v-for="topic in topics" :key="topic.id">
          <div class="article-section">
            <div class="row">
              <div class="col-4">
                <img :src="topic.url" :alt="topic.url" />
              </div>
            </div>
          </div>
        </div>
        <div class="how-section">
          <div class="row">
            <div class="col-12">
              <div class="section-heading">
                <h3 class="text-center">Get started</h3>
                <h2 class="text-center">
                  Get quotes and buy from robot suppliers<br />in 4 simple steps
                </h2>
              </div>
            </div>
            <HowCard
              title="Define your need"
              text="Briefly describe the service or component you want to buy"
              image="/media/svg/landing/icon-h1.svg"
            />
            <HowCard
              title="Receive offers"
              text="Review comparable offers from robot suppliers"
              image="/media/svg/landing/icon-h2.svg"
            />
            <HowCard
              title="Choose a supplier"
              text="Choose freely between the offers you receive"
              image="/media/svg/landing/icon-h3.svg"
            />
            <HowCard
              title="Pay the supplier"
              text="Pay the supplier directly on our platform"
              image="/media/svg/landing/icon-h4.svg"
              classname="last"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";
import PortalCard from "@/components/cards/PortalCard.vue";
import ExampleCard from "@/components/cards/ExampleCard.vue";
import HowCard from "@/components/cards/HowCard.vue";
import articles from "./data.json";
export default defineComponent({
  data() {
    return {
      topics: articles
    };
  },
  name: "dashboard",
  components: {
    PortalCard,
    ExampleCard,
    HowCard
  },
  setup() {
    // onMounted(() => {
    //   console.log(data[0].title);
    //   setCurrentPageTitle("");
    // });
  }
});
</script>

<style scoped>
.banner-video {
  position: absolute;
  height: 600px;
  overflow-y: hidden;
  top: 80px;
  left: 0;
}
.banner-video video {
  width: 100%;
}
.banner-info {
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translateX(-50%);
}
.banner-info h3 {
  font-size: 50px !important;
}
.banner-info div {
  font-size: 1.5rem !important;
}
.content-section {
  padding-top: 400px;
}
.market-cards h2 {
  font-size: 36px;
  margin-bottom: 40px;
  margin-top: 100px;
}
.article-section{
  margin: 40px 0 70px;
}
.how-section .section-heading {
  margin: 40px 0 70px;
}
.how-section .section-heading h3 {
  font-weight: 400;
  text-transform: uppercase;
  font-size: 1.5rem;
  margin-bottom: 0;
}
.how-section .section-heading h2 {
  margin-bottom: 0;
  margin-top: 15px;
  font-size: 36px;
}
@media (max-width: 1500px) {
  .banner-video {
    height: 400px;
  }
  .banner-info {
    top: 200px;
  }
  .content-section {
    padding-top: 200px;
  }
}
@media screen and (max-width: 991.98px) {
  .banner-video {
    top: 64px;
  }
  .content-section {
    padding-top: 270px;
  }
  .market-cards h2 {
    font-size: 32px;
  }
  .how-section .section-heading h2 {
    font-size: 32px;
  }
}
@media screen and (max-width: 738px) {
  .banner-video video {
    height: 100%;
    object-fit: cover;
  }
}
@media screen and (max-width: 599px) {
  .banner-video {
    height: 300px;
  }
  .content-section {
    padding-top: 170px;
  }
  .banner-info h3 {
    font-size: 30px !important;
  }
  .banner-info div {
    font-size: 1rem !important;
  }
  .banner-info {
    top: 150px;
  }
}
</style>
