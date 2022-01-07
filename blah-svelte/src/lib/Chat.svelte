<script>
import { onMount } from 'svelte';
import { WiredCard } from 'wired-elements';

export let chat;
export let currentUser;

let chatDiv;

onMount(() => {
  setTimeout(() => {
    chatDiv.scrollTop = chatDiv.scrollHeight;
  }, 1);
});
</script>

<div class="blah-chat" bind:this={chatDiv}>
  {#each chat.messages as msg}
    <div class="{msg.user.name === currentUser.name ? 'blah-chat__message-self' : 'blah-chat__message-other'}">
      <p>
        <u>{msg.user.name === currentUser.name ? 'Me' : msg.user.name}</u>
      </p>
      <wired-card>
        {msg.message}
      </wired-card>
    </div>
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
  &__message-self {
    text-align: right;
    color: #ff3c00;
    p {
      width: 100%;
      u {
        padding-right: 15px;
        text-decoration: #ff3c00 wavy underline;
      }
    }
  }
  &__message-other {
    text-align: left;
    color: #1100ff;
    p {
      width: 100%;
      u {
        padding-left: 15px;
        text-decoration: #1100ff wavy underline;
      }
    }
  }
}
</style>