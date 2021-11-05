<script>
  import { WiredCard } from 'wired-elements';
  import { WiredIconButton } from 'wired-elements';
</script>
  
<wired-card elevation="2" class="group-menubar">
  <div class="group-menubar-container">
    <wired-icon-button>
      <mwc-icon>image</mwc-icon>
    </wired-icon-button>
    <p>Group menu bar</p>
    <wired-icon-button>
      <mwc-icon>more_vert</mwc-icon>
    </wired-icon-button>
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
</style>