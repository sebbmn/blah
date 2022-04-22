<script>
import { WiredCard, WiredListbox, WiredIconButton } from 'wired-elements';
import { createEventDispatcher } from 'svelte';
import Avatar from './Avatar.svelte';

export let contactList;

const dispatch = createEventDispatcher();

function selectContact(contact) {
  dispatch('selectContact', {contact});
}
</script>
<wired-listbox selected="two" class="blah-contact-list__listbox"
style="--wired-item-selected-color: white; --wired-item-selected-bg: grey;">
  {#each contactList as contact}
    <wired-item class="blah-contact-list__listbox--item" value={contact.id} on:click="{() => selectContact(contact)}">
      <Avatar image={{src: contact.avatar, alt: contact.name}} />&nbsp;
      {contact.name}
    </wired-item>
  {/each}
</wired-listbox>

<style lang="scss">
.blah-contact-list {
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  &__listbox {
    max-height: calc(80vh - 20px);
    overflow-y: auto;
    overflow-x: hidden;
    margin-top: 20px;
    width: calc(100% - 10px);

    &--item {
      height: 40px;
      font-size: 12pt;
      padding: 5px 0 5px 0;
    }
  }
  &__add-group {
    position:absolute;
    left: 0;
    top: 0;
  }
}
</style>