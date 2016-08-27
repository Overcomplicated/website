export enum HeroRole {
  Support,
  Tank,
  Defense,
  Offense
}

export interface IHero {
  name: string;
  role: HeroRole;
  counters?: {
    strong: {
      name: string;
    }[],
    weak: {
      name: string;
    }[],
  };
}

export class Heroes {

  public static Ana: IHero = {
    name: "ana",
    role: HeroRole.Support,
    counters: {
      strong: [
        {
          name: "lucio",
        },
        {
          name: "mercy",
        },
        {
          name: "zenyatta",
        },
      ],
      weak: [
        {
          name: "genji",
        },
        {
          name: "reaper",
        },
        {
          name: "tracer",
        },
      ],
    },
  };

  public static Bastion: IHero = {
    name: "bastion",
    role: HeroRole.Defense,
    counters: {
      strong: [
        {
          name: "mercy",
        },
        {
          name: "reinhardt",
        },
        {
          name: "winston",
        },
      ],
      weak: [
        {
          name: "genji",
        },
        {
          name: "tracer",
        },
        {
          name: "widowmaker",
        },
      ],
    },
  };

  public static Dva: IHero = {
    name: "dva",
    role: HeroRole.Tank,
    counters: {
      strong: [
        {
          name: "pharah",
        },
        {
          name: "reinhardt",
        },
        {
          name: "widowmaker",
        },
      ],
      weak: [
        {
          name: "mei",
        },
        {
          name: "zarya",
        },
        {
          name: "winston",
        },
      ],
    },
  };

  public static Genji: IHero = {
    name: "genji",
    role: HeroRole.Offense,
    counters: {
      strong: [
        {
          name: "bastion",
        },
        {
          name: "mercy",
        },
        {
          name: "torbjorn",
        },
      ],
      weak: [
        {
          name: "mei",
        },
        {
          name: "zarya",
        },
        {
          name: "winston",
        },
      ],
    },
  };

  public static Hanzo: IHero = {
    name: "hanzo",
    role: HeroRole.Defense,
    counters: {
      strong: [
        {
          name: "bastion",
        },
        {
          name: "torbjorn",
        },
        {
          name: "widowmaker",
        },
      ],
      weak: [
        {
          name: "dva",
        },
        {
          name: "tracer",
        },
        {
          name: "widowmaker",
        },
      ],
    },
  };

  public static Junkrat: IHero = {
    name: "junkrat",
    role: HeroRole.Defense,
    counters: {
      strong: [
        {
          name: "bastion",
        },
        {
          name: "mei",
        },
        {
          name: "torbjorn",
        },
      ],
      weak: [
        {
          name: "mccree",
        },
        {
          name: "pharah",
        },
        {
          name: "widowmaker",
        },
      ],
    },
  };

  public static Lucio: IHero = {
    name: "lucio",
    role: HeroRole.Support,
    counters: {
      strong: [
        {
          name: "dva",
        },
        {
          name: "reaper",
        },
        {
          name: "winston",
        },
      ],
      weak: [
        {
          name: "mei",
        },
        {
          name: "mccree",
        },
        {
          name: "pharah",
        },
      ],
    },
  };

  public static McCree: IHero = {
    name: "mccree",
    role: HeroRole.Offense,
    counters: {
      strong: [
        {
          name: "reaper",
        },
        {
          name: "tracer",
        },
        {
          name: "winston",
        },
      ],
      weak: [
        {
          name: "genji",
        },
        {
          name: "soldier76",
        },
        {
          name: "widowmaker",
        },
      ],
    },
  };

  public static Mei: IHero = {
    name: "mei",
    role: HeroRole.Defense,
    counters: {
      strong: [
        {
          name: "genji",
        },
        {
          name: "winston",
        },
        {
          name: "tracer",
        },
      ],
      weak: [
        {
          name: "junkrat",
        },
        {
          name: "pharah",
        },
        {
          name: "widowmaker",
        },
      ],
    },
  };

  public static Mercy: IHero = {
    name: "mercy",
    role: HeroRole.Support,
    counters: {
      strong: [],
      weak: [
        {
          name: "mccree",
        },
        {
          name: "tracer",
        },
        {
          name: "widowmaker",
        },
      ],
    },
  };

  public static Pharah: IHero = {
    name: "pharah",
    role: HeroRole.Offense,
    counters: {
      strong: [
        {
          name: "bastion",
        },
        {
          name: "junkrat",
        },
        {
          name: "mei",
        },
      ],
      weak: [
        {
          name: "mccree",
        },
        {
          name: "roadhog",
        },
        {
          name: "soldier76",
        },
      ],
    },
  };

