import { HeroService } from '@myorg/services';

export function useHero() {
  async function heroList() {
    const result = await HeroService.heroes();
    return result;
  }

  return {
    heroList,
  };
}
