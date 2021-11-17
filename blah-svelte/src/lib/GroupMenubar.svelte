<script>
  import { WiredCard } from 'wired-elements';
  import { WiredIconButton } from 'wired-elements';

  export let group;
</script>
  
<wired-card elevation="2" class="group-menubar">
  <div class="group-menubar-container">
    <mwc-icon class="group-menubar-icon">image</mwc-icon>
    <p>Group {group.id} menu bar</p>
    <mwc-icon class="group-menubar-icon">more_vert</mwc-icon>
  </div>
</wired-card>
  
<style>
.group-menubar {
  width: 100%;
  height: calc(100%);
  padding: 0;
}
.group-menubar-container {
  width: calc(100% - 20px);
  height: calc(100% -4px);
  padding:  4px 10px 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.group-menubar-icon {
  cursor: pointer;
}
</style>