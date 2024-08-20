package principale;

import java.io.BufferedReader;

import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

public class ScriviFile {
	static Scanner input;
    static String file;
    static fileTesto f;
    static BufferedWriter b;
    static String leggi,scrivi;
	public String getSciviFile() {

		input = new Scanner(System.in);
		return input.nextLine();

	}
	
	
	public void getfile() throws IOException {

		String file = "C:/Users/salvo/Desktop/test.txt";
		f = new fileTesto();
		String txt = f.FileDiTest(file);
		b = new BufferedWriter(new FileWriter(txt));
		System.out.println("Quante riche vuoi inserire");
		leggi = getSciviFile();
		for (int i = 0; i < Integer.parseInt(leggi); i++) {
			System.out.println("Scrivi la lista");
			scrivi = getSciviFile();
			String outText = scrivi.toString();
			b.write(outText);
		}
		
		b.close();
	}
}
