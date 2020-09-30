<template>
  <div class="add-message-input-container">
    <input
      type="text"
      placeholder="Введите текст"
      v-model="inputValue"
      v-on:keyup.enter="addMessage"
      :disabled="components.loader.visible"
    />
    <div class="add-message-input-container_button">
      <button :disabled="components.loader.visible" @click.prevent="addMessage">
        <svg
          width="22"
          height="18"
          viewBox="0 0 22 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.00936317 17.2563C0.00989464 17.6114 0.3701 17.8528 0.698756 17.7183L20.8694 9.46274C21.2835 9.29324 21.2835 8.70676 20.8694 8.53726L0.698758 0.281704C0.370102 0.14719 0.00989463 0.388579 0.00936317 0.743697L0.000660091 6.55894C0.000282918 6.81096 0.187529 7.02387 0.437532 7.05569L11.8171 8.504C12.3996 8.57814 12.3996 9.42186 11.8172 9.496L0.437533 10.9443C0.187529 10.9761 0.000282918 11.189 0.000660091 11.4411L0.00936317 17.2563Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  data: () => ({
    inputValue: ""
  }),
  computed: {
    ...mapGetters({
      components: "components/components"
    })
  },
  methods: {
    ...mapMutations({
      setVisible: "components/setVisible"
    }),
    addMessage() {
      if (this.inputValue.length === 0) return;
      this.setVisible({
        component: "loader",
        visibility: true
      });
      setTimeout(() => {
        this.$emit("addMessage", this.inputValue);
        this.setVisible({
          component: "loader",
          visibility: false
        });
        this.inputValue = "";
      }, 1000);
    }
  }
};
</script>

<style scoped lang="scss">
.add-message-input-container {
  display: flex;
  input {
    color: #7d8790;
    padding: 29px 0 30px 33px;
    width: 100%;
    font-size: 14px;
    border: 1px solid #e9edf2;
  }
}
.add-message-input-container_button {
  button {
    background-color: var(--blue);
    border: none;
    outline: none;
    width: 80px;
    height: 79px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    &:disabled {
      background-color: gainsboro;
    }
  }
}
</style>
