<script>
import { data } from '../store/stores.js';
import GroupList from '../lib/GroupList.svelte';
import MainMenubar from '../lib/MainMenubar.svelte';

let groups;

data.subscribe(value => {
  groups = value.groups;
});
</script>

<div class="left-top">
  <MainMenubar />
</div>
<div class="left-middle">
  <GroupList groupList={groups}/>
</div>

<style>
.left-top {
  border: 1px solid white;
  border-radius: 10px;
  height: 58px;
  padding: 5px;
}

.left-middle {
  border: 1px solid white;
  border-radius: 10px;
  height: calc(100% - 78px);
  padding: 5px;
}
</style>