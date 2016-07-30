System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Category;
    return {
        setters:[],
        execute: function() {
            Category = (function () {
                function Category() {
                    this.Id = 0;
                    this.CategoryName = "";
                    this.Description = "";
                    this.IsActive = true;
                    this.UserId = 0;
                }
                return Category;
            }());
            exports_1("Category", Category);
        }
    }
});
