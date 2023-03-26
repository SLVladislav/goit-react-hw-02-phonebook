import PropTypes from 'prop-types';

export default function Filter({ filter, handlChangeFilter }) {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={handlChangeFilter}
        value={filter}
      />
    </label>
  );
}

Filter.propTypes = {
  handlChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
