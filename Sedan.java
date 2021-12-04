package com.sonata2;

public class Sedan extends Car {
	int length;
	Sedan(int speed,double regularPrice,String color,int length)
	{
		super(speed,regularPrice,color);
		this.length=length;
	}
	public double getSalePrice2()
	{
		return regularPrice;
	}
	public double getSalePrice()
	{
		if(length>20)
		{
			return super.getSalePrice()-(super.getSalePrice()*0.5)	;
		}
		else
		{
			return super.getSalePrice()-(super.getSalePrice()*0.1);
		}
	}
}

