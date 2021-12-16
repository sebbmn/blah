<script>
import { Route } from "svelte-navigator";
import { groups, currentGroup, currentChat, currentUser } from '../../store/stores.js';
import { getGroups, getChat, getGroup } from "../../data/index";
import MainMenubar from '../../lib/MainMenubar.svelte';
import GroupList from '../../lib/GroupList.svelte';
import GroupMenubar from '../../lib/GroupMenubar.svelte';
import Chat from '../../lib/Chat.svelte';
import MessageInput from '../../lib/MessageInput.svelte';

function getGroupList() {
  groups.set(getGroups($currentUser));
  return $groups;
}

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
  <div class="blah-center-top">
      <GroupMenubar group={getGroupInfos(params.id)}/>
  </div>
  <div class="blah-center-middle">
      <Chat chat={getCurrentChat(params.id)}/>
  </div>
  <div class="blah-center-bottom">
    <MessageInput />
  </div>
</Route>
<Route path="/" let:params primary={false}>
  <div class="blah-mobile-top">
    <MainMenubar />
  </div>
  <div class="blah-mobile-middle">
    <GroupList groupList={getGroupList()}/>
  </div>
</Route>

<style>
.blah-mobile-top {
  border: 1px solid white;
  border-radius: 10px;
  height: 58px;
  padding: 5px;
}

.blah-mobile-middle {
  border: 1px solid white;
  border-radius: 10px;
  height: calc(100% - 78px);
  padding: 5px;
}
</style>