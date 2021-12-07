<script>
import { WiredCard } from 'wired-elements';
import { WiredListbox } from 'wired-elements';
import { WiredIconButton } from 'wired-elements';
import { navigate } from "svelte-navigator";
import Avatar from './Avatar.svelte'

export let groupList;

let id = 4;

function addGroup(e) {
  console.log(e)
  /* groupList.push({
    id: id++,
    name: "another one bites the dust"
  })
  groupList = groupList; */
}
</script>

<wired-card elevation="2" class="group-list">
  Groups
  <wired-icon-button class="add-group" on:click={addGroup}>
    <mwc-icon>add</mwc-icon>
  </wired-icon-button>
  <wired-listbox selected="two" class="group-listbox">
    {#each groupList as group}
      <wired-item value={group.id} on:click="{() => navigate(`/group/${group.id}`)}">
        <div class="group-listbox__item">
          <Avatar image={{src: group.avatar, alt: group.name}} />
          <div class="group-name">{group.name}</div>
        </div>
      </wired-item>
	  {/each}
  </wired-listbox>
</wired-card>

<style lang="scss">
.group-list {
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  .group-listbox {
    max-height: calc(80vh - 20px);
    overflow-y: auto;
    overflow-x: hidden;
    margin-top: 20px;
    width: calc(100% - 10px);


    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 0 0 0;

      .group-name {
        margin-left: 15px;
      }
    }
  }
  .add-group {
    position:absolute;
    left: 0;
    top: 0;
  }
}
</style>