using AutoMapper;
using Domain;

namespace Application.Activities
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Activity, ActivityDto>();
            CreateMap<UserActivity, AttendeeDto>()
            .ForMember(destinationMember => destinationMember.Username, opt => opt.MapFrom(sourceMember => sourceMember.AppUser.UserName))
            .ForMember(destinationMember => destinationMember.DisplayName, opt => opt.MapFrom(sourceMember => sourceMember.AppUser.DisplayName));
        }
    }
}