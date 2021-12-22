<script>
import { createEventDispatcher } from 'svelte';
import { WiredCard, WiredIconButton } from 'wired-elements';

const dispatch = createEventDispatcher();

function navigateBack() {
  dispatch('navigateBack', {});
}
</script>

<wired-card elevation="2" class="blah-new-group">
  new group form
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