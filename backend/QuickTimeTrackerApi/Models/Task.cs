using System.ComponentModel.DataAnnotations;

namespace QuickTimeTrackerApi.Models
{
    public class Task
    {
        public long Id { get; set; }

        [StringLength(300)]
        public string Name{ get; set; }
    }
}