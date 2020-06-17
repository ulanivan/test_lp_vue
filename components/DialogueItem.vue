<template>
  <div @click.prevent="openDialogue(dialogue.id)"
       class="dialogue-item"
       :class="{'dialogue-item__active': dialogue.id === currentDialogue.id}"
  >
    <div class="dialogue-item_header">
      <p class="Body-14-bold">{{ dialogue.subject }}</p>
      <p class="dialogue-item_header_date">{{ $moment(dialogue.created).format('D MMMM YYYY').toUpperCase() }}</p>
    </div>
    <div class="dialogue-item_header_message">
      {{ dialogue.parts[0].text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dialogue: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    currentDialogue() {
      return this.$store.getters["dialogues/currentDialogue"];
    }
  },
  methods: {
    openDialogue(id) {
      this.$router.push(`/${id}`);
      this.$store.commit("components/setVisible", {component: "loader", visibility: true});
      setTimeout(() => {
        this.$store.commit("components/setVisible", {component: "loader", visibility: false});
        this.$store.commit("dialogues/setCurrentDialogue", this.dialogue);
      }, 2000)
    }
  }
};
</script>

<style scoped lang="scss">
.dialogue-item {
  padding: 21px 20px 11px 23px;
  cursor: pointer;
  border: 1px solid #E9EDF2;
}
.dialogue-item__active {
  border-left: 2px solid var(--blue);
  background-color: #ffffff;
}
.dialogue-item_header {
  display: flex;
  justify-content: space-between;
}
.dialogue-item_header_date {
  color: #B7C0C8;
  font-size: 10px;
}
.dialogue-item_header_message {
  color: #7D8790;
  margin-top: 6px;
  height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
}
</style>
