public class Poli {
    public static String polim = null;
    public static char[] reverse = null;     
    public static void main(String[] arg) {
        polim = "abba";  // Stringa di test
        int len = polim.length();  
        reverse = new char[len];  // Crea un array di caratteri per l'inverso

        // Creazione dell'array di caratteri invertiti
        for (int i = 0; i < len; i++) {
            reverse[i] = polim.charAt(len - i - 1);  // Assegna il carattere invertito
        }

        // Confronto con la stringa originale
        if (polim.equals(new String(reverse))) {  // Converte l'array in String per il confronto
            System.out.println("Palindromo vero");
        } else {
            System.out.println("Falso");
        }
    }
}
