import { iHero } from '@myorg/entities';
import { data } from '../datatmp/data';

export interface iHeroRepository {
  fetchHeroes: () => Promise<iHero[] | null>;
}

export const heroRepository: iHeroRepository = {
  fetchHeroes: async () => {
    const result = await Promise.resolve(data);
    return result;
  },
};
