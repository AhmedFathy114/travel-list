function Item({item , handleDelete , handlePacked}){
  return(
    <>
    <li>
      <input type="checkbox" checked={item.packed?true:false} onChange={() => handlePacked(item.id)}/>
      <span style={item.packed? {textDecoration:'line-through'} : {}}>
        {item.quantity}{item.description}</span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
    </>
  )
}

export default Item