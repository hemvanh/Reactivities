using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set; }

        //! virtual to enable lazy loading
        public virtual ICollection<UserActivity> UserActivities { get; set; }

    }
}