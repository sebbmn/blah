import { writable } from 'svelte/store';

export const groups = writable([]);
export const currentUser = writable("usr2");
export const currentGroup = writable({});
export const currentChat = writable({});