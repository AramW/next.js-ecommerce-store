import Image from 'next/image';
import { notFound } from 'next/navigation';
import { players } from '../../../database/players';

//  export const players = [
//    { id: 1, firstName: 'Hurts', type: 'Qb' },
//    { id: 2, firstName: 'A.J.Brown', type: 'Wr' },
//    { id: 3, firstName: 'DeVonta Smith', type: 'Wr' },
//    { id: 4, firstName: 'Dallas Goedert', type: 'Te' },
//    { id: 5, firstName: 'Miles Sanders', type: 'Rb' },
//    { id: 6, firstName: 'Jason Kelce', type: 'C' },
//    { id: 7, firstName: 'Lane Johnson', type: 'Rt' },
//    { id: 8, firstName: 'Jordan Mailata', type: 'Lt' },
//  ];

export default function PlayerPage({ params }) {
  const singlePlayer = players.find((player) => {
    return player.firstName.toLowerCase() === params.playerName;
  });

  console.log(singlePlayer);
  if (!singlePlayer) {
    // throw new Error('this action is not allowed');
    notFound();
  }

  return (
    <>
      <h1>{singlePlayer.firstName}</h1>
      <main>
        <Image
          src={`/images/${singlePlayer.firstName}-${singlePlayer.id}.png`}
          alt={singlePlayer.type}
          width="200"
          height="200"
        />
      </main>
      <br />
      {singlePlayer.firstName} is the current {singlePlayer.type} for the
      Philadelphia Eagles
    </>
  );
}
