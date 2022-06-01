using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Caculator.Models;

namespace Caculator.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }
    [HttpPost]
    public IActionResult Index(float first, char operation, float second) {
        float result = 0;
        if (operation == '+') { result = first + second; }
        else if (operation == '-') { result = first - second; }
        else if (operation == '×') { result = first * second; }
        else if (operation == '÷') { result = first / second; }
        else { result = second; }
        return Content(result.ToString(), "text/plain", System.Text.Encoding.UTF8);
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
