<template>
  <div>
    <div v-if="stage === 1">
      <div class="transaction__details">
        <div class="transaction__details__header">
          <p>Enter your card details to pay</p>
        </div>

        <div class="input-form">
          <div class="card input__icon">
            <label class="label">Card number</label>
            <input  class="input input__card"
              type="text"
              maxlength="16"
              data-mask="0000 0000 0000 0000"
              placeholder="0000 0000 0000 0000"
            />
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 4.67579V3.8399C19 3.22604 18.5005 2.72662 17.8865 2.72662H1.1135C0.499529 2.72662 0 3.22604 0 3.8399V4.67579H19Z"
                fill="#D2DCE8"
              />
              <path
                d="M12.2835 10.617C11.6706 10.617 11.1719 11.1156 11.1719 11.7284C11.1719 12.3413 11.6706 12.8399 12.2835 12.8399C12.8965 12.8399 13.3952 12.3413 13.3952 11.7284C13.3952 11.1156 12.8965 10.617 12.2835 10.617Z"
                fill="#D2DCE8"
              />
              <rect
                x="9.5"
                y="9.5"
                width="8.14286"
                height="5.42857"
                fill="#D2DCE8"
              />
              <path d="M0 5.78906H19V7.27344H0V5.78906Z" fill="#D2DCE8" />
              <path
                d="M14.231 10.653C14.5982 11.315 14.6055 12.1287 14.231 12.8039C14.9402 12.9881 15.6226 12.4491 15.6226 11.7284C15.6226 11.0074 14.9397 10.4689 14.231 10.653Z"
                fill="#D2DCE8"
              />
              <path
                d="M0 8.38672V15.1601C0 15.774 0.499529 16.2734 1.1135 16.2734H17.8865C18.5005 16.2734 19 15.774 19 15.1601V8.38672H0ZM5.44325 13.8965H2.84558C2.5381 13.8965 2.28883 13.6473 2.28883 13.3399C2.28883 13.0325 2.5381 12.7833 2.84558 12.7833H5.44325C5.75074 12.7833 6 13.0325 6 13.3399C6 13.6473 5.75074 13.8965 5.44325 13.8965ZM13.3965 13.6537C11.9262 14.5065 10.0586 13.4448 10.0586 11.7284C10.0586 10.0151 11.9232 8.94859 13.3965 9.80315C14.8712 8.9493 16.7359 10.0145 16.7359 11.7284C16.7359 13.4397 14.8739 14.5092 13.3965 13.6537Z"
                fill="#D2DCE8"
              />
            </svg>
          </div>

          <div class="card__exp__cvv input__icon">
            <div class="card__item">
              <label class="label">Valid Till</label>
              <input type="text" class="input input__card" data-mask="00 / 00" placeholder="MM / YY" />
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 4.67579V3.8399C19 3.22604 18.5005 2.72662 17.8865 2.72662H1.1135C0.499529 2.72662 0 3.22604 0 3.8399V4.67579H19Z"
                  fill="#D2DCE8"
                />
                <path
                  d="M12.2835 10.617C11.6706 10.617 11.1719 11.1156 11.1719 11.7284C11.1719 12.3413 11.6706 12.8399 12.2835 12.8399C12.8965 12.8399 13.3952 12.3413 13.3952 11.7284C13.3952 11.1156 12.8965 10.617 12.2835 10.617Z"
                  fill="#D2DCE8"
                />
                <rect
                  x="9.5"
                  y="9.5"
                  width="8.14286"
                  height="5.42857"
                  fill="#D2DCE8"
                />
                <path d="M0 5.78906H19V7.27344H0V5.78906Z" fill="#D2DCE8" />
                <path
                  d="M14.231 10.653C14.5982 11.315 14.6055 12.1287 14.231 12.8039C14.9402 12.9881 15.6226 12.4491 15.6226 11.7284C15.6226 11.0074 14.9397 10.4689 14.231 10.653Z"
                  fill="#D2DCE8"
                />
                <path
                  d="M0 8.38672V15.1601C0 15.774 0.499529 16.2734 1.1135 16.2734H17.8865C18.5005 16.2734 19 15.774 19 15.1601V8.38672H0ZM5.44325 13.8965H2.84558C2.5381 13.8965 2.28883 13.6473 2.28883 13.3399C2.28883 13.0325 2.5381 12.7833 2.84558 12.7833H5.44325C5.75074 12.7833 6 13.0325 6 13.3399C6 13.6473 5.75074 13.8965 5.44325 13.8965ZM13.3965 13.6537C11.9262 14.5065 10.0586 13.4448 10.0586 11.7284C10.0586 10.0151 11.9232 8.94859 13.3965 9.80315C14.8712 8.9493 16.7359 10.0145 16.7359 11.7284C16.7359 13.4397 14.8739 14.5092 13.3965 13.6537Z"
                  fill="#D2DCE8"
                />
              </svg>
            </div>

            <div class="card__item input__icon">
              <label class="label">Cvv</label>
              <input type="text" class="input input__card" data-mask="0000" placeholder="123" />
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 4.67579V3.8399C19 3.22604 18.5005 2.72662 17.8865 2.72662H1.1135C0.499529 2.72662 0 3.22604 0 3.8399V4.67579H19Z"
                  fill="#D2DCE8"
                />
                <path d="M0 5.5H19V8.48438H0V5.5Z" fill="#D2DCE8" />
                <path
                  d="M0 8.38672V15.1601C0 15.774 0.499529 16.2734 1.1135 16.2734H17.8865C18.5005 16.2734 19 15.774 19 15.1601V8.38672H0ZM13 11.1133H10.4023C10.0948 11.1133 9.84558 10.8641 9.84558 10.5566C9.84558 10.2492 10.0948 10 10.4023 10H13C13.3075 10 13.5568 10.2492 13.5568 10.5566C13.5568 10.8641 13.3075 11.1133 13 11.1133Z"
                  fill="#D2DCE8"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <button type="submit" class="pay__button" @click="payButton">
        Pay KES 234,456
      </button>
    </div>

    <div v-if="stage === 2">
      <div class="card__pin">
        <!-- <input
          id="box1"
          type="password"
          class="card__pin__input"
          maxlength="1"
          onkeyup="onKeyUpEvent(1, event)"
          onfocus="onFocusEvent(1)"
        />
        <input
          id="box2"
          style="-webkit-text-security: square; margin-right: 20.7px;"
          type="password"
          maxlength="1"
          onkeyup="onKeyUpEvent(2, event)"
          onfocus="onFocusEvent(2)"
        />
        <input
          id="box3"
          style="-webkit-text-security: square; margin-right: 20.7px;"
          type="password"
          maxlength="1"
          onkeyup="onKeyUpEvent(3, event)"
          onfocus="onFocusEvent(3)"
        />
        <input
          id="box4"
          style="-webkit-text-security: square; margin-right: 20.7px;"
          type="password"
          maxlength="1"
          onkeyup="onKeyUpEvent(4, event)"
          onfocus="onFocusEvent(4)"
        /> -->

        <!-- <div style="display: flex; flex-direction: row;"> -->
          <otp-input
          input-type="password"
            ref="otpInput"
            input-classes="card__pin__input input"
            separator=""
            :num-inputs="4"
            :should-auto-focus="true"
            :is-input-num="true"
            @on-change="handleOnChange"
            @on-complete="handleOnComplete"
          />
        <!-- </div> -->
      </div>
    </div>

    <div v-if="stage === 3">
      <div class="transaction__successful__header">
        <svg
          width="74"
          height="74"
          viewBox="0 0 74 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <rect width="74" height="74" rx="37" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlink:href="#image0" transform="scale(0.00675676)" />
            </pattern>
            <image
              id="image0"
              width="148"
              height="148"
              xlink:href="data:image/png;base64,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"
            />
          </defs>
        </svg>

        <h3 class="success__payment__text">Thank you for your payment!</h3>
        <p class="card__header">Your transaction was completed successfully.</p>
      </div>
    </div>
  </div>
</template>

<script>
import OtpInput from "@bachdgvn/vue-otp-input";
// import cardInput from "../components/formComponents/cardInput.vue";
// import payButton from "../components/buttonComponents/payButton.vue";
// import instruction from "../components/textsComponents/instruction.vue";

export default {
  name: "cardPayment",
  components: {
    // cardInput,
    // payButton,
    // instruction
    OtpInput,
  },
  data: function() {
    return {
      stage: 1,
    };
  },
  computed: {},
  methods: {
    payButton() {
      this.stage = 2;
    },
    handleOnComplete(value) {
      console.log("OTP completed: ", value);
      this.stage = 3;
    },
    handleOnChange(value) {
      console.log("OTP changed: ", value);
    },
  },
};
</script>

<style>
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
  /* &.error {
    border: 1px solid red !important;
  } */
}
/* .otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
} */
</style>
