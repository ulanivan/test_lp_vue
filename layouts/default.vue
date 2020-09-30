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
import { mapMutations, mapGetters } from "vuex";

export default {
  components: {
    DialoguesList,
    DialogueWindow
  },
  mounted() {
    this.setDialogues(data);
    this.setCurrentDialogue(this.dialogues[0]);
  },
  methods: {
    ...mapMutations({
      setDialogues: "dialogues/setDialogues",
      setCurrentDialogue: "dialogues/setCurrentDialogue"
    })
  },
  computed: {
    ...mapGetters({
      dialogues: "dialogues/dialogues"
    })
  }
};
</script>

<style scoped lang="scss">
.app-container {
  display: flex;
  height: 100vh;
}
</style>
