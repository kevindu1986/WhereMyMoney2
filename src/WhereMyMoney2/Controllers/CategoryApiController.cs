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

        // GET api/values/1
        [HttpGet("{id}")]
        public Tbl_Category GetById(int id)
        {
            Tbl_Category category = _context.Tbl_Category.Where(c => c.Id == id).FirstOrDefault();

            return category;
        }

        [HttpPost]
        public IEnumerable<Tbl_Category> Create([FromBody] Tbl_Category item)
        {
            item.IsActive = true;
            item.UserID = 1;
            _context.Tbl_Category.Add(item);
            _context.SaveChanges();

            List<Tbl_Category> categoryList = _context.Tbl_Category.Where(c => c.IsActive).OrderBy(c => c.CategoryName).ToList();
            return categoryList;
        }

        [HttpPut("{id}")]
        public IEnumerable<Tbl_Category> Update(int id, [FromBody] Tbl_Category item)
        {
            Tbl_Category dbItem = _context.Tbl_Category.Where(c => c.Id == id).FirstOrDefault();
            dbItem.CategoryName = item.CategoryName;
            dbItem.Description = item.Description;
            _context.SaveChanges();

            List<Tbl_Category> categoryList = _context.Tbl_Category.Where(c => c.IsActive).OrderBy(c => c.CategoryName).ToList();
            return categoryList;
        }
    }
}