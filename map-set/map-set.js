new Set([1,1,2,2,3,4]); 
// {1, 2, 3, 4}

[...new Set("referee")].join("") 
// 'ref'

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); 
// {[1,2,3] => true, [1,2,3] => false}

const hasDuplicate = (arr) => {
    let set = [...new Set(arr)]
    if (arr.length === set.length) {
        return false;
    } else {
        return true;
    }
}

const vowel = (letter) => {
    return 'aeiou'.includes(letter);
}

const vowelCount = (str) => {
    const vowelMap = new Map();
    for(let char of str) {
      let lowerChar = char.toLowerCase()
      if(vowel(lowerChar)){
        if(vowelMap.has(lowerChar)) {
          vowelMap.set(lowerChar, vowelMap.get(lowerChar) + 1);
        } else {
          vowelMap.set(lowerChar, 1);
        }
      }
    }
    return vowelMap;
  }