<script>
import { WiredCard } from 'wired-elements';
import MessageInput from './MessageInput.svelte';

export let messages;

</script>

<wired-card elevation="2" class="chat">
  <div class="chat-top">
    <p>chat</p>
    {#each messages as msg}
      <p>
        {msg.message}
      </p>
    {/each}
  </div>
  <div class="chat-bottom">
    <MessageInput />
  </div>
</wired-card>

<style lang="scss">
.chat {
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  position: relative;

  p {
    width: 100%;
  }

  &-top {
    width: 100%;
    height: calc(100% - 100px);
  }

  &-bottom {
    width: 100%;
    height: 70px;
    padding: 0;
  }
}
</style>