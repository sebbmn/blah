<script>
import { onMount } from 'svelte';
import { Route, navigate } from 'svelte-navigator';
import { getGroups, getChat, getGroup } from '../../store/actions';
import { groups, currentGroup, currentChat, currentUser } from '../../store/stores.js';
import MainMenubar from '../../lib/MainMenubar.svelte';
import GroupList from '../../lib/GroupList.svelte';
import GroupMenubar from '../../lib/GroupMenubar.svelte';
import Chat from '../../lib/Chat.svelte';
import MessageInput from '../../lib/MessageInput.svelte';
import NewGroup from '../../lib/NewGroup.svelte';

let showNewGroup = false;

onMount(async () => {
  groups.set(getGroups($currentUser['id']));
});

function addGroup(e) {
  groups.update(groups => [...groups, e.detail]);
}

function setCurrentGroup(id) {
  currentGroup.set(getGroup($currentUser['id'], id));
  currentChat.set(getChat($currentUser['id'], id));
  navigate(`/group/${id}`);
}

function onNewMessage(message) {
  const newMessage = {
    id: '',
    message: message,
    user: $currentUser
  };

  $currentChat['messages'] = [
    ...$currentChat['messages'],
    newMessage
  ]
}
</script>

<Route path="/" let:params primary={false}>
  <div class="blah-mobile-top">
    <MainMenubar />
  </div>
  <div class="blah-mobile-middle-bottom">
    {#if showNewGroup}
      <NewGroup on:navigateBack={() => showNewGroup = false}/>
    {:else}
      <GroupList groupList={$groups} on:newGroup={() => showNewGroup = true} on:selectGroup={(e) => setCurrentGroup(e.detail.id)}/>
    {/if}
  </div>
</Route>

<Route path="/group/:id" let:params primary={false}>
  {#if !$currentGroup['id']}
    {navigate('/')}
  {:else}
    <div class="blah-mobile-top">
        <GroupMenubar group={$currentGroup} isMobile={true} on:navigateBack="{() => navigate('/')}"/>
    </div>
    <div class="blah-mobile-middle">
      <Chat chat={$currentChat} currentUser={$currentUser}/>
    </div>
    <div class="blah-mobile-bottom">
      <MessageInput on:newMessage={(e) => onNewMessage(e.detail.message)} />
    </div>
  {/if}
</Route>

<style lang="scss">
.blah-mobile {
  &-top {
    border: 1px solid white;
    border-radius: 10px;
    height: 58px;
    padding: 5px;
  }

  &-middle {
    border: 1px solid white;
    border-radius: 10px;
    height: calc(100% - 120px);
    padding: 5px;
  }

  &-middle-bottom {
    border: 1px solid white;
    border-radius: 10px;
    height: calc(100% - 43px);
    padding: 5px;
  }

  &-bottom {
    border: 1px solid white;
    border-radius: 10px;
    height: 62px;
    padding: 5px;
  }
}
</style>