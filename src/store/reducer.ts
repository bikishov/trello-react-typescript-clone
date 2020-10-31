import { nanoid } from 'nanoid';
import { AppState } from '../App';
import { findItemIndexById } from '../utils/findItemIndexById';
import { moveItem } from '../utils/moveItem';
import { Action } from './actions';

export const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'SET_DRAGGED_ITEM': {
      return { ...state, draggedItem: action.payload };
    }
    case 'ADD_LIST': {
      return {
        ...state,
        lists: [...state.lists, { id: nanoid(), text: action.payload, tasks: [] }]
      };
    }
    case 'ADD_TASK': {
      const targetLaneIndex = findItemIndexById(state.lists, action.payload.listId);
      state.lists[targetLaneIndex].tasks.push({
        id: nanoid(),
        text: action.payload.text
      });

      return {
        ...state
      };
    }
    case 'DELETE_TASK': {
      const targetLaneIndex = findItemIndexById(state.lists, action.payload.listId);
      const taskIndex = findItemIndexById(state.lists[targetLaneIndex].tasks, action.payload.taskId)
      state.lists[targetLaneIndex].tasks.splice(taskIndex, 1)
      return {
        ...state,
      };
    }
    case 'MOVE_LIST': {
      const { dragIndex, hoverIndex } = action.payload;
      state.lists = moveItem(state.lists, dragIndex, hoverIndex);
      return { ...state };
    }
    case 'MOVE_TASK': {
      const { dragIndex, hoverIndex, sourceColumn, targetColumn } = action.payload;
      const sourceLaneIndex = findItemIndexById(state.lists, sourceColumn);
      const targetLaneIndex = findItemIndexById(state.lists, targetColumn);
      const item = state.lists[sourceLaneIndex].tasks.splice(dragIndex, 1)[0];
      state.lists[targetLaneIndex].tasks.splice(hoverIndex, 0, item);
      return { ...state };
    }
    default: {
      return state;
    }
  }
};