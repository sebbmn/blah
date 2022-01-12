import data from '../data/index';
import { groups, currentGroup, currentChat, currentUser } from './stores.js';


function setCurrentUser(id) {
  currentUser.set(data.getUser(id));
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

function newMessage (groupId, message) {

}

export default {
  setCurrentUser,
  fetchGroups,
  fetchUsers,
  fetchChats
}