using Microsoft.EntityFrameworkCore;

namespace QuickTimeTrackerApi.Models
{
    public class TrackerContext : DbContext
    {
        public TrackerContext(DbContextOptions<TrackerContext> options)
            : base(options)
        {
        }

        public DbSet<Task> Tasks { get; set; }
    }
}