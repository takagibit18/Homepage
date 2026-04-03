import Image from "next/image";
import { Github, Twitter, Mail, Link as LinkIcon } from "lucide-react";
import type { GitHubUser } from "@/lib/github";

interface ProfileCardProps {
  user: GitHubUser;
}

export default function ProfileCard({ user }: ProfileCardProps) {
  return (
    <div className="glass-card max-w-2xl mx-auto p-8">
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative mb-5 transition-transform duration-300 hover:scale-105">
          <Image
            src={user.avatar_url}
            alt={user.login}
            width={96}
            height={96}
            className="rounded-full border-2 border-white/10"
            priority
          />
        </div>

        {/* Name & Bio */}
        <h1 className="text-2xl font-bold text-white/95 mb-1">
          {user.name || user.login}
        </h1>
        {user.bio && (
          <p className="text-sm text-white/65 mb-5 line-clamp-2 max-w-md">
            {user.bio}
          </p>
        )}

        {/* Stats */}
        <div className="flex gap-8 mb-5">
          <StatItem label="Repos" value={user.public_repos} />
          <StatItem label="Followers" value={user.followers} />
          <StatItem label="Following" value={user.following} />
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <SocialLink
            href={user.html_url}
            icon={<Github size={18} />}
            label="GitHub"
          />
          {user.twitter_username && (
            <SocialLink
              href={`https://twitter.com/${user.twitter_username}`}
              icon={<Twitter size={18} />}
              label="Twitter"
            />
          )}
          {user.blog && (
            <SocialLink
              href={
                user.blog.startsWith("http") ? user.blog : `https://${user.blog}`
              }
              icon={<LinkIcon size={18} />}
              label="Blog"
            />
          )}
          {user.email && (
            <SocialLink
              href={`mailto:${user.email}`}
              icon={<Mail size={18} />}
              label="Email"
            />
          )}
        </div>
      </div>
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center">
      <div className="text-lg font-semibold text-white/95">{formatNumber(value)}</div>
      <div className="text-xs text-white/50 uppercase tracking-wide">{label}</div>
    </div>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/65 hover:text-accent hover:bg-white/[0.06] transition-all duration-200"
      aria-label={label}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </a>
  );
}

function formatNumber(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}
