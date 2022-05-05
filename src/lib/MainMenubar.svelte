<script>
import actions from '../store/actions'
import { WiredCard, WiredIconButton, WiredListbox } from 'wired-elements';
import Avatar from './Avatar.svelte';

export let user = {};
let showUserMenu = false;
</script>
  
<wired-card elevation="2" class="blah-main-menubar">
  <div class="blah-main-menubar__container">
    <div class="blah-main-menubar__avatar" on:click={() => showUserMenu =! showUserMenu}>
      <Avatar image={{src: user.avatar, alt:user.name}}/>
    </div>
    <p>{user.name}</p>
    <p></p>
    {#if showUserMenu}
      <wired-listbox selected="two" class="blah-main-menubar__user-menu"
      style="--wired-item-selected-color: white; --wired-item-selected-bg: grey;">
          <wired-item class="blah-main-menubar__user-menu--item" value="log out" on:click={() => actions.flushCurrentUser()}>
            Log out
          </wired-item>
      </wired-listbox>
    {/if}
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

  &__user-menu {
    position: absolute;
    background-color: white;
    top: 50px;
    z-index: 10;
  }
}
</style>