const RANK_UNIT = 0.06;

export const RANK_RULE = {
  SS: {
    CHANCE: 7,
    RANGE: { MIN: 1.01 + RANK_UNIT * 3, MAX: 1 + RANK_UNIT * 4 }
  },
  S: {
    CHANCE: 13,
    RANGE: { MIN: 1.01 + RANK_UNIT * 2, MAX: 1 + RANK_UNIT * 3 }
  },
  A: {
    CHANCE: 15,
    RANGE: { MIN: 1.01 + RANK_UNIT * 1, MAX: 1 + RANK_UNIT * 2 }
  },
  B: {
    CHANCE: 15,
    RANGE: { MIN: 1.01, MAX: 1 + RANK_UNIT * 1 }
  },
  C: {
    CHANCE: 20,
    RANGE: { MIN: 1.01 - RANK_UNIT, MAX: 1 }
  },
  D: {
    CHANCE: 10,
    RANGE: { MIN: 1.01 - RANK_UNIT * 2, MAX: 1 - RANK_UNIT }
  },
  E: {
    CHANCE: 10,
    RANGE: { MIN: 1.01 - RANK_UNIT * 3, MAX: 1 - RANK_UNIT * 2 }
  },
  F: {
    CHANCE: 10,
    RANGE: { MIN: 1.01 - RANK_UNIT * 4, MAX: 1 - RANK_UNIT * 3 }
  }
};

export const CREDIT_RULE = {
  PICK: {
    MAX: 12,
    INTERVAL: 1000 * 20
    // INTERVAL: 1000 * 60 * 20
  },
  BATTLE: {
    MAX: 12,
    INTERVAL: 1000 * 20
    // INTERVAL: 1000 * 60 * 20
  }
};
