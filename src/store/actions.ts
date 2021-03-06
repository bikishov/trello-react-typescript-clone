import { DragItem } from '../types/DragItem';

export type Action =
  | {
    type: 'SET_DRAGGED_ITEM';
    payload: DragItem | undefined;
  }
  | {
    type: 'ADD_LIST';
    payload: string;
  }
  | {
    type: 'ADD_TASK';
    payload: { text: string; listId: string };
  } |
  {
    type: 'DELETE_TASK';
    payload: { listId: string, taskId: string };
  }
  | {
    type: 'MOVE_LIST';
    payload: {
      dragIndex: number;
      hoverIndex: number;
    };
  }
  | {
    type: 'MOVE_TASK';
    payload: {
      dragIndex: number;
      hoverIndex: number;
      sourceColumn: string;
      targetColumn: string;
    };
  };
