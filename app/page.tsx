import HomeContent from "@/components/HomeContent";
import { getGitHubUser, getGitHubRepos } from "@/lib/github";
import { getContributions } from "@/lib/contributions";

export default async function HomePage() {
  const [user, repos, contributions] = await Promise.all([
    getGitHubUser(),
    getGitHubRepos(6),
    getContributions(),
  ]);
  const talkToSeanUrl = process.env.NEXT_PUBLIC_TALK_TO_SEAN_URL?.trim() || null;

  return (
    <HomeContent
      user={user}
      repos={repos}
      contributions={contributions}
      talkToSeanUrl={talkToSeanUrl}
    />
  );
}
