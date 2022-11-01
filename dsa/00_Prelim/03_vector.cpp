#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> container;
    for (size_t i = 0; i < 10; i++)
    {
        container.push_back(i);
    }
    for (size_t i = 0; i < container.size(); i++)
    {
        cout << container.at(i) << endl;
    }
}