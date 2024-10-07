export class PageResponse<T>{
    public size:number;
    public index:number;
    public total:number;
    public hasNext:boolean;
    public hasPrev:boolean;
    public datas:T[];
    public min:number;
    public max:number;
}