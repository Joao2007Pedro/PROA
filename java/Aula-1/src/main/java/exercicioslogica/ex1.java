package exercicioslogica;

import java.util.Scanner;

public class ex1 {
    static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int n1 = in.nextInt();
        int n2 = in.nextInt();

        int soma = n1 + n2;
        int subtracao = n1 - n2;
        int multiplicacao = n1 * n2;
        float divisao = (float) n1 / n2;

        System.out.println("Soma: " + soma);
        System.out.println("Subtração: " + subtracao);
        System.out.println("Multiplicação: " + multiplicacao);
        System.out.println("Divisão: " + divisao);
    }
}
