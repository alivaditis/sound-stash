import './Journal.css';
import Entry from '../Entry/Entry'
import UserContext from '../UserContext/UserContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Journal = () => {
  const {currentUser, isUserLoggedIn} = useContext(UserContext)
  const { journal } = currentUser
  const navigate = useNavigate()

  useEffect(() => {
    !isUserLoggedIn && navigate('/')
  }, [])

  return (
    <>
      <h2 className='sub-title'>My Journal</h2>
        {journal.length ?
          <div className='journal'>
            {journal.sort((a, b) => new Date(b.date) - new Date(a.date)).map(entry => <Entry key={entry.id} {...entry}/>)}
          </div>
        : <div className='album--grid'>
            <h3>Search an album to add to your journal</h3>
          </div>}
    </>
  )

};

export default Journal;