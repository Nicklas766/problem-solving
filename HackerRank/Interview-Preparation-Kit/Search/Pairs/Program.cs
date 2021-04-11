using System;
using System.Collections.Generic;

// Pairs

namespace Pairs
{
    class Program
    {
        // Complexity O(N)
        static int pairs(int k, int[] arr) 
        {
            int foundPairs = 0;
            HashSet<int> integers = new HashSet<int>();
            
            foreach (int num in arr)
            {
                if (integers.Contains(num - k))
                {
                    foundPairs++;
                }
                if (integers.Contains(num + k))
                {
                    foundPairs++;
                }
                integers.Add(num);
            }
            return foundPairs;
        }

        static void Main(string[] args) 
        {
            Console.WriteLine(pairs(1, new int[] { 1, 2, 3, 4 }));
            Console.WriteLine(pairs(2, new int[] { 1, 5, 3, 4, 2 }));
            Console.WriteLine(pairs(2, new int[] { 1, 3, 5, 8, 6, 4, 2 }));
        }
    }
}
