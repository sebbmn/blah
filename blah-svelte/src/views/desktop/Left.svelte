<script>
import { onMount } from 'svelte';
import { getGroups } from "../../data/index";
import { groups, currentUser } from '../../store/stores.js';
import GroupList from '../../lib/GroupList.svelte';
import MainMenubar from '../../lib/MainMenubar.svelte';
import NewGroup from '../../lib/NewGroup.svelte';

let showNewGroup = false;

onMount(async () => {
  groups.set(getGroups($currentUser));
});

function addGroup(e) {
  groups.update(groups => [...groups, e.detail]);
}
</script>

<div class="blah-left-top">
  <MainMenubar />
</div>
<div class="blah-left-middle">
  {#if showNewGroup}
    <NewGroup contacts={[]} on:navigateBack={() => showNewGroup = false}/>
  {:else}
    <GroupList groupList={$groups} on:newGroup={() => showNewGroup = true}/>
  {/if}
</div>

<style lang="scss">
.blah-left {
  &-top {
    border: 1px solid white;
    border-radius: 10px;
    height: 58px;
    padding: 5px;
  }

  &-middle {
    border: 1px solid white;
    border-radius: 10px;
    height: calc(100% - 78px);
    padding: 5px;
  }
}
</style>