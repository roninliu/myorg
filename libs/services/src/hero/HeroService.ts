import { iHero } from '@myorg/entities';
import { heroRepository } from '@myorg/repository';

export interface iHeroService {
  heroes: () => Promise<iHero[] | null>;
}

export const HeroService: iHeroService = {
  heroes: async () => {
    const result = await heroRepository.fetchHeroes();
    return result;
  },
};
