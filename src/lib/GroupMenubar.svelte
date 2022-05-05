<script>
import { WiredCard, WiredIconButton, WiredDialog } from 'wired-elements';
import { createEventDispatcher } from 'svelte';
import Avatar from './Avatar.svelte';

export let group;
export let isMobile = false;

let showGroupInfo = false;

const dispatch = createEventDispatcher();

function navigateBack() {
  dispatch('navigateBack', {});
}

function toggleGroupInfos() {
  showGroupInfo = !showGroupInfo;
}
</script>

<wired-dialog open={showGroupInfo}>
  <div class="blah-group-menubar__group-infos">
    <div>
      <h3>{group.name}</h3>
    </div>
    <div>
      <img src={group.avatar} alt={group.name} style="max-height: 35vh; width: 100%;" />
    </div>
    <div style="width:100%; text-align:center;">
      <wired-button id="closeDialog" on:click={toggleGroupInfos}>Close</wired-button>
    </div>
  </div>
</wired-dialog>

<wired-card elevation="2" class="blah-group-menubar">
  <div class="blah-group-menubar__container">
    {#if isMobile}
      <mwc-icon class="blah-group-menubar__icon" on:click={navigateBack}>arrow_back</mwc-icon>
    {/if}
    <div class="blah-group-menubar__infos" on:click={toggleGroupInfos} title="Group infos">
      <div class="blah-group-menubar__avatar">
        <Avatar image={{src: group.avatar, alt: group.name}} />
      </div>
      <p>{group.name}</p>
    </div>
  </div>
</wired-card>
  
<style lang="scss">
.blah-group-menubar {
  width: 100%;
  height: 100%;
  padding: 0;

  &__group-infos {
    width: 300px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    span {
      margin: auto;
    }
  }
  &__container {
    width: calc(100% - 25px);
    height: 58px;
    padding:  0 10px 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 0 0 0 5px;
    }
  }

  &__infos {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  &__icon {
    cursor: pointer;
  }
  &__avatar {
    cursor: pointer;
    margin: 3px;
    padding: 6px 6px 0 0;
  }
}
</style>