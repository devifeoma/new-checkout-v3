<template>
  <div class="second__div">
    <div class="close__button">
      <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="23"
        cy="23"
        r="22.629"
        fill="white"
        stroke="#DEDEDE"
        stroke-width="0.741935"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.5858 23L15.2929 16.7071C14.9024 16.3166 14.9024 15.6834 15.2929 15.2929C15.6834 14.9024 16.3166 14.9024 16.7071 15.2929L23 21.5858L29.2929 15.2929C29.6834 14.9024 30.3166 14.9024 30.7071 15.2929C31.0976 15.6834 31.0976 16.3166 30.7071 16.7071L24.4142 23L30.7071 29.2929C31.0976 29.6834 31.0976 30.3166 30.7071 30.7071C30.3166 31.0976 29.6834 31.0976 29.2929 30.7071L23 24.4142L16.7071 30.7071C16.3166 31.0976 15.6834 31.0976 15.2929 30.7071C14.9024 30.3166 14.9024 29.6834 15.2929 29.2929L21.5858 23Z"
        fill="#637381"
      />
    </svg>
    </div>

    <div class="pay">
      <side-bar-header></side-bar-header>
      <payment-options></payment-options>
      <more-options></more-options>
    </div>
  </div>
</template>

<script>
import paymentOptions from "../components/optionList/paymentOptions.vue";
import sideBarHeader from "../components/sideBarComponents/sideBarHeader.vue";
import moreOptions from "../components/buttonComponents/moreOptions.vue";

export default {
  name: "Index",
  components: {
    paymentOptions,
    sideBarHeader,
    moreOptions,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
