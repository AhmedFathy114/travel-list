import { useState } from 'react';
import './App.css'
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

function App() {

  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
  ];

  const [items,setItems] = useState(initialItems);

    function addItem(item){
        setItems([...items,item])
    }

    function handleDelete(id){
      setItems(items => items.filter(item => item.id != id))
    }
    function handlePacked(id){
      setItems(items => items.map(item => item.id == id ? {...item,packed:!item.packed} : item))
    }

    function clear(){
      const confirmed = window.confirm("Are you sure?")
      if (confirmed) setItems([]);
    }

  return (
    <>
      <Logo/>
      <Form items={items} addItem={addItem}/>
      <PackingList items={items} handleDelete={handleDelete} handlePacked={handlePacked} clear={clear}/>
      <Stats count={items.length} packedCount={items.filter(item => item.packed).length}/>
    </>
  )
}

export default App
