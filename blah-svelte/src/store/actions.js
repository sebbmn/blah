import data from '../data/index';
import { users, groups, chats, currentGroup, currentChat, currentUser } from './stores.js';


function setCurrentUser(id) {
  currentUser.set(data.getUser(id));
}

function setCurrentGroup(userId, groupId) {
  currentGroup.set(data.getGroup(userId, groupId));
  currentChat.set(data.getChat(userId, groupId));
}

function fetchGroups(userId) {
  groups.set(data.getGroups(userId));
}

function fetchUsers () {

}

function fetchChats () {

}

function getGroup (id) {

}

function getUser (id) {

}

function getChat (id) {

}

function newMessage(groupId, newMessage) {
  let chat = {};
  
  const unsubscribe = currentChat.subscribe(value => {
    chat = value;
  });

  const newChat = {
    ...chat,
    messages: [
      ...chat['messages'],
      newMessage
    ]
  };

  currentChat.set(newChat);

  unsubscribe();
}

export default {
  setCurrentUser,
  setCurrentGroup,
  fetchGroups,
  fetchUsers,
  fetchChats,
  newMessage
}