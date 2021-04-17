using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

class Solution {

    static long largestRectangle(int[] h) {
        long maxArea = 0;
        Stack<int> stack = new Stack<int>();
        var heights = h.ToList();
        heights.Add(0); // Add zero to trigger algorithm on last element
    

        for (int i = 0; i < heights.Count; i++)
        {
            var currentHeight = heights[i];
    
            while (stack.Count != 0 && heights[stack.Peek()] > currentHeight)
            {
                int indexInHeights = stack.Pop();
                int height = heights[indexInHeights];
                
                // If zero: 
                //    It has the entire length of the current i
                // else:
                //   For example, when 
                //   i = 3
                //   heights = [1, 2, 3, 2]
                //   stack = [0, 1] (note prev [0, 1, 2])
                //   ---- First pop:
                //   stack.Peek() = 1
                //   3 - 1 - 1 = 1;
                //   --- Second pop:
                //   stack.Peek() = 0
                //   3 - 0 - 1 = 2;
                
                int width = stack.Count == 0 
                ? i 
                : i - stack.Peek() - 1; 
                
                long area = height * width;
                maxArea = Math.Max(maxArea, area);
                
            }
            
            stack.Push(i);
        }

        return maxArea;
    }

    static void Main(string[] args) {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        int n = Convert.ToInt32(Console.ReadLine());

        int[] h = Array.ConvertAll(Console.ReadLine().Split(' '), hTemp => Convert.ToInt32(hTemp))
        ;
        long result = largestRectangle(h);

        textWriter.WriteLine(result);

        textWriter.Flush();
        textWriter.Close();
    }
}
