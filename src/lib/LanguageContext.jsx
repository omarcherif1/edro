import { createContext, useContext, useMemo, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [dir, setDir] = useState("ltr");

  const value = useMemo(
    () => ({
      dir,
      setLtr: () => setDir("ltr"),
      setRtl: () => setDir("rtl"),
    }),
    [dir],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
