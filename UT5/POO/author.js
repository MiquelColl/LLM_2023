export class Author {

    constructor(id, first_name, last_name1, last_name2, birth){
        this.id=id
        this.first_name=first_name
        this.last_name1=last_name1
        this.last_name2=last_name2
        this.birth=birth
    }
    render(){
        return `<p>${this.first_name} ${this.last_name1} ${this.last_name2} (${this.birth})</p>`
    }
}
