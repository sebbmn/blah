<link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">
<script>
import '@material/mwc-icon';
import { Router } from "svelte-navigator";
import { currentUser } from './store/stores';
import Left from './views/desktop/Left.svelte';
import Center from './views/desktop/Center.svelte';
import Right from './views/desktop/Right.svelte';
import Mobile from './views/mobile/Main.svelte';
import Login from './views/Login.svelte';

let displayRight = false;
let isMobile = window.innerWidth < 700;

window.addEventListener('resize', () => {
  isMobile = window.innerWidth < 700;
});

</script>

<Router>
  {#if !$currentUser['name']}
    <main>
      <div id="blah-layout">
        <Login />
      </div>
    </main>
  {:else}
    <main>
      {#if isMobile}
        <div id="blah-layout">
          <div class="blah-layout-mobile">
            <Mobile />
          </div>
        </div>
      {:else}
        <div id="blah-layout">
          <div class="blah-layout-left">
            <Left />
          </div>
          {#if displayRight}
            <div class="blah-layout-center">
              <Center />
            </div>
            <div class="blah-layout-right">
              <Right />
            </div>
          {:else}
            <div class="blah-layout-center-extended">
              <Center />
            </div>
          {/if}
        </div>
      {/if}
    </main>
  {/if}
</Router>


<style lang="scss">
main {
  text-align: center;
  font-family: "Gloria Hallelujah", cursive;
  font-size: 11pt;
}
#blah-layout {
  max-width: 1440px;
  height: calc(100vh - 60px);
  margin: 0 auto;
  display: flex;
}
.blah-layout {
  &-left {
    border-radius: 10px;
    width: 350px;
  }

  &-center {
    border-radius: 10px;
    width: calc(100% - 700px);
  }

  &-center-extended {
    border-radius: 10px;
    width: calc(100% - 350px);
  }

  &-right {
    border-radius: 10px;
    width: 350px;
  }

  &-mobile {
    border-radius: 10px;
    width: 100%;
  }
}
</style>
