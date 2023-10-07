"use client"; // Error components must be Client components

//  components
import ErrorMessage from "@/components/UI/ErrorMessage/ErrorMessage";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <ErrorMessage error={error} reset={reset} />
    </div>
  );
}
