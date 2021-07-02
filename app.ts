//interface
interface HasFormatter{
    format(): string;
}

// classes
class ListTemplate{
    constructor(private container: HTMLUListElement){}

    render(item: HasFormatter, heading:string, pos: 'start' | 'end'){
        const li = document.createElement('li');

        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.format()
        li.append(p)

        if(pos === 'start'){
            this.container.prepend(li)
        } else{
            this.container.append(li)
        }
    }
}


 class Invoice implements HasFormatter{
  
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
){}
  
    format() {
      return `${this.client} owes $${this.amount} for ${this.details}`;
    }
  }

  class Payment implements HasFormatter{
  
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number,
){}
  
    format() {
      return `${this.recipient} is owed R${this.amount} for ${this.details}`;
    }
  }
  

  
  const form = document.querySelector('.new-item-form') as HTMLFormElement;
  console.log(form.children);
  
  // inputs
  const type = document.querySelector('#type') as HTMLInputElement;
  const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
  const details = document.querySelector('#details') as HTMLInputElement;
  const amount = document.querySelector('#amount') as HTMLInputElement;
  
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

let doc:HasFormatter;

    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')
  
  });