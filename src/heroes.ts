export enum HeroRole {
  Support,
  Tank,
  Defense,
  Offense
}

export interface Hero {
  name: string;
  role: HeroRole;
}

export class Heroes {
  static Ana: Hero = { name: "ana", role: HeroRole.Support };
  static Bastion: Hero = { name: "bastion", role: HeroRole.Defense };
  static Dva: Hero = { name: "dva", role: HeroRole.Tank };
  static Genji: Hero = { name: "genji", role: HeroRole.Offense };
  static McCree: Hero = { name: "mccree", role: HeroRole.Offense };
  static Hanzo: Hero = { name: "hanzo", role: HeroRole.Defense };
  static Junkrat: Hero = { name: "junkrat", role: HeroRole.Defense };
  static Lucio: Hero = { name: "lucio", role: HeroRole.Support };
  static Mei: Hero = { name: "mei", role: HeroRole.Defense };
  static Mercy: Hero = { name: "mercy", role: HeroRole.Support };
  static Pharah: Hero = { name: "pharah", role: HeroRole.Offense };
  static Reaper: Hero = { name: "reaper", role: HeroRole.Offense };
  static Reinhardt: Hero = { name: "reinhardt", role: HeroRole.Tank };
  static Roadhog: Hero = { name: "roadhog", role: HeroRole.Tank };
  static Soldier76: Hero = { name: "soldier76", role: HeroRole.Offense };
  static Symmetra: Hero = { name: "symmetra", role: HeroRole.Support };
  static Tracer: Hero = { name: "tracer", role: HeroRole.Offense };
  static Torbjorn: Hero = { name: "torbjorn", role: HeroRole.Defense };
  static Widowmaker: Hero = { name: "widowmaker", role: HeroRole.Defense };
  static Winston: Hero = { name: "winston", role: HeroRole.Tank };
  static Zarya: Hero = { name: "zarya", role: HeroRole.Tank };
  static Zenyatta: Hero = { name: "zenyatta", role: HeroRole.Support };
};

export const AllHeroes: Hero[] = [];

for (let heroName in Heroes) {
  const hero = Heroes[heroName];
  AllHeroes.push(hero); 
}