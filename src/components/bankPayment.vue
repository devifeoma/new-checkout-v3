<template>
  <div class="transaction__details">
    <div class="bank__payment">
      <p>
        Please choose your bank to begin payment
      </p>
    </div>

    <select-bank></select-bank>
  </div>
</template>

<script>
import selectBank from "../components/formComponents/selectBank.vue";

export default {
  name: "bankPayment",
  components: {
    selectBank
  },
  computed: {
    stage() {
      return this.$store.state.stage;
    }
  }
};
</script>
