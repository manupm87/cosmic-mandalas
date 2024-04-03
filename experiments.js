let experiments = [
  {
    name: "Sun, Earth & moon simulation 1 - 3-body problem",
    g: 320,
    bodies: [
      {
        mass: 255,
        pos: {x: 431.25, y: 450},
        v: {x: 0, y: -0.1284722222222222},
        isFixed: false,
        isRestricted: false
      },
      {
        mass: 15,
        pos: {x: 675, y: 450},
        v: {x: 0, y: 2},
        isFixed: false,
        isRestricted: false
      },
      {
        mass: 0.625,
        pos: {x: 693.75, y: 450},
        v: {x: 0, y: 4},
        isFixed: false,
        isRestricted: false
      },
    ]
  },
  {
    name: "Sun, Earth & moon simulation 2 - Fixed Sun",
    g: 320,
    bodies: [
      {
        mass: 255,
        pos: {x: 431.25, y: 450},
        v: {x: 0, y: 0},
        isFixed: true,
        isRestricted: false
      },
      {
        mass: 15,
        pos: {x: 675, y: 450},
        v: {x: 0, y: 2},
        isFixed: false,
        isRestricted: false
      },
      {
        mass: 0.625,
        pos: {x: 693.75, y: 450},
        v: {x: 0, y: 4},
        isFixed: false,
        isRestricted: false
      },
    ]
  },
  {
    name: "Sun, Earth & moon simulation 3 - Restricted Moon",
    g: 320,
    bodies: [
      {
        mass: 255,
        pos: {x: 431.25, y: 450},
        v: {x: 0, y: -0.125},
        isFixed: false,
        isRestricted: false
      },
      {
        mass: 15,
        pos: {x: 675, y: 450},
        v: {x: 0, y: 2},
        isFixed: false,
        isRestricted: false
      },
      {
        mass: 0.625,
        pos: {x: 693.75, y: 450},
        v: {x: 0, y: 4},
        isFixed: false,
        isRestricted: true
      },
    ]
  },
  {
    name: "Sun, Earth & moon simulation 4 - Fixed Sun, 4 restricted Moons",
    g: 360,
    bodies: [
      {
        mass: 240,
        pos: {x: 431.25, y: 450},
        v: {x: 0, y: 0},
        isFixed: true,
        isRestricted: false
      },
      {
        mass: 15,
        pos: {x: 750, y: 450},
        v: {x: 0, y: 2.2},
        isFixed: false,
        isRestricted: false
      },
      {
        mass: 0.625,
        pos: {x: 768.75, y: 450},
        v: {x: 0, y: 0},
        isFixed: false,
        isRestricted: true
      },
      {
        mass: 0.625,
        pos: {x: 731.25, y: 450},
        v: {x: 0, y: 0},
        isFixed: false,
        isRestricted: true
      },
      {
        mass: 0.625,
        pos: {x: 768.75, y: 450},
        v: {x: 0, y: 4.46875},
        isFixed: false,
        isRestricted: true
      },
      {
        mass: 0.625,
        pos: {x: 731.25, y: 450},
        v: {x: 0, y: 4.46875},
        isFixed: false,
        isRestricted: true
      },
    ]
  },
  {
    name: "Trisolaris",
    g: 140,
    bodies: [
      {
        mass: 45,
        pos: {x: 450, y: 450},
        v: {x: 0, y: 0},
        isFixed: true,
        isRestricted: true
      },
      {
        mass: 75,
        pos: {x: 543.75, y: 450},
        v: {x: 0, y: 0.5},
        isFixed: false,
        isRestricted: false
      },
      {
        mass: 75,
        pos: {x: 356.25, y: 450},
        v: {x: 0, y: -0.5},
        isFixed: false,
        isRestricted: false
      },
      {
        mass: 15,
        pos: {x: 450, y: 56.25},
        v: {x: 0.9375, y: 0},
        isFixed: false,
        isRestricted: true
      },
    ]
  },

]
