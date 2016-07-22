using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WhereMyMoney2.Models;

namespace WhereMyMoney2.Controllers
{
    public class HomeController : BaseController
    {
        public HomeController(WhereMyMoneyContext context) : base(context)
        {
        }

        public IActionResult Index()
        {
            return View(_context.Tbl_Category.ToList());
        }
    }
}
