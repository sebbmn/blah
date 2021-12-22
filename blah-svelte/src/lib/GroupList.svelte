<script>
import { createEventDispatcher } from 'svelte';
import { navigate } from "svelte-navigator";
import { WiredCard, WiredListbox, WiredIconButton } from 'wired-elements';
import Avatar from './Avatar.svelte'

export let groupList;

const dispatch = createEventDispatcher();

function newGroup(e) {
  dispatch('newGroup', {});
}
</script>

<wired-card elevation="2" class="blah-group-list">
  Groups
  <wired-icon-button class="blah-group-list__add-group" on:click={newGroup}>
    <mwc-icon>add</mwc-icon>
  </wired-icon-button>
  <wired-listbox selected="two" class="blah-group-list__listbox">
    {#each groupList as group}
      <wired-item class="blah-group-list__listbox--item" value={group.id} on:click="{() => navigate(`/group/${group.id}`)}">
        <Avatar image={{src: group.avatar, alt: group.name}} />&nbsp;
        {group.name}
      </wired-item>
	  {/each}
  </wired-listbox>
</wired-card>

<style lang="scss">
.blah-group-list {
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