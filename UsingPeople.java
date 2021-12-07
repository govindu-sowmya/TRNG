package com.sonata;

public class UsingPeople {
	public static void main(String[] args) {
		
		
		TechnicalEmployee T = new TechnicalEmployee(21288, "Sowmya", "Hayathnagar", 30000, 20);
		
		Staff S = new Staff(21288, "Sowmya", "Hyderbad", 40000, 9);
		
		T.display();
		System.out.println("Technical Employee Sal is : "+T.calculateSal());
		
		System.out.println("\n");
		S.display();
		System.out.println("Staff Sal is : "+S.calculateSal());
		
	}


}

