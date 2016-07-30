export class Category {
    public Id: number;
    public CategoryName: string;
    public Description: string;
    public IsActive: boolean;
    public UserId: number;

    constructor() {
        this.Id = 0;
        this.CategoryName = "";
        this.Description = "";
        this.IsActive = true;
        this.UserId = 0;
    }
}