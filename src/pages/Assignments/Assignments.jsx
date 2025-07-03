import React, { useCallback, useEffect, useState } from "react";
import AssignmentCard from "../../components/AssignmentCard/AssignmentCard";
import { Link } from "react-router";
import Loading from "../Loading/Loading";
import { FiSearch } from "react-icons/fi";
import api from "../../api/api";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [difficulty, setDifficulty] = useState("");

  // separate input state for search (typing)
  const [searchInput, setSearchInput] = useState("");

  // applied search term used for filter badges and API fetch
  const [search, setSearch] = useState("");

  // fetch assignments using applied filters (difficulty and search)
  const fetchAssignments = useCallback(() => {
    setDataLoading(true);

    const params = {};
    if (difficulty) params.difficultyLevel = difficulty;
    if (search.trim()) params.search = search.trim();

    api("/assignments", { params })
      .then((res) => {
        setAssignments(res.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setDataLoading(false);
      });
  }, [difficulty, search]);

  // fetch on difficulty change
  useEffect(() => {
    fetchAssignments();
  }, [difficulty, fetchAssignments]);

  // difficulty change handler
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  // on search form submit, apply searchInput to search, then fetch
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(searchInput);
  };

  // when search changes, fetchAssignments trigger
  useEffect(() => {
    fetchAssignments();
  }, [search, fetchAssignments]);

  if (dataLoading) return <Loading />;

  return (
    <div className="mb-3 lg:mb-6">
      {/* filter controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
        {/* difficulty Filter */}
        <select
          value={difficulty}
          onChange={handleDifficultyChange}
          className="select select-sm select-bordered w-36 md:w-40 focus:outline-none"
        >
          <option value="">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        {(search || difficulty) && (
          <div className="flex items-center justify-between flex-wrap gap-2 text-sm bg-base-200 p-2 rounded-md">
            <div>
              <span>Showing results for:</span>
              {difficulty && (
                <span className="badge badge-outline mx-1">{difficulty}</span>
              )}
              {search && (
                <span className="badge badge-outline mx-1">“{search}”</span>
              )}
            </div>

            <button
              onClick={() => {
                setDifficulty("");
                setSearch("");
                setSearchInput("");
              }}
              className="btn btn-xs btn-outline"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* search Input */}
        <form onSubmit={handleSearchSubmit} className="w-full md:max-w-sm">
          <label className="input input-sm flex items-center gap-2 w-full focus-within:outline-none">
            <input
              type="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search by title"
              className="grow focus:outline-none"
            />
            <button type="submit" title="Search">
              <FiSearch size={18} className="cursor-pointer text-secondary" />
            </button>
          </label>
        </form>
      </div>

      {/* assignments */}
      {assignments.length === 0 ? (
        <div className="flex flex-col items-center gap-5 mb-3 lg:mb-6 w-full bg-base-200 p-4 lg:p-5">
          <p className="text-center text-lg text-primary rounded">
            {search || difficulty
              ? "No matching assignments found"
              : "No assignments available"}
          </p>

          <Link
            to="/create-assignment"
            className="btn bg-secondary/90 text-white"
          >
            Let's Create
          </Link>
        </div>
      ) : (
        // assignments cards
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {assignments.map((assignment) => (
            <AssignmentCard
              key={assignment._id}
              assignment={assignment}
              setAssignments={setAssignments}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Assignments;
