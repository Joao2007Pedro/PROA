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
            if (this.carga >= 0 && this.tampa == false) {
                System.out.println("Escrevendo...");
            } else {
                System.out.println("Sem tinta!");
            }
        }

        void rabiscar() {
            if (this.carga >= 0 && this.tampa == false) {
                System.out.println("Rabiscar...");
            } else {
                System.out.println("Sem tinta!");
            }
        }

        void pintar() {
            if (this.carga >= 0 && this.tampa == false) {
                System.out.println("Pintando...");
            } else {
                System.out.println("Sem tinta!");
            }
        }

        void estado() {
            System.out.println("Está caneta é do marca: " + this.marca);
            System.out.println("Está caneta é da cor: " + this.cor);
            System.out.println("Está caneta é do tipo: " + this.tipo);
            System.out.println("Está caneta é do material: " + this.material);
            System.out.println("Está caneta esta com " + this.carga + "% de carga");
            System.out.println("Está caneta tem a ponta: " + this.ponta);
            System.out.println("Está caneta tem a tampa: " + this.tampa);

        }

}
