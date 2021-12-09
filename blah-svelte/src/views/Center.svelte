<script>
import { currentGroup, currentChat } from '../store/stores.js';
import { getChat, getGroup } from "../store/utils";
import { Route } from "svelte-navigator";
import GroupMenubar from '../lib/GroupMenubar.svelte';
import Chat from '../lib/Chat.svelte';

function getGroupInfos(id) {
  currentGroup.set(getGroup("usr2", id))
  return $currentGroup;
}

function getCurrentChat(id) {
  currentChat.set(getChat("usr2", id));
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
  height: calc(100% - 78px);
  padding: 5px;
}
</style>