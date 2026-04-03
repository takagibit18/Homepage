import { Star, GitFork, Calendar } from "lucide-react";
import type { GitHubRepo } from "@/lib/github";

interface RepoGridProps {
  repos: GitHubRepo[];
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  "C#": "#178600",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  Vue: "#41b883",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Svelte: "#ff3e00",
  Lua: "#000080",
  Shell: "#89e051",
};

export default function RepoGrid({ repos }: RepoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {repos.map((repo) => (
        <a
          key={repo.html_url}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-5 group block"
        >
          {/* Repo Name */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-accent group-hover:text-accent-hover font-medium text-sm truncate transition-colors">
              {repo.name}
            </span>
          </div>

          {/* Description */}
          {repo.description && (
            <p className="text-xs text-white/55 mb-3 line-clamp-2 min-h-[2.5rem]">
              {repo.description}
            </p>
          )}

          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-white/45">
            {repo.language && (
              <div className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    backgroundColor: LANGUAGE_COLORS[repo.language] || "#8b949e",
                  }}
                />
                <span>{repo.language}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Star size={12} />
              <span>{formatCount(repo.stargazers_count)}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork size={12} />
              <span>{formatCount(repo.forks_count)}</span>
            </div>
          </div>

          {/* Updated */}
          <div className="flex items-center gap-1 mt-2 text-[10px] text-white/30">
            <Calendar size={10} />
            <span>{formatDate(repo.updated_at)}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  return `${Math.floor(days / 30)}mo ago`;
}
