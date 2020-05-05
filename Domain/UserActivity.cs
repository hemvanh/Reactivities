using System;

namespace Domain
{
    public class UserActivity
    {
        public string AppUserId { get; set; }

        //! virtual to enable lazy loading
        public virtual AppUser AppUser { get; set; }
        public Guid ActivityId { get; set; }

        //! virtual to enable lazy loading
        public virtual Activity Activity { get; set; }
        public DateTime DateJoined { get; set; }
        public bool IsHost { get; set; }
    }
}