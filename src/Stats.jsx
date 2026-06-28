function Stats({count , packedCount}) {
  const presntage = Math.round(packedCount/count * 100);

  return (
    <>
      <footer className='stats'>
        <em>💼 You have {count} item on your list, and you already packed {packedCount} ({presntage?presntage:0}%)</em>
      </footer>
    </>
  )
}

export default Stats