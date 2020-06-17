<template>
  <div class="message-item"
       :class="{mlAuto: firstMessageCurrentDialouge.author !== message.author}"

  >
    <div class="message-item_message Body-14"
         :class="[firstMessageCurrentDialouge.author === message.author ? 'first-user-style' : 'second-user-style']"
    >
      {{ message.text }}
    </div>
    <div class="message-item_footer"
         :class="{'content-end': firstMessageCurrentDialouge.author !== message.author}"
    >
      <div class="message-item_footer_author">
        <span class="Body-13-bold">{{ message.author[0].toUpperCase() + message.author.slice(1) }}</span>
      </div>
      <div class="message-item_footer_date"
      >
        {{ $moment(message.created).format('DD.MM.YYYY') }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    firstMessageCurrentDialouge() {
      const { parts } = this.$store.getters["dialogues/currentDialogue"];
      return parts[0];
    }
  }
};
</script>

<style scoped lang="scss">
.message-item {
  margin-top: 20px;
  width: 380px;
}
.message-item_footer {
  margin-top: 9px;
  display: flex;
  justify-content: end;
}
.message-item_message {
  background-color: #E9F5F4;
  padding: 18px 17px 16px 26px;
}
.first-user-style {
  border-radius: 8px 8px 8px 0;
  background-color: #F6F7F9;
}
.second-user-style {
  border-radius: 8px 8px 0 8px;
  background-color: #E9F5F4;
}
.mlAuto {
  margin-left: auto;
}
.message-item_footer_date {
  font-size: 10px;
  color: #B7C0C8;
  align-items: center;
  display: flex;
  margin-left: 12px;
}
.content-end {
  justify-content: flex-end;
}
</style>
