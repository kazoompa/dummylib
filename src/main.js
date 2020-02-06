import DummyButton from './components/DummyButton.vue'

function install (Vue, options) {
  DummyButton.mixins = [options.mixin];
  Vue.component('dummy-button', DummyButton)
}

DummyButton.install = install;

export default {
  DummyButton
};
