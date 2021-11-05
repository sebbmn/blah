<script>
  import { WiredCard } from 'wired-elements';
  import { WiredListbox } from 'wired-elements';
  import { WiredIconButton } from 'wired-elements';
</script>

<wired-card elevation="2" class="group-list">
  Groups
  <wired-listbox selected="two" class="group-listbox">
    <wired-item value="one">Number One</wired-item>
    <wired-item value="two">Number Two</wired-item>
    <wired-item value="three">Number Three</wired-item>
  </wired-listbox>
  <wired-icon-button class="blue">
    <mwc-icon>add</mwc-icon>
  </wired-icon-button>
</wired-card>

<style>
.group-list {
  width: calc(100% - 20px);
  height: calc(100% - 20px);
}
.group-listbox {
  width: calc(100% - 10px);
  --wired-item-selected-color: darkred; 
  --wired-item-selected-bg: pink;
}
</style>