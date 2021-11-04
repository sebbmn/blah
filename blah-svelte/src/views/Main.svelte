<script>
import GroupMenubar from '../lib/GroupMenubar.svelte';
import Chat from '../lib/Chat.svelte';
</script>

<div class="main-top">
  <GroupMenubar />
</div>
<div class="main-main">
  <Chat />
</div>

<style>
.main-top {
  border: 1px solid white;
  border-radius: 10px;
  height: 58px;
  background-color: whitesmoke;
}

.main-main {
  border: 1px solid white;
  border-radius: 10px;
  height: calc(100% - 58px);
  background-color: whitesmoke;
}
</style>