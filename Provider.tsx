'use client';

import { createContext, useState } from "react";

interface AppContext {
  value: string,
  setValue: (value: string) => void
}

export const AppContext = createContext<AppContext | null>(null);

export default function Provider({ children } : { children: React.ReactNode }) {
  const [value, setValue] = useState('');
  return (
    <AppContext.Provider value={{ value, setValue }}>
      { children }
    </AppContext.Provider>
  )
}