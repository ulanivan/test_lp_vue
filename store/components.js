export const state = () => ({
  components: {
    loader: {
      visible: false
    }
  }
});

export const mutations = {
  setVisible(state, {component, visibility}) {
    state.components[component].visible = visibility;
  }
};

export const getters = {
  components: state => state.components
};
