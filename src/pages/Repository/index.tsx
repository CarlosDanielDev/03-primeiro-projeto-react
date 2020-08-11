import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

import * as S from './styles';

interface RepositoryParams {
  repository: string;
}
interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  title: string;
  id: number;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    async function loadData(): Promise<void> {
      const [repositoryResponse, issuesResponse] = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`),
      ]);
      setRepository(repositoryResponse.data);
      setIssues(issuesResponse.data);
    }

    loadData();
  }, [params.repository]);

  return (
    <>
      <S.Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </S.Header>

      {repository && (
        <S.RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt="AC/DC" />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>

            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>

            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues</span>
            </li>
          </ul>
        </S.RepositoryInfo>
      )}

      <S.Issues>
        {issues.map(issue => (
          <a
            href={issue.html_url}
            rel="noopener noreferrer"
            target="_blank"
            key={issue.id}
          >
            <div>
              <strong>{issue.user.login}</strong>
              <p>{issue.title}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </S.Issues>
    </>
  );
};

export default Repository;
