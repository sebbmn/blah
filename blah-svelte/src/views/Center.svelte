<script>
import { Route } from "svelte-navigator";
import GroupMenubar from '../lib/GroupMenubar.svelte';
import Chat from '../lib/Chat.svelte';

function getGroup(id) {
  return {
    id: id
  }
}

function getChat(id) {
  return {
    id: id
  }
}
</script>

<Route path="/group/:id" let:params primary={false}>
  <div class="center-top">
      <GroupMenubar group={getGroup(params.id)}/>
  </div>
  <div class="center-middle">
      <Chat chat={getChat(params.id)}/>
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