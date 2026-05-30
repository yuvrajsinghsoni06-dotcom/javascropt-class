# # # arr = [1,2,3,4,5]
# # # def add(arr):
# # #     if len(arr) > 0:
# # #         return arr[0] + add(arr[1:])
# # #     else:
# # #         len(arr) == 0
# # #         return 0
# # # print(add(arr))

# # # def power(base, exp):
# # #     if  exp == 0:
# # #         return 1
# # #     else:
# # #         return base * power(base, exp-1)
# # # print(power(2,8))

# # # def gcd(a,b):
# # #     if 
# import numpy as np

# # # my_array = np.arange(8)
# # # my_array1 = np.arange(1,8)
# # # my_array2 = np.arange(1,8,2)
# # # my_array3 = np.arange(1,8,.5)
# # # print(my_array)
# # # print(my_array1)
# # # print(my_array2)
# # # print(my_array3)
# # # print(type(my_array))
# # # array from list
# # my_list = np.array([1,2,3,4,5], dtype=np.int8)
# # print(my_list)

# # 2d array
# # from_list = np.array([[1,2,3],[4,5,6]], dtype=np.int8)
# # d_array = np.array((np.arange(0,8,2),np.arange(1,8,2)))
# # array_2d = d_array.reshape(2,2,2)
# # print(from_list)
# # print(array_2d)

# # empty_array = np.zeros((2,2))
# # empty_array1 = np.ones((2,2))
# # empty_array2 = np.empty((2,2))
# # print(empty_array)
# # print(empty_array1)
# # print(empty_array2)
# # a2 = np.eye(2)
# # print(a2)
# a1 = np.eye(3, k=1)
# a1[:, 0] = 1
# # print(a1, "\n")

# a3 = np.sort(a1, axis=0)
# print(a3)
# my_array = a3.view()
# my_copy = a1.copy()

# my_array[:] = 4
# print(my_array, "\n")
# print()
import array
a = array.array('i',[1,2,3,4,5])
# print(a[3])
# print(a[-2])
# print(a[-1])
# a.insert(2,45)
a.append(90)
a.extend([99,199,3423])
print((a))
