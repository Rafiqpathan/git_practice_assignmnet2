let str="naman"
let new_s="";
for(let i=str.length-1;i>=0;i--){
	new_s=new_s+str[i];
}
if(new_s==str){
	console.log("Yes");
}else{
	console.log("No");
}
done