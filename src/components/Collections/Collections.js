import React, { useContext, useEffect } from 'react';
import Card from '../Card/Card';
import UserContext from '../UserContext/UserContext';
import { useNavigate } from 'react-router-dom';

const Collections = () => {
  const { currentUser, isUserLoggedIn } = useContext(UserContext);
  const { collections } = currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    !isUserLoggedIn && navigate('/');
  }, []);

  const savedAlbums = collections.map(album => (
    <Card key={album.masterId} result={album} />
  ));

  return (
    <div className='album--grid'>
      {savedAlbums.length ? savedAlbums : <h2>No albums in collection</h2>}
    </div>
  );
};

export default Collections;
