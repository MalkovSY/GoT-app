
export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json();
    }

    getAllCharacter = async () => {
        const chars = await this.getResource(`/characters?page=8&pageSize=7/`);
        return chars.map(this._transformCharacter);
    }

    getCharacterById = async (id) => {
        const char = await this.getResource(`/characters/${id}/`);
        return this._transformCharacter(char);
    }

    getAllHouse = async () => {
        const houses = await this.getResource('/houses/');
        return houses.map(this._transformHouse);
    }

    getHouseById = async (id) => {
        const house = await this.getResource(`/houses/${id}/`);
        return this._transformHouse(house);
    }

    getAllBook = async () => {
        const books = await this.getResource('/books/');
        return books.map(this._transformBook);
    }

    getBookById = async (id) => {
        const book = await this.getResource(`/books/${id}/`);
        return this._transformBook(book);
    }

    isSet(data) {
        if(data) {
            return data
        } else {
            return "No data"
        }
    }

    _extractId = (item) => {
        const itemRegExp = /\/([0-9]*)$/;
        return item.url.match(itemRegExp)[1];
    }

    _transformCharacter = (char) => {
        return {
            id: this._extractId(char),
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died),
            culture: this.isSet(char.culture)
        }
    }

    _transformHouse = (house) => {
        return {
            id: this._extractId(house),
            name: this.isSet(house.name),
            region: this.isSet(house.region),
            words: this.isSet(house.words),
            titles: this.isSet(house.titles),
            overlord: this.isSet(house.overlord),
            ancestralWeapon: this.isSet(house.ancestralWeapon)
        }
    }

    _transformBook = (book) => {
        return {
            id: this._extractId(book),
            name: this.isSet(book.name),
            numberOfPages: this.isSet(book.numberOfPages),
            publisher: this.isSet(book.publisher),
            released: this.isSet(book.released)
        }
    }
}