export default function Loading() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Profile skeleton */}
        <div className="glass-card max-w-2xl mx-auto p-8">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-white/5 animate-pulse mb-5" />
            <div className="w-40 h-6 bg-white/5 animate-pulse rounded mb-3" />
            <div className="w-64 h-4 bg-white/5 animate-pulse rounded mb-5" />
            <div className="flex gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-10 h-5 bg-white/5 animate-pulse rounded mb-1" />
                  <div className="w-12 h-3 bg-white/5 animate-pulse rounded" />
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-20 h-8 bg-white/5 animate-pulse rounded-lg" />
              ))}
            </div>
          </div>
        </div>

        {/* Repos skeleton */}
        <div>
          <div className="w-32 h-6 bg-white/5 animate-pulse rounded mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass-card p-5">
                <div className="w-24 h-4 bg-white/5 animate-pulse rounded mb-3" />
                <div className="w-full h-3 bg-white/5 animate-pulse rounded mb-2" />
                <div className="w-3/4 h-3 bg-white/5 animate-pulse rounded mb-3" />
                <div className="flex gap-4">
                  <div className="w-16 h-3 bg-white/5 animate-pulse rounded" />
                  <div className="w-10 h-3 bg-white/5 animate-pulse rounded" />
                  <div className="w-10 h-3 bg-white/5 animate-pulse rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Heatmap skeleton */}
        <div className="glass-card p-5">
          <div className="w-48 h-5 bg-white/5 animate-pulse rounded mb-4" />
          <div className="flex gap-[3px]">
            {Array.from({ length: 52 }).map((_, w) => (
              <div key={w} className="flex flex-col gap-[3px]">
                {Array.from({ length: 7 }).map((_, d) => (
                  <div
                    key={d}
                    className="bg-white/5 animate-pulse rounded-sm"
                    style={{ width: 11, height: 11 }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
