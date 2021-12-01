import { writable } from 'svelte/store';
import { loadData, getUser, getUsers, getContacts, getGroups, getChats } from './utils';

export const data = writable(loadData("usr2"));
export const user = writable(getUser("usr2"));
export const users = writable(getUsers("usr2"));
export const contact = writable(getContacts("usr2"));
export const groups = writable(getGroups("usr2"));
export const chats = writable(getChats("usr2", "grp2"));