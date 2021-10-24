import React from 'react';
interface Props {
  error: Error;
}
const ErrorFallback = ({ error }: Props) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
};

export default ErrorFallback;
