<script>
import GroupList from '../lib/GroupList.svelte';
import MainMenubar from '../lib/MainMenubar.svelte';
</script>

<div class="nav-top">
  <MainMenubar />
</div>
<div class="nav-main">
  <GroupList />
</div>

<style>
.nav-top {
  border: 1px solid white;
  border-radius: 10px;
  height: 58px;
  background-color: whitesmoke;
  padding: 0;
}

.nav-main {
  border: 1px solid white;
  border-radius: 10px;
  height: calc(100% - 58px);
  background-color: whitesmoke;
}
</style>