<template>
  <div>
    <div>
      <div class="transaction__details">
        <!-- <div class="transaction__details__header">
        <p>Enter your card details to pay</p>
      </div> -->
        <instruction />

        <card-input />
      </div>

      <pay-button />
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
  computed: {
    stage() {
      return this.$store.state.stage;
    },
  },
};
</script>
