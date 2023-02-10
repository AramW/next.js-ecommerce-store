import Image from 'next/image';
import Link from 'next/link';
import { players } from '../../database/players';

export default function TeamPage() {
  return (
    <>
      <h1>Available Jerseys:</h1>
      <main>
        {players.map((team) => {
          return (
            <div key={team.id}>
              <Link href={`/team/${team.firstName.toLocaleLowerCase()}`}>
                <h2>{team.firstName}</h2>
              </Link>
              <Link href={`/team/${team.firstName.toLocaleLowerCase()}`}>
                <Image
                  src={`/images/${team.firstName}-${team.id}.png`}
                  alt={team.type}
                  width="200"
                  height="200"
                />
              </Link>
            </div>
          );
        })}
      </main>
    </>
  );
}
