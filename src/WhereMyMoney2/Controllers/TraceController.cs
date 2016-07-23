using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WhereMyMoney2.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace WhereMyMoney2.Controllers
{
    public class TraceController : BaseController
    {
        public TraceController(WhereMyMoneyContext context) : base(context)
        {
        }

        public IActionResult Index()
        {
            return View();
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Tbl_Trace> Get()
        {
            List<Tbl_Trace> traceList = _context.Tbl_Trace.Include(c => c.Currency)
                                                        .Include(c => c.Category)
                                                        .Include(c => c.TransactionType)
                                                        .Where(c => c.IsActive)
                                                        .OrderBy(c => c.TraceDate).ToList();

            return traceList;
        }
    }
}