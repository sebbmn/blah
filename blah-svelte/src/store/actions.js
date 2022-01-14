import data from '../data/index';
import { groups, chats, contacts, currentGroup, currentChat, currentUser } from './stores.js';

function fetchData(userId) {
  groups.set(data.getGroups(userId));
  chats.set(data.getChats(userId));
  contacts.set(data.getContacts(userId));
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

export default {
  fetchData,
  setCurrentUser,
  setCurrentGroup,
  newMessage
}