import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import {useMutation} from '@apollo/client';

const ADD_SONG = gql`
    mutation AddSong($title: String){
        addSong(title: $title){
            title
        }
    }
`

const SongCreate = (props) => {
    const [ title, setTitle ] = useState("")
    const [addSong, { data, loading, error }] = useMutation(ADD_SONG);

    const onChange = e => {
        setTitle(e.target.value)
    }
    
    const onSubmit = e => {
        e.preventDefault()

        addSong({
            variables: {
                title
            }
        }).then(() => {
          //hashHistory.push("/")  
        })
    }
    
    return ( 
        <div>
            <Link to="/"> Back </Link>
            <h3>Create New Song</h3>
            <form onSubmit={onSubmit.bind(this)}>
                <label>Song Title: </label>
                <input name="title" value={title} onChange={onChange.bind(this)} />
                <button type="submit">Kaydet</button>
            </form>
        </div> 
    );
}

export default SongCreate