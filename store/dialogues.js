export const state = () => ({
  dialogues: [],
  currentDialogue: null
});

export const mutations = {
  setDialogues(state, dialogues) {
    state.dialogues = dialogues;
  },
  setCurrentDialogue(state, dialogue) {
    state.currentDialogue = dialogue;
  },
  addMessage(state, data) {
    const {id, message} = data;
    // console.log(findedDialogue);
    // console.log(message);
    const ex = state.dialogues.map(item => {
      if (item.id === id) {
        item.parts.push(message)
      }
      return item;
    })
    state.dialogues = ex;
    // console.log(ex);
  }
};

export const getters = {
  dialogues: state => state.dialogues,
  currentDialogue: state => state.currentDialogue
};
