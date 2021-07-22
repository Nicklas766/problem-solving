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

class Result
{
// Let's say we have
// expenditure = 1, 2, 3, 3, 1, 6
// medianIndex = 2

// Our days should be 5, so we're interesting this part [1, 2, 3, 3, 1], 6.
// count:
// index = 0, 1  2  3, ... to 201
// value = 0, 2, 1, 2, ... to index 201

// iteration 1:
// ------------
// median = 0;
// k = 0
// j = 1;

// iteration 2 (k < medianIndex):
// ------------
// median = 1;
// k = 2
// j = 2;

// iteration 3 (k == medianIndex):
// ------------
// median = 2;
// k = 3
// j = 3;

// Then return median (2), and its correct since 
// [1, 2, 3, 3, 1] sorted is [1, 1, 2, 3, 3]
public static int getMedian(List<int> expenditure, int[] count, int medianIndex) 
{
    int j = 0, k = 0, median = 0;
    
    // k determines the breaking condition
    while (k <= medianIndex)
    {
        median = j;
        k += count[j];
        j++;
    }

    return median; // when k breaks, j will equal the median in expenditures
}

    public static int activityNotifications(List<int> expenditure, int days)
    {
        // Init counting sort as int[201], due to constraint, 0 <= expenture[i] <= 200.
        // 201 because we need to account for index 0.
        int[] countArr = new int[201];
        // Count only trailing days firstly
        for (int i = 0; i < days; i++) countArr[expenditure[i]]++;
        
        // Keep track of notifications
        int notifications = 0;
        
        // Start by skipping trailing days
        for (int i = days; i < expenditure.Count; i++)
        {
            decimal median;
            int middleIndex = days / 2;
            
            if (days % 2 == 0)
            {
                int m1 = getMedian(expenditure, countArr, middleIndex - 1);
                int m2 = getMedian(expenditure, countArr, middleIndex);
                median = (m1 + m2) / 2m;
            }
            else
            {
                median = getMedian(expenditure, countArr, middleIndex);
            }
            

            if (expenditure[i] >= (median * 2))
            {
                notifications++;
            }
            
            // We now need to move one step forward with trailing days
            // 1. remove one from count in the back
            // 2. add new count from the current index
            countArr[expenditure[i - days]]--;
            countArr[expenditure[i]]++;
        }
        
        return notifications;
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        string[] firstMultipleInput = Console.ReadLine().TrimEnd().Split(' ');

        int n = Convert.ToInt32(firstMultipleInput[0]);

        int d = Convert.ToInt32(firstMultipleInput[1]);

        List<int> expenditure = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(expenditureTemp => Convert.ToInt32(expenditureTemp)).ToList();

        int result = Result.activityNotifications(expenditure, d);

        textWriter.WriteLine(result);

        textWriter.Flush();
        textWriter.Close();
    }
}
