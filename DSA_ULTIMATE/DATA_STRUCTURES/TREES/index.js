/**
 * Trees Data Structure:
 * A Tree is a non-linear data structure that organizes 
 * data hierarchically — like a family tree or file system.
 * Each element in a tree is called a node, and the topmost node is called the root.
 * 
 *         Root
            │
      ┌─────┴─────┐
     Left         Right
    Subtree      Subtree

          1          ← Root
        /   \
       2     3       ← Level 1
      / \   / \
     4  5  6   7     ← Level 2

Explanation: 

Root: 1

Parent of 2, 3: 1

Children of 2: 4, 5

Children of 3: 6, 7

Leaves: 4, 5, 6, 7


 */

// Structure of Tress: A Tree is construction of nodes

// A node which not having parent is a Rooted Tree
// A node which not having any child is a Leaf nodes/ Terminal Nodes

// Two nodes or more than two nodes that have similar or common parents are called siblings

// Ancestors:    Grad Parents 
// Descendents : Grand children 


/*
 Types of Trees
 1. A Tree in which every node can get max two children are called binary Tree
 2. If a Node has at max 3 children are called Ternary Tree
 3. If every node can get max n children => Anary Tree / Generic Tree

| Type                          | Description                                                               |
| ----------------------------- | ------------------------------------------------------------------------- |
| **General Tree**              | A tree where nodes can have any number of children.                       |
| **Binary Tree**               | Each node has **at most 2 children** (left and right).                    |
| **Full Binary Tree**          | Every node has **0 or 2 children**.                                       |
| **Complete Binary Tree**      | All levels filled except possibly the last.                               |
| **Perfect Binary Tree**       | All internal nodes have 2 children, and all leaves are at the same level. |
| **Skewed Binary Tree**        | All nodes have only one child (left or right).                            |
| **Binary Search Tree (BST)**  | Left child < Parent < Right child.                                        |
| **AVL Tree / Red-Black Tree** | Balanced binary trees (used for performance).                             |

** A Ternary Tree 🌳 is a special type of tree data structure where each node can have at most three children — usually referred to as:
👉 Left child, Middle child, and Right child.
             A
         /   |   \
        B    C    D
       /|\        |
      E F G       H    
      
Explanation:

Root = A

Children of A = B, C, D

Children of B = E, F, G

Child of D = H


1. Skewed Binary Tree:
A skewed binary tree is a special type of binary tree where all the nodes have only one child — 
meaning the tree grows entirely in one direction (either left or right).
Think of it like a linked list, but represented as a binary tree.
eg:   10 
     /
    8
   /
  6
 /
4

10
  \
   12
     \
      15
        \
         20

NOTE: A skewed tree represents the worst-case scenario for operations on binary trees or BSTs.
Ideally, we want the tree balanced, so operations are O(log n) instead of O(n).


2. Degenerate Tree:
A Degenerate Tree is a type of binary tree in which
👉 every parent node has only one child — either left or right.
That means the tree behaves like a linked list rather than a branching tree.

    10
      \
       20
         \
          30
            \
             40

       10
       /
      8
     /
    6
   /
  4
   \
    10
     \
      20
     /
    15
     \
      17


| Property                    | Description                                          |
| --------------------------- | ---------------------------------------------------- |
| **Shape**                   | Linear (like a linked list)                          |
| **Children per node**       | Only one                                             |
| **Height (h)**              | Equal to number of nodes - 1                         |
| **Balance Factor**          | Maximally unbalanced                                 |
| **Operations**              | Searching, insertion, deletion → `O(n)` (worst case) |
| **Best Case (balanced)**    | `O(log n)`                                           |
| **Worst Case (degenerate)** | `O(n)`                                               |

💡 Intuition
A degenerate tree is what happens when:
You insert sorted data (ascending or descending) into a binary search tree (BST) without balancing.

| Feature        | Degenerate Tree                        | Skewed Tree                                            |
| -------------- | -------------------------------------- | ------------------------------------------------------ |
| **Definition** | Every node has exactly one child       | A type of degenerate tree leaning either left or right |
| **Type**       | General case                           | Special case (Left or Right skewed)                    |
| **Example**    | Can mix left and right single children | Only left or only right                                |

NOTE: A Degenerate Tree is a binary tree that acts like a linked list,
because every node has only one child.


📉 Example:
If you insert [10, 20, 30, 40, 50] into a normal BST —
you’ll get a right-degenerate tree like:



3. Full Binary Tree:
A Full Binary Tree (also called a Proper Binary Tree or Strict Binary Tree) is a type of binary tree in which:
🔸 Every node has either 0 or 2 children — never exactly one child.
          1
        /   \
       2     3
      / \   / \
     4  5  6   7

✅ Every internal node (1, 2, 3) has two children.
✅ Leaf nodes (4, 5, 6, 7) have zero children.
❌ No node has only one child.

| Property                      | Formula / Description                                 |
| ----------------------------- | ----------------------------------------------------- |
| **Every node**                | Has 0 or 2 children                                   |
| **If there are N leaf nodes** | There are `N - 1` internal nodes                      |
| **Total nodes (n)**           | Always odd (since each internal node adds 2 children) |
| **Height (h)**                | `log₂(n + 1) - 1` (for a perfect full binary tree)    |
| **Max nodes at level i**      | `2^i`                                                 |
| **Total nodes (h height)**    | `2^(h+1) - 1` (if it’s also perfect)                  |

🧠 Intuition

Think of it like a complete family — each parent either has both kids or none.
It’s not necessary for all levels to be completely filled — but whenever a node exists, it must have two children.


4. Balanced Binary Tree:
A Balanced Binary Tree is a binary tree in which
✅ the height difference between the left and right subtrees of every node is at most 1.

In simpler words:
No side of the tree grows much taller than the other — it stays well-balanced for efficient operations.

        10
       /  \
      5    15
     / \     \
    2   7     20

    Here, the left and right subtrees of every node differ in height by no more than 1 → ✅ Balanced





*/

