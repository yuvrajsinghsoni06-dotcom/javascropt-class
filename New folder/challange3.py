from typing import List, Dict, Generator, Optional
from dataclasses import dataclass
from decimal import Decimal


@dataclass
class Trade:
    """Represents a single market trade."""
    ticker: str
    price: float
    quantity: int
    tax: Optional[float] = None
    
    def calculate_tax(self, tax_rate: float = 0.05) -> float:
        """Calculate tax on the trade value."""
        return (self.price * self.quantity) * tax_rate
    
    @property
    def total_value(self) -> float:
        """Calculate total trade value."""
        return self.price * self.quantity
    
    def is_high_value(self, threshold: float = 1000.0) -> bool:
        """Determine if trade exceeds high-value threshold."""
        return self.price > threshold


class MarketStream:
    """
    Stream processor for market trade data.
    
    Validates and yields trades from a data source, filtering out invalid entries.
    """
    
    def __init__(self, source: List[Dict[str, any]], validate_on_init: bool = True):
        """
        Initialize the market stream.
        
        Args:
            source: List of trade dictionaries containing ticker, price, and quantity
            validate_on_init: Whether to validate data structure on initialization
        """
        self.source = source
        if validate_on_init:
            self._validate_data_structure()
    
    def _validate_data_structure(self) -> None:
        """Validate that all trades have required fields."""
        required_fields = {'ticker', 'price', 'quantity'}
        for idx, trade in enumerate(self.source):
            if not isinstance(trade, dict):
                raise ValueError(f"Trade at index {idx} is not a dictionary")
            
            missing_fields = required_fields - trade.keys()
            if missing_fields:
                raise ValueError(
                    f"Trade at index {idx} missing required fields: {missing_fields}"
                )
    
    def _is_valid_trade(self, trade: Dict[str, any]) -> bool:
        """
        Validate individual trade data.
        
        Args:
            trade: Trade dictionary to validate
            
        Returns:
            True if trade is valid, False otherwise
        """
        try:
            if trade["price"] < 0:
                print(f"⚠️  Invalid Trade Detected: {trade['ticker']} - "
                      f"Negative price (${trade['price']}) - Trade Skipped")
                return False
            
            if trade["quantity"] <= 0:
                print(f"⚠️  Invalid Trade Detected: {trade['ticker']} - "
                      f"Invalid quantity ({trade['quantity']}) - Trade Skipped")
                return False
            
            return True
            
        except KeyError as e:
            print(f"⚠️  Trade missing required field: {e} - Trade Skipped")
            return False
    
    def stream_trades(self) -> Generator[Dict[str, any], None, None]:
        """
        Stream validated trades from the data source.
        
        Yields:
            Valid trade dictionaries
        """
        for trade in self.source:
            if self._is_valid_trade(trade):
                yield trade


class TradeProcessor:
    """Process and analyze trade data."""
    
    # Class constants for configuration
    HIGH_VALUE_THRESHOLD = 1000.0
    DEFAULT_TAX_RATE = 0.05
    
    @staticmethod
    def is_high_value(trade: Dict[str, any], 
                      threshold: float = HIGH_VALUE_THRESHOLD) -> bool:
        """
        Determine if a trade is high value.
        
        Args:
            trade: Trade dictionary
            threshold: Price threshold for high-value classification
            
        Returns:
            True if trade price exceeds threshold
        """
        return trade["price"] > threshold
    
    @staticmethod
    def add_tax(trade: Dict[str, any], 
                tax_rate: float = DEFAULT_TAX_RATE) -> Dict[str, any]:
        """
        Calculate and add tax to trade.
        
        Args:
            trade: Original trade dictionary
            tax_rate: Tax rate to apply (default 5%)
            
        Returns:
            New dictionary with tax field added
        """
        tax_amount = (trade["price"] * trade["quantity"]) * tax_rate
        return {**trade, "tax": tax_amount}
    
    @classmethod
    def format_trade_output(cls, trade: Dict[str, any]) -> str:
        """
        Format trade for display output.
        
        Args:
            trade: Trade dictionary (with or without tax)
            
        Returns:
            Formatted string for display
        """
        ticker = trade['ticker']
        
        if cls.is_high_value(trade):
            trade_with_tax = cls.add_tax(trade)
            tax_amount = trade_with_tax['tax']
            return f"{ticker:<10} {'HIGH VALUE':<15} ${tax_amount:>8,.2f}"
        else:
            return f"{ticker:<10} {'Standard':<15} {'-':>8}"


def main():
    """Main execution function."""
    
    # Sample market data
    market_data = [
        {"ticker": "AAPL", "price": 150, "quantity": 10},
        {"ticker": "GOOGL", "price": 2800, "quantity": 5},
        {"ticker": "TSLA", "price": 700, "quantity": 50},
        {"ticker": "AMZN", "price": 3300, "quantity": 1},
        {"ticker": "MSFT", "price": 290, "quantity": 100},
    ]
    
    # Initialize stream processor
    stream = MarketStream(market_data)
    processor = TradeProcessor()
    
    # Display header
    print(f"\n{'TICKER':<10} {'STATUS':<15} {'TAX':>8}")
    print("-" * 40)
    
    # Process and display trades
    for trade in stream.stream_trades():
        print(processor.format_trade_output(trade))
    
    print()


if __name__ == "__main__":
    main()