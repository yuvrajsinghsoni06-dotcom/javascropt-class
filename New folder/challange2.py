#  Info of the challlange of day2 - To develop a script for Transection logger
# Challange Overview: Scenario: You need to create a utility script for your finance tool that allows users to upload multiple transaction amounts at once, while tagging them with metadata (like category or merchant). You also need to ensure that every time this critical function is called, it is logged for security.
def transection_logger(base_fn):
    print("Processing Transection Btach...")
    base_fn()
    print("Batch Processing Complete")

def Process_tractions(*args, **kwargs):
    print("Transection Details:")
    for amount in args:
        print(f"Amount: {amount}")
    for key, value in kwargs.items():
        print(f"{key}: {value}")
        