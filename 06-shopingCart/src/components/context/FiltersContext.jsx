import { createContext, useState } from "react";

// 1. Crear el contexto: Este es el que se tiene que consumir para usarlo
export const FiltersContext = createContext(); //Solo se crea una vez

//2. Crear el Provider: Este es el que nos provee los datos
export function FiltersProvider({children}) {

    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 0,
    });

    return (      
        <FiltersContext.Provider value={{
            filters,
            setFilters,
        }}>
            {children}
        </FiltersContext.Provider>
    )
}

