'use client';
export default function Error({ error, reset }) {
  return (
    <div>
      Ups! Something went wrong
      <p>{error.message}</p>
    </div>
  );
}
