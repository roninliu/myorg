import { useHero } from '@myorg/hooks';

export const HeroList = () => {
  const { heroes } = useHero();

  return (
    <div>
      {heroes?.map((item) => (
        <div key={item.instance_id} className="flex gap-2">
          <div className="w-8">{item.heroId}</div>
          <div className="w-28">{item.name}</div>
          <div className="w-28">{item.title}</div>
          <div className="w-28">{item.alias}</div>
          <div>{item.keywords}</div>
        </div>
      ))}
    </div>
  );
};
