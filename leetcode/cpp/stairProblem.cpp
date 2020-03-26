#include <iostream>
#include <vector>

class Solution {
public:
    int climbStairs(int n) {
        std::vector<int> storeArr;
        storeArr.resize(n + 1);
        
        return recursiveFunc(storeArr, n);
    }
    
    int recursiveFunc(std::vector<int>& storeArr, int n) {
        int numSteps;
        
        if (storeArr[n]) {
            return storeArr[n];
        } else {
            std::cout << storeArr[n] << '\n';
        }
        
        if (n == 1) return 1;
        if (n == 2) return 2;
        
        numSteps = recursiveFunc(storeArr, n - 1) + recursiveFunc(storeArr, n - 2);
        storeArr[n] = numSteps;
        return numSteps;
    }
};

int main() {
  std::cout << "Whatup\n";
  
}