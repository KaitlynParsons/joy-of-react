import React from 'react';
import { CensorButton } from './components/CensorButton';
import { HitCounter } from './components/HitCounter';

/*
`readFile` takes 1 argument:
• the path to the file:

readFile('/path/to/file');

`writeFile` takes 2 arguments:
• The path to the file
• The new contents for the file

writeFile(
  '/path/to/file',
  '{ "hello": "world" }'
);
*/

function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number{' '}
        <CensorButton>
          <HitCounter />
        </CensorButton>
        .
      </p>
    </main>
  );
}

export default Home;
