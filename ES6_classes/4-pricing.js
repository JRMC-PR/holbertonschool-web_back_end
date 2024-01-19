import Currency from './3-currency';

class Pricing{
  constructor(amount, currency){
    this._amount = amount;
    this._currency = currency;
  }
  // getter for amount attribute
  get amount(){
    return this._amount;
  }// end getter for amount attribute

  // setter for amount attribute
  set amount(newAmount){
    if (typeof newAmount !== 'number') throw TypeError('Amount must be a number');
    this._amount = newAmount;
  }// end setter for amount attribute

  // getter for currency attribute
  get currency(){
    return this._currency;
  }// end getter for currency attribute

  // setter for currency attribute
  set currency(newCurrency){
    if (!(newCurrency instanceof Currency)) throw TypeError('Currency must be a Currency');
    this._currency = newCurrency;
  }// end setter for currency attribute

  // method to print the object
  displayFullPrice(){
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }// end method to print the object

  // method to convert the object to a string
  static converPrice(amount, conversionRate){
    if (typeof amount !== 'number') throw TypeError('Amount must be a number');
    if (typeof conversionRate !== 'number') throw TypeError('ConversionRate must be a number');
    return amount * conversionRate;
  }// end method to convert the object to a string
}
