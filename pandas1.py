# import pandas as pd
# # #pandas series
# # data = pd.Series([1,3,5],index=['a','b','c'],dtype='float',name="UV")
# # print(data)
# # data1 =pd.Series({"name":['py3',"c","c++"],"por":[12,13,14,15]})
# # print(data1)
# data = pd.Series(12,index=[1,2,3,4,5,6,7])
# print(data)

# # # print(data[1])
# # # print(data[0:2])
# # # print(data.index)
# # # print(data.values)
# # # print(data.dtype)
# # # print(data.head(1))
# # # sales =pd.Series([200,22,34,654,665,7575])
# # # print(sales.sort_values())
# # # print(sales.count())
# # # sale1 = pd.Series([1,32,34,4,6,7,8,8,9,544,33,3])
# # # # print(sale1.notnull())
# # # print(sale1 + 100)
# # sales_missing = pd.Series([2,None,5])
# # print(sales_missing)
# # sales_missing.fillna(0)
# # print(sales_missing)
# # sales_missing = sales_missing.fillna(0)
# # print(sales_missing) 

class Solution:
    def rankchecker(self,arr):
        sorted_arr = sorted(arr) # this will arrange my arr acc to descending order as i want to cal the size of element in arr to find the rank of each element

        rank = {}  # this the hash i created to store the key value pair of sorted value : index in dic format
        for i , num in enumerate(sorted_arr):
            if num not in rank:
                 rank[num] = i     #thus the hash i created which will store the value using the loop

        result = []
        for num in arr:
            result.append(rank[num])    # thuis willl add the value of the key(num ) into the list that we wanted
        
        return result   #it will return the rank of each element in an arr


