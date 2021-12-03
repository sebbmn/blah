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
  const user = data.users[userId] || {};
  return user;
}

/** Format
[<usr_id>, ...]
*/
function getUsers () {
  return [];
}

/** Format
[<usr_id>, ...]
*/
function getContacts (userId) {
  const user = data.users[userId] || {};
  const contacts = user.contacts || [];
  return contacts;
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
        ..._formatGroup(userId, grp, data.groups[grp])
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
      ..._formatGroup(userId, groupId, group)
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

function _formatGroup (userId, groupId, group) {
  const isDialog = group.groupType === "dialog";

  if(isDialog) {
    const users = group.members;
    let interlocutor = {};

    for (const usr in users) {
      if (usr !== userId) {
        interlocutor = getUser(usr);
      }
    }
    group.name = interlocutor.name
  }

  return {
    id: groupId,
    ...group
  };
}

export { getUser, getUsers, getContacts, getGroups, getGroup, getChat }