/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';
import Button from './Button';

const SearchLyrics = () => {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [error, setError] = useState('');

  const searchLyrics = async () => {
    setLyrics('');
    setError('');

    if (!artist || !title) {
      setError('Please provide both artist and song title');
      return;
    }

    try {
      const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`);
      setLyrics(response.data.lyrics || 'Lyrics not found');
    } catch (err) {
      setError('Lyrics not found');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <input
        type="text"
        placeholder="Song Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
      <Button onClick={searchLyrics}>Search Lyrics</Button>

      {error && <p>{error}</p>}
      {lyrics && <pre>{lyrics}</pre>}
    </div>
  );
};

export default SearchLyrics;
