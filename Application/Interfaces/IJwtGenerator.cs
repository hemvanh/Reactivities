using Domain;

namespace Application
{
    public interface IJwtGenerator
    {
        string CreateToken(AppUser user);
    }
}