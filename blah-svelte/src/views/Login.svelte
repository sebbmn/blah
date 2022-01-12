<script>
import { onMount, onDestroy } from 'svelte';
import { Router, navigate } from 'svelte-navigator';
import { currentUser } from '../store/stores.js';
import { getUser } from '../data/index.js';
import { WiredCard, WiredListbox } from 'wired-elements';

let users = ['usr1', 'usr2', 'usr3', 'usr4'];

function login(userId) {
  currentUser.set(getUser(userId));
}

onMount(async () => {
  navigate('/login');
});

onDestroy(() => {
  navigate('/');
});
</script>

<wired-card elevation="2" class="blah-login">
  LOGIN
  <wired-listbox class="blah-login__listbox"
  style="--wired-item-selected-color: white; --wired-item-selected-bg: lightgrey;">
    {#each users as user}
      <wired-item class="blah-login__listbox--item" value="{user}" on:click="{() => login(user)}">
        {user}
      </wired-item>
	  {/each}
  </wired-listbox>
</wired-card>

<style lang="scss">
.blah-login {
  width: 300px;
  margin: auto;

  &__listbox {
    max-height: calc(80vh - 20px);
    overflow-y: auto;
    overflow-x: hidden;
    margin-top: 20px;
    width: calc(100% - 10px);

    &--item {
      height: 40px;
      font-size: 12pt;
      padding: 5px 0 5px 0;
    }
  }
}
</style>