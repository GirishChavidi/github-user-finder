import { useEffect, useState } from "react";
import { getRepos } from "../services/githubApi";
import Pagination from "./Pagination";

const RepoList = ({ username }) => {

  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [username]);

  useEffect(() => {

    async function fetchRepos() {
      const data = await getRepos(username, page);
      setRepos(data);
    }

    fetchRepos();

  }, [username, page]);

  return (

    <div className="repos">

      <h3>Repositories</h3>

      {repos.length === 0 ? (
        <p>No repositories found</p>
      ) : (

        <ul>

          {repos.map((repo) => (

            <li key={repo.id} className="repo-card">

              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-link"
              >
                {repo.name}
              </a>

              <p className="repo-desc">
                {repo.description || "No description available"}
              </p>

              <div className="repo-info">

                <span>⭐ {repo.stargazers_count}</span>

                <span>🍴 {repo.forks_count}</span>

                <span>{repo.language}</span>

              </div>

            </li>

          ))}

        </ul>

      )}

      <Pagination page={page} setPage={setPage} />

    </div>

  );
};

export default RepoList;