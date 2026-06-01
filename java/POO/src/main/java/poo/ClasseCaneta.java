package poo;

public class ClasseCaneta {

        String marca;
        String cor;
        String tipo;
        String material;
        float ponta;
        int carga;
        boolean tampa;

        void escrever() {
            if (carga >= 0 && tampa == false) {
                System.out.println("Escrevendo...");
            } else {
                System.out.println("Sem tinta!");
            }
        }

        void rabiscar() {
            if (carga >= 0 && tampa == false) {
                System.out.println("Rabiscar...");
            } else {
                System.out.println("Sem tinta!");
            }
        }

        void pintar() {
            if (carga >= 0 && tampa == false) {
                System.out.println("Pintando...");
            } else {
                System.out.println("Sem tinta!");
            }
        }

        void estado() {
            System.out.println("Está caneta é do marca: " + marca);
            System.out.println("Está caneta é da cor: " + cor);
            System.out.println("Está caneta é do tipo: " + tipo);
            System.out.println("Está caneta é do material: " + material);
            System.out.println("Está caneta esta com " + carga + "% de carga");
            System.out.println("Está caneta tem a ponta: " + ponta);
            System.out.println("Está caneta tem a tampa: " + tampa);

        }

}
