package com.sonata;

public class TraingleArea {
	public double Triangle(double base , double height)
	{
		return (base * height)/2;
	}
	public static void main(String[] args) 
	{
		
		TraingleArea ar = new TraingleArea();
		System.out.println("Area of Triangle : "+ar.Triangle(3, 2));
		
	}

}

