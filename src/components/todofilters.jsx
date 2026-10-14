const FILTERS = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];

function TodoFilters({ filter, setFilter }) {
  return (
    <div className="filters" role="group" aria-label="Filter tasks">
      {FILTERS.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          className="filters__btn"
          onClick={() => setFilter(value)}
          aria-pressed={filter === value}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default TodoFilters;
