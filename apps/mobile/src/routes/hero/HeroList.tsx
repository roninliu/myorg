import { useHero } from '@myorg/hooks';

export const HeroList = () => {
  const { heroes } = useHero();

  return (
    <div className="p-4">
      {heroes?.map((item) => (
        <div key={item.instance_id} className="py-4">
          <div>{item.heroId}</div>
          <div className="font-bold text-base">{item.name}</div>
          <div className="text-yellow-200">{item.title}</div>
          <div>{item.alias}</div>
          <div>{item.keywords}</div>
        </div>
      ))}
    </div>
  );
};
