<script>
import { navigate } from "svelte-navigator";
import { WiredCard, WiredListbox, WiredIconButton } from 'wired-elements';
import Avatar from './Avatar.svelte'

export let groupList;

function addGroup(e) {
  console.log(e)
}
</script>

<wired-card elevation="2" class="blah-group-list">
  Groups
  <wired-icon-button class="blah-group-list__add-group" on:click={addGroup}>
    <mwc-icon>add</mwc-icon>
  </wired-icon-button>
  <wired-listbox selected="two" class="blah-group-list__listbox">
    {#each groupList as group}
      <wired-item value={group.id} on:click="{() => navigate(`/group/${group.id}`)}">
        <div class="blah-group-list__listbox--item">
          <Avatar image={{src: group.avatar, alt: group.name}} />
          <div class="group-name">{group.name}</div>
        </div>
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
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 0 0 0;

      .group-name {
        margin-left: 15px;
      }
    }
  }
  &__add-group {
    position:absolute;
    left: 0;
    top: 0;
  }
}
</style>