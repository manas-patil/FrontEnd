import java.util.Scanner;

public class k{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int year = sc.nextInt();

        if(year%4!=0){
            System.out.println("Not A Leap Year");
            return;
        }
        else if(year%400==0 && year%100==0){
            System.out.println("Not A Leap Year");
            return;
        }
        else{
            System.out.println("Leap Year");
            return;
        }
        // System.out.println("sdlknfs");
    }
}