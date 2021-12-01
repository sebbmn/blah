import data from "../../data/mockData.json"

function loadData(userId) {
  const user = data.users[userId] || {};

  const groups = _getGroups(user);
  const chats = _getChats(user);

  const formatedData = {user, groups, chats}
  return formatedData;
}

function _getGroups(user) {
  const groups = user.groups;

  return  groups.reduce((acc, grp) => {
    const group = data.groups[grp];
    acc = [
      ...acc,
      {
        id: grp,
        ...group
      }
    ];
    return acc;
  }, []);
}

function _getChats(user) {
  const groups = user.groups;

  return  groups.reduce((acc, cht) => {
    const chat = data.chats[cht];
    acc = [
      ...acc,
      {
        id: cht,
        messages: Object.values({...chat})
      }
    ];
    return acc;
  }, []);
}

/** Format
{
  "name": "",
  "avatar": "",
  "groups": [<grp_id>, ...],
  "contacts": [<usr_id>, ...]
}
*/
function getUser (userId) {
  return {};
}

/** Format
[<usr_id>, ...]
*/
function getUsers (userId) {
  return [];
}

/** Format
[<usr_id>, ...]
*/
function getContacts (userId) {
  return [];
}

/** Format
[
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
  },
  ...
]
*/
function getGroups (userId) {
  return [];
}

/** Format
[
  
]
*/
function getChats (userId, groupId) {
  return [];
}

export { loadData, getUser, getUsers, getContacts, getGroups, getChats }