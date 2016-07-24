using Microsoft.AspNetCore.Mvc;

namespace WhereMyMoney2.Controllers
{
    public class CategoryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}