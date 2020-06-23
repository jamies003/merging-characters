function vowelIsAndConsonants(s) {
  for (var i = 0; i < s.length; i++) {
    let current_char = s[i];
    if ('auiou'.includes(current_char)) {
      console.log(current_char);
    }
  }
  let j = 0;
  while (j < s.length) {
    let current_char = s[j];
    if (!'auiou'.includes(current_char)) {
      console.log(current_char);
    }
    j += 1;
  }
  
}