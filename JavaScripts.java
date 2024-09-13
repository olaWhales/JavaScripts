import java.util.Arrays;
import java.util.Scanner;
public class JavaScripts{
	public static void main(String...args){
	
	Scanner sc = new Scanner(System.in);

	String[] questions ={"love","click","press","go","push"};

	String totalSelection[] = new String[questions.length];	
	System.out.print("click A to continue..");
	String user = sc.nextLine();

	for(int index = 0 ; index < questions.length ; index++){
		System.out.print("click A to continue..");
		user = sc.next();
		if(user != "A" && user != "a"){	
			totalSelection[index] = user;
		}else{
			System.out.print("Enter valid input");
		}
		System.out.println(Arrays.toString(totalSelection));

	}

	

	}
}