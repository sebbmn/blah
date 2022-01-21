<script>
import { WiredCard, WiredIconButton } from 'wired-elements';
import { createEventDispatcher } from 'svelte';
import { contacts, groups, chats, currentUser } from '../store/stores.js';
import actions from '../store/actions'
import ContactList from '../lib/ContactList.svelte';

const dispatch = createEventDispatcher();

function navigateBack() {
  dispatch('navigateTo', {});
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

function addGroup(e) {
  //groups.update(groups => [...groups, e.detail]);
}
</script>

<wired-card elevation="2" class="blah-new-chat">
  Select contact
  <wired-icon-button class="blah-new-chat__back-button" on:click={navigateBack}>
    <mwc-icon>arrow_back</mwc-icon>
  </wired-icon-button>
  <br/>
  <wired-card elevation="2" class="blah-new-chat__new-group">
    <div class="blah-new-chat__card-content">
      <wired-icon-button>
        <mwc-icon>group</mwc-icon>
      </wired-icon-button>
      <p>New group</p>
    </div>
  </wired-card>
  <wired-card elevation="2" class="blah-new-chat__new-contact">
    <div class="blah-new-chat__card-content">
      <wired-icon-button>
        <mwc-icon class="blah-new-chat__icon">person_add</mwc-icon>
      </wired-icon-button>
      <p>New contact</p>
    </div>
  </wired-card>
  <ContactList contactList={$contacts} on:selectContact={(e) => newConversation(e.detail.contact)}/>
</wired-card>

<style lang="scss">
.blah-new-chat {
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
  &__new-group {
    width: calc(100% - 20px);
    margin-top: 20px;
  }

  &__new-contact {
    width: calc(100% - 20px);
  }

  &__card-content {
      height: 45px;
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