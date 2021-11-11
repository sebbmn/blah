<script>
import GroupMenubar from '../lib/GroupMenubar.svelte';
import Chat from '../lib/Chat.svelte';
</script>

<div class="center-top">
  <GroupMenubar />
</div>
<div class="center-middle">
  <Chat />
</div>

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