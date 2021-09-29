let habilidades = ['Bash', 'Counter', 'Skills'];
interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}
const personaje: Personaje = {
    nombre: 'Artemisa',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Sliklls']
}
personaje.puebloNatal = 'Grecia';
console.table(personaje);