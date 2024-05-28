import { useCallback, useEffect, useState } from "react";
import Character from "../components/Character/Character";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadMoreItems();
  }, [page]);

  const loadMoreItems = async () => {
    if (isLoading || !hasMore) return;

    setLoading(true);

    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();

      if (data && data.results) {
        setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);
        setHasMore(data.info.next !== null);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1) {
      if (hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  }, [hasMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="characters">
      {characters.map((character, index) => (
        <Character character={character} key={`${character.id}-${index}`} />
      ))}
      {isLoading && <p>Loading...</p>}
      {!isLoading && !hasMore && <p>No more items</p>}
      {error && <p>Error loading items</p>}
  </div>
  );
};

export default Characters;
