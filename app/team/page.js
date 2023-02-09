import Image from 'next/image';
import { Fragment } from 'react';

const players = [
  { id: 1, firstName: 'Hurts', type: 'Qb' },
  { id: 2, firstName: 'A.J.Brown', type: 'Wr' },
  { id: 3, firstName: 'DeVonta Smith', type: 'Wr' },
  { id: 4, firstName: 'Dallas Goedert', type: 'Te' },
  { id: 5, firstName: 'Miles Sanders', type: 'Rb' },
  { id: 6, firstName: 'Jason Kelce', type: 'C' },
  { id: 7, firstName: 'Lane Johnson', type: 'Rt' },
  { id: 8, firstName: 'Jordan Mailata', type: 'Lt' },
];

export default function TeamPage() {
  return (
    <>
      <h1>Available Jerseys:</h1>
      <main>
        {players.map((team) => {
          return (
            <div key={team.id}>
              <Image
                src={`/images/${team.firstName}-${team.id}.png`}
                alt={team.type}
                width="200"
                height="200"
              />
              <h2>{team.firstName}</h2>
            </div>
          );
        })}
      </main>
    </>
  );
}
