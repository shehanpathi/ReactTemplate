import React, { Children } from 'react'

export const TestContext = React.createContext();

export const TestProvider = ({ children }) => {

    const initialState = {
        id: 20,
        body: '',
        isChanged: false,
        error: ''
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS':
                return {
                    id: action.payload.id,
                    body: action.payload.body,
                    error: '',
                    isChanged: true
                }
            case 'FETCH_ERROR':
                return {
                    id: 0,
                    body: '',
                    error: 'SOMETHING WENT WRONG',

                }
            default:
                return state;
        }
    }

    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <TestContext.Provider value={[state, dispatch]}>
            {children}
        </TestContext.Provider>
    )

}



