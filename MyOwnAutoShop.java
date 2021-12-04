package com.sonata2;

public class MyOwnAutoShop {
	public static void main(String args[])
	{
		Car c = new Car(550,250000,"White");
		Sedan s = new Sedan(300,49000,"Navy Blue",30);
		Truck t = new Truck(750,88000,"Maroon",2015);
		Ford f = new Ford(809,78000,"Black",2020,3);
		System.out.println("Car");
		c.display();
		System.out.println("Sale Price of Car:"+c.getSalePrice());
		
		System.out.println("Sedan");
		s.display();
		System.out.println("Sale Price of Sedan:"+s.getSalePrice());
		
		System.out.println("Truck");
		t.display();
		System.out.println(s.length);
		System.out.println("Sale Price of Truck:"+s.getSalePrice());
		
		
		System.out.println("Ford ");
		f.display();
		System.out.println(f.year);
		System.out.println(f.manufacturerDiscount);
		System.out.println("Sale Price of ford:"+f.getSalePrice());
	}


}