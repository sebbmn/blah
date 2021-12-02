import data from "../../data/mockData.json"

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
  const user = data.users[userId] || {};
  const groups = user.groups;

  return groups.reduce((acc, grp) => {
    return acc = [
      ...acc,
      {
        id: grp,
        ...data.groups[grp]
      }
    ]
  }, []);
}

/** Format
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
  const group = data.groups[groupId];
  const user = data.users[userId] || {};
  const isInGroup = user.groups.some(grp => grp === groupId);

  if(isInGroup) {
    return {
      id: groupId,
      ...group
    }
  } else {
    return {};
  }
}

/** Format
[
  {
    "id": "",
    "user": "",
    "message": "",
    "timestamp": ""
  },
  ...
]
*/
function getChat (userId, groupId) {
  const chat = data.chats[groupId];
  const user = data.users[userId] || {};
  const isInGroup = user.groups.some(grp => grp === groupId);

  if(isInGroup) {
    const messages = Object.entries(chat);
    let formatedChat = [];

    for (const [key, value] of messages) {
      formatedChat = [
        ...formatedChat,
        {
          id: key,
          ...value
        }
      ]
    }
    return formatedChat;
  } else {
    return [];
  }
}

export { getUser, getUsers, getContacts, getGroups, getGroup, getChat }