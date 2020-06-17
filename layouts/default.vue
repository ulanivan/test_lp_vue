<template>
  <div class="app-container">
    <dialogues-list :dialogues="dialogues" />
    <dialogue-window />
  </div>
</template>

<script>
import { data } from "../fakeData";
import DialoguesList from "@/components/DialoguesList";
import DialogueWindow from "@/components/DialogueWindow";

export default {
  components: {
    DialoguesList,
    DialogueWindow
  },
  mounted() {
    this.$store.commit("dialogues/setDialogues", data);
    this.$store.commit("dialogues/setCurrentDialogue", this.dialogues[0]);
  },
  computed: {
    dialogues() {
      return this.$store.getters["dialogues/dialogues"];
    }
  }
};
</script>

<style scoped lang="scss">
.app-container {
  display: flex;
  height: 100vh;
}
</style>
