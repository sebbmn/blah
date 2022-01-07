<script>
import { Route, navigate } from 'svelte-navigator';
import { getChat, getGroup } from '../../store/actions';
import { currentGroup, currentChat, currentUser } from '../../store/stores.js';
import GroupMenubar from '../../lib/GroupMenubar.svelte';
import Chat from '../../lib/Chat.svelte';
import MessageInput from '../../lib/MessageInput.svelte';

function getGroupInfos(id) {
  currentGroup.set(getGroup($currentUser, id))
  return $currentGroup;
}

function getCurrentChat(id) {
  currentChat.set(getChat($currentUser, id));
  return $currentChat;
}

function onNewMessage(message) {
  console.log(message);
}
</script>

<Route path="/group/:id" let:params primary={false}>
  {#if !getGroupInfos(params.id)['id']}
    {navigate('/')}
  {:else}
    <div class="blah-center-top">
        <GroupMenubar group={getGroupInfos(params.id)} isMobile={false}/>
    </div>
    <div class="blah-center-middle">
        <Chat chat={getCurrentChat(params.id)}/>
    </div>
    <div class="blah-center-bottom">
      <MessageInput on:newMessage={(e) => onNewMessage(e.detail.message)} />
    </div>
  {/if}
</Route>

<style lang="scss">
.blah-center {
  &-top {
    border: 1px solid white;
    border-radius: 10px;
    height: 58px;
    padding: 5px;
  }

  &-middle {
    border: 1px solid white;
    border-radius: 10px;
    height: calc(100% - 155px);
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