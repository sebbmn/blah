<script>
import { Route, navigate } from "svelte-navigator";
import { getGroups, getChat, getGroup } from "../../data/index";
import { groups, currentGroup, currentChat, currentUser } from '../../store/stores.js';
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

<Route path="/" let:params primary={false}>
  <div class="blah-mobile-top">
    <MainMenubar />
  </div>
  <div class="blah-mobile-middle-bottom">
    <GroupList groupList={getGroupList()}/>
  </div>
</Route>

<Route path="/group/:id" let:params primary={false}>
  <div class="blah-mobile-top">
      <GroupMenubar group={getGroupInfos(params.id)} isMobile={true} on:navigateBack="{() => navigate('/')}"/>
  </div>
  <div class="blah-mobile-middle">
      <Chat chat={getCurrentChat(params.id)}/>
  </div>
  <div class="blah-mobile-bottom">
    <MessageInput />
  </div>
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