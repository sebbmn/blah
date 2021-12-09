<script>
import { WiredCard } from 'wired-elements';
import MessageInput from './MessageInput.svelte';

export let chat;

</script>

<wired-card elevation="2" class="chat">
  <div class="chat-top">
    <p>{chat.id}</p>
    {#each chat.messages as msg}
      <p>
        <u>{msg.user.name}</u>
      </p>
      <wired-card>
        {msg.message}
      </wired-card>
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
    u {
      text-decoration: #f00 wavy underline;
    }
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