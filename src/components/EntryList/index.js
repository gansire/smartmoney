import React from 'react'
import {FlatList,} from 'react-native'

import EntryListItem from './EntryListItem/index';
import { useEntries } from '../../hooks/useEntries';
import Container from '../Core/Container/index';

const EntryList = ({days = 7, category,  onEntryPress, onPressActionButton}) => {
  const [entries] = useEntries(days, category);

  return (
    <Container 
      title="Últimos Lançamentos"
      actionLabelText= {`Últimos ${days} dias`}
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
