package principale;

public class Th extends Thread {
	static public int contatore ;

	@Override
	public void run() {
		// TODO Auto-generated method stub
		
		try {
			for (int i =0; i < 10; i++) {
				System.out.println("" + i);
				Thread.sleep(1000);
			}
		} catch (InterruptedException e) {
			System.out.println("Thread  interrotto");
		}
	}

	synchronized int Avvia() {
		contatore = 10;
		try {
			for (int i = 0; i < contatore; i++) {
				System.out.println("" + i);
				Thread.sleep(1000);
			}
		} catch (InterruptedException e) {
			System.out.println("Thread  interrotto");
		}
		return contatore;

	}
}
