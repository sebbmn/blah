<script>
import { WiredCard, WiredIconButton } from 'wired-elements';
import { createEventDispatcher } from 'svelte';
import { contacts } from '../store/stores.js';

const dispatch = createEventDispatcher();

function navigateBack() {
  console.log($contacts)
  dispatch('navigateBack', {});
}
</script>

<wired-card elevation="2" class="blah-new-group">
  new chat
  <wired-icon-button class="blah-new-group__back-button" on:click={navigateBack}>
    <mwc-icon>arrow_back</mwc-icon>
  </wired-icon-button>
</wired-card>

<style lang="scss">
.blah-new-group {
  width: calc(100% - 20px);
  height: calc(100% - 20px);

  &__back-button {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>