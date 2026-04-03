import ProfileCard from "@/components/ProfileCard";
import RepoGrid from "@/components/RepoGrid";
import ContributionHeatmap from "@/components/ContributionHeatmap";
import { getGitHubUser, getGitHubRepos } from "@/lib/github";
import { getContributions } from "@/lib/contributions";

export default async function HomePage() {
  const [user, repos, contributions] = await Promise.all([
    getGitHubUser(),
    getGitHubRepos(6),
    getContributions(),
  ]);

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Profile */}
        {user ? (
          <ProfileCard user={user} />
        ) : (
          <div className="glass-card max-w-2xl mx-auto p-8 text-center">
            <p className="text-white/65">
              Failed to load profile. Check{" "}
              <code className="text-white/80">GITHUB_USERNAME</code> in your
              environment variables.
            </p>
          </div>
        )}

        {/* Repositories */}
        <section>
          <h2 className="text-xl font-bold text-white/95 mb-4">Repositories</h2>
          {repos.length > 0 ? (
            <RepoGrid repos={repos} />
          ) : (
            <div className="glass-card p-8 text-center">
              <p className="text-white/65">No repositories found.</p>
            </div>
          )}
        </section>

        {/* Contributions */}
        <section>
          <ContributionHeatmap contributions={contributions} />
        </section>
      </div>
    </main>
  );
}
