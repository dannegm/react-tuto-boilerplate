import React, { useState } from 'react';

import { useFavorites } from '../../state/providers/FavoritesProvider'

import Shell from '../../shared/layout/Shell';

const Favorites = () => {
    const [val, setValue] = useState('')
    const { list, save, remove } = useFavorites();

    return (
        <Shell>
           <h1>Favoritos</h1>
           {
               list.map(i => (
                   <h2>{i}</h2>
               ))
           }
           <hr/>
           <input value={val} onChange={e => setValue(e.target.value)} />
           <button onClick={() => {
               save({
                   sys: {
                       id: '00033'
                   },
                   fields: {
                       title: val
                   }
               });
               setValue('');

               remove('00033')
           }}>
               Añadir
           </button>
        </Shell>
    );
};

export default Favorites;
