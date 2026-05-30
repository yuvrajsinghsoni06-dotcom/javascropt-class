from abc import ABC, abstractmethod

class ATM(ABC):
    @abstractmethod
    def deposit(self, amount):
        pass
    
    @abstractmethod
    def withdrawal(self, amount):
        pass

class Myatm(ATM):
    def __init__(self, balance):
        self.balance = balance

    def deposit(self, amount):
        # 1. LOGIC CHECK: We use 'if' to check rules
        if amount <= 0:
            # 2. RAISE: We manually trigger an error if rules are broken
            raise ValueError("Invalid amount! Please enter a non-negative, non-zero value.")
        
        self.balance += amount
        print(f"Successfully Deposited: {amount}. New Balance: {self.balance}")

    def withdrawal(self, amount):
        # Logic Check 1: Negative amount
        if amount <= 0:
            raise ValueError("Invalid amount! Please enter a non-negative value.")
            
        # Logic Check 2: Insufficient funds
        if amount > self.balance:
            raise ValueError("Insufficient funds!")
        
        # If we get here, everything is safe
        self.balance -= amount
        # Typo fixed: 'self,balance' -> 'self.balance'
        return f"Successfully Withdrawn: {amount}. Remaining Balance: {self.balance}"

# --- The Main Execution Block ---
if __name__ == "__main__":
    atm = Myatm(1000)

    # We use try/except HERE, where we actually call the functions
    try:
        print("--- Test 1: Valid Deposit ---")
        atm.deposit(500)
        
        print("\n--- Test 2: Valid Withdrawal ---")
        msg = atm.withdrawal(200)
        print(msg)

        print("\n--- Test 3: Invalid Withdrawal (Too much) ---")
        # This will CRASH if we don't wrap it in try/except!
        atm.withdrawal(5000) 

    except ValueError as e:
        # This catches the specific error message we 'raised' inside the class
        print(f"TRANSACTION FAILED: {e}")
        
    except Exception as e:
        print(f"An unexpected error occurred: {e}")