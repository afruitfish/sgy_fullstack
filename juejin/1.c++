class Solution {
    public:
        int trap(int[] height) {
            int n = height.length;
            if (n < 3) return 0;

            int sum = 0;
            for (int i = 1; i < n - 1; i++) {
                int num = height[i];

                int left = 0;
                for (int j = i - 1; j >= 0; j--) 
                    left = Math.max(left, height[j]);
                if (left <= num) continue;

                int right = 0;
                for (int j = i + 1; j < n; j++) 
                    right = Math.max(right, height[j]);
                if (right <= num) continue;

                sum += Math.min(left, right) - num;
            }
            return sum;
        }
}