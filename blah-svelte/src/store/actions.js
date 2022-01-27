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

export default {
  fetchData,
  setCurrentUser,
  setCurrentGroup,
  newMessage,
  newGroup
}