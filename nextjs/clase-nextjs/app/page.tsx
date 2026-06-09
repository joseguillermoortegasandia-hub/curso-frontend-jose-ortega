"use client"
import { useState,useRef } from "react";

export default function Home() {
  const [lista, setLista] = useState([]);
  const inputRef = useRef(null);

  function agregarTarea(){
    let nuevaLista = lista; 
    nuevaLista.push({titulo:inputRef.current.value,completado:false})
    setLista(nuevaLista)
  }
  
  
 
  return (
    <div>
      <h1>Hola Mundo</h1>
      <input id= "texto" type="text" placeholder="Ingrese un valor" ref={inputRef}/>
      <button onClick={() => agregarTarea()}>Agregar Tarea</button>
      <ul>
        {lista.map((tarea, numero) => {
          return (
            <li key={numero}>
              <p>{tarea.titulo}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
