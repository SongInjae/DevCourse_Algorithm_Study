function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const m = nums1.length;
  const n = nums2.length;
  const isOdd = (m + n) % 2 === 0 ? false: true;
  let result: number = -1;
  let count: number = Math.floor((m + n) / 2);
  let index1 = 0;
  let index2 = 0;

  if (m === 0) {
    if (isOdd) {
      result = nums2[count];
    } else {
      result = (nums2[count] + nums2[count - 1]) / 2;
    }

    return result;
  }
  if (n === 0) {
    if (isOdd) {
      result = nums1[count];
    } else {
      result = (nums1[count] + nums1[count - 1]) / 2;
    }

    return result;
  }

  while (count > 0) {
    if (index2 >= n || nums1[index1] < nums2[index2]) {
      index1 += 1;
    } else {
      index2 += 1;
    }
    count -= 1;
  }

  if (isOdd) {
    if (index1 >= m) {
      result = nums2[index2];
    } else if (index2 >= n) {
      result = nums1[index1];
    } else {
      result = Math.min(nums1[index1], nums2[index2]);
    }
  } else {
    if (index1 >= m) {
      const firstNumber = nums2[index2];
      const prevIndex = index2 - 1;

      if (prevIndex === -1) {
        result = (firstNumber + nums1[index1 - 1]) / 2;
      } else {
        const secondNumber = 
          Math.abs(firstNumber - nums2[prevIndex]) < Math.abs(firstNumber - nums1[index1 - 1])
          ? nums2[prevIndex]
          : nums1[index1 - 1]

        result = (firstNumber + secondNumber) / 2;
      }
      
    } else if (index2 >= n) {
      const firstNumber = nums1[index1];
      const prevIndex = index1 - 1;

      if (prevIndex === -1) {
        result = (firstNumber + nums2[index2 - 1]) / 2;
      } else {
        const secondNumber = 
          Math.abs(firstNumber - nums1[prevIndex]) < Math.abs(firstNumber - nums2[index2 - 1])
          ? nums1[prevIndex]
          : nums2[index2 - 1]

        result = (firstNumber + secondNumber) / 2;
      }
    } else {
      const firstNumber = Math.min(nums1[index1], nums2[index2]);
      const prevIndex1 = index1 - 1;
      const preveIndex2 = index2 - 1;

      if (prevIndex1 === -1) {
        result = (firstNumber + nums2[preveIndex2]) / 2;
      } else if (preveIndex2 === -1) {
        result = (firstNumber + nums1[prevIndex1]) / 2;
      } else {
        const secondNumber = 
        Math.abs(firstNumber - nums1[prevIndex1]) < Math.abs(firstNumber - nums2[preveIndex2])
        ? nums1[prevIndex1]
        : nums2[preveIndex2]

        result = (firstNumber + secondNumber) / 2;
      }
    }
  }

  return result;
};

// ! 분석할 코드

function findMedianSortedArrays2(nums1: number[], nums2: number[]): number {
  let A = nums1;
  let B = nums2;
  const total = nums1.length + nums2.length;
  let half = Math.floor(total/2);
  if(nums2.length < nums1.length) {
      [A,B] = [B,A]
  }

  let left = 0;
  let right = A.length - 1;

  while(true) {
      let i = Math.floor((left + right)/2);
      let j = half - i - 2;

      let Aleft = i >= 0 ? A[i] : -Infinity;
      let Aright = i + 1 < A.length  ? A[i+1] : Infinity;
      let Bleft = j >= 0 ? B[j] : -Infinity;
      let Bright = j + 1 < B.length ? B[j+1] : Infinity;

      // if partition is correct
      if(Aleft <= Bright && Bleft <= Aright) {
          // odd
          if(total % 2) {
              return Math.min(Aright, Bright);
          } else {
              return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright))/2
          }
      }
      if(Aleft > Bright) {
          right = i - 1;
      } else {
          left = i + 1;
      }

  }
};
