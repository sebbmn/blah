<script>
import { WiredCard, WiredIconButton } from 'wired-elements';
import { createEventDispatcher } from 'svelte';
import Avatar from './Avatar.svelte';

export let group;
export let isMobile = false;

const dispatch = createEventDispatcher();

function navigateBack() {
  dispatch('navigateBack', {});
}

function openGroupInfos() {
  dispatch('openGroupInfos', {});
}
</script>
  
<wired-card elevation="2" class="blah-group-menubar">
  <div class="blah-group-menubar__container">
    {#if isMobile}
      <mwc-icon class="blah-group-menubar__icon" on:click={navigateBack}>arrow_back</mwc-icon>
    {/if}
    <div class="blah-group-menubar__infos" on:click={openGroupInfos}>
      <div class="blah-group-menubar__avatar">
        <Avatar image={{src: group.avatar, alt: group.name}} />
      </div>
      <p>{group.name}</p>
    </div>
    <mwc-icon class="blah-group-menubar__icon">more_vert</mwc-icon>
  </div>
</wired-card>
  
<style lang="scss">
.blah-group-menubar {
  width: 100%;
  height: 100%;
  padding: 0;
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