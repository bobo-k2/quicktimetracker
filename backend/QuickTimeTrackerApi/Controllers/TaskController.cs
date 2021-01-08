using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QuickTimeTrackerApi.Models;

namespace QuickTimeTrackerApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : ControllerBase
    {
        private readonly TrackerContext dataContext;

        public TaskController(TrackerContext dataContext)
        {
            this.dataContext = dataContext;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Models.Task>> Get(long id)
        {
            var task = await this.dataContext.Tasks.FindAsync(id);

            if (task == null)
            {
                return NotFound();
            }

            return task;
        }

        [HttpPost]
        public async Task<ActionResult<Models.Task>> Insert(Models.Task task)
        {
            this.dataContext.Tasks.Add(task);
            await this.dataContext.SaveChangesAsync();

            return CreatedAtAction(
                nameof(Get),
                new { id = task.Id},
                task);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(long id)
        {
            var task = await this.dataContext.Tasks.FindAsync(id);

            if (task == null)
            {
                return NotFound();
            }

            this.dataContext.Tasks.Remove(task);
            await this.dataContext.SaveChangesAsync();

            return NoContent();
        }
    }
}