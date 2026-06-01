package poo;

import java.util.Scanner;

public class Caneta {
    static void main(String[] args) {

        // Criando a primeira caneta
        ClasseCaneta caneta1 = new ClasseCaneta();

        caneta1.marca = "Bic";
        caneta1.cor = "Preto";
        caneta1.tipo = "Esferográfica";
        caneta1.material = "Acrílico";
        caneta1.carga = 100;
        caneta1.ponta = 0.5f;
        caneta1.tampa = false;

        caneta1.estado();
        caneta1.escrever();

        // Criando a segunda caneta
        ClasseCaneta caneta2 = new ClasseCaneta();

        caneta2.marca = "Faber-Castell";
        caneta2.cor = "Azul";
        caneta2.tipo = "Esferográfica";
        caneta2.material = "Plástico";
        caneta2.carga = 50;
        caneta2.ponta = 0.7f;
        caneta2.tampa = true;

        caneta2.estado();
        caneta2.rabiscar();


    }
}
