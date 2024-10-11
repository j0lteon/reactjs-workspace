import { ChangeEvent } from "react";

// Isso está criando valores que são pegos do banco para serem expostos na tela. Te contar que nem entendi direito mas ok '-'
// Basicamente a tipagem

export default function useForm<Valor extends object>(valor: Valor): { valor: Valor, mudar: (campo: keyof Valor) => (e: ChangeEvent) => void, mudarDireto: <Campo extends keyof Valor>(campo: Campo, valor: Valor[Campo]) => void }