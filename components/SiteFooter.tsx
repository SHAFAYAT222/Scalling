import { SITE_NAME } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-20">
      <div className="max-w-3xl mx-auto px-6 py-8 text-sm text-muted flex items-center justify-between">
        <span>© 2026 {SITE_NAME}. All rights reserved.</span>
        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}
