<template>
  <div>
    <!-- <div class="transaction__details">
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
    </div> -->
    <div class="transaction__details">
      <div class="bank__payment__details ">
        <p>Enter your barter details below to begin payment</p>
      </div>

      <div class="input-form">
        <div class="card input__icon">
          <label class="label">Email/Phone number</label>
          <input
            class="input input__card"
            type="text"
            maxlength="11"
            placeholder="07086493069"
          />
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <g clip-path="url(#clip1)">
                <path
                  d="M9.00005 12.6827C9.34521 12.6827 9.62501 12.4029 9.62501 12.0578C9.62501 11.7126 9.34521 11.4328 9.00005 11.4328C8.6549 11.4328 8.37509 11.7126 8.37509 12.0578C8.37509 12.4029 8.6549 12.6827 9.00005 12.6827Z"
                  fill="#D2DCE8"
                />
                <path
                  d="M10.7435 3.6401H7.25645C7.06099 3.6401 6.90195 3.79173 6.90195 3.97776V10.5693C6.90195 10.7555 7.06088 10.907 7.25645 10.907H10.7435C10.939 10.907 11.098 10.7554 11.098 10.5693V3.97776C11.0979 3.79157 10.939 3.6401 10.7435 3.6401Z"
                  fill="#D2DCE8"
                />
                <path
                  d="M9.00074 0C4.58266 0 1.00101 3.58192 1.00101 7.99984C1.00101 12.4178 4.58266 16 9.00074 16C13.4188 16 17.0009 12.418 17.0009 7.99984C17.0009 3.58171 13.4188 0 9.00074 0ZM12.1132 11.9478C12.1132 12.5589 11.6177 13.0544 11.0066 13.0544H6.99514C6.38405 13.0544 5.88853 12.5589 5.88853 11.9478V4.01723C5.88853 3.40613 6.38399 2.91061 6.99514 2.91061H11.0066C11.6176 2.91061 12.1132 3.40608 12.1132 4.01723V11.9478Z"
                  fill="#D2DCE8"
                />
              </g>
              <path
                d="M14.996 -143C-67.843 -143 -134.999 -75.839 -134.999 6.99699C-134.999 89.833 -67.843 157 14.996 157C97.835 157 164.999 89.837 164.999 6.99699C164.999 -75.843 97.835 -143 14.996 -143ZM73.354 81.021C73.354 92.479 64.064 101.77 52.605 101.77H-22.609C-34.067 101.77 -43.358 92.48 -43.358 81.021V-67.677C-43.358 -79.135 -34.068 -88.426 -22.609 -88.426H52.605C64.063 -88.426 73.354 -79.136 73.354 -67.677V81.021Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect x="1" width="16" height="16" fill="white" />
              </clipPath>
              <clipPath id="clip1">
                <rect x="1" width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div class="card input__icon">
          <label class="label">Enter your 4 digit pin</label>
          <input class="input input__card" type="text" placeholder="1234" />
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.00098 8.99984C1.00098 4.58192 4.58263 1 9.00071 1C13.4188 1 17.0009 4.58171 17.0009 8.99984C17.0009 13.418 13.4188 17 9.00071 17C4.58263 17 1.00098 13.4178 1.00098 8.99984ZM5.23466 6.78662H12.7659C12.8708 6.78662 12.9629 6.71698 12.9914 6.61609C13.0199 6.5152 12.9781 6.40759 12.8888 6.35266L9.12315 4.03479C9.04783 3.9884 8.9528 3.9884 8.87742 4.03479L5.1118 6.35266C5.0225 6.40765 4.98063 6.5152 5.0092 6.61609C5.03776 6.71698 5.12986 6.78662 5.23466 6.78662ZM8.84098 5.37854H9.15965C9.2891 5.37854 9.39402 5.48346 9.39402 5.61292C9.39402 5.74237 9.2891 5.84729 9.15965 5.84729H8.84098C8.71153 5.84729 8.60661 5.74237 8.60661 5.61292C8.60661 5.48346 8.71153 5.37854 8.84098 5.37854ZM12.4441 7.49023V7.25586H5.55588V7.49023C5.55588 7.61969 5.6608 7.72461 5.79025 7.72461H12.2097C12.3391 7.72461 12.4441 7.61969 12.4441 7.49023ZM6.80582 8.19336H5.86838V10.438H6.80582V8.19336ZM7.64359 8.19336H8.58109V10.438H7.64359V8.19336ZM10.3564 8.19336H9.41885V10.438H10.3564V8.19336ZM12.1316 8.19336H11.1941V10.438H12.1316V8.19336ZM5.23459 10.9062H12.7655C12.8949 10.9062 12.9998 11.0112 12.9998 11.1406V11.7656C12.9998 11.8951 12.8949 12 12.7655 12H5.23459C5.10513 12 5.00021 11.8951 5.00021 11.7656V11.1406C5.00021 11.0112 5.10513 10.9062 5.23459 10.9062Z"
              fill="#D2DCE8"
            />
          </svg>
        </div>
      </div>
      <button type="submit" class="pay__button">Login to pay</button>

      <div class="line__border">
        <hr class="hr__style" />
        <span class="or"> OR </span>
        <hr class="hr__style" />
      </div>

      <button type="submit" class="barter__prompt__button ">
        Enter your card details to pay
      </button>
    </div>
  </div>
</template>

<script>
// import barterInput from "../components/formComponents/barterInput.vue";
// import payButton from "../components/buttonComponents/payButton.vue";
// import barterPromptButton from "../components/buttonComponents/barterPromptButton.vue";

export default {
  name: "bankPayment",
  components: {
    // barterInput,
    // payButton,
    // barterPromptButton,
  },
  computed: {
    stage() {
      return this.$store.state.stage;
    },
  },
};
</script>
