<script>
  import { WiredCard } from 'wired-elements';
  import { WiredListbox } from 'wired-elements';
  import { WiredIconButton } from 'wired-elements';

  let groupList = [
    {
      id: 1,
      name: "one"
    },
    {
      id: 2,
      name: "two"
    },
    {
      id: 3,
      name: "three"
    },
  ];

  let id = 3;

  function addGroup(e) {
    groupList.push({
      id: id++,
      name: "another one bites the dust"
    })
    groupList = groupList;
  }
</script>

<wired-card elevation="2" class="group-list">
  Groups
  <wired-listbox selected="two" class="group-listbox">
    {#each groupList as group}
    <wired-item value={group.id}>{group.name}</wired-item>
	  {/each}
  </wired-listbox>
  <wired-icon-button class="add-group" on:click={addGroup}>
    <mwc-icon>add</mwc-icon>
  </wired-icon-button>
</wired-card>

<style>
.group-list {
  width: calc(100% - 20px);
  height: calc(100% - 20px);
}
.group-listbox {
  width: calc(100% - 10px);
  --wired-item-selected-color: green; 
  --wired-item-selected-bg: yellowgreen;
}
.add-group {
  position:absolute;
  left: 0;
  bottom: -60px;
}
</style>