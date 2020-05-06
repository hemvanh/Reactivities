using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Persistence;

namespace Infrastructure.Security
{
    public class IsHostRequirement : IAuthorizationRequirement
    {
    }

    public class IsHostRequirementHandler : AuthorizationHandler<IsHostRequirement>
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly DataContext _dataContext;
        private readonly IUserAccessor _userAccessor;
        public IsHostRequirementHandler(IHttpContextAccessor httpContextAccessor, DataContext dataContext, IUserAccessor userAccessor)
        {
            _userAccessor = userAccessor;
            _dataContext = dataContext;
            _httpContextAccessor = httpContextAccessor;
        }
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, IsHostRequirement requirement)
        {
            var currentUserName = _userAccessor.GetCurrentUsername();

            var activityId = Guid.Parse(
                _httpContextAccessor.HttpContext.Request.RouteValues
                    .SingleOrDefault(x => x.Key == "id").Value.ToString()
            );
            var activity = _dataContext.Activities.FindAsync(activityId).Result;

            var host = activity.UserActivities.FirstOrDefault(x => x.IsHost);

            if (host?.AppUser?.UserName == currentUserName)
                context.Succeed(requirement);

            return Task.CompletedTask;
        }
    }

}