import { Suspense } from 'react';

export default function WithSuspense({ children, fallback = null }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  return <Suspense fallback={fallback || <div className="h-32 w-full bg-border animate-pulse rounded-xl" />}>{children}</Suspense>;
}