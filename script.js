const byteSize = (str) => {
  const arr = str.split('')
	 return new Blob([str]).size;
};  

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
