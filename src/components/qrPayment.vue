<template>
  <div class="transaction__details">
    <div class="transaction__details__header">
      <p>
        Scan the code below on your QR-enabled finance or bank app to complete
        the payment
      </p>
    </div>

    <qr-code></qr-code>
  </div>
</template>

<script>
import qrCode from "../components/qrComponents/qrCode.vue";

export default {
  name: "qrPayment",
  components: {
    qrCode
  }
};
</script>
