import { FC } from 'react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

interface Achievement {
  title: string;
  description: string;
  users: { name: string; image: string; rating: number }[];
}

const AchievementsSection: FC = () => {
  const achievements: Achievement[] = [
    {
      title: 'Inspiring & Practical',
      description: 'The App Development session exceeded my expectations. The hands-on coding tips and clear guidance made building an app feel achievable. I’m inspired to keep learning and start developing apps.',
      users: [
        { name: 'John Doe', image: 'https://randomuser.me/api/portraits/men/32.jpg', rating: 4.5 },
      ],
    },
    {
      title: 'Beginner Friendly',
      description: '“I absolutely loved the Digital Calligraphy workshop. The step-by-step guidance made it so easy to create beautiful designs even for a beginner like me. Can’t wait for the next session!”',
      users: [
        { name: 'Emily Davis', image: 'https://randomuser.me/api/portraits/women/45.jpg', rating: 5.0 },
      ],
    },
    {
      title: 'Far Exceeded',
      description: 'The session broke down complex strategies into simple, actionable steps. Using real life scenarios was the best. I feel confident to start my journey into entrepreneurship! Highly recommend for anyone.',
      users: [
        { name: 'Michael Scott', image: 'https://randomuser.me/api/portraits/men/40.jpg', rating: 4.8 },
      ],
    },
  ];

  return (
    <section className="p-8 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-lg border-r-4 border-[#9B2C2C]">
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>{achievement.title}</h3>
            <Quote className="text-[#9B2C2C] font-bold mb-4" size={32} />
            <p className="text-gray-700 mb-4 text-justify">{achievement.description}</p>
            {achievement.users.map((user, idx) => (
              <div key={idx} className="flex items-center space-x-4 mt-4 border-t-2 border-gray-300 border-dashed py-5">
                <Image src={user.image} alt={user.name} width={48} height={48} className="rounded-full border-2 border-[#9B2C2C]" />
                <div>
                  <p className="text-gray-800 text-md font-semibold">{user.name}</p>
                  <div className="flex text-[#F1C40F]">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star size={12} key={i} fill={i < Math.floor(user.rating) ? 'currentColor' : 'none'} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>  
  );
};

export default AchievementsSection;
