import { writable } from 'svelte/store';

export const groups = writable([]);
export const currentUser = writable({});
export const currentGroup = writable({});
export const currentChat = writable([]);