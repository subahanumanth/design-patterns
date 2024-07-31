interface Warrior {
  attack();
}

class Soldier implements Warrior {
  private level;
  constructor(level) {
    this.level = level;
  }

  attack() {
    return this.level * 1;
  }
}

class Jedi {
  private level;
  constructor(level) {
    this.level = level;
  }

  attackWithSaber() {
    return this.level * 100;
  }
}

class JediAdapter implements Warrior {
  private jedi;
  constructor(jedi) {
    this.jedi = jedi;
  }

  attack() {
    return this.jedi.attackWithSaber();
  }
}

const soldier = new Soldier(1);
soldier.attack();

const jedi = new JediAdapter(new Jedi(1));
jedi.attack();

export {
  Soldier,
  Jedi,
  JediAdapter
};
