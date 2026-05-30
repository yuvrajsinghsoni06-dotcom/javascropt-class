"""
 day 4 of coding challange and daily learning

 The Scenario
Your firm manages portfolios for wealthy clients. A client’s portfolio isn't just a simple list of stocks. It is organized into "folders" and "sub-folders" (e.g., "Tech Stocks", "Retirement Fund", "Risky Bets").

In Python, this is represented as a List of Lists (nested data). Some items are just trades (dictionaries), but some items are lists containing more trades.

Your boss needs a flat list of all high-value trades immediately, but the data is buried deep inside these nested lists.

The Objective
You must write a script that "unpacks" this messy structure into a single, clean list of trades using Recursion, and then filters it using List Comprehension.

Your Constraints (Strict Rules!)
No while loops.

No for loops in the final filtering step (You must use List Comprehension).

Must use Recursion to handle the nested lists.

"""
from typing import List, Dict, Any
from dataclasses import dataclass

@dataclass
class Trade:
    ticker: str
    price: float
    quantity: int
portfolio_data = [
    {"ticker": "AAPL", "price": 1500, "quantity": 10},  # Value: 1500
    [
        {"ticker": "GOOGL", "price": 2800, "quantity": 5}, # Value: 14000
        [
            {"ticker": "TSLA", "price": 700, "quantity": 50}, # Value: 35000 (Deeply nested!)
        ]
    ],
    {"ticker": "AMZN", "price": 3300, "quantity": 1}, # Value: 3300
    [
        {"ticker": "MSFT", "price": 2090, "quantity": 100}, # Value: 29000
        {"ticker": "NVDA", "price": 2400, "quantity": 5}    # Value: 2000
    ]
]
@property
def flatten_trades(portfolio_data):
    flat_list = [ ]
    def flatten_helper(trade):
        for trades in trade:
            if isinstance(trades, list):
                flatten_trades(trades)
            else:
                flat_list.append(trades)
    flatten_helper(portfolio_data)
    return flat_list
is_high_valued_trade = lambda trade: portfolio_data["price"] * portfolio_data["quantity"] > 10000

#execution block
all_trades = flatten_trades(portfolio_data)
high_value_trades = is_high_valued_trade(all_trades)
print("All Trades:", all_trades)
requested_trades = [trade for trade in all_trades if is_high_valued_trade(trade)]
print("High Value Trades:", requested_trades)
            