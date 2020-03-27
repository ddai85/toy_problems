#include <iostream>
#include <vector>
#include <map>
#include <string>
#include <iterator>

int main () {
  std::map<std::string, std::vector<int> > hashTable;

  std::vector<int> testArr;
  hashTable["HI"] = testArr;
  hashTable["HI"].push_back(24);
  //hashTable["123abc"] = {1000, 1001, 1002, 1003};
  //hashTable.insert(std::make_pair("Gotcha", {123, 1234, 1235 }));

  for (std::map<std::string, std::vector<int> >::iterator itr = hashTable.begin(); itr != hashTable.end(); ++itr) {
    std::vector<int> ele = itr->second;
    ele[0] = 12;
    std::cout << itr->first << "::" << itr->second[0] << std::endl;
  }

}