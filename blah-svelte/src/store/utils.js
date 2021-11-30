import data from "../../data/mockData.json"

export function loadData(userId) {
  const user = data.users[userId] || {};

  const groups = _getGroups(user);
  const chats = _getChats(user);

  const formatedData = {user, groups, chats}
  return formatedData;
}

function _getGroups(user) {
  const groups = Object.keys(user.groups);

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
  const groups = Object.keys(user.groups);

  return  groups.reduce((acc, cht) => {
    const chat = data.chats[cht];
    acc = [
      ...acc,
      {
        id: cht,
        ...chat
      }
    ];
    return Object.values(acc);
  }, []);
}