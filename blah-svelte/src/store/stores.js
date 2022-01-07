import { writable } from 'svelte/store';

export const users = writable([]);
export const groups = writable([]);
export const chats = writable([]);
export const currentUser = writable('usr2');
export const currentGroup = writable({});
export const currentChat = writable({});