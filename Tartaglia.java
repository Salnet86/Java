public class TartagliaClassico {
    public static void main(String[] args) {
        int n = 5;
        int[][] triangolo = new int[n][]; // Array di array

        for (int i = 0; i < n; i++) {
            triangolo[i] = new int[i + 1]; // Ogni riga ha i+1 elementi
            triangolo[i][0] = 1;           // Primo elemento sempre 1
            triangolo[i][i] = 1;           // Ultimo elemento sempre 1

            for (int j = 1; j < i; j++) {
                triangolo[i][j] = triangolo[i-1][j-1] + triangolo[i-1][j];
            }
        }

        // Stampa il triangolo
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print(triangolo[i][j] + " ");
            }
            System.out.println();
        }
    }
}
