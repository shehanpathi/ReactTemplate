import React, { useState, useContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-scroll';
import { TestContext } from './common/context';
import axios from 'axios'

function Hello() {
    const [state, dispatch] = useContext(TestContext)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/2')
            .then((response) => {
                console.log(response.data)
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
                console.log(state)
            })
            .catch(err => {
                dispatch({ type: 'FETCH_ERROR' })
                console.log(state)
            })
    }, [])

    return (
        <>
            <h1 key={state.id}>{state.error ? state.error : state.body}</h1>
        </>
    );
}

export default Hello;
