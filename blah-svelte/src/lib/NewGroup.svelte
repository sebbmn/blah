<script>
export let contacts = [];
</script>
<div class="blah-new-group">New Group...</div>
{#each contacts as contact }
  <div>{contact.name}</div>
{/each}


<style style lang="scss">
.blah-new-group {
  background-color: cornflowerblue;
  margin-top: 20px;
}
</style>