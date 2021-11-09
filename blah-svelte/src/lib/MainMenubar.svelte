<script>
  import { WiredCard } from 'wired-elements';
  import { WiredIconButton } from 'wired-elements';
</script>
  
<wired-card elevation="2" class="main-menubar">
  <div class="main-menubar-container">
    <wired-icon-button>
      <mwc-icon>person</mwc-icon>
    </wired-icon-button>
    <p>menu bar</p>
    <mwc-icon class="main-menubar-icon">more_vert</mwc-icon>
  </div>
</wired-card>
  
<style>
.main-menubar {
  width: 100%;
  height: calc(100%);
  padding: 0;
}
.main-menubar-container {
  width: calc(100% - 20px);
  height: calc(100% -4px);
  padding:  4px 10px 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main-menubar-icon {
  cursor: pointer;
}
</style>