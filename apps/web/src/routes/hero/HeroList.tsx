import { iHero } from '@myorg/entities';
import { useHero } from '@myorg/hooks';
import { useEffect, useState } from 'react';
import { HeroItem } from './HeroItem';

export const HeroList = () => {
  const { heroList } = useHero();

  const [data, setData] = useState<iHero[] | null>(null);

  async function load() {
    const result = await heroList();
    setData(result);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      {data?.map((item) => (
        <HeroItem key={item.heroId} heroes={item} />
      ))}
    </div>
  );
};
