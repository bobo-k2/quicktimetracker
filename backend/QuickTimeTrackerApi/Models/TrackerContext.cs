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

        // protected override void OnModelCreating(ModelBuilder modelBuilder)
        // {
        //     base.OnModelCreating(modelBuilder);

        //     modelBuilder.Entity<Task>().HasData(
        //         new Task { Name = "Task 1", Description = "Description 1", Priority = 10 },
        //         new Task { Name = "Task 2", Description = "Description 2", Priority = 30 }
        //     );
        // }
    }
}