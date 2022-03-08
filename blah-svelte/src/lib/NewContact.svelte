<script>
import { WiredInput } from 'wired-elements';

let id;
</script>

<div class="blah-new-contact">
  <wired-input class="blah-new-contact__name" bind:this="{id}" placeholder="Enter contact id"></wired-input>
</div>

<style style lang="scss">
.blah-new-contact {
  margin-top: 20px;

  &__name {
    width: calc(100% - 20px);
  }
}
</style>