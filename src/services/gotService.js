
export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json();
    }

    async getAllCharacter() {
        const chars = await this.getResource(`/characters?page=5&pageSize=7`);
        return chars.map(this._transformCharacter);
    }

    async getCharacterById(id) {
        const char = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(char);
    }

    async getAllHouse() {
        const houses = await this.getResource('/houses/');
        return houses.map(this._transformHouse);
    }

    async getHouseById(id) {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house);
    }

    async getAllBook() {
        const books = await this.getResource('/books/');
        return books.map(this._transformBook);
    }

    async getBookById(id) {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book);
    }

    isSet(data) {
        if(data) {
            return data
        } else {
            return "No data"
        }
    }

    _extractCharId = (item) => {
        const regExp = /\/([0-9]*)$/;
        return item.url.match(regExp)[1];
    }

    _transformCharacter = (char) => {
        return {
            id: this._extractCharId(char),
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died),
            culture: this.isSet(char.culture)
        }
    }

    _transformHouse = (house) => {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapon: house.ancestralWeapon
        }
    }

    _transformBook = (book) => {
        return {
            name: book.name,
            numberOfPage: book.numberOfPage,
            publiser: book.publiser,
            released: book.released
        }
    }
}