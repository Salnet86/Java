class Binario {
    public static void main(String[] args) {
        
 int d=5;
 int x=0;
 int m=0;
 int s=0;
 String c="";
 while(d>0){
  
   x=d;
   d/=2;  
   m=d*2;
   s=x-m;
   c=s+c;
  // System.out.println(s);
      
 }
 
 System.out.print(c);
        
    }
}
