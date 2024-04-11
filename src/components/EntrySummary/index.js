import React from 'react';
import EntrySummaryChart from './EntrySummaryChart/index';
import EntrySummaryList from './EntrySummaryList/index';
import Container from '../Core/Container/index';

const entriesGrouped = [
  {key: "1", description: "Alimentação", amount: 200},
  {key: "2", description:  "Combustivel",  amount: 12},
  {key: "3", description:  "Aluguel",  amount: 120},
  {key: "4", description:  "Lazer",  amount: 250},
  {key: "5", description:  "Outros", amount: 1200},
]

const EntrySummary = ({onPressActionButton}) => {
  return (
    <Container 
      title="Categorias"
      actionLabelText=' Ultimos 7 dias'
      actionButtonText="Ver Mais" 
      onPressActionButton={onPressActionButton}
    >
      <EntrySummaryChart/>
      <EntrySummaryList entriesGrouped={entriesGrouped}/>
    </Container> 
  )
}

export default EntrySummary;