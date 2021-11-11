<link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">
<script>
import '@material/mwc-icon';
import { WiredToggle } from 'wired-elements';
import Left from './views/Left.svelte';
import Center from './views/Center.svelte';
import Right from './views/Right.svelte';

let displayRight = false;

function toggleRightPanel() {
  displayRight = !displayRight;
}
</script>

<main>
  <wired-toggle on:change={toggleRightPanel}></wired-toggle>
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
</main>

<style>
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
.blah-layout-left {
  border-radius: 10px;
  width: 350px;
}

.blah-layout-center {
  border-radius: 10px;
  width: calc(100% - 700px);
}
.blah-layout-center-extended {
  border-radius: 10px;
  width: calc(100% - 350px);
}

.blah-layout-right {
  border-radius: 10px;
  width: 350px;
}
</style>
