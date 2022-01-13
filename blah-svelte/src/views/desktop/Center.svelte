<script>
import { Route, navigate } from 'svelte-navigator';
import { currentGroup, currentChat, currentUser } from '../../store/stores.js';
import GroupMenubar from '../../lib/GroupMenubar.svelte';
import Chat from '../../lib/Chat.svelte';
import MessageInput from '../../lib/MessageInput.svelte';
import actions from '../../store/actions.js';

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

<Route path="/group/:id" let:params primary={false}>
  {#if !$currentGroup['id']}
    {navigate('/')}
  {:else}
    <div class="blah-center-top">
        <GroupMenubar group={$currentGroup} isMobile={false} on:openGroupInfos={() => console.log('open group infos')}/>
    </div>
    <div class="blah-center-middle">
        <Chat chat={$currentChat} currentUser={$currentUser}/>
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