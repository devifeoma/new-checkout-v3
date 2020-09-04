<template>
  <div>
    <div class="transaction__details" v-if="component === 1">
      <div class="bank__payment">
        <p>
          Please choose your bank to begin payment
        </p>
      </div>

      <div class="card input__icon">
        <label class="label">Select Bank</label>

        <div class="language__option">
          <select class="select__bank" @change="selectBank" v-model="key">
            <option>Click here to choose</option>
            <option>Click here to choose</option>
          </select>
        </div>
      </div>
    </div>

    <div v-if="component === 2">
      <div class="transaction__details">
        <div class="bank__payment__details ">
          <p>Please choose your bank to begin payment</p>
        </div>

        <div class="input-form">
          <div class="card input__icon">
            <label class="label">Phone number</label>
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
          <!-- <div class="card input__icon">
            <label class="label">Phone Number</label>
            <input type="text" maxlength="11" placeholder="07086493069" />
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
          </div> -->
          <!-- <div class="card input__icon">
            <label class="label">Account Number</label>
            <input type="text" maxlength="11" placeholder="2345678901" />
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
          </div> -->

          <div class="card input__icon">
            <label class="label">Account number</label>
            <input
              class="input input__card"
              type="text"
              placeholder="2345678901"
            />
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
      </div>

      <button type="submit" class="pay__button" @click="successfulPayment">
        Pay KES 234,456
      </button>
    </div>

    <div class="transaction__successful__header" v-if="component === 3">
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
</template>

<script>
// import selectBank from "../components/formComponents/selectBank.vue";

export default {
  name: "bankPayment",
  components: {
    // selectBank
  },
  computed: {
    stage() {
      return this.$store.state.stage;
    },
  },
  data: function() {
    return {
      component: 1,
      key: "",
    };
  },
  methods: {
    selectBank() {
      this.component = 2;
    },
    successfulPayment() {
      this.component = 3;
    },
  },
};
</script>
