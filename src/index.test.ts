import Game from './index';

describe('Game', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  it('should score a gutter game (all rolls are 0)', () => {
    rollMultipleTimes(20, 0);
    expect(game.score()).toBe(0);
  });

  it('should score a game (all rolls being 1)', () => {
    rollMultipleTimes(20, 1);
    expect(game.score()).toBe(20);
  });

  it('should score a game with one spare', () => {
    rollSpare();
    game.roll(3);
    rollMultipleTimes(17, 0);

    expect(game.score()).toBe(16);
  });

  it('should score a game with one strike', () => {
    rollStrike();
    game.roll(4);
    game.roll(3);
    rollMultipleTimes(16, 0);

    expect(game.score()).toBe(24);
  });

  it('should score a perfect game (all strikes)', () => {
    rollMultipleTimes(12, 10);
    expect(game.score()).toBe(300);
  });

  it('should score (final score of 133) for given instructions of roll scores', () => {

    game.roll(1);
    game.roll(4);

    game.roll(4);
    game.roll(5);

    game.roll(6);
    game.roll(4); // Spare

    game.roll(5);
    game.roll(5); // Spare

    game.roll(10); // Strike

    game.roll(0);
    game.roll(1);

    game.roll(7);
    game.roll(3); // Spare

    game.roll(6);
    game.roll(4); // Spare

    game.roll(10); // Strike

    game.roll(2);
    game.roll(8); // Spare

    game.roll(6);
    expect(game.score()).toBe(133);
  });

  function rollMultipleTimes(ballRolls: number, pins: number): void {
    for (let i = 0; i < ballRolls; i++) {
      game.roll(pins);
    }
  }

  function rollSpare(): void {
    game.roll(5);
    game.roll(5);
  }

  function rollStrike(): void {
    game.roll(10);
  }
});
