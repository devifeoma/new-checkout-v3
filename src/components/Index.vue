<template>
  <div class="container">
    <div class="first__div">
      <div class="checkout__form">
        <my-header></my-header>

        <div class="transaction__details">
          <keep-alive>
            <component v-bind:is="dynamicComponent"></component>
          </keep-alive>
        </div>

        <secured-by-flutterwave></secured-by-flutterwave>
      </div>
    </div>

    <side-bar />
  </div>
</template>

<script>
import myHeader from "../components/myHeader.vue";
import cardPayment from "../components/cardPayent.vue";
import ussdPayment from "../components/ussdPayment.vue";
import bankPayment from "../components/bankPayment.vue";
import qrPayment from "../components/qrPayment.vue";
import barterPayment from "../components/barterPayment.vue";
import securedByFlutterwave from "../components/footerComponents/securedByFlutterwave.vue";
import sideBar from "../components/sideBar.vue";

export default {
  name: "Index",
  components: {
    myHeader,
    cardPayment,
    ussdPayment,
    bankPayment,
    qrPayment,
    barterPayment,
    securedByFlutterwave,
    sideBar
  },
  data() {
    return {};
  },
  computed: {
    dynamicComponent() {
      let component = "";
      if (this.stage === 1) {
        component = cardPayment;
      }
      if (this.stage === 2) {
        component = ussdPayment;
      }
      if (this.stage === 3) {
        component = bankPayment;
      }
      if (this.stage === 4) {
        component = qrPayment;
      }
      if (this.stage === 5) {
        component = barterPayment;
      }
      return component;
    },
    stage() {
      return this.$store.state.stage;
    },
    sidebar() {
      return this.$store.state.sidebar;
    }
  },
  methods: {}
};
</script>
