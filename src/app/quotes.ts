export class Quotes {
    showDescription: boolean;
    constructor(public name: string,public quote:string,public author:string, public upvote: number, public downvote: number,public completeDate: Date){
        this.showDescription=false;

}
}