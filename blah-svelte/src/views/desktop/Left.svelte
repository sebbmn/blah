<script>
import { navigate } from 'svelte-navigator';
import { onMount } from 'svelte';
import { groups, currentUser } from '../../store/stores.js';
import actions from '../../store/actions';
import GroupList from '../../lib/GroupList.svelte';
import MainMenubar from '../../lib/MainMenubar.svelte';
import NewGroup from '../NewChat.svelte';

let showNewGroup = false;

onMount(async () => {
  actions.fetchData($currentUser['id']);
});

function setCurrentGroup(id) {
  actions.setCurrentGroup(id);
  navigate(`/group/${id}`);
}

function navigateTo(id) {
  showNewGroup = false;

  if(id) {
    setCurrentGroup(id);
  }
}
</script>

<div class="blah-left-top">
  <MainMenubar user={$currentUser}/>
</div>
<div class="blah-left-middle">
  {#if showNewGroup}
    <NewGroup on:navigateTo={(e) => navigateTo(e.detail.id)}/>
  {:else}
    <GroupList groupList={$groups} on:newGroup={() => showNewGroup = true} on:selectGroup={(e) => setCurrentGroup(e.detail.id)}/>
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