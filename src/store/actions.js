import data from '../data/index';
import { groups, chats, contacts, users, currentGroup, currentChat, currentUser } from './stores.js';

function fetchData(userId) {
  groups.set(data.getGroups(userId));
  chats.set(data.getChats(userId));
  contacts.set(data.getContacts(userId));
  users.set(data.getUsers(userId));
}

function setCurrentUser(id) {
  currentUser.set(data.getUser(id));
}

function flushCurrentUser() {
  currentUser.set({});
}

function setCurrentGroup(groupId) {
  currentGroup.set(getGroup(groupId));
  currentChat.set(getChat(groupId));
}

function getGroup (id) {
  let group = {};

  const unsubscribe = groups.subscribe(value => {
    group = value.find( g => g.id === id);
  });
  unsubscribe();

  return group || {};
}


function getChat(id){
  let chat = {};

  const unsubscribe = chats.subscribe(value => {
    chat = value.find( c => c.id === id);
  });
  unsubscribe();

  return chat || {};
}

function getUser(id){
  return data.getUser(id);
}

function getContact(id){
  let contact = {};

  const unsubscribe = contacts.subscribe(value => {
    contact = value.find( c => c.id === id);
  });
  unsubscribe();

  return contact || {};
}

function newMessage(groupId, newMessage) {
  const chat = getChat(groupId) || {};

  const updatedChat = {
    ...chat,
    messages: [
      ...chat['messages'],
      newMessage
    ]
  };

  chats.update((chts) => {
    return chts.map(cht => {
      return cht.id === groupId ? updatedChat : cht;
    });
  });

  currentChat.set(updatedChat);
}

function newGroup(group) {
  // Warn: Id should be done server side in a proper way
  group.id = 'grp0';

  const newChat = {
    id: group.id,
    messages: []
  }

  chats.update((chts) => {
    return [...chts, newChat];
  });

  groups.update((grps) => {
    return [...grps, group];
  });

  return group;
}

function newContact(contactId) {
  const contact = getContact(contactId);

  if (contact.id) {
    console.log('contact already exist');
    return;
  }

  const user = getUser(contactId);

  if (user.id) {
    contacts.update((cntcts) => {
      return [...cntcts, user];
    })

    return;
  }

  console.log('user doesn\'t exist');
  return;
}

export default {
  fetchData,
  setCurrentUser,
  flushCurrentUser,
  setCurrentGroup,
  newMessage,
  newGroup,
  newContact
}