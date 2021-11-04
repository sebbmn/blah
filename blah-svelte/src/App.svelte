<link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah&display=swap" rel="stylesheet">
<script>
import Nav from './views/Nav.svelte';
import Main from './views/Main.svelte'; 
</script>

<main>
  <div id="blah-layout">
    <div class="blah-layout-nav">
      <Nav />
    </div>
    <div class="blah-layout-main">
      <Main />
    </div>
  </div>
</main>

<style>
main {
  padding: 16px;
  text-align: center;
  font-family: "Gloria Hallelujah", cursive;
  font-size: 16px;
  line-height: 1.8;
}
#blah-layout {
  max-width: 1440px;
  height: calc(100vh - 50px);
  margin: 0 auto;
  display: flex;
}
.blah-layout-nav {
  border-radius: 10px;
  width: 350px;
}

.blah-layout-main {
  border-radius: 10px;
  width: calc(100% - 350px);
}
</style>
