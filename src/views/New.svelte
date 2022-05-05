<script>
import { WiredCard, WiredButton, WiredIconButton } from 'wired-elements';
import { createEventDispatcher } from 'svelte';
import { contacts, groups, currentUser } from '../store/stores.js';
import actions from '../store/actions'
import ContactList from '../lib/ContactList.svelte';
import NewGroup from '../lib/NewGroup.svelte';
import NewContact from '../lib/NewContact.svelte';

const dispatch = createEventDispatcher();

let showNewGroup = false;
let showNewContact = false;

function navigateBack() {
  if(showNewGroup || showNewContact) {
    showNewGroup = false;
    showNewContact = false;
  } else {
    dispatch('navigateTo', {});
  }
}

function newConversation(user) {
  let group = $groups.find(group => {
    return group.members[user.id] && Object.keys(group.members).length <= 2;
  })

  if(!group) {
    const usr1 = `${$currentUser['id']}`;
    const usr2 = `${user['id']}`;

    const newGroup = {
      avatar: user.avatar,
      description: 'private chat',
      groupType: 'dialog',
      lastMessage: '',
      members: {[usr1]: 'admin', [usr2]: 'admin'},
      name: user.name
    }
    group = actions.newGroup(newGroup);
  }
  dispatch('navigateTo', {id: group.id});
}

function newGroup(group) {
  showNewGroup = false;
  const newGroup = actions.newGroup(group);
  dispatch('navigateTo', {id: newGroup.id});
}

function newContact(contactId) {
  showNewContact = false;
  const newContact = actions.newContact(contactId);
  dispatch('navigateTo', {});
}
</script>

<wired-card elevation="2" class="blah-new">
  <wired-icon-button class="blah-new__back-button" on:click={navigateBack}>
    <mwc-icon>arrow_back</mwc-icon>
  </wired-icon-button>
  New Chat
  <br/>
  {#if !(showNewGroup || showNewContact)}
    <wired-button elevation="2" class="blah-new__new-group-button" on:click={() => showNewGroup = true}>
      <div class="blah-new__card-content">
        <wired-icon-button>
          <mwc-icon>group</mwc-icon>
        </wired-icon-button>
        <p>New group</p>
      </div>
    </wired-button>
    <ContactList contactList={$contacts} on:selectContact={(e) => newConversation(e.detail.contact)}/>
  {:else if showNewGroup}
    <NewGroup contacts={$contacts} on:newGroup={(e) => newGroup(e.detail)}/>
  {:else if showNewContact}
    <NewContact on:newContact={(e) => newContact(e.detail)}/>
  {/if}
</wired-card>

<style lang="scss">
.blah-new {
  width: calc(100% - 20px);
  height: calc(100% - 20px);

  &__back-button {
    position: absolute;
    left: 0;
    top: 0;
  }

  &__icon {
    height: 20px;
    width: 20px;
  }
  &__new-group-button {
    width: calc(100% - 20px);
    margin-top: 20px;
  }

  &__new-contact-button {
    width: calc(100% - 20px);
  }

  &__card-content {
      height: 45px;
      width: 280px;
      display: flex;
      cursor: pointer;
      
      p {
        width: 100%;
        height: 35px;
        margin: 0;
        padding: 5px;
        text-align: center;
      }
    }
}
</style>