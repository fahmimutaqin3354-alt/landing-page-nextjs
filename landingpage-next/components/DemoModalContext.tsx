"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import dynamic from "next/dynamic";

// Dynamic import with ssr: false so modal code is never parsed on initial page load
const RequestDemoModal = dynamic(() => import("./RequestDemoModal"), {
  ssr: false,
});

interface DemoModalContextType {
  openDemoModal: (source?: string) => void;
  closeDemoModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextType>({
  openDemoModal: () => {},
  closeDemoModal: () => {},
});

export const useDemoModal = () => useContext(DemoModalContext);

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("general");

  const openDemoModal = useCallback((src: string = "general") => {
    setSource(src);
    setIsOpen(true);
  }, []);

  const closeDemoModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <DemoModalContext.Provider value={{ openDemoModal, closeDemoModal }}>
      {children}
      {isOpen && (
        <RequestDemoModal
          isOpen={isOpen}
          onClose={closeDemoModal}
          source={source}
        />
      )}
    </DemoModalContext.Provider>
  );
}
