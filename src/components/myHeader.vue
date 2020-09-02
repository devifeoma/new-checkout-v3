<template>
  <div>
    <go-back-button></go-back-button>

    <div class="main__dispaly__option">
      <div class="form__option">
        <logo-brand></logo-brand>

        <menu-box></menu-box>
      </div>

      <display-amount-currency> </display-amount-currency>
    </div>
  </div>
</template>

<script>
import goBackButton from "../components/headerComponents/goBackButton.vue";
import logoBrand from "../components/headerComponents/logoBrand.vue";
import menuBox from "../components/headerComponents/menuBox.vue";
import displayAmountCurrency from "../components/headerComponents/displayAmountCurrency.vue";

export default {
  name: "header",
  components: {
    goBackButton,
    logoBrand,
    menuBox,
    displayAmountCurrency
  }
};
</script>
