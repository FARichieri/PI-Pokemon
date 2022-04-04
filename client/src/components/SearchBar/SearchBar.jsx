import React from 'react'
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getNamePokemons} from '../../actions'
import styles from './SearchBar.module.css'

function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState("")

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getNamePokemons(name)) // Este name va a ser mi estado local (que va tipeando el usuario)
        setName(''); // Seteo el state a '' luego del click en el button
    }

  return (
    <div className={styles.searchBarContainer}>
        <input className={styles.searchBarInput} type='text' placeholder='Search Pokemon...' onChange={(e) => handleInputChange(e)}/>
        <button className={styles.searchBarButton} type='submit' onClick={(e) => handleSubmit(e)}>Search</button>
    </div>
  )
}

export default SearchBar