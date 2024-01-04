class Game {
    private ballRolls: number[] = [];
    private TOTAL_FRAMES = 10;

    roll(pins: number): void {
        this.ballRolls.push(pins); // Array to store the number of pins knocked down for each roll
    }

    score(): number {

        let rollCount = 0, totalScore = 0;

        for (let startFrame = 0; startFrame < this.TOTAL_FRAMES; startFrame++) {
            if (this.isStrike(rollCount)) {
                totalScore += 10 + this.bonusForStrike(rollCount);
                rollCount++;
            } else if (this.isSpare(rollCount)) {
                totalScore += 10 + this.bonusForSpare(rollCount);
                rollCount += 2;
            } else {
                totalScore += this.totalKnockedInFrame(rollCount);
                rollCount += 2;
            }
        }

        return totalScore;
    }

    private totalKnockedInFrame(rollCount: number): number {
        return this.ballRolls[rollCount] + this.ballRolls[rollCount + 1];
    }

    private isStrike(rollCount: number): boolean {
        return this.ballRolls[rollCount] === 10;
    }

    private bonusForStrike(rollCount: number): number {
        return this.ballRolls[rollCount + 1] + this.ballRolls[rollCount + 2];
    }

    private isSpare(rollCount: number): boolean {
        return this.totalKnockedInFrame(rollCount) === 10;
    }

    private bonusForSpare(rollCount: number): number {
        return this.ballRolls[rollCount + 2];
    }
}

// Simulation of a game of bowling for given instructions of roll scores:

const game = new Game();

game.roll(1);
game.roll(4);
// Frame 1: 1 + 4 = 5

game.roll(4);
game.roll(5);
// Frame 2: 4 + 5 = 9, Running total: 5 + 9 = 14

game.roll(6);
game.roll(4); // Spare
// Frame 3: 6 + 4 = 10, Running total: 14 + 10 = 24 + 5 (bonus) = 29

game.roll(5);
game.roll(5); // Spare
// Frame 4: 5 + 5 = 10, Running total: 29 + 10 = 39 + 10 (bonus) = 49

game.roll(10); // Strike
// Frame 5: 10, Running total: 49 + 10 = 59 + 0 (bonus) + 1 (bonus) = 60

game.roll(0);
game.roll(1);
// Frame 6: 0 + 1 = 1, Running total: 60 + 1 = 61

game.roll(7);
game.roll(3); // Spare
// Frame 7: 7 + 3 = 10, Running total: 61 + 10 = 71 + 6 (bonus) = 77

game.roll(6);
game.roll(4); // Spare
// Frame 8: 6 + 4 = 10, Running total: 77 + 10 = 87 + 10     (bonus) = 97

game.roll(10); // Strike
// Frame 9: 10, Running total: 97 + 10 = 107 + 2 (bonus) + 8 (bonus) = 117

game.roll(2);
game.roll(8); // Spare
// Frame 10: 2 + 8 = 10, Running total: 117 + 10 = 127 + 6 (bonus) = 133

game.roll(6);

// Calculate the total score at the end of the game:
const totalScore = game.score();
console.log(totalScore);

export default Game;