<template>
  <div class="dialog-window">
    <div class="dialog-window_messages">
      <div v-if="!components.loader.visible && currentDialogue">
        <template v-for="message in currentDialogue.parts">
          <message-item :message="message" :key="message.id" />
        </template>
      </div>
      <template v-else>
        <loader />
      </template>
    </div>
    <add-message-input @addMessage="addMessage" />
  </div>
</template>

<script>
import AddMessageInput from "@/components/AddMessageInput";
import MessageItem from "@/components/MessageItem";
import Loader from "@/components/Loader";
import { mapGetters } from "vuex";

export default {
  components: {
    AddMessageInput,
    MessageItem,
    Loader
  },
  computed: {
    ...mapGetters({
      currentDialogue: "dialogues/currentDialogue",
      components: "components/components"
    })
  },
  methods: {
    addMessage(text) {
      const message = {
        author: "admin",
        created: new Date(),
        id: this.currentDialogue.parts.length + 1,
        text: text
      };

      this.$store.commit("dialogues/addMessage", {
        message,
        id: this.currentDialogue.id
      });
    }
  }
};
</script>

<style scoped lang="scss">
.dialog-window {
  width: 70%;
  background-color: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}
.dialog-window_messages {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  padding: 43px 16px 39px 43px;
}
</style>
