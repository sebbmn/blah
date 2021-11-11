<script>
import { WiredCard } from 'wired-elements';
</script>
  
<div class="right-top">
  <wired-card elevation="2" class="right-card">
    <p>Right menu</p>
  </wired-card>
</div>
<div class="right-middle">
  <wired-card elevation="2" class="right-card">
    <p>Right zone</p>
  </wired-card>
</div>

<style>
.right-top {
  border: 1px solid white;
  border-radius: 10px;
  height: 58px;
  padding: 5px;
}

.right-middle {
  border: 1px solid white;
  border-radius: 10px;
  height: calc(100% - 78px);
  padding: 5px;
}

.right-card {
  width: 100%;
  height: 100%;
  padding: 0;
}
</style>