class Calculator {
    constructor(tepaQiymatTextElement, pastQiymatTextElement) {
        this.tepaQiymatTextElement = tepaQiymatTextElement;
        this.pastQiymatTextElement = pastQiymatTextElement;
        this.clear();
    }

    clear() {
        this.pastQiymat = ''
        this.tepaQiymat = ''
        this.oper = undefined
    }


    delete() {
        this.pastQiymat = this.pastQiymat.toString().slice(0, -1)
    }

    appendNumber(son) {
        if (son === '.' && this.pastQiymat.includes('.')) return
        this.pastQiymat = this.pastQiymat.toString() + son.toString()
    }

    chooseOperation(oper) {
        if (this.pastQiymat === '') return
        if (this.tepaQiymat !== '') {
            this.compute()
        }
        this.oper = oper
        this.tepaQiymat = this.pastQiymat
        this.pastQiymat = ''
    }

    compute() {
        let xisoblash
        const a = parseFloat(this.tepaQiymat)
        const b = parseFloat(this.pastQiymat)
        if (isNaN(a) || isNaN(b)) return
        switch (this.oper) {
            case '+':
                xisoblash = a + b
                break
            case '-':
                xisoblash = a - b
                break
            case '*':
                xisoblash = a * b
                break
            case '/':
                xisoblash = a / b
                break
            default:
                return
        }
        this.pastQiymat = xisoblash
        this.oper = undefined
        this.tepaQiymat = ''
    }

    getDisplayNumber(son) {
        const stringSon = son.toString()
        const butunQismi = parseFloat(stringSon.split('.')[0])
        const kasrQismi = stringSon.split('.')[1]
        let sonniKursatish
        if (isNaN(butunQismi)) {
            sonniKursatish = ''
        } else {
            sonniKursatish = butunQismi.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (kasrQismi != null) {
            return `${sonniKursatish}.${kasrQismi}`
        } else {
            return sonniKursatish
        }
    }

    updateDisplay() {
        this.pastQiymatTextElement.innerText =
            this.getDisplayNumber(this.pastQiymat)
        if (this.oper != null) {
            this.tepaQiymatTextElement.innerText =
                `${this.getDisplayNumber(this.tepaQiymat)} ${this.oper}`
        } else {
            this.tepaQiymatTextElement.innerText = ''
        }
    }
}


const sonButtons = document.querySelectorAll('[data-son]')
const operButtons = document.querySelectorAll('[data-oper]')
const tengButton = document.querySelector('[data-teng]')
const uchirishButton = document.querySelector('[data-uchirish]')
const udalitButton = document.querySelector('[data-udalit]')
const tepaQiymatTextElement = document.querySelector('[data-tepa-qiymat]')
const pastQiymatTextElement = document.querySelector('[data-past-qiymat]')

const calculator = new Calculator(tepaQiymatTextElement, pastQiymatTextElement)

sonButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

tengButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

udalitButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

uchirishButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})
