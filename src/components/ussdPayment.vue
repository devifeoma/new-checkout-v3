<template>
  <div>
    <div class="transaction__details">
      <div class="ussd__instruction">
        <p>
          Please choose your bank to begin payment
        </p>
      </div>

      <select-bank></select-bank>
    </div>
  </div>
</template>

<script>
import selectBank from "../components/formComponents/selectBank.vue";

export default {
  name: "ussdPayment",
  components: {
    selectBank
  }
};
</script>

<style></style>
