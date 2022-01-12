import data from '../data/index';
import { users, groups, chats, currentGroup, currentChat, currentUser } from './stores.js';


function setCurrentUser(id) {
  currentUser.set(data.getUser(id));
}

function setCurrentGroup(groupId) {
  currentGroup.set(getGroup(groupId));
  currentChat.set(getChat(groupId));
}

function fetchGroups(userId) {
  groups.set(data.getGroups(userId));
  chats.set(data.getChats(userId));
}

function fetchUsers () {

}

function getGroup (id) {
  let group = {};

  const unsubscribe = groups.subscribe(value => {
    group = value.find( g => g.id === id);
  });
  unsubscribe();

  return group || {};
}

function getUser (id) {

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
  setCurrentUser,
  setCurrentGroup,
  fetchGroups,
  fetchUsers,
  newMessage
}