export class Category {
    public id: number;
    public categoryName: string;
    public description: string;
    public isActive: boolean;
    public userId: number;

    constructor() {
        this.id = 0;
        this.categoryName = "";
        this.description = "";
        this.isActive = true;
        this.userId = 0;
    }
}