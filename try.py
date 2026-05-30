# class Board:
#     def __init__(self):
#         self.grid = [" " for _ in range(9)]

#     def __str__(self):
#         return (
#             f"\n{self.grid[0]} | {self.grid[1]} | {self.grid[2]}\n"
#             "--+---+--\n"
#             f"{self.grid[3]} | {self.grid[4]} | {self.grid[5]}\n"
#             "--+---+--\n"
#             f"{self.grid[6]} | {self.grid[7]} | {self.grid[8]}\n"
#         )

#     def update(self, position, symbol):
#         if self.grid[position] == " ":
#             self.grid[position] = symbol
#             return True
#         return False

#     def winning_condition(self, symbol):
#         win_condn = [
#             [0,1,2], [3,4,5], [6,7,8],
#             [0,3,6], [1,4,7], [2,5,8],
#             [0,4,8], [2,4,6]
#         ]

#         for condition in win_condn:
#             if (self.grid[condition[0]] == symbol and
#                 self.grid[condition[1]] == symbol and
#                 self.grid[condition[2]] == symbol):
#                 return True

#         return False

#     def full(self):
#         return " " not in self.grid


# class Player:
#     def __init__(self, name, symbol):
#         self.name = name
#         self.symbol = symbol


# class Game:
#     def __init__(self):
#         self.board = Board()
#         self.player1 = Player("Player 1", "X")
#         self.player2 = Player("Player 2", "O")
#         self.current_player = self.player1

#     def switch_player(self):
#         if self.current_player == self.player1:
#             self.current_player = self.player2
#         else:
#             self.current_player = self.player1

#     def play(self):
#         print("Welcome to Tic Tac Toe")
#         print("Enter positions from 0 to 8")

#         while True:
#             print(self.board)

#             try:
#                 position = int(input(
#                     f"{self.current_player.name} ({self.current_player.symbol}), choose position: "
#                 ))
#             except ValueError:
#                 print("Invalid input.")
#                 continue

#             if position < 0 or position > 8:
#                 print("Position must be between 0 and 8.")
#                 continue

#             if not self.board.update(position, self.current_player.symbol):
#                 print("Position already taken.")
#                 continue

#             if self.board.winning_condition(self.current_player.symbol):
#                 print(self.board)
#                 print(f"{self.current_player.name} wins!")
#                 break

#             if self.board.full():
#                 print(self.board)
#                 print("It's a draw!")
#                 break

#             self.switch_player()


# if __name__ == "__main__":
#     game = Game()
#     game.play()
class Solution(object):
    def findErrorNums(self, nums):
        n = len(nums)
        seen = set()
        expected = n * (n+1)// 2
        actual = sum(nums) 
        duplicate = actual - sum(set(nums))
        missing = expected - (actual - duplicate)
        return  [duplicate,missing]
        

obj = Solution()
print(obj.findErrorNums([1,2,2,4]))