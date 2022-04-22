<script>
import { WiredCard, WiredInput, WiredIconButton } from 'wired-elements';
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();
let input = '';

function newMessage(e) {
  dispatch('newMessage', {
    message: input
  });
  input = '';
}
</script>

<wired-card elevation="2" class="blah-message-input">
  <span class="blah-message-input__message">
    <wired-input class="blah-message-input__message--input" placeholder="Enter message..." value={input} on:input={(e) => input = e.target.value}></wired-input>
  </span>
  <span class="blah-message-input__send">
    <wired-icon-button on:click={newMessage}>
      <mwc-icon>send</mwc-icon>
    </wired-icon-button>
  </span>
</wired-card>

<style lang="scss">
.blah-message-input {
  width: calc(100% - 20px);
  height: 45px;

  &__message {
    &--input {
      width: calc(100% - 80px);
    }
  }
}
</style>