package com.bd.factory.simplefactory;

public class Client01 {
	public static void main(String[] args){
		Car c1 = new Carfactory().createCar("audi");
		Car c2 = new Carfactory().createCar("byd");
		
		c1.run();
		c2.run();
	}
}
