class Curencies:
    def __init__(self, name, value):
        self.name = name
        self.value = value

class Calculator:
    def __init__(self, currencies: list):
        self.currencies = {currency.name: currency for currency in currencies}

    def conversion(self, amount: float, from_currency: str, to_currency: str) -> float:
        if from_currency == to_currency:
            return amount
        else:
            


