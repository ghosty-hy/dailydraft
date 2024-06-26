import { motion } from 'framer-motion';

interface LeaderboardSlotProps {
  rank: number;
  avatar: string;
  name: string;
  played: number;
  won: number;
  isCurrentUser?: boolean;
}

export default function LeaderboardSlot({ rank, avatar, name, played, won, isCurrentUser }: LeaderboardSlotProps) {
  return (
    <motion.tr
      id="header"
      className={`[&>*]: grid grid-cols-12 border-b border-white/10 py-4 text-white [&>*]:flex [&>*]:items-center [&>h1]:pl-4 ${
        isCurrentUser ? 'bg-[#121318]' : ''
      }`}
      whileHover={{
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
      }}
    >
      <td className="col-span-1 text-center text-[#52BE70]">{rank}</td>
      <td className="col-span-7" content="">
        <img src={avatar} alt={name} className="mr-4 h-14 w-14 rounded-full" />
        <h1>
          {name} {isCurrentUser && <span className="ml-2 text-yellow-300">(You)</span>}
        </h1>
      </td>
      <td className="col-span-2">{played}</td>
      <td className="col-span-2">{won}</td>
    </motion.tr>
  );
}
