// @ts-nocheck
import { writable } from 'svelte/store';
import data from "./data.json";

const newCats = data.map(item => {
    const { name, description, origin, image } = item;
    return { name, description, origin, image };
})
export let cats = writable(newCats);