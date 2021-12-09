<script>
import { currentGroup, currentChat, currentUser } from '../store/stores.js';
import { getChat, getGroup } from "../store/utils";
import { Route } from "svelte-navigator";
import GroupMenubar from '../lib/GroupMenubar.svelte';
import Chat from '../lib/Chat.svelte';
import MessageInput from '../lib/MessageInput.svelte';

function getGroupInfos(id) {
  currentGroup.set(getGroup($currentUser, id))
  return $currentGroup;
}

function getCurrentChat(id) {
  currentChat.set(getChat($currentUser, id));
  return $currentChat;
}

</script>

<Route path="/group/:id" let:params primary={false}>
  <div class="center-top">
      <GroupMenubar group={getGroupInfos(params.id)}/>
  </div>
  <div class="center-middle">
      <Chat chat={getCurrentChat(params.id)}/>
  </div>
  <div class="center-bottom">
    <MessageInput />
  </div>
</Route>
<style>
.center-top {
  border: 1px solid white;
  border-radius: 10px;
  height: 58px;
  padding: 5px;
}

.center-middle {
  border: 1px solid white;
  border-radius: 10px;
  height: calc(100% - 155px);
  padding: 5px;
}

.center-bottom {
  border: 1px solid white;
  border-radius: 10px;
  height: 62px;
  padding: 5px;
}
</style>