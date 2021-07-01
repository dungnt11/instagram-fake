class Store {
  user = {
    username: '',
    displayName: '',
    avatar: ''
  }

  setUser(user) {
    this.user = user;
  }

  get userInfo() {
    return this.user;
  }
}

const store = new Store();

export { store };



