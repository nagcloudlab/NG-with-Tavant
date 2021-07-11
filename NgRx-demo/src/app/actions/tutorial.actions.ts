
import { createAction, props } from '@ngrx/store';

export const addTutorial = createAction('[Add Tutorial] add',props<any>());
export const removeTutorial = createAction('[Remove Tutorial] remove',props<any>());
