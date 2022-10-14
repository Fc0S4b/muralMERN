import Wrapper from '../assets/wrappers/SearchContainer';
import { FormRow, FormRowSelect } from '.';
import { useAppContext } from '../context/appContext';
const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    statusOptions,
    newTypeOptions,
    handleChange,
    clearFilters,
    searchFavorite,
    searchFavoriteOptions,
  } = useAppContext();

  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters();
  };
  return (
    <Wrapper>
      <form className="form">
        <h4>Filtrar por</h4>
        {/* search position */}
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
            labelText="Búsqueda manual"
          ></FormRow>
          {/* search by status */}
          <FormRowSelect
            labelText="estado de publicación"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={['todo', ...statusOptions]}
          ></FormRowSelect>
          {/* search by type */}
          <FormRowSelect
            labelText="tipo de publicación"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={['todo', ...newTypeOptions]}
          ></FormRowSelect>
          {/* sort */}
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
            labelText="Ordenar por"
          ></FormRowSelect>
          {/* favorite */}
          <FormRowSelect
            name="searchFavorite"
            value={searchFavorite}
            handleChange={handleSearch}
            labelText="Destacadas"
            list={['todo', ...searchFavoriteOptions]}
          ></FormRowSelect>
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            limpiar filtros
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchContainer;
