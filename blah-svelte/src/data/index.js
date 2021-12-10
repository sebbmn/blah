import data from "./local"

/** USERS */
/*
*/
function createUser (user) {
  return;
}

/*
{
  "name": "",
  "avatar": "",
  "groups": [<grp_id>, ...],
  "contacts": [<usr_id>, ...]
}
*/
function getUser (userId) {
  return data.getUser(userId);
}

/*
[<usr_id>, ...]
*/
function getUsers (userId) {
  return data.getUsers(userId);
}

/*
*/
function updateUser (userId) {
  return;
}

/*
*/
function deleteUser (userId) {
  return;
}

/** CONTACTS */
/*
[<usr_id>, ...]
*/
function getContacts (userId) {
  return data.getContacts(userId);
}

/*
*/
function addContact (userId, contactId) {
  return;
}

/*
*/
function removeContact (userId, contactId) {
  return;
}

/** GROUPS */
/*
*/
function createGroup (userId, groupId) {
  return;
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
function getGroup (userId, groupId) {
  return data.getGroup(userId, groupId);
}

/*
[]
*/
function getGroups (userId) {
  return data.getGroups(userId);
}

/*
*/
function updateGroup (group) {
  return;
}

/*
*/
function deleteGroup (groupId) {
  return;
}

/*
*/
function getChat (userId, groupId) {
  return data.getChat(userId, groupId);
}

/* MESSAGES */
/*
*/
function createMessage (message, groupId) {
  return;
}

/*
*/
function getMessage (messageId) {
  return;
}

/*
*/
function updateMessage (message) {
  return;
}

/*
*/
function deleteMessage (messageId) {
  return;
}

export {
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
  getChat,
  createMessage,
  getMessage,
  updateMessage,
  deleteMessage
}