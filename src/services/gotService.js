export default class GotService {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`);
    }
    return res.json();
  };

  getAllBooks() {
    return this.getResource(`/books/`);
  }

  getBook(id) {
    return this.getResource(`/books/${id}/`);
  }

  async getAllCharacters() {
    const res = await this.getResource(`/characters?page=5&pageSize=10`);
    return res.map(this.transformCharacters);
  }

  async getCharacter(id) {
    const character = await this.getResource(`/characters/${id}`);
    return this.transformCharacters(character);
  }

  getAllHouses() {
    return this.getResource(`/houses/`);
  }

  getHouse(id) {
    return this.getResource(`/houses/${id}/`);
  }

  isSet(data) {
    if (data) {
      return data;
    } else {
      return "no data :(";
    }
  }

  transformCharacters = (char) => {
    return {
      name: this.isSet(char.name),
      gender: this.isSet(char.gender),
      culture: this.isSet(char.culture),
      born: this.isSet(char.born),
      died: this.isSet(char.died)
    };
  };

  transformHouses = (house) => {
    return {
      name: this.isSet(house.name),
      region: this.isSet(house.region),
      words: this.isSet(house.words),
      titles: this.isSet(house.titles),
      overlord: this.isSet(house.overlord),
      ancestralWeapons: this.isSet(house.ancestralWeapons)
    };
  };

  transformBook = (book) => {
    return {
      name: this.isSet(book.name),
      numberOfPages: this.isSet(book.numberOfPages),
      publiser: this.isSet(book.publiser),
      released: this.isSet(book.released)
    };
  };
}
