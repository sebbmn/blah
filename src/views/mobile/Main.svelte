<script>
import { Route, navigate } from 'svelte-navigator';
import { onMount } from 'svelte';
import { groups, currentGroup, currentChat, currentUser } from '../../store/stores.js';
import actions from '../../store/actions';
import MainMenubar from '../../lib/MainMenubar.svelte';
import GroupList from '../../lib/GroupList.svelte';
import GroupMenubar from '../../lib/GroupMenubar.svelte';
import Chat from '../../lib/Chat.svelte';
import MessageInput from '../../lib/MessageInput.svelte';
import New from '../New.svelte';

let showNewChat = false;

onMount(async () => {
  actions.fetchData($currentUser['id']);
});

function setCurrentGroup(id) {
  actions.setCurrentGroup(id);
  navigate(`/group/${id}`);
}

function navigateTo(id) {
  showNewChat = false;

  if(id) {
    setCurrentGroup(id);
  }
}

function onNewMessage(message) {
  const newMessage = {
    id: '',
    message: message,
    timestamp: 1,
    user: $currentUser
  };
  actions.newMessage($currentGroup['id'], newMessage);
}
</script>

<Route path="/" let:params primary={false}>
  <div class="blah-mobile-top">
    <MainMenubar user={$currentUser}/>
  </div>
  <div class="blah-mobile-middle-bottom">
    {#if showNewChat}
      <New on:navigateTo={(e) => navigateTo(e.detail.id)}/>
    {:else}
      <GroupList groupList={$groups} on:newGroup={() => showNewChat = true} on:selectGroup={(e) => setCurrentGroup(e.detail.id)}/>
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