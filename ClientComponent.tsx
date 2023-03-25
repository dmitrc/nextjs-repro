'use client';

import { useContext } from "react";
import { AppContext } from "./Provider";

export default function ClientComponent({ children } : { children: React.ReactNode }) {
  const context = useContext(AppContext);

  function handleClick() {
    window.alert(context?.value ?? 'unknown');
  }
  
  return (
    <button onClick={handleClick}>
      { children }
    </button>
  )
}