export default class Movie {
    id: number | null;
    nome: string;
    data: string;
    dataInicioInsc: string;
    dataFimInsc: string;
    descricao: string;
    status: string;
    constructor(
        id: number | null,
        nome: string,
        data: string,
        dataInicioInsc: string,
        dataFimInsc: string,
        descricao: string,
        status: string) {
        this.id = id;
        this.nome = nome;
        this.data = data;
        this.dataInicioInsc = dataInicioInsc;
        this.dataFimInsc = dataFimInsc;
        this.descricao = descricao;
        this.status = status;
    }
}