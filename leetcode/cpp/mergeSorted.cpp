
void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
    // move all the values in M to the back of the array [0,0,0,1,2,3]
    int newIndex;
    for (int i = 0; i < m; i++) {
        newIndex = n + i;
        nums1[newIndex] = nums1[i];
    }
    
    int nIndex = 0;
    int mIndex = n;
    int numsIndex = 0;
    while (nIndex < n) {
        if (mIndex >= m + n || nums2[nIndex] < nums1[mIndex]) {
            nums1[numsIndex] = nums2[nIndex];
            nIndex++;
        } else {
            nums1[numsIndex] = nums1[mIndex];
            mIndex++;
        }
        
        numsIndex++;
    }
};

int main() {
  vector<int>
}