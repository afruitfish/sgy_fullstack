---
# 主题列表：juejin, github, smartblue, cyanosis, channing-cyan, fancy, hydrogen, condensed-night-purple, greenwillow, v-green, vue-pro, healer-readable, mk-cute, jzman, geek-black, awesome-green, qklhk-chocolate
# 贡献主题：https://github.com/xitu/juejin-markdown-themes
theme: juejin
highlight:
---

# LeetCode 42 | 刷题打卡

## 题目描述

给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e03592205a2a43f6acc6adeb015f2b1e~tplv-k3u1fbpfcp-watermark.image)

题目链接: <a herf="https://leetcode-cn.com/problems/trapping-rain-water/">LeetCode</a>

### 示例1:

```
输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
```
### 示例2:
```
输入：height = [4,2,0,3,2,5]
输出：9
```
- n == height.length
- 0 <= n <= 3 * 10^4
- 0 <= height[i] <= 10^5

## 思路分析
- ### 想法1
接雨水的量取决于每根柱子左右最高的柱子,所以思路很简单就是每根柱子遍历一遍向左右查找然后把水深加起来,但考虑到时间复杂度太高我没有这样写(这道题n取值不会太大暴力方法也可以过)

代码:
```c++
class Solution {
    public:
        int min(int a,int b){
            if(a<b){
                return a;
            }
            else{
                return b;
            }
        };
        int max(int a,int b){
        	if(a<b){
                return b;
            }
            else{
                return a;
            }
        };
        int trap(vector<int>& height) {
            int n = height.size();
            if (n < 3) return 0;//长度小于3不可能装水
            int sum = 0;
            for (int i = 1; i < n - 1; i++) {
                int num = height[i];
                int left = 0;
                for (int j = i - 1; j >= 0; j--) 
                    left = max(left,height[j]);
                if (left <= num) continue;

                int right = 0;
                for (int j = i + 1; j < n; j++) 
                    right = max(right,height[j]);
                if (right <= num) continue;

                sum += min(left, right) - num;
            }
            return sum;
        }
};
```
- ### 想法2
既然上面一个想法也提到了装水需要左右都高于当前的柱子,那设两个节点,从数组两端开始是不是只要便历一遍的同时计算装水的量呢?
- 首先定义两个变量分别为树组的第一位和最后一位,它们分别以不同的方向前进
- 当某一边比另一边高的时候就让另一边先前进
- 前进时遇到比当前矮的柱子就装进雨水填平