  public static Reaper: IHero = {
    name: "reaper",
    role: HeroRole.Offense,
    counters: {
      strong: [
        {
          name: "bastion",
        },
        {
          name: "mei",
        },
        {
          name: "winston",
        },
      ],
      weak: [
        {
          name: "junkrat",
        },
        {
          name: "mccree",
        },
        {
          name: "pharah",
        },
      ],
    },
  };

  public static Reinhardt: IHero = {
    name: "reinhardt",
    role: HeroRole.Tank,
    counters: {
      strong: [
        {
          name: "soldier76",
        },
        {
          name: "torbjorn",
        },
        {
          name: "widowmaker",
        },
      ],
      weak: [
        {
          name: "reaper",
        },
        {
          name: "roadhog",
        },
        {
          name: "symmetra",
        },
      ],
    },
  };

  public static Roadhog: IHero = {
    name: "roadhog",
    role: HeroRole.Tank,
    counters: {
      strong: [
        {
          name: "pharah",
        },
        {
          name: "reinhardt",
        },
        {
          name: "tracer",
        },
      ],
      weak: [
        {
          name: "dva",
        },
        {
          name: "genji",
        },
        {
          name: "reaper",
        },
      ],
    },
  };

  public static Soldier76: IHero = {
    name: "soldier76",
    role: HeroRole.Offense,
    counters: {
      strong: [
        {
          name: "mercy",
        },
        {
          name: "pharah",
        },
        {
          name: "torbjorn",
        },
      ],
      weak: [
        {
          name: "genji",
        },
        {
          name: "mei",
        },
        {
          name: "tracer",
        },
      ],
    },
  };

  public static Symmetra: IHero = {
    name: "symmetra",
    role: HeroRole.Support,
    counters: {
      strong: [
        {
          name: "bastion",
        },
        {
          name: "dva",
        },
        {
          name: "reinhardt",
        },
      ],
      weak: [
        {
          name: "junkrat",
        },
        {
          name: "pharah",
        },
        {
          name: "roadhog",
        },
      ],
    },
  };

  public static Torbjorn: IHero = {
    name: "torbjorn",
    role: HeroRole.Defense,
    counters: {
      strong: [
        {
          name: "genji",
        },
        {
          name: "lucio",
        },
        {
          name: "tracer",
        },
      ],
      weak: [
        {
          name: "junkrat",
        },
        {
          name: "pharah",
        },
        {
          name: "widowmaker",
        },
      ],
    },
  };

  public static Tracer: IHero = {
    name: "tracer",
    role: HeroRole.Offense,
    counters: {
      strong: [
        {
          name: "bastion",
        },
        {
          name: "mercy",
        },
        {
          name: "widowmaker",
        },
      ],
      weak: [
        {
          name: "mccree",
        },
        {
          name: "mei",
        },
        {
          name: "soldier76",
        },
      ],
    },
  };

  public static Widowmaker: IHero = {
    name: "widowmaker",
    role: HeroRole.Defense,
    counters: {
      strong: [
        {
          name: "bastion",
        },
        {
          name: "torbjorn",
        },
        {
          name: "pharah",
        },
      ],
      weak: [
        {
          name: "dva",
        },
        {
          name: "genji",
        },
        {
          name: "winston",
        },
      ],
    },
  };

  public static Winston: IHero = {
    name: "winston",
    role: HeroRole.Tank,
    counters: {
      strong: [
        {
          name: "genji",
        },
        {
          name: "hanzo",
        },
        {
          name: "widowmaker",
        },
      ],
      weak: [
        {
          name: "mccree",
        },
        {
          name: "mei",
        },
        {
          name: "reaper",
        },
      ],
    },
  };

  public static Zarya: IHero = {
    name: "zarya",
    role: HeroRole.Tank,
    counters: {
      strong: [
        {
          name: "dva",
        },
        {
          name: "genji",
        },
        {
          name: "winston",
        },
      ],
      weak: [
        {
          name: "pharah",
        },
        {
          name: "roadhog",
        },
        {
          name: "reaper",
        },
      ],
    },
  };

  public static Zenyatta: IHero = {
    name: "zenyatta",
    role: HeroRole.Support,
    counters: {
      strong: [
        {
          name: "dva",
        },
        {
          name: "roadhog",
        },
        {
          name: "winston",
        },
      ],
      weak: [
        {
          name: "hanzo",
        },
        {
          name: "tracer",
        },
        {
          name: "widowmaker",
        },
      ],
    },
  };

};

export const AllHeroes: IHero[] = [];

for (let heroName in Heroes) {
  if (Heroes.hasOwnProperty(heroName)) {
    const hero = Heroes[heroName];
    AllHeroes.push(hero);
  }
}
