using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace QuickTimeTrackerApi.Models
{
    public class Task
    {
        public long Id { get; set; }

        [StringLength(300)]
        public string Name { get; set; }

        [StringLength(3000)]
        public string Description { get; set; }

        public int Priority { get; set; }

        public double ExpectedDuration { get; set; }

        public DateTime? StartedAt { get; set; }

        public DateTime? FinishedAt { get; set; }

        public double TimeSpent { get; set; }

        [NotMapped]
        public bool IsRunning
        {
            get { return this.StartedAt.HasValue && !this.FinishedAt.HasValue; }
        }

        [NotMapped]
        public bool IsFinished
        {
            get { return this.StartedAt.HasValue && this.FinishedAt.HasValue; }
        }
    }
}