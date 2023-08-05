const SearchBar = ({ sortBots }) => {
  return (
    <div className='container-fluid bg-warning-subtle'>
      <div className='row p-4'>
        <h1 className='text-center'>SORT BOTS</h1>
        <div className='btn-group shadow p-0'>
          <button
            className='btn btn-outline-primary'
            onClick={() => sortBots('health')}
          >
            Sort by Health
          </button>
          <button
            className='btn btn-outline-primary'
            onClick={() => sortBots('damage')}
          >
            Sort by Damage
          </button>
          <button
            className='btn btn-outline-primary'
            onClick={() => sortBots('armor')}
          >
            Sort by Armor
          </button>
        </div>
      </div>
    </div>
  )
}
export default SearchBar
