﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ResturantAGoGo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestaurantAGoGo
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantController : ControllerBase
    {

        [HttpGet("getall")]
        public List<User> GetAll()
        {
            User user = new User();
            using (RestaurantContext restaurantContext = new RestaurantContext())
            {

                return restaurantContext.Users.ToList();
            }
        }

        [HttpGet("getuser")]
        public User GetUser(int userId)
        {
            User user = new User();
            using (RestaurantContext restaurantContext = new RestaurantContext())
            {
                user = restaurantContext.Users.ToList().Find(u => u.UserId == userId);
                return user;
            }
        }
        [HttpGet("getuserinfo")]
        public User GetUserInfo(string userName, string password)
        {
            User user = new User();
            using (RestaurantContext restaurantContext = new RestaurantContext())
            {
                user = restaurantContext.Users.ToList().Find(u => u.UserName == userName && u.Password == password);
                return user;
            }
        }

        [HttpPut("updateuser")]
        public User UpdateUserInfo(string userName, string password)
        {
            User user = new User();
            using (RestaurantContext restaurantContext = new RestaurantContext())
            {
                user = restaurantContext.Users.ToList().Find(u => u.UserName == userName);
                user.Password = password;
                restaurantContext.SaveChanges();
                return user;
            }
        }

        [HttpPost("adduser")]

        public User AddUser(string userName, string password)
        {
            using (RestaurantContext restaurantContext = new RestaurantContext())
            {
                User user = new User();
                user.UserName = userName;
                user.Password = password;
                restaurantContext.Add(user);
                restaurantContext.SaveChanges();
                return user;
            }
        }

        [HttpGet("getmyfavorites")]
        public List<Favorite> GetMyFavorites()
        {
            using (RestaurantContext favoriteContext = new RestaurantContext())
            {
                return favoriteContext.Favorites.ToList();
            }
        }

        [HttpPost("addfavorite")]
        public Favorite AddFavorite(int userId, string yelpID, string name, string address, string img)
        {

            Favorite favorite = new Favorite();

            using (RestaurantContext favoriteContext = new RestaurantContext())
            {
                Favorite result = favoriteContext.Favorites.ToList().Find(f => f.UserId == userId && f.YelpId == yelpID);
                if (result == null)
                {
                    favorite.UserId = userId;
                    favorite.YelpId = yelpID;
                    favorite.RestaurantName = name;
                    favorite.RestaurantAddress = address;
                    favorite.Img = img;
                    favoriteContext.Favorites.Add(favorite);
                    favoriteContext.SaveChanges();
                    return favorite;
                }
                else
                {
                    return result;
                }
            }
        }

        [HttpDelete("deletefav")]
        public void RemoveFavorite(int userId, int favId)
        {
            using (RestaurantContext restaurantContext = new RestaurantContext())
            {
                Favorite deleteFav = new Favorite();
                deleteFav = restaurantContext.Favorites.ToList().Find(d => d.UserId == userId && d.FavoriteId == favId);
                restaurantContext.Remove(deleteFav);
                restaurantContext.SaveChanges();
            }
        }
    }
}
   


