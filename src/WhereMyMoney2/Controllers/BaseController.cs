using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using WhereMyMoney2.Models;

namespace WhereMyMoney2.Controllers
{
    public class BaseController : Controller
    {
        protected WhereMyMoneyContext _context;

        public BaseController(WhereMyMoneyContext context)
        {
            _context = context;
        }

        //private ISession HttpSession {
        //    get
        //    {
        //        return HttpContext.Session;
        //    }
        //}

        //protected SessionObject Session {
        //    get
        //    {
        //        var value = HttpSession.GetString("SessionObject");
        //        SessionObject session = value == null ? default(SessionObject) : JsonConvert.DeserializeObject<SessionObject>(value);
        //        if(session != null)
        //        {
        //            ViewBag.Session = session.UserName;
        //        }

        //        return value == null ? default(SessionObject) : JsonConvert.DeserializeObject<SessionObject>(value);
        //    }
        //    set
        //    {
        //        HttpSession.SetString("SessionObject", JsonConvert.SerializeObject(value));
        //    }
        //}

        //protected IActionResult RedirectToLogIn()
        //{
        //    HttpSession.Clear();
        //    ViewBag.Session = null;
        //    return RedirectToAction("LogIn", "User");
        //}

        //protected IActionResult RedirectToTrace()
        //{
        //    return RedirectToAction("Index", "Trace");
        //}
    }
}