using Microsoft.AspNetCore.Mvc;

namespace Agencia_Quadreli.Controllers
{
    public class PanelController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult CarregarSessao(String nomeDaSecao)
        {
            switch (nomeDaSecao)
            {
                case "Dashboard":
                    return PartialView("_Dashboard");

                case "Textos":
                    return PartialView("_Textos");

                case "Imagens":
                    return PartialView("_Imagens");

                case "Serviços":
                    return PartialView("_Serviços");

                case "Depoimentos":
                    return PartialView("_Depoimentos");
                
                case "Portifolio":
                    return PartialView("_Portifolio");

                case "Contato":
                    return PartialView("_Contato");

                case "Seo":
                    return PartialView("_Seo");
                
                case "Geral":
                    return PartialView("_Geral");

                case "Usuarios":
                    return PartialView("_Usuarios");

                default:
                    return NotFound();
            }
            
        }
    }
}
