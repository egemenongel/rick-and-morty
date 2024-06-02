import { useCallback, useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Character from "../components/Character/Character";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreItems = async (pageNum) => {
    if (isLoading || !hasMore) return;

    setLoading(true);

    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pageNum}`);
      const data = await response.json();

      if (data && data.results) {
        setCharacters((prevCharacters) => {
          const newCharacters = data.results.filter(
            (newChar) => !prevCharacters.some((char) => char.id === newChar.id)
          );
          return [...prevCharacters, ...newCharacters];
        });
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

  useEffect(() => {
    loadMoreItems(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

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
      {characters.map((character) => (
        <Character character={character} key={character.id} />
      ))}
      <ClipLoader
        color={"#01afc4"}
        loading={isLoading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {!isLoading && !hasMore && <p>No more items</p>}
      {error && <p>Error loading items</p>}
    </div>
  );
};

export default Characters;
