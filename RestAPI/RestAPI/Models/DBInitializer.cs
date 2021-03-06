﻿using RestAPI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestAPI.Models
{
    public class DBInitializer
    {
        public static void Initialize(LibraryContext context)
        {
            context.Database.EnsureCreated();

            
            var autoOwner = new Owner()
            {
                Firstname = "Laura",
                Lastname = "Van Hoof",
                Age = 21,
                Gender = "female"
            };
            context.Owner.Add(autoOwner);

            if (!context.Owner.Any())
            {
                var autoOwner1 = new Owner()
                {
                    Firstname = "Jonas",
                    Lastname = "Van Hoof",
                    Age = 19,
                    Gender = "male"
                };
                var autoOwner2 = new Owner()
                {
                    Firstname = "Joren",
                    Lastname = "Verdyck",
                    Age = 18,
                    Gender = "male"
                };
                context.Add(autoOwner1);
                context.Add(autoOwner2);
                context.SaveChanges();
            }

            if (!context.Material.Any())
            {
                var autoMaterial1 = new Circus_material()
                {
                    Name = "Clubs",
                    Amount = 3,
                    Categorie = "Juggling",
                    Brand = "Mister Babache",
                    in_use_date = new DateTime(2019, 3, 3),
                };
                var autoMaterial2 = new Circus_material()
                {
                    Name = "Diabolo",
                    Amount = 2,
                    Categorie = "Diabolo",
                    Brand = "Mister Babache",
                    in_use_date = new DateTime(2019, 4, 3),
                };
                context.Material.Add(autoMaterial1);
                context.Material.Add(autoMaterial2);
                context.SaveChanges();
            }

        }
    }
}
