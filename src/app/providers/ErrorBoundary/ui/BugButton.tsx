import { useEffect, useState } from 'react';

// component for testing Error Boundary
const BugButton = () => {
  const [error, setError] = useState(false);
  const throwError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <button type="button" onClick={throwError}>
      Throw Error
    </button>
  );
};

export default BugButton;
