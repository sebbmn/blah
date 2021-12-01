import { writable } from 'svelte/store';
import { loadData, getUser, getUsers, getContacts, getGroups, getChat } from './utils';

export const currentParams = writable({ group:"grp2", user: "usr2" });
let params = {};

currentParams.subscribe(value => {
  params.chat = writable(getChat(value.user, value.group));
  params.data = writable(loadData(value.user));
  params.user = writable(getUser(value.user));
  params.users = writable(getUsers(value.user));
  params.contact = writable(getContacts(value.user));
  params.groups = writable(getGroups(value.user));
});

export const chat = params.chat;
export const data = params.data;
export const user = params.user;
export const users = params.users;
export const contact = params.contact;
export const groups = params.groups;
