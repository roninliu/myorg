import { iHero } from '@myorg/entities';
import { FC, Fragment } from 'react';

export interface iProps {
  heroes: iHero | null;
}
export const HeroItem: FC<iProps> = (heroes: iProps) => {
  const renderItem = (item) => {
    return (
      <div key={item.instance_id} className="flex gap-2">
        <div className="w-8">{item.heroId}</div>
        <div className="w-28">{item.name}</div>
        <div className="w-28">{item.title}</div>
        <div className="w-28">{item.alias}</div>
        <div>{item.keywords}</div>
      </div>
    );
  };
  const renderEmtpy = (item) => {
    return <>mull</>;
  };

  return <Fragment>{!heroes ? <>null</> : <>has</>}</Fragment>;
};
