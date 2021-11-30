import { writable } from 'svelte/store';
import { loadData } from './utils';

export const data = writable(loadData("usr2"));