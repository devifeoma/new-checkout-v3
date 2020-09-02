<template>
  <div>
    <div class="transaction__details" v-if="stage === 1">
      <div class="ussd__instruction">
        <p>
          Please choose your bank to begin payment
        </p>
      </div>

      <div class="card input__icon">
        <label class="label">Select Bank</label>
        <div class="language__option">
          <select class="select__bank">
            <option  @click="completePayment">Click here to choose</option>
            <option>Click here to choose</option>
          </select>
        </div>
      </div>
    </div>

    <div class="transaction__details" v-if="stage === 2">
      <div class="ussd__instruction">
        <p>
          Dial the GTBank’s USSD code below on your mobile phone to complete the
          payment
        </p>

        <h6>*966*6*234567*90827#</h6>

        <!-- <span>Click here to copy the code</span> -->
      </div>
    </div>

    <button type="submit" class="pay__button">
      I have completed this payment
    </button>
  </div>
</template>

<script>
// import selectBank from "../components/formComponents/selectBank.vue";

export default {
  name: "ussdPayment",
  components: {
    // selectBank,
  },
  data: function() {
    return {
      stage: 1,
    };
  },
  methods: {
    completePayment() {
      this.stage = 2;
    },
  },
};
</script>

<style></style>
