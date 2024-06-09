"use client";
export default function ErrrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      {error.message}
      <button onClick={reset}>Try Again</button>
    </>
  );
}
