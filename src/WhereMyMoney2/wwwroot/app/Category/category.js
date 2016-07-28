System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Category;
    return {
        setters:[],
        execute: function() {
            Category = (function () {
                function Category() {
                    this.id = 0;
                    this.categoryName = "";
                    this.description = "";
                    this.isActive = true;
                    this.userId = 0;
                }
                return Category;
            }());
            exports_1("Category", Category);
        }
    }
});
//# sourceMappingURL=category.js.map