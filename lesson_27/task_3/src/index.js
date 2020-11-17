import { renderListItems } from './render.js';
import { tasks } from './tasks';
import { addTask } from './createTask';
import { elementStatus } from './updateTask';

const listElement = document.querySelector(".list");
const inputEl = document.querySelector(".task-input");
const createButton = document.querySelector(".create-task-btn");