<script>
import { WiredCard, WiredIconButton } from 'wired-elements';
import Avatar from './Avatar.svelte';

export let user = {};
</script>
  
<wired-card elevation="2" class="blah-main-menubar">
  <div class="blah-main-menubar__container">
    <div class="blah-main-menubar__avatar" on:click={() => console.log('avatar clicked')}>
      <Avatar image={{src: user.avatar, alt:user.name}}/>
    </div>
    <p>{user.name}</p>
    <p></p>
    <!--<mwc-icon class="blah-main-menubar__icon">more_vert</mwc-icon>-->
  </div>
</wired-card>
  
<style lang="scss">
.blah-main-menubar {
  width: 100%;
  height: 100%;
  padding: 0;

  &__container {
    width: calc(100% - 20px);
    height: calc(100% - 4px);
    padding:  0px 10px 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__icon {
    cursor: pointer;
  }

  &__avatar {
    cursor: pointer;
    padding: 6px 0 0 4px;
  }
}
</style>