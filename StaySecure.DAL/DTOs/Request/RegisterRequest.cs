using StaySecure.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StaySecure.DAL.DTOs.Request
{
    public class RegisterRequest
    {
        public List<UserTranslations> Translations { get; set; }

        public string Email { get; set; }
        public string Password { get; set; }
        public int Age { get; set; }
        public GenderEnum Gender { get; set; }


    }
}
