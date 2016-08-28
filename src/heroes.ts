export enum HeroRole {
  Support,
  Tank,
  Defense,
  Offense
}

export interface IHero {
  name: string;
  displayName: string;
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

export const Ana: IHero = {
  name: "ana",
  displayName: "Ana",
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

export const Bastion: IHero = {
  name: "bastion",
  displayName: "Bastion",
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

export const Dva: IHero = {
  name: "dva",
  displayName: "D.Va",
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

export const Genji: IHero = {
  name: "genji",
  displayName: "Genji",
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

export const Hanzo: IHero = {
  name: "hanzo",
  displayName: "Hanzo",
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

export const Junkrat: IHero = {
  name: "junkrat",
  displayName: "Junkrat",
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

export const Lucio: IHero = {
  name: "lucio",
  displayName: "Lúcio",
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

export const McCree: IHero = {
  name: "mccree",
  displayName: "McCree",
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

export const Mei: IHero = {
  name: "mei",
  displayName: "Mei",
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

export const Mercy: IHero = {
  name: "mercy",
  displayName: "Mercy",
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

export const Pharah: IHero = {
  name: "pharah",
  displayName: "Pharah",
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

export const Reaper: IHero = {
  name: "reaper",
  displayName: "Reaper",
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

export const Reinhardt: IHero = {
  name: "reinhardt",
  displayName: "Reinhardt",
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

export const Roadhog: IHero = {
  name: "roadhog",
  displayName: "Roadhog",
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

export const Soldier76: IHero = {
  name: "soldier76",
  displayName: "Soldier: 76",
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

export const Symmetra: IHero = {
  name: "symmetra",
  displayName: "Symmetra",
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

export const Torbjorn: IHero = {
  name: "torbjorn",
  displayName: "Torbjörn",
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

export const Tracer: IHero = {
  name: "tracer",
  displayName: "Tracer",
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

export const Widowmaker: IHero = {
  name: "widowmaker",
  displayName: "Widowmaker",
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

export const Winston: IHero = {
  name: "winston",
  displayName: "Winston",
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

export const Zarya: IHero = {
  name: "zarya",
  displayName: "Zarya",
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

export const Zenyatta: IHero = {
  name: "zenyatta",
  displayName: "Zenyatta",
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
