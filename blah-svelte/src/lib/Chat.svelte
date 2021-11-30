<script>
import { WiredCard } from 'wired-elements';

export let chat;

</script>

<wired-card elevation="2" class="chat">
  <p>chat {chat.id}</p>
  {#each Object.values(chat) as msg}
  <p>
    {msg.message}
  </p>
{/each}
</wired-card>

<style>
.chat {
  width: calc(100% - 20px);
  height: calc(100% - 20px);
}
</style>