import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!query) return;

    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search order" onChange={(e) => setQuery(e.target.value)} />
    </form>
  );
}

export default SearchOrder;
