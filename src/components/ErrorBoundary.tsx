import React, { useState, useEffect } from 'react';

const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleError = (error: Error) => {
    setHasError(true);
    setErrorMessage(error.message);
    console.error("Error caught in ErrorBoundary:", error);
  };

  useEffect(() => {
    const errorHandler = (event: ErrorEvent) => {
      handleError(event.error);
    };

    window.addEventListener('error', errorHandler);
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  if (hasError) {
    return <h1>Something went wrong: {errorMessage}</h1>;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
