import { LatihanInput } from './LatihanInput';
import { useState } from 'react';

export const LatihanForm = () => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('empty');

  if (status === 'success') {
    return <h1>That's right!</h1>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  };

  const handleInputChange = (e) => {
    const length = e.target.value.length;
    setAnswer(e.target.value);
    length === 0 ? setStatus('empty') : setStatus('typing');
  };

  const submitForm = (answer) => {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== 'lima';
        if (shouldError) {
          reject(new Error('Good guess but a wrong answer. Try again!'));
        } else {
          resolve();
        }
      }, 1500);
    });
  };

  return (
    <div className="grid place-content-center">
      <form onSubmit={handleSubmit}>
        <LatihanInput
          header="Masukkan text"
          values={answer}
          changeEvent={handleInputChange}
          isDisabled={status === 'submitting'}
        />
        <p>{status}</p>
        <button
          type="submit"
          className="btn btn-primary mt-4"
          disabled={answer.length === 0 || status === 'submitting'}
        >
          Submit
        </button>
        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </div>
  );
};
