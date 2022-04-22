import data from './local'

/** USERS */
/*
*/
function createUser(user) {
  return;
}

/*
[<usr_id>, ...]
*/
function getUsers(userId) {
  return data.getUsers(userId);
}

/*
{
  "name": "",
  "avatar": "",
  "groups": [<grp_id>, ...],
  "contacts": [<usr_id>, ...]
}
*/
function getUser(id) {
  return data.getUser(id);
}

/*
*/
function updateUser(user) {
  return;
}

/*
*/
function deleteUser(id) {
  return;
}

/** CONTACTS */
/*
[<usr_id>, ...]
*/
function getContacts(userId) {
  return data.getContacts(userId);
}

/*
*/
function addContact(userId, contactId) {
  return;
}

/*
*/
function removeContact(userId, contactId) {
  return;
}

/** GROUPS */
/*
*/
function createGroup(group) {
  return;
}

/*
[]
*/
function getGroups(userId) {
  return data.getGroups(userId);
}

/*
{
  "id": "",
  "name": "",
  "description": "",
  "avatar": "",
  "groupType": "",
  "lastMessage": "",
  "members": {
    "usr1": "admin",
    "usr2": "admin",
    "usr3": "member"
  }
}
*/
function getGroup(userId, groupId) {
  return data.getGroup(userId, groupId);
}

/*
*/
function updateGroup(group) {
  return;
}

/*
*/
function deleteGroup(id) {
  return;
}

/* MESSAGES */
/*
*/
function createMessage(message, groupId) {
  return;
}

/*
*/
function getChats(userId) {
  return data.getChats(userId);
}
/*
*/
function getChat(userId, groupId) {
  return data.getChat(userId, groupId);
}

/*
*/
function getMessage(id) {
  return;
}

/*
*/
function updateMessage(message) {
  return;
}

/*
*/
function deleteMessage(id) {
  return;
}

export default {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  getContacts,
  addContact,
  removeContact,
  createGroup,
  getGroup,
  getGroups,
  updateGroup,
  deleteGroup,
  getChats,
  getChat,
  createMessage,
  getMessage,
  updateMessage,
  deleteMessage
}