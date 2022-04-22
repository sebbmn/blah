import data from "./mockData.json";

/*
[<usr_id>, ...]
*/
function getUsers(userId) {
  const user = data.users[userId] || {};
  const userGroups = user.groups || [];
  const groups = userGroups.map(grp => {
     return data.groups[grp];
  });

  const members = groups.reduce((all, group) => {
    const filteredMembers = Object.keys(group.members).filter(mbr => mbr !== userId);
    all = [...all, ...filteredMembers];
    return all;
  }, []);

  const users = [...new Set(members)].map(member => {
    return getUser(member);
  });

  return users;
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

  const user = data.users[id] ? {
    ...data.users[id],
    id: id
  } : {};
  return user;
}

/*
[{<user>}, ...]
*/
function getContacts(userId) {
  const user = data.users[userId] || {};
  const contacts = user.contacts || [];

  return contacts.map(contact => {
    return getUser(contact);
  });
}

/*
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
function getGroups(userId) {
  const user = data.users[userId] || {};
  const groups = user.groups || [];

  return groups.reduce((acc, grp) => {
    return acc = [
      ...acc,
      {
        ...getGroup(userId, grp)
      }
    ]
  }, []);
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
  const user = data.users[userId] || {};
  const isInGroup = user.groups.some(grp => grp === groupId);

  if(isInGroup) {
    return {
      ..._formatGroup(userId, groupId)
    }
  } else {
    return {};
  }
}
function getChats(userId) {
  const user = data.users[userId] || {};
  const chats = user.groups || [];

  return chats.reduce((acc, cht) => {
    return acc = [
      ...acc,
      {
        ...getChat(userId, cht)
      }
    ]
  }, []);
}

/*
{
  "id": "grp1",
  "messages": [
    {
      "id": "msg1"
      "user": {},
      "message": "",
      "timestamp": 0
    }
  ]
}
*/
function getChat(userId, groupId) {
  const chat = data.chats[groupId];
  const user = data.users[userId] || {};
  const isInGroup = user.groups.some(grp => grp === groupId);

  if(isInGroup) {
    const messages = Object.entries(chat);
    let formatedChat = {
      id: groupId,
      messages: []
    };

    for (const [key, value] of messages) {
      formatedChat.messages = [
        ...formatedChat.messages,
        {
          id: key,
          ...value,
          user: data.users[value.user]
        }
      ]
    }
    return formatedChat;
  } else {
    return [];
  }
}

function _formatGroup(userId, groupId) {
  const group = data.groups[groupId] || {};
  const isDialog = group.groupType === "dialog";

  if(isDialog) {
    const users = group.members || {};
    let interlocutor = {};

    for (const usr in users) {
      if (usr !== userId) {
        interlocutor = getUser(usr);
      }
    }
    group.name = interlocutor.name || "";
    group.avatar = interlocutor.avatar || "";
  }

  return {
    id: groupId,
    ...group
  };
}

export default { getUser, getUsers, getContacts, getGroups, getGroup, getChats, getChat }