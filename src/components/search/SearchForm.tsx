import React, { useState } from 'react';

interface SearchFormProps {
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <form className="mb-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Nome comandante"
        className="border p-2 rounded w-full"
      />
    </form>
  );
};

export default SearchForm;
