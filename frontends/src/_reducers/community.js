// import * as types from '../_actions/ActionTypes';

// export default function board(state = initialState, action) {
//   switch(action.type){
//     case SAVE:
//       if(action.dataToSave.id === ''){
//         return {
//           boards: state.boards.concat({...action.dataToSave, id: state.ids + 1}),
//           ids: state.ids + 1,
//           selected: {}
//         }
//       } else {
//         return {...state, boards: state.boards.map(post => 
//             post.id === action.dataToSave.id ? {...action.dataToSave} : data), selected: {}}
//     }
//     case DELETE:
//       return {
//         ...state, boards: state.boards.filter( post => post.id !== action.postId)
//       }
//     case SELECTED:
//       return {
//         ...state, selected: state.boards.find(post => post.id === action.postId)
//     }
//     default:
//       return state;
//   }
// }