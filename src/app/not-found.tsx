import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[80vh] place-items-center px-6 text-center">
      <div>
        <div className="font-display text-[clamp(4rem,12vw,9rem)] font-medium leading-none text-gradient">
          404
        </div>
        <p className="mt-4 text-white/60">
          The page you&apos;re looking for can&apos;t be found.
        </p>
        <Link
          href="/"
          data-cursor="hover"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
