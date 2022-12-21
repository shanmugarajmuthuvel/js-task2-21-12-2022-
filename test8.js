var a=[1,2,3,4,5,6,70,8,9,10,1,100,15,16]
var b=a[0]
  for(i=0;i<a.length;i++){
	  if(a[i]>b){
		  b=a[i]
	  }
  }
  document.write(b)