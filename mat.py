import numpy as np
# arr = np.array([[1,2,3,4],[5,6,7,8]])
# print("Numpy array:\n{}".format(arr))

# import matplotlib.pyplot as plt
# x = np.linspace(-10 , 10 , 100)
# y = np.sin(x)
# plt.plot(x,y, marker="x")
# Tic Tac Toe using OOP

class Board:
    def __init__(self):
        # Initialize a 3x3 board using a list
        # Each cell initially contains a space
        self.grid = [" " for _ in range(9)]

    def __str__(self):
        # Return formatted board as a string
        return (
            f"\n{self.grid[0]} | {self.grid[1]} | {self.grid[2]}\n"
            "--+---+--\n"
            f"{self.grid[3]} | {self.grid[4]} | {self.grid[5]}\n"
            "--+---+--\n"
            f"{self.grid[6]} | {self.grid[7]} | {self.grid[8]}\n"
        )

    def update(self, position, symbol):
        """
        Updates the board at given position with player symbol.
        Returns True if move successful, else False.
        """
        if self.grid[position] == " ":
            self.grid[position] = symbol
            return True
        return False

    def check_winner(self, symbol):
        """
        Checks all possible winning combinations.
        Returns True if the given symbol wins.
        """
        win_conditions = [
            [0,1,2], [3,4,5], [6,7,8],  # rows
            [0,3,6], [1,4,7], [2,5,8],  # columns
            [0,4,8], [2,4,6]            # diagonals
        ]

        for condition in win_conditions:
            if (self.grid[condition[0]] == symbol and
                self.grid[condition[1]] == symbol and
                self.grid[condition[2]] == symbol):
                return True
        return False

    def is_full(self):
        # Returns True if board is full (draw condition)
        return " " not in self.grid


class Player:
    def __init__(self, name, symbol):
        # Store player name and symbol (X or O)
        self.name = name
        self.symbol = symbol


class Game:
    def __init__(self):
        # Create board
        self.board = Board()

        # Create players
        self.player1 = Player("Player 1", "X")
        self.player2 = Player("Player 2", "O")

        # Set starting player
        self.current_player = self.player1

    def switch_player(self):
        # Switch between player1 and player2
        if self.current_player == self.player1:
            self.current_player = self.player2
        else:
            self.current_player = self.player1

    def play(self):
        print("Welcome to Tic Tac Toe!")
        print("Enter positions from 0 to 8 as shown below:")
        print("0 | 1 | 2")
        print("3 | 4 | 5")
        print("6 | 7 | 8")

        while True:
            # Display board
            self.board.display()

            # Take input
            try:
                position = int(input(f"{self.current_player.name} ({self.current_player.symbol}), choose position: "))
            except ValueError:
                print("Invalid input. Enter a number between 0 and 8.")
                continue

            # Validate range
            if position < 0 or position > 8:
                print("Position must be between 0 and 8.")
                continue

            # Try updating board
            if not self.board.update(position, self.current_player.symbol):
                print("Position already taken. Try again.")
                continue

            # Check winner
            if self.board.check_winner(self.current_player.symbol):
                self.board
                print(f"{self.current_player.name} wins! 🎉")
                break

            # Check draw
            if self.board.is_full():
                self.board
                print("It's a draw!")
                break

            # Switch turn
            self.switch_player()


# Run the game
if __name__ == "__main__":
    game = Game()
    game.play()
