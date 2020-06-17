<template>
  <div class="dialogues-list">
    <div class="dialogues-list_header">
      <p>Сообщения</p>
      <span class="dialogues-list_header_quantity-messages">{{ getSumAllMessages }}</span>
    </div>
    <div class="dialogues-list_items">
      <template v-for="dialogue in dialogues">
        <dialogue-item :dialogue="dialogue"
                       :key="dialogue.id"
        />
      </template>
    </div>
  </div>
</template>

<script>
import DialogueItem from "@/components/DialogueItem";
export default {
  props: {
    dialogues: {
      type: Array,
      default: () => []
    }
  },
  components: {
    DialogueItem
  },
  computed: {
    getSumAllMessages() {
      return this.dialogues.reduce((acc, dialogue) => acc + dialogue.parts.length, 0);
    }
  }
};
</script>

<style lang="scss">
.dialogues-list {
  width: 30%;
  background-color: #F3F6F8;
}
.dialogues-list_header {
  padding: 24px 0 16px 20px;
  align-items: center;
  display: flex;
  p {
    color: #656b77;
  }
  span {
    color: #D2D8DE;
    margin-left: 10px;
  }
}
</style>
