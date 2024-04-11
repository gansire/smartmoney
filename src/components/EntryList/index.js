import React, {useEffect, useState} from 'react'
import {FlatList,} from 'react-native'

import EntryListItem from './EntryListItem/index';
import { getEntries } from '../../services/Entries';
import Container from '../Core/Container/index';

const EntryList = ({onEntryPress, onPressActionButton}) => {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    async function loadEntries (){
      const data =  await getEntries();
      setEntries(data)
    }

    loadEntries()

    console.log('EntryList :: useEffect');
  }, [])

  return (
    <Container 
      title="Últimos Lançamentos"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver Mais"
      onPressActionButton={onPressActionButton}
    >
      <FlatList
        data={entries}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <EntryListItem 
            entry={item}
            isFirstItem={index === 0}
            isLastItem ={index === entries.length - 1}
            onEntryPress={onEntryPress}
          />
        )}
      >

      </FlatList>
    </Container>
  )
}

export default EntryList
