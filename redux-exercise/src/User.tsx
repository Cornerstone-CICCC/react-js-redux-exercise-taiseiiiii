import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { incrementAge, setFirstname, setLastname } from './UserSlice'

function User() {
  const { firstname, lastname, age } = useSelector(
    (state: RootState) => state.user
  )
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <h2>User</h2>
      <p>Firstname: {firstname}</p>
      <p>Lastname: {lastname}</p>
      <p>Age: {age}</p>

      <button type="button" onClick={() => dispatch(incrementAge())}>
        Increment Age
      </button>

      <div>
        <label>
          Firstname:{' '}
          <input
            type="text"
            value={firstname}
            onChange={(e) => dispatch(setFirstname(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Lastname:{' '}
          <input
            type="text"
            value={lastname}
            onChange={(e) => dispatch(setLastname(e.target.value))}
          />
        </label>
      </div>
    </div>
  )
}

export default User
