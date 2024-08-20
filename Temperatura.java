import java.util.Scanner;
public class Test {
	static Scanner s;
	static int sensore=0;
	static final int COST = 21;
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// 3) se la temperatura ( che deve essere compresa tra 18 C° e 25 C° ) e
		// uguale ad multiplo di
		// 5 C° stapare un report sulla attuale temperatura.
		// Nel caso in cui essa multiplo di 4 , indca lo scossamento in °C dal
		// riscaldamento ad on = 21

		System.out.println(" inserire temperatura");
		String inputTeperatura = getSensoreGetTemperarura();

		sensore = Integer.parseInt(inputTeperatura);

		switch (sensore) {

		case 18:
			Test.getVerificaTemperatura(sensore);
			break;
		case 19:
			Test.getVerificaTemperatura(sensore);
			break;
		case 20:
			Test.getVerificaTemperatura(sensore);
			break;
		case 21:
			Test.getVerificaTemperatura(sensore);
			break;
		case 22:
			Test.getVerificaTemperatura(sensore);
			break;
		case 23:
			Test.getVerificaTemperatura(sensore);
			break;
		case 24:
			Test.getVerificaTemperatura(sensore);
			break;
		case 25:
			Test.getVerificaTemperatura(sensore);
			break;
		default:
			System.out.println("nessuno valore di temperatura corisponde");
			break;
		}

	}
	public static int getVerificaTemperatura(int sens)
	{
		int risultatoModuloCinque = 0;
		int risultatoModuloQuattro = 0;
		int dif = 0;
		risultatoModuloCinque = sens % 5;
		risultatoModuloQuattro = sens % 4;
		if (risultatoModuloCinque == 0) {
			System.out.println("Multiplo di 5 = " +sens + " °C" );
		} else {
			System.out.println("No multiplo di 5");
		}
		if (risultatoModuloQuattro == 0) {
			dif = COST - sens;
			if (sens >= 21) {
				dif = dif * (-1);
			}
			System.out.println("Multiplo di 4 e discosta = " + dif + "°C"
					+ " da " + COST + " ON");
		} else {
			System.out.println("Multiplo di 4");
		}
		
		
		
		
		return sens;
	}
	public static String getSensoreGetTemperarura() {
		// TODO Auto-generated method stub
		s = new Scanner(System.in);
		return s.nextLine();
	}
}
