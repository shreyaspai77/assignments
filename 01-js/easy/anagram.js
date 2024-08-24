function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let freqArray = new Array(256).fill(0);
  for (let i = 0; i < str1.length; i++) {
    freqArray[str1.charCodeAt(i)]++;
  }
  for (let i = 0; i < str2.length; i++) {
    freqArray[str2.charCodeAt(i)]--;
  }
  for (let i = 0; i < freqArray.length; i++) {
    if (freqArray[i] != 0) {
      return false;
    }
  }
  return true;
}
module.exports = isAnagram;
