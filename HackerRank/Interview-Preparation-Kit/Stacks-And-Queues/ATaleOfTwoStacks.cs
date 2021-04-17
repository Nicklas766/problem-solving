using System;
using System.Collections.Generic;
using System.IO;

// NOTE that the problem explicitly asks for a two stack solution
class Solution {
    
    class TwoStackQueue<T>
    {
        Stack<T> inStack = new Stack<T>();
        Stack<T> outStack = new Stack<T>();
        
        public void Enqueue(T value)
        {
            inStack.Push(value);
        }
        
        public T Dequeue()
        {
            if (outStack.Count == 0)
            {
               while (inStack.Count != 0)
               {
                   outStack.Push(inStack.Pop());
               }
            }
            return outStack.Pop();
        }
        
        public T Peek()
        {
            if (outStack.Count == 0)
            {
               while (inStack.Count != 0)
               {
                   outStack.Push(inStack.Pop());
               }
            }
            return outStack.Peek();
        }
    }
    
    static void Main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution */
        int n = Int32.Parse(Console.ReadLine());

        TwoStackQueue<string> q = new TwoStackQueue<string>();
        for (int i = 0; i < n; i++) 
        {
            string[] line = Console.ReadLine().Split(' ');
            string query = line[0];
            
            if (query == "1")
            {
                string value = line[1];
                q.Enqueue(value);
            }
            
            if (query == "2")
            {
                q.Dequeue();
            }
            
            if (query == "3")
            {
                Console.WriteLine(q.Peek());
            }
            
        }
        
    }
}
