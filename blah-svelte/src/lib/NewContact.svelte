<script>
import { WiredInput } from 'wired-elements';
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

let id;

function createContact() {
  dispatch('newContact', id.value);
}
</script>

<div class="blah-new-contact">
  <wired-input class="blah-new-contact__name" bind:this="{id}" placeholder="Enter contact id"></wired-input>
  <wired-button on:click={(e) => createContact()}>Create</wired-button>
</div>

<style style lang="scss">
.blah-new-contact {
  margin-top: 20px;

  &__name {
    width: calc(100% - 20px);
  }
}
</style>