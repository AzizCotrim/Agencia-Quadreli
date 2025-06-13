using Microsoft.AspNetCore.Mvc;

namespace Agencia_Quadreli.Controllers
{
    public class PanelController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
