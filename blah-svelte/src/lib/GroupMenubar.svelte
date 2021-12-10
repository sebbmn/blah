<script>
  import { WiredCard } from 'wired-elements';
  import { WiredIconButton } from 'wired-elements';
  import Avatar from './Avatar.svelte'

  export let group;
</script>
  
<wired-card elevation="2" class="blah-group-menubar">
  <div class="blah-group-menubar__container">
    <Avatar image={{src: group.avatar, alt: group.name}} />
    <p>{group.name}</p>
    <mwc-icon class="group-menubar-icon">more_vert</mwc-icon>
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
      margin: 0;
    }

    .group-menubar-icon {
      cursor: pointer;
    }
  }
}
</style>