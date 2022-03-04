<script>
import { WiredInput, WiredButton } from 'wired-elements';
import { createEventDispatcher } from 'svelte';
import ContactList from '../lib/ContactList.svelte';

export let contacts = [];

const dispatch = createEventDispatcher();

let name;
let description;
let avatar;
let members = [];

function addMember(member) {
  const isNewMember = !members.some(mbr => mbr.id === member.id);

  members = isNewMember ? [...members, member] : members;
  members = members;

}

function createGroup() {
  const group = {
    name: name.value || '',
    description: description.value || '',
    avatar: avatar.value || '',
    groupType: 'group',
    lastMessage: '',
    members: [ ...members]
  };
  dispatch('newGroup', group);
}
</script>

<div class="blah-new-group">
  <wired-input class="blah-new-group__name" bind:this="{name}" placeholder="Enter name"></wired-input>
  <wired-input class="blah-new-group__description" bind:this="{description}" placeholder="Enter description"></wired-input>
  <wired-input class="blah-new-group__avatar" bind:this="{avatar}" placeholder="Enter avatar url"></wired-input>
  <p>
    {#each members as member, i}
      {member.name}
      {#if i < members.length - 1}
        <span>,&nbsp;</span>
      {/if}
    {:else}
      Add members to the list...
    {/each}
  </p>
  <ContactList contactList={contacts} on:selectContact={(e) => addMember(e.detail.contact)}/>
  <wired-button on:click={(e) => createGroup()}>Create</wired-button>
</div>

<style style lang="scss">
.blah-new-group {
  margin-top: 20px;

  &__name {
    width: calc(100% - 20px);
  }

  &__description {
    width: calc(100% - 20px);
  }

  &__avatar {
    width: calc(100% - 20px);
  }
}
</style>