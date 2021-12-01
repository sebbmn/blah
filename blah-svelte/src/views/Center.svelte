<script>
import { data, chat } from '../store/stores.js';
import { Route } from "svelte-navigator";
import GroupMenubar from '../lib/GroupMenubar.svelte';
import Chat from '../lib/Chat.svelte';

let groups;
let messages;

data.subscribe(value => {
  groups = value.groups;
});

chat.subscribe(value => {
  messages = value;
});

function getGroup(id) {
  const group = groups.find(grp => {
    return grp.id === id;
  });
  return group;
}

function getMessages(id) {
}

</script>

<Route path="/group/:id" let:params primary={false}>
  <div class="center-top">
      <GroupMenubar group={getGroup(params.id)}/>
  </div>
  <div class="center-middle">
      <Chat messages={messages}/>
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