<template>
  <div>
    <div v-if="payButton">
      <div class="transaction__details">
        <!-- <div class="transaction__details__header">
        <p>Enter your card details to pay</p>
      </div> -->
        <instruction />

        <card-input />
      </div>

      <pay-button @click="payButton"></pay-button>
    </div>

    <div v-else>
      <div class="transaction__details">
        <!-- <div class="transaction__details__header">
        <p>Enter your card details to pay</p>
      </div> -->
        <instruction />

        <card-input />
      </div>

      <pay-button></pay-button>
    </div>

  </div>
</template>

<script>
import cardInput from "../components/formComponents/cardInput.vue";
import payButton from "../components/buttonComponents/payButton.vue";
import instruction from "../components/textsComponents/instruction.vue";

export default {
  name: "cardPayment",
  components: {
    cardInput,
    payButton,
    instruction,
  },
  // data: {
  //   component: "1",
  // },
  computed: {
    stage() {
      return this.$store.state.stage;
    },
    // methods: {
    //    payButton() {
    
    //   if (this.component === 1) {
        
    //   }
    //   if (this.component === 2) {
    //   }
    // },
    //}


  },
};
</script>
