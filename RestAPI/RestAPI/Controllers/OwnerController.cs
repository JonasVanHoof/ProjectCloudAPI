﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RestAPI.Model;
using RestAPI.Models;

namespace RestAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OwnerController : Controller
    {
        public static List<Owner> owners = new List<Owner>();
    
        public LibraryContext context { get; set; }

        public OwnerController(LibraryContext con)
        {
            context = con;
        }

        //[HttpGet]
        //public List<Owner> getDefaultOwners()
        //{
        //    var autoOwner1 = new Owner()
        //    {
        //        Id = 1,
        //        Firstname = "Jonas",
        //        Lastname = "Van Hoof",
        //        Age = 19,
        //        Gender = "male"
        //    };
        //    context.Add(autoOwner1);
        //    var autoOwner2 = new Owner()
        //    {
        //        Id = 2,
        //        Firstname = "Joren",
        //        Lastname = "Verdyck",
        //        Age = 18,
        //        Gender = "male"
        //    };
        //    context.Add(autoOwner2);
        //    context.SaveChanges();
        //    return context.Owner.ToList();
        //}

        [HttpGet]
        public List<Owner> GetAllOwners()
        {
            return context.Owner.ToList();
        }

        [Route("id={id}")]
        [HttpGet]
        public ActionResult<Owner> getOwnerById(int id)
        {
            var theOwner = context.Owner.Find(id);
            return theOwner;
        }
        [HttpDelete]
        public IActionResult DeleteOwner(int id)
        {
            var theOwner = context.Owner.Find(id);
            if (theOwner == null)
            {
                return NotFound();
            }
            context.Remove(theOwner);
            context.SaveChanges();
            return NoContent();
        }

        //[Route("query={name}")]
        //[HttpGet]
        //public ActionResult<Owner> getOwnerByName(string name)
        //{
        //    var theOwner = context.Owner.Find(name);
        //    return theOwner;
        //}

        [HttpPut]
        public ActionResult<Owner> UpdateOwner([FromBody] Owner owner)
        {
            var update = context.Owner.Find(owner);
            if (update == null)
                return NotFound();

            update.Age = owner.Age;
            update.Firstname = owner.Firstname;
            update.Lastname = owner.Lastname;
            update.Gender = owner.Gender;

            context.SaveChanges();
            return Ok(update);
        }

    }
}