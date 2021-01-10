using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuickTimeTrackerApi.Models;

namespace QuickTimeTrackerApi.Controllers
{
    [ApiController]
    [Route("Tasks")]
    public class TaskController : ControllerBase
    {
        private readonly TrackerContext dataContext;

        public TaskController(TrackerContext dataContext)
        {
            this.dataContext = dataContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Models.Task>>> Get()
        {
            return await this.dataContext
                .Tasks
                .OrderByDescending(x => x.Priority)
                .ToListAsync();
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

        [HttpPut("start/{id}")]
        public async Task<ActionResult<Models.Task>> Start(long id)
        {
            var task = await this.dataContext.Tasks.FindAsync(id);

            if (task == null)
            {
                return NotFound();
            }

            if (!task.StartedAt.HasValue)
            {
                task.StartedAt = DateTime.UtcNow;
                this.dataContext.SaveChanges();
            }

            return task;
        }

        [HttpPut("record/{id}")]
        public async Task<ActionResult<Models.Task>> RecordTime(long id)
        {
            var task = await this.dataContext.Tasks.FindAsync(id);

            if (task == null)
            {
                return NotFound();
            }

            if (!task.FinishedAt.HasValue)
            {
                task.TimeSpent += 1;
                this.dataContext.SaveChanges();
            }

            return task;
        }
    }
}