<script>
import { onMount } from 'svelte';
import { WiredCard } from 'wired-elements';

export let chat;

let chatDiv;

onMount(() => {
  setTimeout(() => {
    chatDiv.scrollTop = chatDiv.scrollHeight;
  }, 1);
});
</script>

<div class="blah-chat" bind:this={chatDiv}>
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

<style lang="scss">
.blah-chat {
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  margin: 8px;
  padding: 7px;
  border-radius: 10px;
  background-image: radial-gradient(circle, #c9c7c7 1px, transparent 0%);
  background-size: 15px 15px;
  overflow-x: hidden;

  p {
    width: 100%;
    u {
      text-decoration: #f00 wavy underline;
    }
  }
}
</style>