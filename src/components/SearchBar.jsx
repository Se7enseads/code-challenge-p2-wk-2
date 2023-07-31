const SearchBar = ({ sortBot }) => {
  return (
    <div className='container-fluid'>
      <div className='row mx-auto bg--subtle'>
        <h1 className='text-center'>SORT BOTS</h1>
        <div className='btn-group'>
          <button
            className='btn btn-outline-primary'
            onClick={() => sortBot('health')}
          >
            Sort by Health
          </button>
          <button
            className='btn btn-outline-primary'
            onClick={() => sortBot('damage')}
          >
            Sort by Damage
          </button>
          <button
            className='btn btn-outline-primary'
            onClick={() => sortBot('armor')}
          >
            Sort by Armor
          </button>
        </div>
      </div>
    </div>
  )
}
export default SearchBar
