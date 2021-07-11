
import * as TutorialActions from '../actions/tutorial.actions';
import { Action, createReducer, on } from "@ngrx/store";

const intialState = [
    {
        id: 1,
        name: 'intial tutorial',
        url: "http://google.com"
    },
    {
        id: 2,
        name: 'Ng tutorial',
        url: "http://angular.io"
    }
]

const tr = createReducer(intialState,
    on(TutorialActions.addTutorial, (state: any, action) => {
        let { name, url } = action;
        let newTut = { id: state.length + 1, name, url }
        return ([...state, newTut])
    }),
    on(TutorialActions.removeTutorial, (state: any, action) => {
        let { id } = action;
        console.log(id);
        return state.filter((tut: any) => tut.id === id)
    })
)

export function tutorialReducer(state: any | undefined, action: Action) {
    return tr(state, action);
}