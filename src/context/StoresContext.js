import React, { useContext, useEffect, useState } from 'react';
import { getStoresInfos } from '../graphql/index';

const MyContext = React.createContext();

export default function StoresContextProvider({ children }) {
  const [selectedStore, setSelectedStore] = useState(0);
  const [store, setStore] = useState({});

  useEffect(() => {
    const storeInfos = async () => {
      const store = await getStoresInfos(selectedStore);

      setStore(store.data.getConsolidatedOrders);
    };
    storeInfos();
  }, [selectedStore]);

  const contextValue = {
    store: store ? store : {},
    setSelectedStore,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}

export function useStoresContext() {
  return useContext(MyContext);
}
