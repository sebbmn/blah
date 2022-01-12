<script>
import { onMount } from 'svelte';
import { navigate } from 'svelte-navigator';
import data from '../../data/index';
import { groups, currentUser, currentGroup, currentChat } from '../../store/stores.js';
import actions from '../../store/actions';
import GroupList from '../../lib/GroupList.svelte';
import MainMenubar from '../../lib/MainMenubar.svelte';
import NewGroup from '../../lib/NewGroup.svelte';

let showNewGroup = false;

onMount(async () => {
  actions.fetchGroups($currentUser['id']);
});

function addGroup(e) {
  groups.update(groups => [...groups, e.detail]);
}

function setCurrentGroup(id) {
  currentGroup.set(data.getGroup($currentUser['id'], id));
  currentChat.set(data.getChat($currentUser['id'], id));
  navigate(`/group/${id}`);
}
</script>

<div class="blah-left-top">
  <MainMenubar />
</div>
<div class="blah-left-middle">
  {#if showNewGroup}
    <NewGroup on:navigateBack={() => showNewGroup = false}/>
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