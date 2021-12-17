<script>
import { getGroups } from "../../data/index";
import { groups, currentUser } from '../../store/stores.js';
import GroupList from '../../lib/GroupList.svelte';
import MainMenubar from '../../lib/MainMenubar.svelte';

function getGroupList() {
  groups.set(getGroups($currentUser));
  return $groups;
}
</script>

<div class="blah-left-top">
  <MainMenubar />
</div>
<div class="blah-left-middle">
  <GroupList groupList={getGroupList()}/>
</div>

<style lang="scss">
.blah-left {
  &-top {
    border: 1px solid white;
    border-radius: 10px;
    height: 58px;
    padding: 5px;
  }

  &-middle {
    border: 1px solid white;
    border-radius: 10px;
    height: calc(100% - 78px);
    padding: 5px;
  }
}
</style>