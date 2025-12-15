// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.Scanner;
class p1 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int num;
        int sum=0;
        int fac=1;
        int temp;
        int F;
        System.out.println("enter a number");
        num=sc.nextInt();
        temp=num;
        while(temp>0){
            int last=temp%10;
        for(int i=1;i<=last;i++){
          =fac*=i;
               
        }
        temp/=10;
        System.out.println(F);
        
    }
       

    }
   
}