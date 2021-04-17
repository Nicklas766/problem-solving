""" Node is defined as
class node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
"""
import sys


def checkBSTRecur(root, min, max):
    if root is None:
        return True
    
    if root.data <= min or root.data >= max:
        return False
    
    return checkBSTRecur(root.left, min, root.data) and checkBSTRecur(root.right, root.data, max)
    

def checkBST(root):
    maxVal = sys.maxsize
    minVal = -sys.maxsize - 1
    return checkBSTRecur(root, minVal, maxVal)

    