import uuid from '../../node_modules/uuid/dist/v4';
import { getRealm } from './Realm';

export const getDefaultCategories = () => {
  let myuuid =  uuid();
  return [
    {
      id: myuuid,
      name: 'Alimentação',
      color: '#1abc9c',
      isDebit: true,
      order: 0,
    },
    {
      id: myuuid,
      name: 'Restaurantes e Bares',
      color: '#2ecc71',
      isDebit: true,
      order: 1,
    },
    {
      id: myuuid,
      name: 'Casa',
      color: '#3498db',
      isDebit: true,
      order: 2,
    },
    {
      id: myuuid,
      name: 'Compras',
      color: '#9b59b6',
      isDebit: true,
      order: 3,
    },
    {
      id: myuuid,
      name: 'Cuidados Pessoais',
      color: '#f1c40f',
      isDebit: true,
      order: 4,
    },
    {
      id: myuuid,
      name: 'Dívidas e Empréstimos',
      color: '#f39c12',
      isDebit: true,
      order: 5,
    },
    {
      id: myuuid,
      name: 'Educação',
      color: '#e67e22',
      isDebit: true,
      order: 6,
    },
    {
      id: myuuid,
      name: 'Família e Filhos',
      color: '#d35400',
      isDebit: true,
      order: 7,
    },
    {
      id: myuuid,
      name: 'Impostos e Taxas',
      color: '#e74c3c',
      isDebit: true,
      order: 8,
    },
    {
      id: myuuid,
      name: 'Investimentos',
      color: '#c0392b',
      isDebit: true,
      order: 9,
    },
    {
      id: myuuid,
      name: 'Lazer',
      color: '#ecf0f1',
      isDebit: true,
      order: 10,
    },
    {
      id: myuuid,
      name: 'Mercado',
      color: '#bdc3c7',
      isDebit: true,
      order: 11,
    },
    {
      id: myuuid,
      name: 'Outras Despesas',
      color: '#95a5a6',
      isDebit: true,
      order: 12,
    },

    {
      id: myuuid,
      name: 'Empréstimos',
      color: '#273c75',
      isCredit: true,
      order: 1,
    },
    {
      id: myuuid,
      name: 'Investimentos',
      color: '#4cd137',
      isCredit: true,
      order: 2,
    },
    {
      id: myuuid,
      name: 'Salário',
      color: '#487eb0',
      isCredit: true,
      order: 3,
    },
    {
      id: myuuid,
      name: 'Outras Receitas',
      color: '#8c7ae6',
      isCredit: true,
      order: 4,
    },
    {
      id: myuuid,
      name: 'Saldo Inicial',
      color: '#27ae60',
      isInit: true,
      order: 5,
    },
  ];
};

export const getAllCategories = async () => {
  const realm = await getRealm();
  const categories = realm.objects('Category').sorted('order').toJSON();
  return categories
};

export const getDebitCategories = async () => {
  const realm = await getRealm();

  return realm
    .objects('Category')
    .filtered('isDebit = true AND isInit = false')
    .sorted('order');
};

export const getCreditCategories = async () => {
  const realm = await getRealm();

  return realm
    .objects('Category')
    .filtered('isCredit = true AND isInit = false')
    .sorted('order');
};

export const getInitCategory = async () => {
  const realm = await getRealm();

  return realm
    .objects('Category')
    .filtered('isInit = true')
    .sorted('order');
};
