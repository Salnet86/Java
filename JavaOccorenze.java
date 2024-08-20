

public class Hello {

	
	public static void main(String[] args) {
		
		String sequenza="matematica";
		char[]c=new char[sequenza.length()];
		int count=0;
		int i=0;
		for(i=0;i<sequenza.length();i++){
			c[i]=sequenza.charAt(i);
			if(c[i]=='a' ){
				count++;
				System.out.println(c[i]+"       "+count);
				
			}else {
				if(c[i]=='m'){
					count++;
					System.out.println(c[i]+"       "+count);
				}
			}
		}
		
	}

}
