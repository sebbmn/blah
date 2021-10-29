<script>

</script>

<main>
  <div id="blah-container">
    <div class="blah-nav">Navigation</div>
    <div class="blah-main">Main area</div>
  </div>
</main>

<style>
#blah-container {
  max-width: 1440px;
  height: 98vh;
  margin: 0 auto;
  display: flex;
}
.blah-nav {
  background-color: lightblue;
  width: 350px;
}

.blah-main {
  background-color: yellow;
  width: calc(100% - 350px);
}
</style>
