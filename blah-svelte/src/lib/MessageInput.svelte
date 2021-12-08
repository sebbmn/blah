<script>
import { WiredCard, WiredInput, WiredIconButton } from 'wired-elements';

</script>

<wired-card elevation="2" class="message-input">
  <span class="message-input__message">
    <wired-input class="message-input__message-input">input here...</wired-input>
  </span>
  <span class="message-input__send">
    <wired-icon-button>
      <mwc-icon>send</mwc-icon>
    </wired-icon-button>
  </span>
</wired-card>

<style lang="scss">
.message-input {
  width: calc(100% - 20px);
  height: 45px;

  &__message {
    &-input {
      width: calc(100% - 80px);
    }
  }
}
</style>