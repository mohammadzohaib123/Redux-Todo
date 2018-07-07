import TodoAction from './TodoAction'

const INITIAL_STATE=
{
    todo:[]
};

export default function TodoReducer(state=INITIAL_STATE,action)
{
    switch (action.type) {
        case TodoAction.ADD:
          return Object.assign({}, state, {
            todo: [...state.todo, action.payload]
          });

        case TodoAction.UPDATE:
           let array = [...state.todo];
           array[action.payload.id].task=action.payload.inputValue
           return Object.assign({},state,{todo:array})
        case TodoAction.DELETE:
           console.log(action.payload);
           
            return Object.assign({}, state, {
            todo: state.todo.filter((value, i)=> i !== action.payload)
            });
        default:
          return state;
        }
}
