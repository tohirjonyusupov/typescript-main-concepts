interface Coffee {
  cost(): number
  desc(): string
}

function CoffeeWithMilk<T extends {new (...args: any[]): {}}>(constructor: T){
  return class extends constructor {
    name: string = 'Coffe with milk'
}
}

@CoffeeWithMilk
class SimpleCoffe implements Coffee {
  name: string = 'Coffe'
  constructor(){
    console.log('Simple coffe');
  }


  cost(): number {
    return 10
  }

  desc(): string {
    return this.name
  }
}

const coffee = new SimpleCoffe()