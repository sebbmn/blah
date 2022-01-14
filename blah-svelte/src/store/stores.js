import { writable } from 'svelte/store';

export const users = writable([]);
export const groups = writable([]);
export const chats = writable([]);
export const contacts = writable([]);
export const currentUser = writable({});
export const currentGroup = writable({});
export const currentChat = writable({});