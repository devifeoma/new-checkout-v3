<template>
  <div class="transaction__details">
    <div class="bank__payment">
      <p>
        Please choose your bank to begin payment
      </p>
    </div>

    <barter-input></barter-input>
    <pay-button></pay-button>
    <div class="line__border">
      <hr class="hr__style" />
      <span class="or"> OR </span>
      <hr class="hr__style" />
    </div>

    <barter-prompt-button></barter-prompt-button>
  </div>
</template>

<script>
import barterInput from "../components/formComponents/barterInput.vue";
import payButton from "../components/buttonComponents/payButton.vue";
import barterPromptButton from "../components/buttonComponents/barterPromptButton.vue";

export default {
  name: "bankPayment",
  components: {
    barterInput,
    payButton,
    barterPromptButton
  },
  computed: {
    stage() {
      return this.$store.state.stage;
    }
  }
};
</script>
