# 5.1 Insertion: 
# 
# You are given two 32-bit numbers, N and M, and two bit positions,   
# i and j. Write a method to insert M into N such that M starts at bit j 
# and ends at bit i. You can assume that the bits j through i have enough
# space to fit all of M. 
# 
# That is, if M = 10011, you can assume that there are at least 5 bits between j and i.
# You would not, for example, have j = 3 and i = 2, because M could not fully fit between bit 3 and bit 2.

def updateBits(n, m, i, j):

    # 1. Clear bits through j to i in N
    onlyOnes = ~0
    left = onlyOnes << (j + 1) # make zeros up until j
    right = (1 << i) - 1 # make one's up until i
    mask = left | right # combinde
    n = n & mask       # now clear with mask so its zero's where m will be put
    
    # 2. Shift M so that it lines up with bits j through i
    m = m << i

    # 3. Merge M and N
    return n | m


print(bin(updateBits(int('10000000000', 2), int('1001', 2), 2, 6)))