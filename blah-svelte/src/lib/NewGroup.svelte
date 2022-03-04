<script>
import ContactList from '../lib/ContactList.svelte';

export let contacts = [];

const group = {
  name: '',
  description: '',
  avatar: '',
  groupType: 'group',
  lastMessage: '',
  members: []
};

function addMember(member) {
  const isNewMember = !group.members.some(mbr => mbr.id === member.id);

  group.members = isNewMember ? [...group.members, member] : group.members;
  group.members = group.members;

}
</script>

<div class="blah-new-group">New Group...
  <p>
    {#each group.members as member, i}
      {member.name}
      {#if i < group.members.length - 1}
        <span>,&nbsp;</span>
      {/if}
    {:else}
      Add members to the list...
    {/each}
  </p>
  <ContactList contactList={contacts} on:selectContact={(e) => addMember(e.detail.contact)}/>
</div>

<style style lang="scss">
.blah-new-group {
  margin-top: 20px;
}
</style>