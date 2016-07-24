using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WhereMyMoney2.Models;
using Microsoft.EntityFrameworkCore;

namespace WhereMyMoney2.Controllers
{
    public class CategoryApiController : BaseApiController
    {
        public CategoryApiController(WhereMyMoneyContext context) : base(context)
        {
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Tbl_Category> Get()
        {
            List<Tbl_Category> categoryList = _context.Tbl_Category.Where(c => c.IsActive).OrderBy(c => c.CategoryName).ToList();

            return categoryList;
        }

        //[HttpPost]
        //public IActionResult Create([FromBody] Tbl_Category item)
        //{
        //    _message = "Created new category successfully!";

        //    return CreatedAtRoute("GetMessage", _message);
        //}

        [HttpPost]
        public void Create([FromBody] string item)
        {
        }
    }
}