import React, { createContext, useReducer } from 'react'
const initialState={
    projectId : null,
    projectTitle:"",
    projectCreationDate: '',
    projectTasks:[],
    projects:[
    ]
};
 function reducer(state,action){
    switch(action.type){
        case 'tasks/add':
            return {};
            default :
            throw new Error("No such action");
    }
 }
 const MyContext = createContext();
export default function ContextAPI({children}) {
    const myReducer= useReducer(reducer,initialState);
    const [projects] = myReducer
  return (
    <MyContext.Provider>
        {children}
    </MyContext.Provider>
  )
}
