import PropTypes from 'prop-types';

export default function Filter({ filter, handleChageFilter }) {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={handleChageFilter}
        value={filter}
      />
    </label>
  );
}
