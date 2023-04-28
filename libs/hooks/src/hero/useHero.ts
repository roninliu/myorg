import { iHero } from '@myorg/entities';
import { HeroService } from '@myorg/services';
import { useEffect, useState } from 'react';

export function useHero() {
  const [heroes, setHeroes] = useState<iHero[] | null>(null);

  useEffect(() => {
    HeroService.heroes().then((res) => setHeroes(res));
  }, []);

  return {
    heroes,
  };
}
