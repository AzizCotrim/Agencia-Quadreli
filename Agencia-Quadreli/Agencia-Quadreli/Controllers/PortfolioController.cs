using Microsoft.AspNetCore.Mvc;

namespace Agencia_Quadreli.Controllers {
    public class PortfolioController : Controller {
        public IActionResult Index() {
            return View();
        }
    }
}
