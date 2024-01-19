class Currency{
  consturctor(code, name){
    this._code = code;
    this._name = name;
  }
  // getter for code attribute
  get code(){
    return this._code;
  }// end getter for code attribute

  // setter for code attribute
  set code(newCode){
    if (typeof newCode !== 'string') throw TypeError('Code must be a string');
    this._code = newCode;
  }// end setter for code attribute

  // getter for name attribute
  get name(){
    return this._name;
  }// end getter for name attribute

  // setter for name attribute
  set name(newName){
    if (typeof newName !== 'string') throw TypeError('Name must be a string');
    this._name = newName;
  }// end setter for name attribute

  // method to print the object
  displayFullCurrency(){
    return `${this.name} (${this.code})`;
  }// end method to print the object
}

