# # class Queue:
# #     def __init__(self):
# #         self.items = []

# #     def is_empty(self):
# #         return len(self.items) == 0

# #     def enqueue(self, item):
# #         self.items.append(item)
    
# #     def dequeue(self):
# #         if not self.is_empty():
# #             # 1. Grab the item at the front to return it later
# #             # removed_item = self.items[0]
            
# #             # 2. Update the internal list by slicing off the first item
# #             self.items = self.items[1:]
            
# #             # 3. Return the actual removed item
# #             # return removed_item
# #         else:
# #             raise IndexError("Queue UnderFlow")
        
# # q1 = Queue()
# # q1.enqueue(1)
# # q1.enqueue(2)
# # q1.enqueue(3)
# # q1.enqueue(4)

# # print("Before:", q1.items)

# # # This will now correctly return 1 and modify the internal list
# # q1.dequeue()
# # # q1.dequeue()

# # print("After:", q1.items)


# class CircularQueue:
#     def __init__(self, capacity):
#         self.capacity = capacity
#         # Initialize a fixed-size list with placeholders
#         self.queue = [None] * capacity  
#         self.front = -1
#         self.rear = -1

#     def is_empty(self):
#         return self.front == -1

#     def is_full(self):
#         # Full condition: The next slot after rear wraps around to hit front
#         return (self.rear + 1) % self.capacity == self.front

#     def enqueue(self, item):
#         if self.is_full():
#             raise IndexError("Queue Overflow: The circular queue is completely full.")
        
#         # If inserting the very first element
#         if self.is_empty():
#             self.front = 0
            
#         # Calculate the next index using modulo arithmetic to wrap around
#         self.rear = (self.rear + 1) % self.capacity
#         self.queue[self.rear] = item

#     def dequeue(self):
#         if self.is_empty():
#             raise IndexError("Queue Underflow: Cannot dequeue from an empty queue.")
        
#         removed_item = self.queue[self.front]
#         self.queue[self.front] = None  # Clear the reference to free up memory slot
        
#         # Scenario A: If there was only one element left, reset the queue to empty
#         if self.front == self.rear:
#             self.front = -1
#             self.rear = -1
#         else:
#             # Scenario B: Move the front pointer forward, wrapping around if necessary
#             self.front = (self.front + 1) % self.capacity
            
#         return removed_item

#     def display(self):
#         if self.is_empty():
#             print("Queue is empty: []")
#             return
            
#         print(f"Raw Array State: {self.queue} | Front Index: {self.front} | Rear Index: {self.rear}")


# # ---- Verification & Execution ----

# # 1. Create a Circular Queue with a capacity of 3 slots
# cq = CircularQueue(3)

# print("--- Enqueuing Elements ---")
# cq.enqueue(10)
# cq.enqueue(20)
# cq.enqueue(30)
# cq.display()  # Shows completely full raw state

# print("\n--- Trying to force an Overflow ---")
# try:
#     cq.enqueue(40)
# except IndexError as e:
#     print(e)  # Correctly catches the Overflow

# print("\n--- Dequeuing Elements to Vacate Space ---")
# print("Dequeued:", cq.dequeue()) # Removes 10
# cq.display()  # Slot 0 becomes None, leaving room to recycle

# print("\n--- Utilizing Circular Wrap-Around ---")
# cq.enqueue(40)  # Wraps around and fills slot 0!
# cq.display()


class CircularQueue:
    def __init__(self, capacity):
        self.capacity = capacity
        self.front = -1
        self.rear = -1
        self.queue = [None] * capacity

    def is_empty(self):
        return self.front == -1
    
    def is_full(self):
        return (self.rear + 1) % self.capacity == self.front
    
    def enqueue(self, item):
        if self.is_full():
            raise IndexError("Queue Overflow")
            
        if self.is_empty():
            self.front = 0
            
        # Move rear and store the item out of the conditional block
        # so it executes for BOTH the first item and subsequent items.
        self.rear = (self.rear + 1) % self.capacity
        self.queue[self.rear] = item

    def dequeue(self):
        if self.is_empty():
            raise IndexError("Queue Underflow")
            
        removed_item = self.queue[self.front]
        self.queue[self.front] = None
        
        if self.front == self.rear:
            self.front = -1
            self.rear = -1
        else:
            self.front = (self.front + 1) % self.capacity
            
        return removed_item
        
cq = CircularQueue(4)
cq.enqueue(10)
cq.enqueue(20)
cq.enqueue(20)
cq.enqueue(20)
cq.dequeue()
cq.dequeue()
cq.dequeue()
print(cq.queue)  # Now it correctly outputs: [10, 20, None, None]