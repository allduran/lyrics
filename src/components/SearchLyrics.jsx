/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';
import Button from './Button';
import { useLanguage } from '../context/useLanguage';


const SearchLyrics = () => {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [error, setError] = useState('');

  const { language } = useLanguage();

  const searchLyrics = async () => {
    setLyrics('');
    setError('');

    if (!artist || !title) {
      setError(language === 'EN' ? 'Please provide both artist and song title' : 'Por favor, proporciona tanto el artista como el título de la canción');
      return;
    }

    try {
      const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`);
      setLyrics(response.data.lyrics || (language === 'EN' ? 'Lyrics not found' : 'Letra no encontrada'));
    } catch (err) {
      setError(language === 'EN' ? 'Lyrics not found' : 'Letra no encontrada');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder={language === 'EN' ? 'Artist...' : 'Artista...'}
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <input
        type="text"
        placeholder={language === 'EN' ? 'Song Title...' : 'Título de la Canción....'}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
      <Button onClick={searchLyrics}>
        {language === 'EN' ? 'Search Lyrics' : 'Buscar Letra'}
      </Button>

      {error && <p>{error}</p>}
      {lyrics && <pre>{lyrics}</pre>}
    </div>
  );
};

export default SearchLyrics;
