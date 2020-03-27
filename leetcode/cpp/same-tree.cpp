/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */

#include <deque>
struct TreeNode {
      int val;
      TreeNode *left;
      TreeNode *right;
      TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        // traverse both trees breadth first and compare each node
        // if there is a difference-- return false, else return true


        deque<TreeNode> pQueue;
        deque<TreeNode> qQueue;
        
        int nodesPerLevel;

        while (pQueue.size() > 0 && qQueue.size()) {
          if (pQueue.size() != qQueue.size()) {
            return false;
          }

          for (int i = 0; i < pQueue.size(); i++) {
            TreeNode currentP = pQueue.front();
            pQueue.pop_front();
            TreeNode currentQ = qQueue.front();
            pQueue.pop_front();
            
            if (currentP.val != currentQ.val) {
              return false;
            }

            if (currentP.left) {
              pQueue.push_back(currentP.left);
            }

            if (currentP.right) {
              pQueue.push_back(currentP.right);
            }

            if (currentQ.left) {
              qQueue.push_back(currentQ.left);
            }

            if (currentQ.right) {
              qQueue.push_back(currentQ.right);
            }
          }
        }

        return true;
    }
};