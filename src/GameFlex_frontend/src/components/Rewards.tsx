// src/components/Rewards.tsx
interface Reward {
    name: string;
    earned: boolean;
  }
  
  export default function Rewards() {
    const rewards: Reward[] = [
      { name: 'Champion Badge', earned: true },
      { name: 'Top Scorer', earned: false },
    ];
  
    return (
      <div className="rewards p-4">
        <h2 className="text-xl font-bold mb-4">Your Achievements</h2>
        <ul>
          {rewards.map((reward, index) => (
            <li 
              key={index} 
              className={`p-2 ${reward.earned ? 'bg-blue-500' : 'bg-gray-300'} rounded-md mb-2`}>
              {reward.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  