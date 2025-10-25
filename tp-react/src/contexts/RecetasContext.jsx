import { createContext, useContext, useEffect, useState } from "react";

const RecetasContext = createContext(null);

export const RecetasProvider = ({ children }) => {
  const [recetas, setRecetas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Cargar recetas desde el archivo JSON
    fetch('/src/data/recetas.json')
      .then(response => response.json())
      .then(data => {
        setRecetas(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar recetas:', error);
        setIsLoading(false);
      });
  }, []);

  // Función para obtener una receta por ID
  const getRecetaById = (id) => {
    return recetas.find(receta => receta.id === parseInt(id));
  };

  return (
    <RecetasContext.Provider value={{ recetas, isLoading, getRecetaById }}>
      {children}
    </RecetasContext.Provider>
  );
};

export const useRecetas = () => {
  return useContext(RecetasContext);
};