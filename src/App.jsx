import { useState } from 'react'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './Pages/CoffeeCard/CoffeeCard'

function App() {
   const loadedCoffee = useLoaderData();
   const [coffees, setCoffees] = useState(loadedCoffee);
  return (
    <>
      {coffees.map((coffee) => (
        <CoffeeCard
          key={coffee._id}
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
        />
      ))}
    </>
  );
}

export default App
