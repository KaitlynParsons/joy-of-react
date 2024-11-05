import React from 'react';
import Link from 'next/link';

function ScreenSaverIndexPage() {
  const colors = ['fuchsia', 'orange', 'purple'];
  return (
    <main>
      <ul>
        {colors.map((color) => (
          <li key={color}>
            <Link href={`/exercises/01-screensaver/${color}`}>
              {color}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ScreenSaverIndexPage;
